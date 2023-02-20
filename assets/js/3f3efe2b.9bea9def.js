"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9455],{21787:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905)),r=n(90814);const s={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can define the ",(0,o.kt)("code",null,n.sectionName)," config section in two ways: ",(0,o.kt)("i",null,"globally")," and ",(0,o.kt)("i",null,"locally")," (per a configuration):"),(0,o.kt)(r.Z,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {","// highlight-start",`  ${n.sectionName}: {`,"    /* global section */","  },","// highlight-end","  devices: { /* \u2026 */ },","  apps: { /* \u2026 */ },","  configurations: {","    'ios.sim.debug': {","      device: 'iphone',","      app: 'ios.debug',","// highlight-start",`      ${n.sectionName}: {`,"        /* local (per-configuration) section */","      },","// highlight-end","    },","  },","};"].join("\n")))}l.isMDXComponent=!0},76548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(21787);const s={},i="Test runner",l={unversionedId:"config/testRunner",id:"config/testRunner",title:"Test runner",description:"While Detox was created to test mobile applications, effectively it is not a test runner \u2013 instead, it runs on top of a test runner. There are many third-party solutions for running tests, so we're happy to not reinvent the wheel and to devote our time to the mobile domain itself.",source:"@site/../docs/config/testRunner.mdx",sourceDirName:"config",slug:"/config/testRunner",permalink:"/Detox/docs/next/config/testRunner",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/config/testRunner.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Session",permalink:"/Detox/docs/next/config/session"},next:{title:"detox",permalink:"/Detox/docs/next/cli/overview"}},u={},p=[{value:"Location",id:"location",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>testRunner.args</code> [object]",id:"testrunnerargs-object",level:3},{value:"<code>testRunner.args.$0</code> [string]",id:"testrunnerargs0-string",level:3},{value:"<code>testRunner.args[\u2026]</code> [string | number | boolean]",id:"testrunnerargs-string--number--boolean",level:3},{value:"<code>testRunner.args._</code> [string[]]",id:"testrunnerargs_-string",level:3},{value:"<code>testRunner.retries</code> [number]",id:"testrunnerretries-number",level:3},{value:"<code>testRunner.bail</code> [boolean]",id:"testrunnerbail-boolean",level:3},{value:"<code>testRunner.forwardEnv</code> [boolean]",id:"testrunnerforwardenv-boolean",level:3},{value:"<code>testRunner.inspectBrk</code> [function]",id:"testrunnerinspectbrk-function",level:3},{value:"<code>testRunner.jest</code> [object]",id:"testrunnerjest-object",level:3},{value:"<code>testRunner.jest.setupTimeout</code> [number]",id:"testrunnerjestsetuptimeout-number",level:4},{value:"<code>testRunner.jest.teardownTimeout</code> [number]",id:"testrunnerjestteardowntimeout-number",level:4},{value:"<code>testRunner.jest.reportSpecs</code> [boolean | undefined]",id:"testrunnerjestreportspecs-boolean--undefined",level:4},{value:"<code>testRunner.jest.reportWorkerAssign</code> [boolean]",id:"testrunnerjestreportworkerassign-boolean",level:4},{value:"<code>testRunner.jest.retryAfterCircusRetries</code> [boolean]",id:"testrunnerjestretryaftercircusretries-boolean",level:4},{value:"Jest config",id:"jest-config",level:2},{value:"Globals",id:"globals",level:2},{value:"Mocking",id:"mocking",level:2},{value:"Parallel Test Execution",id:"parallel-test-execution",level:2},{value:"Forwarding CLI arguments",id:"forwarding-cli-arguments",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-runner"},"Test runner"),(0,o.kt)("p",null,"While Detox was created to test mobile applications, effectively it is ",(0,o.kt)("strong",{parentName:"p"},"not a test runner")," \u2013 instead, it ",(0,o.kt)("strong",{parentName:"p"},"runs on top")," of a test runner. There are many third-party solutions for running tests, so we're happy to not reinvent the wheel and to devote our time to the mobile domain itself."),(0,o.kt)("p",null,"Since we focus on React Native and yet require some test runner under the hood, the most logical choice was to provide an official integration with Jest, which is the default test runner for such projects. This is why all our guides presume you have Jest under the hood, and the structure generated via  ",(0,o.kt)("inlineCode",{parentName:"p"},"detox init")," is no exception."),(0,o.kt)("p",null,"The integration with a test runner is a matter of the configuration, not the implementation \u2013 Detox source code has no hard-coded logic for Jest save for a few minor places",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Furthermore, we're looking forward to new third-party integrations with popular test runners as the ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/internals"},"Internals API")," keeps improving."),(0,o.kt)("h2",{id:"location"},"Location"),(0,o.kt)(r.ZP,{sectionName:"testRunner",mdxType:"Location"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"testrunnerargs-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.args")," ","[","object]"),(0,o.kt)("p",null,"This section is responsible for building the test runner command that is going to be spawned when you run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test\n# $0 --key1 value1 \u2026 ---keyN valueN ...positionalArguments\n")),(0,o.kt)("p",null,"For example, this configuration of a test runner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": {\n    "args": {\n      "$0": "nyc jest",\n      "bail": true,\n      "config": "e2e/jest.config.js",\n      "_": ["e2e/sanity-tests"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"would eventually spawn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nyc jest --bail --config e2e/jest.config.js e2e/sanity-tests\n")),(0,o.kt)("p",null,"Now, when you have an idea of what it does, let's overview the properties one by one."),(0,o.kt)("h3",{id:"testrunnerargs0-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.args.$0")," ","[","string]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),"."),(0,o.kt)("p",null,"Defines the beginning of the test runner command, usually just the name of the executable. The path to the executable is resolved according to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,o.kt)("p",null,"Although not recommended, you can specify composite commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"node -r ./preload.js node_modules/.bin/my-runner"),"."),(0,o.kt)("h3",{id:"testrunnerargs-string--number--boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.args[\u2026]")," ","[","string | number | boolean]"),(0,o.kt)("p",null,"You can define arbitrary arguments in the key-value format, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "$0": "jest",\n// highlight-start\n    "color": false,\n    "bail": true,\n    "testTimeout": 60000,\n    "config": "e2e/jest.ci.config.js"\n// highlight-end\n  }\n}\n')),(0,o.kt)("p",null,"For example, the config above would generate a command like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jest --no-color --bail --testTimeout 60000 --config e2e/jest.ci.config.js\n")),(0,o.kt)("p",null,"As you can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," boolean values produce keys prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-"),"."),(0,o.kt)("h3",{id:"testrunnerargs_-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.args._")," ","[","string","[","]]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,o.kt)("p",null,"This property defines an array of ",(0,o.kt)("strong",{parentName:"p"},"default")," positional arguments to pass to the test runner. Consider an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "$0": "jest",\n// highlight-next-line\n    "_": ["e2e/sanity-tests"]\n  }\n}\n')),(0,o.kt)("p",null,"If you run tests without extra positional arguments, you\u2019ll get ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," contents appended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c ios.sim.debug\n# jest \u2026 e2e/sanity-tests\n")),(0,o.kt)("p",null,"If you run tests with custom positional arguments, the ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," contents get replaced:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test e2e/regression-tests\n# jest \u2026 e2e/regression-tests\n")),(0,o.kt)("p",null,"If you use the retry mechanism of ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test"),", be prepared that the failed test file paths will override ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," in all the subsequent re-runs."),(0,o.kt)("h3",{id:"testrunnerretries-number"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.retries")," ","[","number]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"Tells ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," to keep re-running the test runner with failed test files until they pass, or the number of repeated attempts exceeds the specified value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'detox test\nDETOX_CONFIGURATION="\u2026" jest --config e2e/jest.config.js e2e/sanity-tests\n# \u2026\n# There were failing tests in the following files:\n#   1. /path/to/your/test.js\n#\n# Detox CLI is going to restart the test runner with those files...\nDETOX_CONFIGURATION="\u2026" jest --config e2e/jest.config.js /path/to/your/test.js\n# \u2026\n')),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/test#options"},(0,o.kt)("inlineCode",{parentName:"a"},"-R, --retries"))," in Detox CLI."),(0,o.kt)("h3",{id:"testrunnerbail-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.bail")," ","[","boolean]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"When true, tells ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," to cancel next retrying if it gets at least one report about a ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/internals#reporting-test-results"},"permanent test suite failure"),".\nHas no effect, if ",(0,o.kt)("a",{parentName:"p",href:"#testrunnerretries-number"},(0,o.kt)("inlineCode",{parentName:"a"},"testRunner.retries"))," is undefined or set to zero."),(0,o.kt)("h3",{id:"testrunnerforwardenv-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.forwardEnv")," ","[","boolean]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"When enabled, tells ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," to pass command-line arguments as environment variables to the test runner, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c ios.sim.debug --record-logs all\nDETOX_CONFIGURATION=ios.sim.debug DETOX_RECORD_LOGS=all jest \u2026\n")),(0,o.kt)("p",null,"Nevertheless, even if it is disabled, Detox will keep printing hints how to call your test runner without Detox CLI, so that you can copy and paste the command into your IDE when you want to debug something."),(0,o.kt)("h3",{id:"testrunnerinspectbrk-function"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.inspectBrk")," ","[","function]"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This property is intended primarily for developing integrations with third-party test runners.")),(0,o.kt)("p",null,"Default: ",(0,o.kt)("em",{parentName:"p"},"a Jest-specific callback that sets ",(0,o.kt)("inlineCode",{parentName:"em"},"$0"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"--runInBand")," and cleans ",(0,o.kt)("inlineCode",{parentName:"em"},"-w, --maxWorkers")),"."),(0,o.kt)("p",null,"The provided function is called when ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/test"},(0,o.kt)("inlineCode",{parentName:"a"},"detox test"))," is called with ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect-brk"),".\nYour implementation should prepare ",(0,o.kt)("a",{parentName:"p",href:"#testrunnerargs-object"},(0,o.kt)("inlineCode",{parentName:"a"},"testRunner.args"))," for ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/debugging"},"debugging with Node.js inspector"),", e.g. for Jest that would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".detoxrc.js"',title:'".detoxrc.js"'},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n  testRunner: {\n    /** @param {Detox.DetoxTestRunnerConfig} config */\n    inspectBrk: (config) => {\n      config.args.$0 = os.platform() === 'win32'\n        ? `node --inspect-brk ./node_modules/jest/bin/jest.js`\n        : `node --inspect-brk ./node_modules/.bin/jest`;\n      config.args.runInBand = true;\n      delete config.args.w;\n      delete config.args.workers;\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"testrunnerjest-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"testRunner.jest")," ","[","object]"),(0,o.kt)("p",null,"This is an add-on section used by our Jest integration code (but not Detox core itself).\nIn other words, if you\u2019re implementing (or using) a custom integration with some other test runner, feel free to define a section for yourself (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunner.mocha"),")"),(0,o.kt)("h4",{id:"testrunnerjestsetuptimeout-number"},(0,o.kt)("inlineCode",{parentName:"h4"},"testRunner.jest.setupTimeout")," ","[","number]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"300000")," (5 minutes)."),(0,o.kt)("p",null,"As a part of the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration/#testenvironment-string"},"environment setup"),"), Detox boots the device and installs the apps.\nIf that takes longer than the specified value, the entire test suite will be considered as failed, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0}," FAIL  e2e/starter.test.js\n  \u25cf Test suite failed to run\n\n    Exceeded timeout of 300000ms while setting up Detox environment\n")),(0,o.kt)("h4",{id:"testrunnerjestteardowntimeout-number"},(0,o.kt)("inlineCode",{parentName:"h4"},"testRunner.jest.teardownTimeout")," ","[","number]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds)."),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration/#testenvironment-string"},"environment teardown"),") takes longer than the specified value, Detox will throw a timeout error."),(0,o.kt)("h4",{id:"testrunnerjestreportspecs-boolean--undefined"},(0,o.kt)("inlineCode",{parentName:"h4"},"testRunner.jest.reportSpecs")," ","[","boolean | undefined]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," (auto)."),(0,o.kt)("p",null,"By default, Jest prints the test names and their status (",(0,o.kt)("em",{parentName:"p"},"passed")," or ",(0,o.kt)("em",{parentName:"p"},"failed"),") at the very end of the test session. This might be fine for sub-second unit tests, but it is uncomfortable to wait a couple of minutes until you actually see anything."),(0,o.kt)("p",null,"When enabled, it makes Detox to print messages like these each time the new test starts and ends:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"18:03:36.258 detox[40125] i Sanity: should have welcome screen\n18:03:37.495 detox[40125] i Sanity: should have welcome screen [OK]\n18:03:37.496 detox[40125] i Sanity: should show hello screen after tap\n18:03:38.928 detox[40125] i Sanity: should show hello screen after tap [OK]\n18:03:38.929 detox[40125] i Sanity: should show world screen after tap\n18:03:40.351 detox[40125] i Sanity: should show world screen after tap [OK]\n")),(0,o.kt)("p",null,"By default, it is enabled automatically in test sessions with a single worker. And vice versa, if multiple tests are executed concurrently, Detox turns it off to avoid confusion in the log. Use boolean values, ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", to turn off the automatic choice."),(0,o.kt)("h4",{id:"testrunnerjestreportworkerassign-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"testRunner.jest.reportWorkerAssign")," ","[","boolean]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Like already mentioned, in the init phase, Detox boots the device and installs the apps. This flag tells Detox to print messages like these every time the device gets assigned to a specific suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"18:03:29.869 detox[40125] i starter.test.js is assigned to 4EC84833-C7EA-4CA3-A6E9-5C30A29EA596 (iPhone 12 Pro Max)\n")),(0,o.kt)("h4",{id:"testrunnerjestretryaftercircusretries-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"testRunner.jest.retryAfterCircusRetries")," ","[","boolean]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Jest provides an API to re-run individual failed tests: ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/29.0/jest-object#jestretrytimesnumretries-options"},(0,o.kt)("inlineCode",{parentName:"a"},"jest.retryTimes(count)")),".\nWhen Detox detects the use of this API, it suppresses its own CLI retry mechanism controlled via ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test \u2026 --retries <N>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunner.retries"),". The motivation is simple \u2013 activating the both mechanisms is apt to increase your test duration dramatically, if your tests are flaky."),(0,o.kt)("p",null,"If you wish nevertheless to use both the mechanisms simultaneously, set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h2",{id:"jest-config"},"Jest config"),(0,o.kt)("p",null,"Jest config generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"detox init")," is helpful for understanding how Detox integrates with Jest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="e2e/jest.config.js"',title:'"e2e/jest.config.js"'},"/** @type {import('@jest/types').Config.InitialOptions} */\nmodule.exports = {\n  rootDir: '..',\n  testMatch: ['<rootDir>/e2e/**/*.test.js'],\n  testTimeout: 120000,\n  maxWorkers: 1,\n  globalSetup: 'detox/runners/jest/globalSetup',\n  globalTeardown: 'detox/runners/jest/globalTeardown',\n  reporters: ['detox/runners/jest/reporter'],\n  testEnvironment: 'detox/runners/jest/testEnvironment',\n  verbose: true,\n};\n")),(0,o.kt)("p",null,"All the listed properties vary from mandatory to strongly recommended, and below we'll be explaining why (and, more importantly, how to customize them correctly). If you need to add extra properties, please consult the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration"},"Configuring Jest")," article on its official website."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"testMatch")," enforce the convention that your tests have ",(0,o.kt)("inlineCode",{parentName:"p"},".test.js")," extension and reside somewhere in ",(0,o.kt)("inlineCode",{parentName:"p"},"e2e")," folder together with the Jest config:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"\u251c\u2500\u2500 \u2026\n\u251c\u2500\u2500 e2e\n//highlight-start\n\u2502\xa0\xa0 \u251c\u2500\u2500 feature1.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 feature2\n\u2502\xa0\xa0\xa0\u2502\xa0\xa0 \u251c\u2500\u2500 subfeature1.test.js\n\u2502\xa0\xa0\xa0\u2502\xa0\xa0 \u2514\u2500\u2500 subfeature2.test.js\n//highlight-end\n\u2502\xa0\xa0 \u251c\u2500\u2500 \u2026\n\u2502\xa0\xa0 \u2514\u2500\u2500 jest.config.js\n\u251c\u2500\u2500 \u2026\n\u251c\u2500\u2500 .detoxrc.js\n\u2514\u2500\u2500 package.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"testTimeout: 120000")," overrides the default value (5 seconds), which is usually too short to complete a single end-to-end test. Two minutes should be safe enough, but you\u2019re welcome to increase or decrease depending on your needs.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"maxWorkers: 1")," prevents potential over-allocation of mobile devices according to the default Jest strategy. By default, Jest picks ",(0,o.kt)("inlineCode",{parentName:"p"},"cpusCount \u2014 1")," which is too much (e.g. 6-core laptop would spawn 11 devices). Note that casually you can override it via forwarding command-line argument ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/cli#--maxworkersnumstring"},(0,o.kt)("inlineCode",{parentName:"a"},"--maxWorkers <N>")),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test \u2026 --maxWorkers 2\n# \u2026 jest \u2026 --maxWorkers 2\n")),(0,o.kt)("p",{parentName:"li"},"Change it only if you want to change ",(0,o.kt)("strong",{parentName:"p"},"the default value"),". For instance, you could use different number of workers depending on the environment, e.g.:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('@jest/types').Config.InitialOptions} */\nmodule.exports = {\n  // \u2026\n// highlight-next-line\n  maxWorkers: process.env.CI ? 2 : 1,\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"globalSetup")," file is essential as it integrates with Detox Internals API. If you need to set up something in addition, you should wrap it like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async () => {\n   await require('detox/runners/jest').globalSetup();\n   await yourGlobalSetupFunction();\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"globalTeardown")," file is essential as it integrates with Detox Internals API. If you need to tear down something in addition, you should wrap it like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async () => {\n  try {\n    await yourGlobalTeardownFunction();\n  } finally {\n    await require('detox/runners/jest').globalTeardown();\n  }\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"reporters")," array should always include a reporter from Detox. We reserve right to add anytime some integration code there. Although currently it is rather empty, not having it puts you under risk every time you upgrade Detox versions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"testEnvironment")," is the most important part of the integration. If you need to add something on top of it, please inherit like shown below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="e2e/testEnvironment.js"',title:'"e2e/testEnvironment.js"'},"const { DetoxCircusEnvironment } = require('detox/runners/jest');\n\nclass CustomDetoxEnvironment extends DetoxCircusEnvironment {\n  constructor(config, context) {\n    super(config, context);\n    // custom code\n  }\n\n  async setup(config, context) {\n    await super.setup(config, context);\n    // custom code\n  }\n\n  async handleTestEvent(event, state) {\n    await super.handleTestEvent(event, state);\n    // custom code\n  }\n\n  async teardown(config, context) {\n    try {\n      // custom code\n    } finally {\n      await super.teardown(config, context);\n    }\n  }\n}\n\nmodule.exports = CustomDetoxEnvironment;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"verbose: true")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/8208"},"disables batching")," of Jest logs and ensures you see the logs in real time."))),(0,o.kt)("h2",{id:"globals"},"Globals"),(0,o.kt)("p",null,"Unless ",(0,o.kt)("inlineCode",{parentName:"p"},"behavior.init.exposeGlobals")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", Detox exposes its primitives (",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"device"),", ...) globally, and it will override Jest\u2019s global ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," object.\nIf you need to use it nevertheless, import it explicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import jestExpect from 'expect';\n")),(0,o.kt)("h2",{id:"mocking"},"Mocking"),(0,o.kt)("p",null,"Don\u2019t use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.mock()")," or any other similar mocking mechanism. Follow our ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/mocking"},"Mocking guide")," instead."),(0,o.kt)("h2",{id:"parallel-test-execution"},"Parallel Test Execution"),(0,o.kt)("p",null,"Detox relies on test runners to execute tests in parallel."),(0,o.kt)("p",null,"If you\u2019re using Jest under the hood, the easiest way is to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"-w, --maxWorkers"),", e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test \u2026 --maxWorkers 2\n")),(0,o.kt)("p",null,"In the other cases, consult your test runner documentation."),(0,o.kt)("h2",{id:"forwarding-cli-arguments"},"Forwarding CLI arguments"),(0,o.kt)("p",null,"If Detox does not recognize CLI arguments you pass, it forwards them as-is to the underlying test runner, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'detox test -c ios.sim.debug --key1 value1 --key2\n# DETOX_CONFIGURATION=ios.sim.debug jest --key1 value1 --key2\n#\n# \u25cf Unrecognized CLI Parameters:\n#\n#   Following options were not recognized:\n#   ["key1", "key2"]\n#\n#   CLI Options Documentation:\n#   https://jestjs.io/docs/cli\n')),(0,o.kt)("p",null,"Therefore, if test runner rejects such arguments, it is your responsibility to fix that."),(0,o.kt)("p",null,"Since there might be argument clashes between Detox and a test runner, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," (double dash) to forward the arguments as-is, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c ios.sim.debug -- --help\n# DETOX_CONFIGURATION=ios.sim.debug jest --help\n# Usage: jest [--config=<pathToConfigFile>] [TestPathPattern]\n#\n# Options:\n# \u2026\n")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Detox has a few hard-coded default values for Jest: ",(0,o.kt)("a",{parentName:"li",href:"#testrunnerargs0-string"},(0,o.kt)("inlineCode",{parentName:"a"},"testRunner.args.$0"))," and ",(0,o.kt)("a",{parentName:"li",href:"#testrunnerinspectbrk-function"},(0,o.kt)("inlineCode",{parentName:"a"},"testRunner.inspectBrk"))," hook. Also ",(0,o.kt)("inlineCode",{parentName:"li"},"detox test")," CLI is aware of Jest boolean arguments (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"-i, --runInBand"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--bail"),", etc.), and it can auto-fix ambiguous commands like ",(0,o.kt)("inlineCode",{parentName:"li"},"detox test --runInBand e2e/starter.test.js --bail"),".\nWe're looking forward to make the code even more agnostic, but currently these caveats are worth mentioning for the developers of third-party test runner integrations.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);