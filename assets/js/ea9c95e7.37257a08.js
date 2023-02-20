"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),p=i,f=g["".concat(l,".").concat(p)]||g[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a="Investigating Failures",s={unversionedId:"guide/investigating-test-failure",id:"guide/investigating-test-failure",title:"Investigating Failures",description:"There are a few tricks and tools that can help you to understand the reason for test failures, even before you resort to debugging.",source:"@site/../docs/guide/investigating-test-failure.mdx",sourceDirName:"guide",slug:"/guide/investigating-test-failure",permalink:"/Detox/docs/next/guide/investigating-test-failure",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/investigating-test-failure.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Preparing for CI",permalink:"/Detox/docs/next/introduction/preparing-for-ci"},next:{title:"Adding testID to your components",permalink:"/Detox/docs/next/guide/test-id"}},l={},u=[{value:"Using Detox test artifacts",id:"using-detox-test-artifacts",level:2},{value:"Switch to verbose log levels",id:"switch-to-verbose-log-levels",level:2},{value:"Missing elements",id:"missing-elements",level:2},{value:"More recipes",id:"more-recipes",level:2},{value:"Debugging",id:"debugging",level:2}],c={toc:u},g="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"investigating-failures"},"Investigating Failures"),(0,i.kt)("p",null,"There are a few tricks and tools that can help you to understand the reason for test failures, even before you resort to debugging."),(0,i.kt)("h2",{id:"using-detox-test-artifacts"},"Using Detox test artifacts"),(0,i.kt)("p",null,"Artifacts are very powerful tool to understand your test failure, you can easily make a screenshot, video or even hierarchy of your app under test,\ne.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox test -c <configuration> --take-screenshots failing --record-videos failing\n")),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/artifacts"},"configuration")," of Detox test artifacts and available ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/test"},"CLI options"),"."),(0,i.kt)("h2",{id:"switch-to-verbose-log-levels"},"Switch to verbose log levels"),(0,i.kt)("p",null,"You can get detailed information about the test execution if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"trace")," log level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox test -c <configuration> -l trace\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In most cases we recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," log level to understand the failed test better.")),(0,i.kt)("h2",{id:"missing-elements"},"Missing elements"),(0,i.kt)("p",null,"If your tests are failing due to non-existent or invisible elements, you can ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/test-id#find-your-testid"},"inspect the native view hierarchy")," to understand better the failure reason."),(0,i.kt)("h2",{id:"more-recipes"},"More recipes"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/running-tests"},"Dealing With Problems With Running Tests")," guide for more recipes."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"If debugging still seems a viable option, please follow our ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/debugging"},"debugging guide"),"."))}d.isMDXComponent=!0}}]);