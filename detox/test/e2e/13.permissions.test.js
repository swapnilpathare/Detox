const { RESULTS, PERMISSIONS } = require('react-native-permissions');

const REGULAR_PERMISSIONS_TO_CHECK = [
  'userTracking',
  'calendar',
  'camera',
  'contacts',
  'microphone',
  'reminders',
  'siri',
  'speech',
  // 'bluetooth_peripheral', 'storekit', // Unsupported in Detox
  // 'faceid','medialibrary', 'motion', // Unavailable, though *supported* in Detox
];

const LOCATION_ALWAYS = 'location_always';
const LOCATION_WHEN_IN_USE = 'location_when_in_use';
const LOCATION_LATITUDE = 'location_latitude';
const LOCATION_LONGITUDE = 'location_longitude';
const LOCATION_ERROR = 'location_error';

const PHOTO_LIBRARY = 'photo_library';
const PHOTO_LIBRARY_ADD_ONLY = 'photo_library_add_only';

describe(':ios: Permissions', () => {
  REGULAR_PERMISSIONS_TO_CHECK.forEach((name) => {
    describe(name, () => {
      const authorizationStatus = element(by.id(name));

      it('should find element with test-id: ' + name, async () => {
        await device.launchApp({newInstance: true});
        await element(by.text('Permissions')).tap();
        await expect(authorizationStatus).toBeVisible();
      });

      it('should show default permissions when undefined', async () => {
        await device.launchApp({newInstance: true});
        await element(by.text('Permissions')).tap();
        await expect(authorizationStatus).toHaveText(RESULTS.DENIED);
      });

      it('should show default permissions when defined to `unset`', async () => {
        const permissions = {[name]: 'unset'};
        await device.launchApp({permissions, newInstance: true});
        await element(by.text('Permissions')).tap();
        await expect(authorizationStatus).toHaveText(RESULTS.DENIED);
      });

      it('should grant permission', async () => {
        const permissions = {[name]: 'YES'};
        await device.launchApp({permissions, newInstance: true});
        await element(by.text('Permissions')).tap();
        await expect(authorizationStatus).toHaveText('granted');
      });

      it('should block permissions', async () => {
        const permissions = {[name]: 'NO'};
        await device.launchApp({permissions, newInstance: true});
        await element(by.text('Permissions')).tap();
        await expect(authorizationStatus).toHaveText(RESULTS.BLOCKED);
      });
    });
  });

  describe("location", () => {
    const locationAlways = element(by.id(LOCATION_ALWAYS));
    const locationInuse = element(by.id(LOCATION_WHEN_IN_USE));
    const locationLatitude = element(by.id(LOCATION_LATITUDE));
    const locationLongitude = element(by.id(LOCATION_LONGITUDE));
    const locationError = element(by.id(LOCATION_ERROR));

    it('should find status elements', async () => {
      await device.launchApp({newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toBeVisible();
      await expect(locationInuse).toBeVisible();
      await expect(locationLatitude).toBeVisible();
      await expect(locationLongitude).toBeVisible();
      await expect(locationError).toBeVisible();
    });

    it('should show default permissions when undefined', async () => {
      await device.launchApp({newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toHaveText(RESULTS.DENIED);
      await expect(locationInuse).toHaveText(RESULTS.DENIED);
    });

    it('should show default permissions when defined to `unset`', async () => {
      const permissions = {location: 'unset'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toHaveText(RESULTS.DENIED);
      await expect(locationInuse).toHaveText(RESULTS.DENIED);
    });

    it('should grant permission `inuse`', async () => {
      const permissions = {location: 'inuse'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toHaveText(RESULTS.DENIED);
      await expect(locationInuse).toHaveText(RESULTS.GRANTED);
    });

    it('should grant permission `always`', async () => {
      const permissions = {location: 'always'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toHaveText(RESULTS.GRANTED);
      await expect(locationInuse).toHaveText(RESULTS.GRANTED);
    });

    it('should set location when granted', async () => {
      const permissions = {location: 'always'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await device.setLocation(37.785834, -122.406417);

      await waitFor(locationError).toHaveText('none').withTimeout(3000);

      await expect(locationLatitude).toHaveText('37.785834');
      await expect(locationLongitude).toHaveText('-122.406417');
    });

    it('should block permissions', async () => {
      const permissions = {location: 'never'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(locationAlways).toHaveText(RESULTS.BLOCKED);
      await expect(locationInuse).toHaveText(RESULTS.BLOCKED);
    });
  });

  describe("photos", () => {
    const photoLibrary = element(by.id(PHOTO_LIBRARY));
    const photoLibraryAddOnly = element(by.id(PHOTO_LIBRARY_ADD_ONLY));

    it('should find status elements', async () => {
      await device.launchApp({newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toBeVisible();
      await expect(photoLibraryAddOnly).toBeVisible();
    });

    it('should show default permissions when undefined', async () => {
      await device.launchApp({newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toHaveText(RESULTS.DENIED);
      await expect(photoLibraryAddOnly).toHaveText(RESULTS.DENIED);
    });

    it('should show default permissions when defined to `unset`', async () => {
      const permissions = {photos: 'unset'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toHaveText(RESULTS.DENIED);
      await expect(photoLibraryAddOnly).toHaveText(RESULTS.DENIED);
    });

    it('should grant permission `limited`', async () => {
      const permissions = {photos: 'limited'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toHaveText(RESULTS.DENIED);
      await expect(photoLibraryAddOnly).toHaveText(RESULTS.GRANTED);
    });

    it('should grant permission', async () => {
      const permissions = {photos: 'YES'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toHaveText(RESULTS.GRANTED);
      await expect(photoLibraryAddOnly).toHaveText(RESULTS.GRANTED);
    });

    it('should block permissions', async () => {
      const permissions = {photos: 'NO'};
      await device.launchApp({permissions, newInstance: true});
      await element(by.text('Permissions')).tap();

      await expect(photoLibrary).toHaveText(RESULTS.BLOCKED);
      await expect(photoLibraryAddOnly).toHaveText(RESULTS.BLOCKED);
    });
  });
});

