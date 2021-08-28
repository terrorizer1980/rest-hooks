"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[456],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8322:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>c,toc:()=>l,default:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"makeExternalCacheProvider()",id:"makeExternalCacheProvider",original_id:"makeExternalCacheProvider"},i=void 0,c={unversionedId:"api/makeExternalCacheProvider",id:"version-4.5/api/makeExternalCacheProvider",isDocsHomePage:!1,title:"makeExternalCacheProvider()",description:"`typescript",source:"@site/versioned_docs/version-4.5/api/makeExternalCacheProvider.md",sourceDirName:"api",slug:"/api/makeExternalCacheProvider",permalink:"/docs/4.5/api/makeExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeExternalCacheProvider.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"makeExternalCacheProvider()",id:"makeExternalCacheProvider",original_id:"makeExternalCacheProvider"},sidebar:"version-4.5/docs",previous:{title:"makeCacheProvider()",permalink:"/docs/4.5/api/makeCacheProvider"}},l=[{value:"Arguments",id:"arguments",children:[{value:"managers",id:"managers",children:[]},{value:"initialState",id:"initialstate",children:[]}]},{value:"Returns",id:"returns",children:[]}],s=(p="ExternalCacheProvider",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:l};function u({components:e,...r}){return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeExternalCacheProvider: (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,a.kt)("p",null,"Used to build a ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.5/api/ExternalCacheProvider"},"\\",(0,a.kt)(s,{mdxType:"ExternalCacheProvider"}))," for ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.5/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,a.kt)("p",null,"Internally constructs a redux store attaching the middlwares."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"managers"},"managers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/4.5/api/Manager"},"Manager")),(0,a.kt)("h3",{id:"initialstate"},"initialState"),(0,a.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeExternalCacheProvider([manager, subscriptionManager]);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}u.isMDXComponent=!0}}]);