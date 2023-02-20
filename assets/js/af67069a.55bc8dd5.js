"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[486],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),o=a(67294),r=a(86010),i=a(12466),s=a(16550),l=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=l??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(x,(0,n.Z)({key:String(t)},e))}},23128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>h,toc:()=>k});var n=a(87462),o=a(67294),r=a(3905),i=a(74866),s=a(85162),l=a(90814);const u={toc:[]},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Fragment,null,a.debug&&(0,r.kt)("div",null,(0,r.kt)("p",null,"Since this is a debug configuration, you need to have React Native packager running in parallel before you start\nDetox tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n\n> react-native start\n\n#                        #######\n#                   ################\n#                #########     #########\n#            #########             ##########\n#        #########        ######        #########\n#       ##########################################\n#      #####      #####################       #####\n#      #####          ##############          #####\n#      #####    ###       ######       ###    #####\n#      #####    #######            #######    #####\n#      #####    ###########    ###########    #####\n#      #####    ##########################    #####\n#      #####    ##########################    #####\n#      #####      ######################     ######\n#       ######        #############        #######\n#         #########        ####       #########\n#              #########          #########\n#                  ######### #########\n#                       #########\n#\n#\n#                    Welcome to Metro!\n#              Fast - Scalable - Integrated\n")))),(0,r.kt)("p",null,"Now you can run your first test:"),(0,r.kt)(l.Z,{language:"sh",mdxType:"CodeBlock"},"detox test --configuration ",a.configurationName))}c.isMDXComponent=!0;const d={},m="Your First Test",h={unversionedId:"introduction/your-first-test",id:"version-20.x/introduction/your-first-test",title:"Your First Test",description:"The previous articles have addressed the environment and project setup, and now it is time for writing",source:"@site/versioned_docs/version-20.x/introduction/your-first-test.mdx",sourceDirName:"introduction",slug:"/introduction/your-first-test",permalink:"/Detox/docs/introduction/your-first-test",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/introduction/your-first-test.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Setup",permalink:"/Detox/docs/introduction/project-setup"},next:{title:"How to Debug",permalink:"/Detox/docs/introduction/debugging"}},f={},k=[{value:"Writing a test",id:"writing-a-test",level:2},{value:"1. Create a test suite",id:"1-create-a-test-suite",level:3},{value:"2. Launch the application",id:"2-launch-the-application",level:3},{value:"3. Match an element",id:"3-match-an-element",level:3},{value:"4. Perform an action",id:"4-perform-an-action",level:3},{value:"5. Make an assertion",id:"5-make-an-assertion",level:3},{value:"Running tests",id:"running-tests",level:2}],b={toc:k},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-test"},"Your First Test"),(0,r.kt)("p",null,"The previous articles have addressed the environment and project setup, and now it is time for writing\nand running the tests."),(0,r.kt)("p",null,"If you are eager to check first whether your build configuration was correct, you can skip writing a test for now and try ",(0,r.kt)("a",{parentName:"p",href:"#running-tests"},"running tests")," instead, to identify potential ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/troubleshooting/running-tests#no-simulators-found-ios"},"late issues")," caused by incorrect project configuration."),(0,r.kt)("h2",{id:"writing-a-test"},"Writing a test"),(0,r.kt)("p",null,"This subsection shows how to write a test which can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"launch")," the application,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"tap")," on a button,"),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("em",{parentName:"li"},"assert")," that some text appears as a result.")),(0,r.kt)("p",null,"Also, it will familiarize you with commonly used Detox ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions"},"actions"),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect"},"assertions")," and ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers"},"matchers")," along the way."),(0,r.kt)("h3",{id:"1-create-a-test-suite"},"1. Create a test suite"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also duplicate and modify a ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e/starter.test.js")," file that was generated automatically by ",(0,r.kt)("inlineCode",{parentName:"p"},"detox init")," command.")),(0,r.kt)("p",null,"Create a new test file under your ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e")," folder and add a similar test suite skeleton:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="e2e/yourTestName.test.js"',title:'"e2e/yourTestName.test.js"'},"describe('Example', () => {\n  beforeAll(async () => {});\n\n  beforeEach(async () => {});\n\n  it('should test something', async () => {});\n});\n")),(0,r.kt)("h3",{id:"2-launch-the-application"},"2. Launch the application"),(0,r.kt)("p",null,"When your test starts, the application is not running yet. You need to call ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/device#devicelaunchappparams"},(0,r.kt)("inlineCode",{parentName:"a"},"device.launchApp()"))," at least once, e.g. in the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describe('Example', () => {\n  beforeAll(async () => {\n    await device.launchApp();\n  });\n\n  // \u2026\n});\n")),(0,r.kt)("p",null,"If your app supports deep links, you can configure it to ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/guide/mocking-open-with-url"},"start from a specific screen"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is a good idea to start every test from a fresh state, since the preceeding ones might leave your application\nin an unpredictable state if they fail."),(0,r.kt)("p",{parentName:"admonition"},"One way to do it is to launch the app as a new instance in ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook instead:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(async () => {\n  await device.launchApp({ newInstance: true });\n});\n")),(0,r.kt)("p",{parentName:"admonition"},"The other way is to ",(0,r.kt)("em",{parentName:"p"},"reload React Native")," without restarting the app. Like any live reloading, it is apt to cause glitches for more complex apps,\nbut for simpler apps it proves to be a quicker way to reset the state between the tests:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(async () => {\n  await device.reloadReactNative();\n});\n")),(0,r.kt)("p",{parentName:"admonition"},"So, pick your favorite one wisely, on the basis of ",(0,r.kt)("em",{parentName:"p"},"speed")," vs ",(0,r.kt)("em",{parentName:"p"},"stability")," considerations.")),(0,r.kt)("h3",{id:"3-match-an-element"},"3. Match an element"),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers"},"match")," an element you want to interact with."),(0,r.kt)("p",null,"Detox provides many options to match an element ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers#byidid"},(0,r.kt)("inlineCode",{parentName:"a"},"by.id()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers#bylabellabel"},(0,r.kt)("inlineCode",{parentName:"a"},"by.label()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers#bytexttext"},(0,r.kt)("inlineCode",{parentName:"a"},"by.text()"))," and ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers"},"more"),".\nThe most common way to match elements is either by ",(0,r.kt)("em",{parentName:"p"},"id")," or ",(0,r.kt)("em",{parentName:"p"},"text"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"element(by.id('YourTestID')); // recommended\nelement(by.text('Element text'));\n")),(0,r.kt)("admonition",{title:"Best practice",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Try to use ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers#byidid"},(0,r.kt)("inlineCode",{parentName:"a"},"by.id()"))," matcher wherever possible.\n",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/guide/test-id"},"Explore our guide")," to learn how to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," props.")),(0,r.kt)("h3",{id:"4-perform-an-action"},"4. Perform an action"),(0,r.kt)("p",null,"Detox provides many actions on elements such as ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions#tappoint"},(0,r.kt)("inlineCode",{parentName:"a"},"tap()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions#swipedirection-speed-normalizedoffset-normalizedstartingpointx-normalizedstartingpointy"},(0,r.kt)("inlineCode",{parentName:"a"},"swipe()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions#scrolloffset-direction-startpositionx-startpositiony"},(0,r.kt)("inlineCode",{parentName:"a"},"scroll()"))," and ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions#methods"},"other interactions"),"."),(0,r.kt)("p",null,"Let's tap on an element for the sake of the example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('Example', () => {\n  // \u2026\n\n  it('should tap on a button', async () => {\n    await element(by.id('ButtonID')).tap();\n  });\n});\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'You don\'t need to wait or "sleep" after interacting with an element, because Detox already does it for you.\nIt synchronises with your application and waits after each action for all the foreground activities to finish before performing any further step.'),(0,r.kt)("p",{parentName:"admonition"},"While convenient, this feature goes sideways at times, for example, when your app has looping animations causing Detox to wait forever.\nThis is why you sometimes have to tweak your app specifically for Detox tests, and ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/troubleshooting/synchronization"},"there is a special guide")," for that.")),(0,r.kt)("h3",{id:"5-make-an-assertion"},"5. Make an assertion"),(0,r.kt)("p",null,"An essential step of any test is ",(0,r.kt)("em",{parentName:"p"},"making an assertion"),"."),(0,r.kt)("p",null,"Detox provides its own ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," object, so that you can expect from any element ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#toexist"},(0,r.kt)("inlineCode",{parentName:"a"},"toExist()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#tobevisible"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeVisible()")),", ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#tohavetexttext"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveText()"))," and ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#methods"},"more various things"),".\nAll the assertions can be inverted with ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#not"},(0,r.kt)("inlineCode",{parentName:"a"},"not")," property"),"."),(0,r.kt)("p",null,"Let's assert that our text is shown on a screen using ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#tobevisible"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeVisible()"))," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('Example', () => {\n  beforeAll(async () => {\n    await device.launchApp();\n  });\n\n  beforeEach(async () => {\n    await device.reloadReactNative();\n  });\n\n  it('should tap on button by id and expect some text to be visible', async () => {\n    await element(by.id('ButtonID')).tap();\n    await expect(element(by.text('The button has been pressed'))).toBeVisible();\n  });\n});\n")),(0,r.kt)("p",null,"Note that instead of matching by text you can assert a specific text on an element with ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect#tohavetexttext"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveText()")),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await expect(element(by.id('TextAfterButtonPressed'))).toHaveText('Button pressed');\n")),(0,r.kt)("h2",{id:"running-tests"},"Running tests"),(0,r.kt)(i.Z,{groupId:"configurationName",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ios.sim.debug",label:"iOS (Debug)",mdxType:"TabItem"},(0,r.kt)(c,{configurationName:"ios.sim.debug",debug:!0,mdxType:"RunningYourTest"})),(0,r.kt)(s.Z,{value:"ios.sim.release",label:"iOS (Release)",mdxType:"TabItem"},(0,r.kt)(c,{configurationName:"ios.sim.release",mdxType:"RunningYourTest"})),(0,r.kt)(s.Z,{value:"android.emu.debug",label:"Android (Debug)",mdxType:"TabItem"},(0,r.kt)(c,{configurationName:"android.emu.debug",debug:!0,mdxType:"RunningYourTest"})),(0,r.kt)(s.Z,{value:"android.emu.release",label:"Android (Release)",mdxType:"TabItem"},(0,r.kt)(c,{configurationName:"android.emu.release",mdxType:"RunningYourTest"}))),(0,r.kt)("p",null,"If you haven't changed the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e/starter.test.js"),", you are likely to see errors like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," FAIL  e2e/starter.test.js (25.916 s)\n  Example\n    \u2715 should have welcome screen (662 ms)\n    \u2715 should show hello screen after tap (236 ms)\n    \u2715 should show world screen after tap (236 ms)\n\n  \u25cf Example \u203a should have welcome screen\n\n    Test Failed: No elements found for \u201cMATCHER(id == \u201cwelcome\u201d)\u201d\n\n    HINT: To print view hierarchy on failed actions/matches, use log-level verbose or higher.\n\n       9 |\n      10 |   it('should have welcome screen', async () => {\n    > 11 |     await expect(element(by.id('welcome'))).toBeVisible();\n         |                                             ^\n      12 |   });\n      13 |\n      14 |   it('should show hello screen after tap', async () => {\n\n      at Object.toBeVisible (e2e/starter.test.js:11:45)\n\n  \u2026\n")),(0,r.kt)("p",null,"If you have created your own test, and it is failing, examine the error message, check out our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/guide/investigating-test-failure"},"Investigating Failures"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/debugging"},"Debugging")," guides, and run your tests again after you fix the issue."))}y.isMDXComponent=!0}}]);