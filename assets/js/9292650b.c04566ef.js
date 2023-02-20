"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={authors:["noomorph"],tags:["major-release","genymotion"]},r="Detox 20 is out",s={permalink:"/Detox/blog/2022/11/10/detox-20-is-out",editUrl:"https://github.com/wix/Detox/edit/master/website/blog/2022-11-10-detox-20-is-out.md",source:"@site/blog/2022-11-10-detox-20-is-out.md",title:"Detox 20 is out",description:'Today we\'re proud to announce the new major release, Detox 20 (codename "Ash\xe1n"), which brings:',date:"2022-11-10T00:00:00.000Z",formattedDate:"November 10, 2022",tags:[{label:"major-release",permalink:"/Detox/blog/tags/major-release"},{label:"genymotion",permalink:"/Detox/blog/tags/genymotion"}],readingTime:9.705,hasTruncateMarker:!1,authors:[{name:"Yaroslav Serhieiev",title:"Detox Core Contributor",url:"https://github.com/noomorph",imageURL:"https://github.com/noomorph.png",key:"noomorph"}],frontMatter:{authors:["noomorph"],tags:["major-release","genymotion"]}},l={authorsImageUrls:[void 0]},p=[{value:"Genymotion SaaS",id:"genymotion-saas",level:2},{value:"Integration with test runners",id:"integration-with-test-runners",level:2},{value:"Configurable logger",id:"configurable-logger",level:2},{value:"Minor features",id:"minor-features",level:2},{value:"Headless iOS",id:"headless-ios",level:3},{value:"Reverse ports",id:"reverse-ports",level:3},{value:"Read-only emulators by default",id:"read-only-emulators-by-default",level:3},{value:"Reset lock file",id:"reset-lock-file",level:3},{value:"Deprecations",id:"deprecations",level:2},{value:"Afterword",id:"afterword",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we're proud to announce the new major release, ",(0,o.kt)("strong",{parentName:"p"},"Detox 20"),' (codename "Ash\xe1n"), which brings:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"official support for Genymotion SaaS"),(0,o.kt)("li",{parentName:"ul"},"improved integration with test runners"),(0,o.kt)("li",{parentName:"ul"},"configurable logging subsystem"),(0,o.kt)("li",{parentName:"ul"},"headless mode for iOS via configs and CLI"),(0,o.kt)("li",{parentName:"ul"},"reversing TCP ports via Android app configs"),(0,o.kt)("li",{parentName:"ul"},"and more optimizations to land in the next minor versions.")),(0,o.kt)("h2",{id:"genymotion-saas"},"Genymotion SaaS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Highlights"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/genymotion-saas"},(0,o.kt)("inlineCode",{parentName:"a"},"Using Genymotion SaaS")),"."),(0,o.kt)("p",null,"Two years ago we ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/2446"},"added elementary support")," for cloud-based Android emulators provided by ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.geny.io"},"Genymotion SaaS")," and started a beta testing phase across mobile projects at Wix."),(0,o.kt)("p",null,"Previously our mobile infrastructure engineers had been maintaining Android virtual devices on CI build agents on their own, so switching to cloud devices cleared up their time for more productive tasks. Another improvement was particularly noticeable for teams with a vast number of tests. We could reduce the duration of their CI pipelines almost by half after they scaled up from 2 parallel devices to 6",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-2b8cfe"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-2b8cfe",className:"footnote-ref"},"1")),"."),(0,o.kt)("p",null,"This positive impact encouraged us to adopt ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.geny.io"},"Genymotion SaaS")," for CI as quickly as possible, ignoring some unresolved issues in the initial pull request. For the most part, those were minor problems in global lifecycle management. Yet that made us feel uncertain about releasing it as-is, so we decided to take time and gain more production experience before taking any direction."),(0,o.kt)("p",null,"The further experience was surprisingly smooth and rarely presented issues, spare for a few minor ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/3573"},"glitches")," in advanced scenarios. Admittedly, revamping the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/internals"},"Detox lifecycle")," took us longer than expected, which is all the more reason for us to celebrate today."),(0,o.kt)("p",null,"We're looking forward to providing our users with more opportunities for testing in the cloud, and this step is only the first of many to come. We hope you'll utilize this new feature to your delight."),(0,o.kt)("h2",{id:"integration-with-test-runners"},"Integration with test runners"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Highlights"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/testRunner"},(0,o.kt)("inlineCode",{parentName:"a"},"Config file > Test runner")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/internals"},(0,o.kt)("inlineCode",{parentName:"a"},"Internals API")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/3193"},(0,o.kt)("inlineCode",{parentName:"a"},"Dropping Mocha support")),"."),(0,o.kt)("p",null,"It took about a few months of work to formalize the contract between Detox and a test runner. While there's still a lot of place for improvement, the new Detox release refines their interaction and lays the groundwork for third-party integrations."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha")," was our first supported test runner, but unfortunately, it could not keep up with our scaling requirements as the number of end-to-end tests grew. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mochajs/mocha/releases/tag/v8.0.0"},"By the time")," it acquired the ability to run tests in parallel, we already had ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/609"},"to place bets")," on another horse, and that was ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest"),"."),(0,o.kt)("p",null,"We attempted to keep compatibility with both Jest and Mocha, but the farther we went, the more obvious it was that we couldn't have it both ways. As it turned out, Jest wasn't easy to get along with \u2013 our first integration with it was too simplistic. Over a couple of years of use in production, we kept discovering various issues that forced us to rewrite our \"glue\" code from scratch twice, and this isn't over yet. All combined didn't leave much time and energy for tinkering with Mocha anymore."),(0,o.kt)("p",null,"In this release, we discontinued Mocha support to focus on the attunement of Jest with the new runner-independent ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/testRunner"},"test runner config")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/internals"},"Internals API"),". If there's enough demand, now it is up to the open-source community to build a new integration between Detox and Mocha."),(0,o.kt)("h2",{id:"configurable-logger"},"Configurable logger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Highlights"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/logger"},(0,o.kt)("inlineCode",{parentName:"a"},"Config file > Logger")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/logger"},(0,o.kt)("inlineCode",{parentName:"a"},"Logger API")),"."),(0,o.kt)("p",null,"The rigidity of the logging subsystem has always been showing itself ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/835"},"since its very creation")," in the summer of 2019.\nDue to time constraints and existing tech debts, it was impossible to do it right the first time, so we lived about three years with a proof-of-concept rather than a full-fledged feature."),(0,o.kt)("p",null,"The inconveniences weren't fatal but quite noticeable, nevertheless. Here are a few syndromes you could have spotted if you have ever used Detox timeline and log artifacts, especially when running tests in parallel:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an uncanny file array: ",(0,o.kt)("inlineCode",{parentName:"li"},"detox_pid_7505.log"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"detox_pid_7505.log.json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"detox_pid_7506.log"),";"),(0,o.kt)("li",{parentName:"ul"},"a relatively shallow ",(0,o.kt)("inlineCode",{parentName:"li"},"detox.trace.json"),": test suites, test functions, and some user-defined segments.")),(0,o.kt)("p",null,"The good news is that the new Detox release condenses all those numerous logs into two files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the plain, human-readable ",(0,o.kt)("inlineCode",{parentName:"li"},"detox.log"),";"),(0,o.kt)("li",{parentName:"ul"},"the raw, machine-readable ",(0,o.kt)("inlineCode",{parentName:"li"},"detox.trace.json")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://trace"),", ",(0,o.kt)("a",{parentName:"li",href:"https://ui.perfetto.dev/"},"Perfetto")," and other utilities.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A screenshot of timeline view generated by Perfetto",src:n(16350).Z,width:"1600",height:"1000"})),(0,o.kt)("p",null,"With the help of the new ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/logger"},"Logger API"),", you can add custom duration events to the timeline, too, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await detox.log.trace.complete('Login', async () => {\n  await element(by.id('email')).typeText('john@example.com');\n  await element(by.id('password')).typeText('123456');\n\n  detox.log.info('Trying to log in...');\n  await element(by.id('submit')).tap();\n});\n")),(0,o.kt)("p",null,"Besides, it is possible now to customize the console output of Detox via the new ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/logger"},"logger config"),", e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="detox.config.js"',title:'"detox.config.js"'},"/** @type {Detox.DetoxConfig} */\nmodule.exports = {\n  // ...\n  logger: {\n    options: {\n      showDate: false,\n      showLoggerName: false,\n      showPid: false,\n      prefixers: {\n        ph: null,\n      },\n    },\n  },\n};\n")),(0,o.kt)("p",null,"In the example above, we minimize all the metadata around the log messages \u2013 see the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Terser logs after applying the override",src:n(61863).Z,width:"1400",height:"399"})),(0,o.kt)("h2",{id:"minor-features"},"Minor features"),(0,o.kt)("h3",{id:"headless-ios"},"Headless iOS"),(0,o.kt)("p",null,"One of Detox known issues was always booting iOS simulators in a hidden mode. You could see tests running on your local simulator only if you had manually opened the Simulator app beforehand. So, we unified the ",(0,o.kt)("inlineCode",{parentName:"p"},"headless")," property for both iOS and Android, and now both the platforms visibly boot a device unless you configure it otherwise, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* @type {Detox.DetoxConfig} */\nmodule.exports = {\n  devices: {\n    iphone: {\n      type: 'ios.simulator',\n      // highlight-next-line\n      headless: process.env.CI ? true : undefined,\n      device: {\n        type: 'iPhone 14'\n      },\n      /* ... */\n    }\n  },\n};\n")),(0,o.kt)("p",null,"or, via CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c ios.sim.release --headless\n")),(0,o.kt)("h3",{id:"reverse-ports"},"Reverse ports"),(0,o.kt)("p",null,"Your apps might try to access some ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:*")," addresses (e.g., mock servers), but this is a bit more problematic in the case of Android. The Android emulators are separate virtual devices with their own loopback network interface. In such cases, you must set up reverse port forwarding via ",(0,o.kt)("inlineCode",{parentName:"p"},"adb reverse"),"."),(0,o.kt)("p",null,"Local servers are quite a common prerequisite for apps in debug mode \u2013 one could recall React Native bundler on port 8081, Storybook server on 9009, etc. That's why we decided to add an optional config property for Android apps, ",(0,o.kt)("inlineCode",{parentName:"p"},"reversePorts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {Detox.DetoxConfig} */\nmodule.exports = {\n  // ...\n  apps: {\n    'android.debug': {\n      type: 'android.apk',\n      binaryPath: '...',\n      reversePorts: [8081, 3000],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"In other words, this is a convenience API that tells Detox to run ",(0,o.kt)("inlineCode",{parentName:"p"},"device.reverseTcpPort(portNumber)")," after installing the app. It should be helpful for anyone who prefers to keep such things as configs rather than as code."),(0,o.kt)("h3",{id:"read-only-emulators-by-default"},"Read-only emulators by default"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-read-only")," flag appeared in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/emulator#concurrent-avd"},"Android emulator 28.0.16"),". Detox promptly adopted it since the read-only mode allowed it to run multiple instances of a single Android virtual device (AVD) concurrently. This feature helped us to implement parallel test execution support for Android back then."),(0,o.kt)("p",null,"Being overcautious, we implemented that partially, only for cases when the user starts multiple concurrent workers. This decision created a moderately annoying UX issue. Imagine you run tests sequentially first, using one worker only. That provides you with a regular AVD instance, i.e., not a read-only one. After that, you switch to multiple workers only to get an error from the Android emulator, complaining about mixing regular and read-only instances."),(0,o.kt)("p",null,"While the fix itself has always been straightforward \u2013 close the running AVD and try again \u2013 this entire overcaution brought more issues than solving them. That's why, from now on, Android emulators will always be starting in ",(0,o.kt)("inlineCode",{parentName:"p"},"-read-only")," mode unless you configure ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly: false")," in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/devices"},"device config"),"."),(0,o.kt)("h3",{id:"reset-lock-file"},"Reset lock file"),(0,o.kt)("p",null,"This release adds a small CLI tool, ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli/reset-lock-file"},(0,o.kt)("inlineCode",{parentName:"a"},"detox reset-lock-file")),", to help users with one specific use scenario."),(0,o.kt)("p",null,"Imagine you want to run tests for multiple Detox configurations at once, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c iphoneSE2020.release e2e/ui.test.js\ndetox test -c iphone14ProMax.release e2e/ui.test.js\n")),(0,o.kt)("p",null,"The problem is that Detox uses a file-locking mechanism to avoid situations when parallel test workers would take control of the same device. The ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," command, upon start, erases that file contents, creating a race condition risk."),(0,o.kt)("p",null,"To eliminate that risk, use a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"detox reset-lock-file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--keepLockFile")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox reset-lock-file & \\\ndetox test --keepLockFile -c iphoneSE2020.release e2e/ui.test.js & \\\ndetox test --keepLockFile -c iphone14ProMax.release e2e/ui.test.js & \\\nwait\n")),(0,o.kt)("p",null,"In the future, we plan to minimize using lock files so that you don't have to think about this low-level implementation detail.\nSo, this tool adds some convenience until we provide a next-gen solution."),(0,o.kt)("h2",{id:"deprecations"},"Deprecations"),(0,o.kt)("p",null,"Detox 20 executes many pending deprecations, so make sure to check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/migration#200"},"Migration Guide")," before upgrading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JS: minimum supported Node.js version is ",(0,o.kt)("inlineCode",{parentName:"li"},"14.x"),";"),(0,o.kt)("li",{parentName:"ul"},"JS: minimum supported Jest version is ",(0,o.kt)("inlineCode",{parentName:"li"},"27.2.5"),";"),(0,o.kt)("li",{parentName:"ul"},"JS: Mocha test runner is no longer supported;"),(0,o.kt)("li",{parentName:"ul"},"JS: discontinued old adapters for Jest (",(0,o.kt)("inlineCode",{parentName:"li"},"jest-jasmine"),", first generation of ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-circus")," adapter);"),(0,o.kt)("li",{parentName:"ul"},"JS: discontinued ",(0,o.kt)("inlineCode",{parentName:"li"},"{ permanent: true }")," option in ",(0,o.kt)("inlineCode",{parentName:"li"},"device.appLaunchArgs.*")," methods (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3360"},"#3360"),");"),(0,o.kt)("li",{parentName:"ul"},"CLI: dropped ",(0,o.kt)("inlineCode",{parentName:"li"},"-w, --workers")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"-o, --runner-config")," args \u2013 see a ",(0,o.kt)("a",{parentName:"li",href:"/docs/guide/migration#updating-command-line-scripts"},"dedicated section")," in the migration guide;"),(0,o.kt)("li",{parentName:"ul"},"CLI: dropped deprecated ",(0,o.kt)("inlineCode",{parentName:"li"},"--device-launch-args")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3665"},"#3665"),");"),(0,o.kt)("li",{parentName:"ul"},"Config: discontinued kebab-case properties: ",(0,o.kt)("inlineCode",{parentName:"li"},"test-runner"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"runner-config")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3371"},"#3371"),")"),(0,o.kt)("li",{parentName:"ul"},"Config: discontinued ",(0,o.kt)("inlineCode",{parentName:"li"},"skipLegacyWorkersInjections")," property (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3286"},"(#3286)"),")"),(0,o.kt)("li",{parentName:"ul"},"Config: deprecated ",(0,o.kt)("inlineCode",{parentName:"li"},"specs")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"runnerConfig")," properties"),(0,o.kt)("li",{parentName:"ul"},"Config: changed ",(0,o.kt)("a",{parentName:"li",href:"/docs/config/testRunner"},"semantics")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"testRunner")," property"),(0,o.kt)("li",{parentName:"ul"},"Config: dropped support for all-in-one configurations (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3386"},"#3386"),");"),(0,o.kt)("li",{parentName:"ul"},"Android: remove deprecated native IdlePolicyConfig (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3332/files"},"#3332"),")"),(0,o.kt)("li",{parentName:"ul"},"iOS: discontinued ",(0,o.kt)("inlineCode",{parentName:"li"},"ios.none")," device type \u2013 see the new way to ",(0,o.kt)("a",{parentName:"li",href:"/docs/introduction/debugging#native-application-code"},"debug native code")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/pull/3361"},"#3361"),")")),(0,o.kt)("h2",{id:"afterword"},"Afterword"),(0,o.kt)("p",null,"Over the last year and a half, we have established a centralized configuration system for more than 50 projects using Detox at Wix. While it never seemed to be a cakewalk, the entire experience of troubleshooting over a hundred issues across the organization did not leave us unchanged."),(0,o.kt)("p",null,"We see numerous things to improve in Detox, but most of them boil down to the same thing \u2013 ",(0,o.kt)("strong",{parentName:"p"},"scaling"),'. Surprisingly, "scaling" makes an excellent umbrella term for nearly every challenge we\'ve been encountering lately:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"scaling up the number of users")," requires us to improve the onboarding and troubleshooting experience;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"scaling up the number of projects")," forces us to centralize scattered configs into flexible organization presets;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"scaling up the number of tests")," prompts us to optimize the codebase and incline it towards cloud and remote execution.")),(0,o.kt)("p",null,"Our core team has been facing challenges of limited human resource constraints and growing scaling needs for a long time. In many ways, that has shaped a specific mindset within the team. We evaluate every discussed feature by asking a simple question: ",(0,o.kt)("em",{parentName:"p"},"will it save other people and us time to focus on more important things?")," Teaching a man to fish is better than giving fish, so our success at preventing support issues matters more than our success at solving them ourselves."),(0,o.kt)("p",null,"That's why we'll be making subsequent efforts in these three areas, hoping to get back to you soon with even more exciting updates."),(0,o.kt)("p",null,"Enjoy your drive with Detox 20!"),(0,o.kt)("p",null,"Cheers! \ud83d\udc4b"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-2b8cfe"},"The mentioned threshold is not a hard limit, but rather a point where the return value of scaling up the number of devices starts dramatically diminishing in our case \u2013 not only the tests themselves, but installing NPM dependencies and building the projects also takes time.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1-2b8cfe",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},61863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v20-logger-options-be0263e8b33e617b2a4ef55861d45e4a.png"},16350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v20-perfetto-example-171220190ff552d655a9a0712e2c04ed.png"}}]);