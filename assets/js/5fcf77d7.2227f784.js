"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Mocking",s={unversionedId:"guide/mocking",id:"guide/mocking",title:"Mocking",description:"This article previously focused on the older React Native versions (<0.59), so if you need to access it, follow this Git history link.",source:"@site/../docs/guide/mocking.md",sourceDirName:"guide",slug:"/guide/mocking",permalink:"/Detox/docs/next/guide/mocking",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/mocking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Taking Screenshots",permalink:"/Detox/docs/next/guide/taking-screenshots"},next:{title:"Using Launch Arguments",permalink:"/Detox/docs/next/guide/launch-args"}},l={},c=[{value:"Quick flow",id:"quick-flow",level:2},{value:"Configuring Metro bundler",id:"configuring-metro-bundler",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocking"},"Mocking"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This article previously focused on the older React Native versions (",(0,r.kt)("inlineCode",{parentName:"p"},"<0.59"),"), so if you need to access it, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/01ad250fe4168502a57339b8bcab0ec5a5c89e4b/docs/Guide.Mocking.md"},"follow this Git history link"),".")),(0,r.kt)("p",null,"Mocking is an integral part of testing.\nYou may want to use mocks to alter specific behavior of your app during tests, e.g., to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"change server endpoints to point to a mock/staging server instead of the regular production server;"),(0,r.kt)("li",{parentName:"ul"},"stub a feature the simulator doesn\u2019t support;"),(0,r.kt)("li",{parentName:"ul"},"prepare mock environment data such as GPS position, Contacts/Photos found on the device, etc.")),(0,r.kt)("p",null,"This guide assumes you are testing a React Native app with Detox."),(0,r.kt)("p",null,"Please note that you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," apply mocking techniques familiar from the prior Jest experience, even though Detox runs on top of Jest, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./src/myModule'); // NO, THIS WON'T WORK\n")),(0,r.kt)("p",null,"All the mocking must be conducted with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro"},"Metro bundler"),", which powers React Native under the hood.\nThanks to Metro bundler, there are two modes your React Native application can run in:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Debug mode"),". Running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native start")," spawns the ",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," on port 8081 (by default). It serves JavaScript files of your app over HTTP, expecting that the native code will request it right upon the launch on the mobile device. Thus, the native app keeps re-downloading and executing the new code every time you change the code locally.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Release mode"),". In contrast to the debug mode, ",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," does not need to run as a server on the side. It bundles your JavaScript code once into the native app binary file. Hence, every edit to the source code requires rebuilding the entire app binary and reinstalling it on the device before you can see the effect."))),(0,r.kt)("p",null,"There are two ways to configure the ",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," to use your mocks: quick (",(0,r.kt)("strong",{parentName:"p"},"debug mode")," only) and universal.\nLet's start with the quicker way."),(0,r.kt)("h2",{id:"quick-flow"},"Quick flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pick a module that you are going to mock, e.g.:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"file=src/config.js",file:"src/config.js"},"// src/config.js\n\nexport const SERVER_URL = 'https://production.mycompany.name/api';\nexport const FETCH_TIMEOUT = 60000;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a mock module alongside, with an arbitrary extension (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},".mock.js"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"file=src/config.js",file:"src/config.js"},"// src/config.mock.js\n\nexport * from './config.js';\n\n// override the url from the original file:\nexport const SERVER_URL = 'http://localhost:3000/api';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop your ",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," if it has been already running, and run it again with the corresponding file extension override, e.g.:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native start --sourceExts mock.js,js,json,ts,tsx\n")),(0,r.kt)("p",{parentName:"li"},"This command is already enough to start your application in an altered mode, and you can start running your tests. Now, if some module imports ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/config"),", you tell ",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," to prefer ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/config.mock.js")," over the plain ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/config.js"),", which means the consumer gets the mocked implementation."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'CAVEAT: whichever file extension you might take for the mock files \u2013 make sure you don\u2019t accidentally "pick up" unforeseen file overrides from ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/**/*.your-extension.js"),"!\n",(0,r.kt)("em",{parentName:"p"},"Metro bundler")," does not limit itself to your project files only \u2013 applying those ",(0,r.kt)("inlineCode",{parentName:"p"},"--sourceExts")," also affects the resolution of the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," content!")),(0,r.kt)("h2",{id:"configuring-metro-bundler"},"Configuring Metro bundler"),(0,r.kt)("p",null,"While the mentioned way is good enough for the ",(0,r.kt)("strong",{parentName:"p"},"debug mode"),", it falls short for the ",(0,r.kt)("strong",{parentName:"p"},"release builds"),". The problem is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--sourceExts")," argument is supported only by ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native start")," command. Hence, you\u2019d need a CLI-independent way to configure your Metro bundler, and that is patching your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="metro.config.js"',title:'"metro.config.js"'}," /**\n  * Metro configuration for React Native\n  * https://github.com/facebook/react-native\n  *\n  * @format\n  */\n+const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;\n\n module.exports = {\n+  resolver: {\n+    sourceExts: process.env.MY_APP_MODE === 'mocked'\n+        ? ['mock.js', ...defaultSourceExts]\n+        : defaultSourceExts,\n+  },\n   transformer: {\n     getTransformOptions: async () => ({\n       transform: {\n         experimentalImportSupport: false,\n         inlineRequires: true,\n       },\n     }),\n   },\n };\n")),(0,r.kt)("p",null,"This way, we are enforcing a custom convention that if the Metro bundler finds the ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_APP_MODE=mocked")," environment variable, it should apply our ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceExts")," override instead of the default values."),(0,r.kt)("p",null,"Therefore, to start the Metro bundler in the mocked mode, you would run something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MY_APP_MODE=mocked npx react-native start\n")),(0,r.kt)("p",null,"This principle stays the same for the ",(0,r.kt)("strong",{parentName:"p"},"release mode"),", although the build commands might differ depending on the platform and a specific script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MY_APP_MODE=mocked\n# from now on, even an implicit run of Metro bundler will use our override\n\n# via React Native CLI\nnpx react-native run-ios --configuration Release\nnpx react-native run-android --variant=release\n\n# via native tools\nxcodebuild -workspace ... -configuration release -scheme ...\n./gradlew assembleRelease\n")),(0,r.kt)("p",null,"Please note that preparing React Native apps for the release mode requires groundwork for both ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/publishing-to-app-store"},"iOS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/signed-apk-android"},"Android"),", which is out of scope of this current article."),(0,r.kt)("p",null,"As you might have noticed, this tutorial has no direct connection to Detox itself, which is a correct observation.\nThe suggested mocking techniques are a part of the React Native world itself, so please consult the further resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/metro/"},"https://facebook.github.io/metro/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/cli/blob/master/docs/commands.md"},"https://github.com/react-native-community/cli/blob/master/docs/commands.md"))),(0,r.kt)("p",null,"Happy Detoxing!"))}m.isMDXComponent=!0}}]);