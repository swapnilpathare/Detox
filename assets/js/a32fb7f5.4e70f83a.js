"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=y(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function I(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},38585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162);const s={toc:[]},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that React Native packager is already running. If not, you can start it with:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native start\n"))),(0,o.kt)("li",{parentName:"ol"},"Launch Android Studio."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools > Layout Inspector")," tool:\n",(0,o.kt)("img",{alt:"tag attribute with testID value",src:n(28584).Z,width:"3012",height:"678"})),(0,o.kt)("li",{parentName:"ol"},"Build your application from Android Studio."),(0,o.kt)("li",{parentName:"ol"},"After you run your app from Android Studio, the ",(0,o.kt)("inlineCode",{parentName:"li"},"Layout Inspector")," should automatically attach to the process and show the hierarchy of your screen. You will see the snapshot of your screen, where you can focus on any component with a click.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout Inspector")," doesn't attach to process from Android Studio, or you build it in a different way \u2013 you can attach to your app process manually using ",(0,o.kt)("inlineCode",{parentName:"p"},"Select Process")," dropdown."))),(0,o.kt)("li",{parentName:"ol"},"Select the component you need, and you will see your actual testID value under the ",(0,o.kt)("inlineCode",{parentName:"li"},"tag")," attribute.\n",(0,o.kt)("img",{alt:"tag attribute with testID value",src:n(23022).Z,width:"1500",height:"1156"}))))}u.isMDXComponent=!0;const c={toc:[]},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build and start your app in ",(0,o.kt)("em",{parentName:"li"},"debug")," mode as you usually do, e.g.:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"detox build -c ios.sim.debug\nnpx react-native start\nnpx react-native run-ios\n"))),(0,o.kt)("li",{parentName:"ol"},"Open your iOS project in Xcode, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"YourProject/ios/YourProject.xcworkspace"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Debug > Attach to Process")," and select your app process (it is usually on top of the list).\n",(0,o.kt)("img",{alt:"attach to debug process ios",src:n(6645).Z,width:"2538",height:"1254"}),"\nYou will see a new device started with your app."),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"AppDelegate")," file:\n",(0,o.kt)("img",{alt:"AppDelegate file",src:n(83389).Z,width:"2580",height:"1166"})),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Debug View Hierarchy")," button on the bottom panel:\n",(0,o.kt)("img",{alt:"Debug Hierarchy button",src:n(44523).Z,width:"2580",height:"1818"})),(0,o.kt)("li",{parentName:"ol"},"Select the component you need, and you will see your actual ",(0,o.kt)("inlineCode",{parentName:"li"},"testID")," value under the ",(0,o.kt)("inlineCode",{parentName:"li"},"Accessibility > Identifier")," attribute.\n",(0,o.kt)("img",{alt:"accessibility attribute with testID value",src:n(62161).Z,width:"1325",height:"1149"}))))}d.isMDXComponent=!0;const m={},h="Adding testID to your components",y={unversionedId:"guide/test-id",id:"guide/test-id",title:"Adding testID to your components",description:"This guide is applicable only for React Native applications.",source:"@site/../docs/guide/test-id.mdx",sourceDirName:"guide",slug:"/guide/test-id",permalink:"/Detox/docs/next/guide/test-id",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/test-id.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Investigating Failures",permalink:"/Detox/docs/next/guide/investigating-test-failure"},next:{title:"Parallel Test Execution",permalink:"/Detox/docs/next/guide/parallel-test-execution"}},f={},g=[{value:"Pass testID to your native components",id:"pass-testid-to-your-native-components",level:2},{value:"Child elements",id:"child-elements",level:3},{value:"Repetitive components",id:"repetitive-components",level:3},{value:"Find your testID",id:"find-your-testid",level:2}],b={toc:g},k="wrapper";function v(e){let{components:t,...s}=e;return(0,o.kt)(k,(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-testid-to-your-components"},"Adding testID to your components"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide is applicable only for React Native applications.")),(0,o.kt)("p",null,"It is always the best idea to match your element by something unique. We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#testid"},(0,o.kt)("inlineCode",{parentName:"a"},"testID")," property")," supported by most React Native components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<View>\n  <TouchableOpacity testID="MyUniqueId123">\n    <Text>Some text</Text>\n  </TouchableOpacity>\n</View>\n')),(0,o.kt)("h2",{id:"pass-testid-to-your-native-components"},"Pass testID to your native components"),(0,o.kt)("p",null,"Passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," to your custom component props has no effect until you forward it down to a native component like ",(0,o.kt)("inlineCode",{parentName:"p"},"<View />")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<TouchableOpacity />"),"\nthat implements rendering it as an accessibility identifier in the native component hierarchy:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pass testID to native component",src:n(10301).Z,width:"2116",height:"358"})),(0,o.kt)("p",null,"For example, you have ",(0,o.kt)("inlineCode",{parentName:"p"},"<YourCustomComponent />")," and you pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="YourScreen.jsx"',title:'"YourScreen.jsx"'},'function YourScreen() {\n  return (\n    <YourCustomComponent testID="YourCustomComponent" />\n  );\n}\n')),(0,o.kt)("p",null,"Make sure that your implementation passes ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," to some React Native component that supports it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="YourCustomComponent.jsx"',title:'"YourCustomComponent.jsx"'},"function YourCustomComponent(props) {\n  return (\n// highlight-next-line\n    <View testID={props.testID}>\n      <Text>Some text</Text>\n    </View>\n  );\n}\n")),(0,o.kt)("h3",{id:"child-elements"},"Child elements"),(0,o.kt)("p",null,"If your component has several useful child elements, it is even a better idea to assign them some derived test IDs, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="YourCustomComponent.jsx"',title:'"YourCustomComponent.jsx"'},"function YourCustomComponent(props) {\n  return (\n// highlight-next-line\n    <View testID={props.testID}>\n      <Text testID={`${props.testID}.label`}>Some text</Text>\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"That way, you could refer to specific elements in Detox tests via the most basic and least ambiguous ",(0,o.kt)("inlineCode",{parentName:"p"},"by.id")," matchers, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(element(by.id('YourCustomComponent'))).toBeVisible(); // the view is visible\nexpect(element(by.id('YourCustomComponent.label'))).toHaveText('Some text'); // the label has some text\n")),(0,o.kt)("h3",{id:"repetitive-components"},"Repetitive components"),(0,o.kt)("p",null,"It is highly not recommended to use non-unique ",(0,o.kt)("inlineCode",{parentName:"p"},"testID"),", e.g. when your components get rendered in any sort of repeater or virtualized list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="YourScreen.jsx"',title:'"YourScreen.jsx"'},"const ITEMS = [\n  { title: 'First Item' },\n  { title: 'Second Item' },\n  { title: 'Third Item' },\n];\n\nfunction YourScreen() {\n  const renderItem = ({ item }) => (\n// highlight-next-line\n    <YourCustomComponent testID={'listItem'} label={item.title} />\n  );\n\n  return (\n      <FlatList\n        data={ITEMS}\n        renderItem={renderItem}\n      />\n  );\n}\n")),(0,o.kt)("p",null,"This would be a violation of accessibility guidelines and unnecessary complication for your test matchers.\nYou\u2019d also have to use extra matchers and ",(0,o.kt)("inlineCode",{parentName:"p"},".atIndex")," clarification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(element(by.id('listItem')).atIndex(2)).toHaveText('Third Item');\n")),(0,o.kt)("p",null,"Instead, you could generate a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," for every list item with the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  const renderItem = ({ item, index }) => (\n    <YourCustomComponent testID={`listItem.${index + 1}`} label={item.title} />\n  );\n")),(0,o.kt)("p",null,"That way, your assertion would become simpler and more deterministic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(element(by.id('listItem.3'))).toHaveText('Third Item');\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"testID for repetitive components",src:n(3288).Z,width:"2117",height:"624"})),(0,o.kt)("h2",{id:"find-your-testid"},"Find your testID"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Incorrect or absent ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," is a common cause for test failure.\nIf your test can't find your ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," and you can't see it either using tools described below, that usually means you haven't passed it down to this component.\nMake sure you keep forwarding it down until it reaches a native component.")),(0,o.kt)("p",null,"To make sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"testID"),' is indeed rendered in your app, you can use such tools as "View Hierarchy" for iOS and "Layout Inspector" for Android.'),(0,o.kt)(r.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"IOS"})),(0,o.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"Android"}))))}v.isMDXComponent=!0},28584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/layoutInspector-52b277288c0d9468a30fa4ea8e1e90fb.png"},23022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tagAttributeAndroid-2c0ded43f52dee82ba0f4f928c90385d.png"},62161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessibilityAttributeIOS-ce3eb8cb65b52a1841e30c7987a52d20.png"},83389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/appDelegate-8012a1d99a62b1c3a264d859f6dc7cbd.png"},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/attachToProcess-8a8987add83922ad72f51e8c5c72d0c1.png"},44523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/debugHierarchyButton-502cd7061bac7ed49fda7323e4ec12ab.png"},10301:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/passTestID-11f72c3a0d97eff6a62c5591ae0ea1da.png"},3288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repetitiveComponentTestID-6fffa71a68b1f2015a4e8b96ece1e0e3.png"}}]);