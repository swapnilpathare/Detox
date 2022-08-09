const path = require('path');
const { URL } = require('url');

const fs = require('fs-extra');
const pipe = require('multipipe');

const temporary = require('../artifacts/utils/temporaryPath');
const { DetoxRuntimeError } = require('../errors');
const { PrimarySessionState } = require('../ipc/state');
const symbols = require('../symbols');

const DetoxContext = require('./DetoxContext');

const { $logger, $restoreSessionState, $sessionState } = DetoxContext.protected;

const _finalizeLogs = Symbol('finalizeLogs');
const _globalLifecycleHandler = Symbol('globalLifecycleHandler');
const _ipcServer = Symbol('ipcServer');
const _resetLockFile = Symbol('resetLockFile');
const _wss = Symbol('wss');
const _dirty = Symbol('dirty');

class DetoxPrimaryContext extends DetoxContext {
  constructor() {
    super();

    this[_dirty] = false;
    this[_wss] = null;
    this[_globalLifecycleHandler] = null;
    /**
     * @type {import('../ipc/IPCServer') | null}
     */
    this[_ipcServer] = null;
  }

  //#region Internal members
  async [symbols.reportFailedTests](testFilePaths) {
    if (this[_ipcServer]) {
      this[_ipcServer].onFailedTests({ testFilePaths });
    }
  }

  async [symbols.resolveConfig](opts = {}) {
    const session = this[symbols.session];
    if (!session.detoxConfig) {
      const configuration = require('../configuration');
      session.detoxConfig = await configuration.composeDetoxConfig(opts);
    }

    return session.detoxConfig;
  }

  /**
   * @override
   * @param {Partial<DetoxInternals.DetoxGlobalSetupOptions>} [opts]
   */
  async [symbols.globalSetup](opts) {
    if (this[_dirty]) {
      throw new DetoxRuntimeError({
        message: 'Cannot initialize primary Detox context more than once.',
        hint: DetoxRuntimeError.reportIssueIfJest,
      });
    }

    this[_dirty] = true;
    const detoxConfig = await this[symbols.resolveConfig](opts);

    const { behaviorConfig, deviceConfig, loggerConfig, sessionConfig } = detoxConfig;
    await this[$logger].setConfig(loggerConfig);

    this.trace.begin({
      cat: 'lifecycle',
      args: this[$sessionState],
      name: process.argv.slice(1).join(' '),
    });

    const IPCServer = require('../ipc/IPCServer');
    this[_ipcServer] = new IPCServer({
      sessionState: this[$sessionState],
      logger: this[$logger],
    });

    await this[_ipcServer].init();

    const environmentFactory = require('../environmentFactory');
    this[_globalLifecycleHandler] = await environmentFactory.createGlobalLifecycleHandler(deviceConfig);

    if (this[_globalLifecycleHandler]) {
      await this[_globalLifecycleHandler].globalInit();
    }

    if (!behaviorConfig.init.keepLockFile) {
      await this[_resetLockFile]();
    }

    const DetoxServer = require('../server/DetoxServer');
    if (sessionConfig.autoStart) {
      this[_wss] = new DetoxServer({
        port: sessionConfig.server
          ? new URL(sessionConfig.server).port
          : 0,
        standalone: false,
      });

      await this[_wss].open();
    }

    if (!sessionConfig.server && this[_wss]) {
      sessionConfig.server = `ws://localhost:${this[_wss].port}`;
    }

    await fs.writeFile(this[$sessionState].detoxConfigSnapshotPath, this[$sessionState].stringify());
    process.env.DETOX_CONFIG_SNAPSHOT_PATH = this[$sessionState].detoxConfigSnapshotPath;

    // TODO: think about signal-exit and cleaning up the logs
  }

  /**
   * @override
   * @param {Partial<DetoxInternals.DetoxConfigurationSetupOptions>} [opts]
   */
  async [symbols.setup](opts) {
    const workerId = opts.workerId || 1;
    this[$sessionState].workerId = workerId;
    this[_ipcServer].onRegisterWorker({ workerId });
    await super[symbols.setup](opts);
  }

  /** @override */
  async [symbols.globalTeardown]() {
    if (this[_globalLifecycleHandler]) {
      await this[_globalLifecycleHandler].globalCleanup();
      this[_globalLifecycleHandler] = null;
    }

    if (this[_wss]) {
      await this[_wss].close();
      this[_wss] = null;
    }

    if (this[_ipcServer]) {
      await this[_ipcServer].dispose();
      this[_ipcServer] = null;
    }

    await fs.remove(this[$sessionState].detoxConfigSnapshotPath);
    delete process.env.DETOX_CONFIG_SNAPSHOT_PATH;

    try {
      this.trace.end({ cat: 'lifecycle' });
      await this[_finalizeLogs]();
    } catch (err) {
      this[$logger].error({ err }, 'Encountered an error while merging the process logs:');
    }
  }
  //#endregion

  //#region Protected members
  /**
   * @protected
   * @override
   * @return {PrimarySessionState}
   */
  [$restoreSessionState]() {
    return new PrimarySessionState({
      detoxConfigSnapshotPath: temporary.for.json(),
      detoxIPCServer: `primary-${process.pid}`,
    });
  }
  //#endregion

  //#region Private members
  async[_finalizeLogs]() {
    const logs = [this[$logger].file, ...this[$sessionState].logFiles].filter(f => f && fs.existsSync(f));
    if (logs.length === 0) {
      return;
    }

    const streamUtils = require('../utils/streamUtils');
    const { rootDir, plugins } = this[symbols.config].artifactsConfig || {};
    const logConfig = plugins && plugins.log || 'none';
    const enabled = rootDir && (typeof logConfig === 'string' ? logConfig !== 'none' : logConfig.enabled);

    if (enabled) {
      await fs.mkdirp(rootDir);
      const [out1Stream, out2Stream, out3Stream] = ['detox.log.jsonl', 'detox.log', 'detox.trace.json']
        .map((filename) => fs.createWriteStream(path.join(rootDir, filename)));

      const mergedStream = streamUtils
        .mergeSortedJSONL(
          logs.map(filePath => fs.createReadStream(filePath).pipe(streamUtils.readJSONL()))
        );

      await Promise.all([
        pipe(mergedStream, streamUtils.writeJSONL(), out1Stream),
        pipe(mergedStream, streamUtils.debugStream(this[$logger].config.options), out2Stream),
        pipe(mergedStream, streamUtils.chromeTraceStream(), streamUtils.writeJSON(), out3Stream),
      ]);
    }

    await Promise.all(logs.map(filepath => fs.remove(filepath)));
  }

  async[_resetLockFile]() {
    const DeviceRegistry = require('../devices/DeviceRegistry');

    const deviceType = this[symbols.config].deviceConfig.type;

    switch (deviceType) {
      case 'ios.none':
      case 'ios.simulator':
        await DeviceRegistry.forIOS().reset();
        break;
      case 'android.attached':
      case 'android.emulator':
      case 'android.genycloud':
        await DeviceRegistry.forAndroid().reset();
        break;
    }

    if (deviceType === 'android.genycloud') {
      const GenyDeviceRegistryFactory = require('../devices/allocation/drivers/android/genycloud/GenyDeviceRegistryFactory');
      await GenyDeviceRegistryFactory.forGlobalShutdown().reset();
    }
  }
  //#endregion
}

module.exports = DetoxPrimaryContext;