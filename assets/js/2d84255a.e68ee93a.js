"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3928],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),d=n(91980),u=n(67392),s=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,u]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=d??p;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:d,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==l&&(p(t),d(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},22274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162),l=n(56693);const d={},u="Devices",s={unversionedId:"config/devices",id:"config/devices",title:"Devices",description:"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:",source:"@site/../docs/config/devices.mdx",sourceDirName:"config",slug:"/config/devices",permalink:"/Detox/docs/next/config/devices",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/config/devices.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/Detox/docs/next/config/overview"},next:{title:"Apps",permalink:"/Detox/docs/next/config/apps"}},p={},m=[{value:"Location",id:"location",level:2},{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2}],c={toc:m},k="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devices"},"Devices"),(0,r.kt)("p",null,"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:"),(0,r.kt)("h2",{id:"location"},"Location"),(0,r.kt)(l.ZP,{sectionName:"devices",propertyName:"device",mdxType:"Location"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{groupId:"deviceType",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ios.simulator",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ios.simulator",\n  "device": {\n    // one of these or a combination of them\n    "id": "D53474CF-7DD1-4673-8517-E75DAD6C34D6",\n    "type": "iPhone 11 Pro",\n    "name": "MySim",\n    "os": "iOS 13.0"\n  },\n}\n'))),(0,r.kt)(i.Z,{value:"android.emulator",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.emulator",\n  "device": {\n    "avdName": "Pixel_2_API_29"\n  },\n  "utilBinaryPaths": [\n    "optional-property-with/path/to/test-butler-or-anything-else.apk"\n  ]\n}\n'))),(0,r.kt)(i.Z,{value:"android.attached",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.attached",\n  "device": {\n    "adbName": "YOGAA1BBB412"\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"android.genycloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.genycloud",\n  "device": {\n    // one of these:\n    "recipeUUID": "11111111-2222-3333-4444-555555555555"\n    "recipeName": "MyRecipeName",\n  }\n}\n')))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"A device config can have the following params:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("strong",{parentName:"em"},"Required.")," String Literal"),". Mandatory property to discern device types: ",(0,r.kt)("inlineCode",{parentName:"td"},"ios.simulator"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"android.emulator"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"android.attached"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"android.genycloud")," etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("strong",{parentName:"em"},"Required.")," Object.")," Device query, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'{ "byType": "iPhone 11 Pro" }')," for iOS simulator, ",(0,r.kt)("inlineCode",{parentName:"td"},'{ "avdName": "Pixel_2_API_29" }')," for Android emulator or ",(0,r.kt)("inlineCode",{parentName:"td"},'{ "adbName": "<pattern>" }')," for attached Android device with name matching the regex.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bootArgs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. String. Supported by ",(0,r.kt)("inlineCode",{parentName:"em"},"ios.simulator")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.kt)("br",null)," Supply an extra ",(0,r.kt)("em",{parentName:"td"},"String")," of arguments to ",(0,r.kt)("inlineCode",{parentName:"td"},"xcrun simctl boot ...")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"emulator -verbose ... @AVD_Name"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forceAdbInstall")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. Boolean. Supported for Android devices only.")," ",(0,r.kt)("br",null)," A ",(0,r.kt)("em",{parentName:"td"},"Boolean")," value, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it tells ",(0,r.kt)("inlineCode",{parentName:"td"},"device.installApp()")," to use ",(0,r.kt)("inlineCode",{parentName:"td"},"adb install"),". Otherwise, it would use the combination of ",(0,r.kt)("inlineCode",{parentName:"td"},"adb push <app.apk>")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"adb shell pm install"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utilBinaryPaths")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. Array of strings. Supported for Android devices only.")," ",(0,r.kt)("br",null)," An array of relative paths of ",(0,r.kt)("em",{parentName:"td"},"utility")," app (APK) binary-files to preinstall on the tested devices - once before the test execution begins.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": these are not affected by various install-lifecycle events, such as launching an app with ",(0,r.kt)("inlineCode",{parentName:"td"},"device.launchApp({delete: true})"),", which reinstalls the app. A good example of why this might come in handy is ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/linkedin/test-butler"},"Test Butler"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpuMode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. String Literal (",(0,r.kt)("code",null,"auto ","|"," host ","|"," swiftshader","_","indirect ","|"," angle","_","indirect ","|"," guest"),"). Supported by ",(0,r.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.kt)("br",null)," A fixed ",(0,r.kt)("strong",{parentName:"td"},"string")," , which tells ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/run/emulator-acceleration#command-gpu"},"in which GPU mode")," the emulator should be booted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headless")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. Boolean.")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it tells Detox to boot an Android emulator with ",(0,r.kt)("inlineCode",{parentName:"td"},"-no-window")," option, or to not open the iOS Simulator app when running with Android or iOS respectively.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readonly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional. Boolean. Supported by ",(0,r.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.kt)("br",null),"  ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it forces Detox to boot even a single emulator with ",(0,r.kt)("inlineCode",{parentName:"td"},"-read-only")," option.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": when used with multiple workers, this setting has no effect \u2014 emulators will be booted always with ",(0,r.kt)("inlineCode",{parentName:"td"},"-read-only"),".")))))}h.isMDXComponent=!0},56693:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(90814);const i={toc:[]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can define the ",n.propertyName," config in two ways: ",(0,r.kt)("i",null,"aliased")," and ",(0,r.kt)("i",null,"inlined")," (per a configuration):"),(0,r.kt)(o.Z,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {",`  ${n.sectionName}: {`,"// highlight-start",`    ${n.propertyName}Key: {`,`      /* \u2026 ${n.propertyName} config \u2026 */`,"    }","// highlight-end","  },","  /* \u2026 */","  configurations: {","    'example.aliased': {","      /* \u2026 */","// highlight-next-line",`      ${n.propertyName}: '${n.propertyName}Key', // (1)`,"    },","    'example.inlined': {","      /* \u2026 */","// highlight-start",`      ${n.propertyName}: { // (2)`,`        /* \u2026 ${n.propertyName} config \u2026 */`,"      },","// highlight-end","    },","  },","};"].join("\n")))}d.isMDXComponent=!0}}]);