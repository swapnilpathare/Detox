"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),i=r(86010),o=r(12466),s=r(16550),l=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:r,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=l??d;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var f=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},48117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(74866),o=r(85162);const s={id:"third-party-drivers",slug:"guide/third-party-drivers",title:"Third-Party Drivers",sidebar_label:"Third-Party Drivers"},l=void 0,u={unversionedId:"third-party-drivers",id:"version-19.x/third-party-drivers",title:"Third-Party Drivers",description:"Third-Party Drivers",source:"@site/versioned_docs/version-19.x/Guide.ThirdPartyDrivers.md",sourceDirName:".",slug:"/guide/third-party-drivers",permalink:"/Detox/docs/19.x/guide/third-party-drivers",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.ThirdPartyDrivers.md",tags:[],version:"19.x",frontMatter:{id:"third-party-drivers",slug:"guide/third-party-drivers",title:"Third-Party Drivers",sidebar_label:"Third-Party Drivers"},sidebar:"tutorialSidebar",previous:{title:"Parallel Test Execution",permalink:"/Detox/docs/19.x/guide/parallel-test-execution"},next:{title:"Expo",permalink:"/Detox/docs/19.x/guide/expo"}},c={},d=[{value:"Third-Party Drivers",id:"third-party-drivers",level:2},{value:"How to Use a Third-party Driver",id:"how-to-use-a-third-party-driver",level:3},{value:"Writing a New Third-party Driver",id:"writing-a-new-third-party-driver",level:3},{value:"Anatomy of the Drivers",id:"anatomy-of-the-drivers",level:4},{value:"Implementation Details",id:"implementation-details",level:4},{value:"Existing Third-party Drivers",id:"existing-third-party-drivers",level:3}],p={toc:d},h="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"third-party-drivers"},"Third-Party Drivers"),(0,a.kt)("p",null,'Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.\nFor example, the following configuration uses the "ios.simulator" driver.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ios.sim": {\n    "type": "ios.simulator",\n    "device": "...",\n    "binaryPath": "bin/YourApp.app"\n  }\n}\n')),(0,a.kt)("p",null,"While Detox technically supports Android devices and iOS simulators out of the box, devices running other platforms such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"Web")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-windows"},"Windows")," can be targeted."),(0,a.kt)("p",null,"If your app targets a third-party platform, you may switch to use a ",(0,a.kt)("a",{parentName:"p",href:"#how-to-use-a-third-party-driver"},"third-party driver")," to run your tests on said platform. If one doesn\u2019t already exist, you can ",(0,a.kt)("a",{parentName:"p",href:"#Writing-a-new-third-party-driver"},"write your own"),"."),(0,a.kt)("h3",{id:"how-to-use-a-third-party-driver"},"How to Use a Third-party Driver"),(0,a.kt)("p",null,"Check to see if a ",(0,a.kt)("a",{parentName:"p",href:"#existing-third-party-drivers"},"third-party driver")," already exists for the platform you wish to target. Mostly likely, the driver will have setup instructions."),(0,a.kt)("p",null,"Overall the setup for any third party driver is fairly simple."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the driver to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev detox-driver-package\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev detox-driver-package\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new Detox configuration to your existing configurations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," set to driver\u2019s package name."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+  "thirdparty.driver.config": {\n+    "type": "detox-driver-package",\n+    "binaryPath": "bin/YourApp.app",\n+  }\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Detox while specifying the name of your new configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --configuration thirdparty.driver.config\n")))),(0,a.kt)("h3",{id:"writing-a-new-third-party-driver"},"Writing a New Third-party Driver"),(0,a.kt)("h4",{id:"anatomy-of-the-drivers"},"Anatomy of the Drivers"),(0,a.kt)("p",null,"The architecture of a driver is split into a few different pieces; Understanding the ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/how-detox-works#Architecture"},"overall architecture of Detox")," will help with this section."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Components running in the context of the test logic execution on the Node.js process on the host computer:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Device Drivers layer:")," The layer contains a collection of drivers, implementing - mostly, though not exclusively, the platform-specific details for the Detox ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md"},(0,a.kt)("inlineCode",{parentName:"a"},"device")," object")," that is exposed in the Detox tests.\nThe implementation is responsible for managing devices your tests will run on, in terms of device allocation, app installation user interactions (e.g. taps) execution and so on."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Matchers:")," code powering the ",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"element"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"waitFor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"by")," globals in your tests.\nIn essence, it translates and sends test-logic commands (such as taps and assertions) over the network to the device on which your tests are running. In turn, the device natively performs these commands.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The component running on the device being tested, injected into the test app:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Native Client:")," The driver client communicates with the server over\nwebsocket where it receives information from the serialized matchers, and expectations, and also sends responses\nback of whether each step of your test succeeds or fails. Typically, a device client will use an underlying library specific\nto the platform at hand to implement the expectations.")),(0,a.kt)("h4",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"In order to introduce a third-party Driver, there is a set of core classes you must implement - each responsible for a different Detox concern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allocation: The process of launching / selecting a device over which the tests would run."),(0,a.kt)("li",{parentName:"ul"},"Pre-validation: The checkup of the execution-environment (e.g. verifying the Android SDK is installed)."),(0,a.kt)("li",{parentName:"ul"},"Artifact handlers registration: The process where platform-based artifacts generation handlers are registered (e.g. handlers for taking screenshots, which are different between the Android and iOS platforms)."),(0,a.kt)("li",{parentName:"ul"},"Runtime: The ",(0,a.kt)("em",{parentName:"li"},"de facto")," execution of test logic."),(0,a.kt)("li",{parentName:"ul"},"Matchers: The matching of visible elements and visibility assertion.")),(0,a.kt)("p",null,"To understand the exact contract of these classes, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/examples/demo-plugin/driver.js"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/demo-plugin/driver.js"))," for a dummy implementation, or to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer")," for an actual implementation of such as driver."),(0,a.kt)("p",null,"Very roughly speaking, this is the expected skeletal implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const DeviceDriverBase = require('detox/src/devices/runtime/drivers/DeviceDriverBase');\n\nclass Cookie {\n  constructor(id) {\n    this.id = id; // hold any info necessary in order to identify the associated device\n  }\n}\n\nclass MyNewAllocationDriver {\n  constructor(deps) {\n    this.emitter = deps.eventEmitter;\n  }\n  \n  async allocate(deviceConfig) {\n    // ...\n    return new Cookie(id); // This is where a cookie is formed once for the entire process\n  }\n  \n  async free(cookie, options) {\n    // ...\n  }\n}\n\nclass MyNewEnvValidator {\n  validate() {\n    // ...\n  }\n}\n\nclass MyNewArtifactsProvider {\n  declareArtifactPlugins() {\n    // ...\n  }\n}\n\nclass MyNewRuntimeDriver extends DeviceDriverBase {\n  constructor(deps, cookie) {\n    // ...\n  }\n  \n  // ...\n}\n\nclass MyExpect {\n  // ...\n}\n\n\nmodule.exports = MyNewDriver;\n")),(0,a.kt)("h3",{id:"existing-third-party-drivers"},"Existing Third-party Drivers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer"))))}m.isMDXComponent=!0}}]);