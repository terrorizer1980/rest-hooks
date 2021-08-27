"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76394],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(k,o(o({ref:r},l),{},{components:t})):n.createElement(k,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67143:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={title:"makeRestProvider()",id:"makeRestProvider",original_id:"makeRestProvider"},o=void 0,s={unversionedId:"api/makeRestProvider",id:"version-3.0/api/makeRestProvider",isDocsHomePage:!1,title:"makeRestProvider()",description:"`typescript",source:"@site/versioned_docs/version-3.0/api/makeRestProvider.md",sourceDirName:"api",slug:"/api/makeRestProvider",permalink:"/docs/3.0/api/makeRestProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/makeRestProvider.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"makeRestProvider()",id:"makeRestProvider",original_id:"makeRestProvider"}},c=[{value:"Arguments",id:"arguments",children:[{value:"manager",id:"manager",children:[]},{value:"subscriptionManager",id:"subscriptionmanager",children:[]},{value:"initialState",id:"initialstate",children:[]}]},{value:"Returns",id:"returns",children:[]}],p=(l="RestProvider",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const d={toc:c};function u({components:e,...r}){return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeRestProvider: (\n  manager: NetworkManager,\n  subscriptionManager: SubscriptionManager<any>,\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,a.kt)("p",null,"Used to build a ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/RestProvider"},"\\",(0,a.kt)(p,{mdxType:"RestProvider"}))," for ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"manager"},"manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/NetworkManager"},"NetworkManager")),(0,a.kt)("h3",{id:"subscriptionmanager"},"subscriptionManager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/SubscriptionManager"},"SubscriptionManager")),(0,a.kt)("h3",{id:"initialstate"},"initialState"),(0,a.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeRestProvider(manager, subscriptionManager);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}u.isMDXComponent=!0}}]);