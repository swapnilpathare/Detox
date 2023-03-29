"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8883],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},54660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={},s="Uninstalling Detox",u={unversionedId:"guide/uninstalling",id:"version-20.x/guide/uninstalling",title:"Uninstalling Detox",description:"Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc.",source:"@site/versioned_docs/version-20.x/guide/uninstalling.md",sourceDirName:"guide",slug:"/guide/uninstalling",permalink:"/Detox/docs/guide/uninstalling",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/guide/uninstalling.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cucumber.js Integration",permalink:"/Detox/docs/guide/cucumber-js-integration"},next:{title:"Dealing With Problems With Building the App & Detox",permalink:"/Detox/docs/troubleshooting/building-the-app"}},c={},p=[{value:"Detox Framework Cache",id:"detox-framework-cache",level:2},{value:"Test Session State",id:"test-session-state",level:2},{value:"Cloned Simulators (macOS)",id:"cloned-simulators-macos",level:2},{value:"Remnants of Artifacts",id:"remnants-of-artifacts",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Detox CLI",id:"detox-cli",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uninstalling-detox"},"Uninstalling Detox"),(0,r.kt)("p",null,"Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc."),(0,r.kt)("p",null,"This checklist might come in handy whenever you have to make a clean uninstallation after using Detox."),(0,r.kt)("h2",{id:"detox-framework-cache"},"Detox Framework Cache"),(0,r.kt)("p",null,"Every install of Detox also triggers a ",(0,r.kt)("inlineCode",{parentName:"p"},"postinstall")," script in its ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", which builds (or unpacks) ",(0,r.kt)("inlineCode",{parentName:"p"},"Detox.framework")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Detox"),"."),(0,r.kt)("p",null,"You can either delete the folder manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/Library/Detox\n")),(0,r.kt)("p",null,"or run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"detox clean-framework-cache\n")),(0,r.kt)("h2",{id:"test-session-state"},"Test Session State"),(0,r.kt)("p",null,"On every test run, Detox rewrites a few temporary files in ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH"),", i.e.:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The respective iOS and Android lockfiles to tell apart the busy and the available devices for use with multiple workers:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"device.registry.state.lock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android-device.registry.state.lock"),".")))),(0,r.kt)("p",null,"The location of ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH")," may vary depending on the operating system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Detox"),"."))),(0,r.kt)("li",{parentName:"ul"},"Linux:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME/Detox"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME")," is defined;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.local/share/Detox"),", otherwise."))),(0,r.kt)("li",{parentName:"ul"},"Windows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\data\\Detox"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%")," is defined;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\Application Data\\Detox"),", otherwise.")))),(0,r.kt)("h2",{id:"cloned-simulators-macos"},"Cloned Simulators (macOS)"),(0,r.kt)("p",null,'To support the "multiple workers" feature on iOS, Detox clones simulator instances when there aren\u2019t enough available ones.\nThe autogenerated simulators have names with ',(0,r.kt)("inlineCode",{parentName:"p"},"-Detox")," suffix appended, so you can easily spot them with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'xcrun simctl list | grep "-Detox"\n')),(0,r.kt)("p",null,"To delete a simulator, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl delete <uuid>\n")),(0,r.kt)("h2",{id:"remnants-of-artifacts"},"Remnants of Artifacts"),(0,r.kt)("p",null,"Forced exits may result in leaving some temporary files behind."),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"To ensure there are no temporary artifact files (logs, screenshots, etc.), you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf $TMPDIR/*.detox.*\n")),(0,r.kt)("p",null,"If you wish to clean up your iOS simulators from the installed apps and other customizations, just run the erase procedure for the relevant ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl erase <uuid>\n")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"The advice for iOS applies to the Android virtual devices as well. To wipe user files on a specific AVD, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -avd <your_AVD> -wipe-data\n")),(0,r.kt)("p",null,"If you have to clean temporary Detox files from an individual booted device, look out for files like ",(0,r.kt)("inlineCode",{parentName:"p"},"11159175_0.log")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/sdcard")," folder.\nYou can try deleting them using a simple wildcard like below or use your own:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"adb -s <emulator-port> shell rm -rf /sdcard/*_*.*\n")),(0,r.kt)("h2",{id:"detox-cli"},"Detox CLI"),(0,r.kt)("p",null,"If you have installed the official CLI wrapper for Detox, then make sure to uninstall it as well:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall detox-cli --global\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global remove detox-cli\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm remove detox-cli --global\n")))))}f.isMDXComponent=!0}}]);