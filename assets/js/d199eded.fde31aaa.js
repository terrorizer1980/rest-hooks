"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29117:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>s,default:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={id:"installation",title:"Installation",original_id:"installation",slug:"/"},l=void 0,i={unversionedId:"getting-started/installation",id:"version-3.0/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Rest Hooks is a library for fetching structured data in a performant way with no boilerplate.",source:"@site/versioned_docs/version-3.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/3.0/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"installation",title:"Installation",original_id:"installation",slug:"/"},sidebar:"version-3.0/docs",next:{title:"Usage",permalink:"/docs/3.0/getting-started/usage"}},s=[{value:"Install rest-hooks",id:"install-rest-hooks",children:[]},{value:"Include polyfill (optional IE support)",id:"include-polyfill-optional-ie-support",children:[]},{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",children:[]},{value:"Add Suspense and ErrorBoundary",id:"add-suspense-and-errorboundary",children:[]}],p={toc:s};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is a library for fetching structured data in a performant way with no boilerplate."),(0,a.kt)("p",null,"Its interface is declarative and minimal. A small structure declaration is all that is needed\nfor Rest Hooks to perform numerous fetching and caching optimizations while providing predictable,\nprecisely-typed data to consume."),(0,a.kt)("p",null,"Structured data means data composed of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Objects"),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Associative_array"},"maps"),")\nand ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Arrays"),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_(abstract_data_type)"},"lists"),"), as opposed media\nlike images and videos. This makes it great for API calls regardless of form (",(0,a.kt)("a",{parentName:"p",href:"https://restfulapi.net/"},"REST-like"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),", ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),"), serialization (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON"),", ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML"),"),\nor transport (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP"),", ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", ",(0,a.kt)("a",{parentName:"p",href:"../guides/mocking-unfinished"},"local"),")."),(0,a.kt)("h2",{id:"install-rest-hooks"},"Install rest-hooks"),(0,a.kt)("p",null,"Install the rest-hooks package into your project using ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"yarn")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add rest-hooks\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install rest-hooks\n")),(0,a.kt)("h2",{id:"include-polyfill-optional-ie-support"},"Include polyfill (optional IE support)"),(0,a.kt)("p",null,"Rest-hooks is built to be compatible with old browsers, but assumes polyfills will\nalready be loaded. If you want to support old browsers like Internet Explorer, you'll\nneed to install core-js and import it at the entry point of your bundle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add core-js\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install core-js\n")),(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\n// place the above line at top\n")),(0,a.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,a.kt)("h4",{id:"indextsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body\n);\n")),(0,a.kt)("p",null,"Alternatively ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/guides/redux"},"integrate state with redux")),(0,a.kt)("h2",{id:"add-suspense-and-errorboundary"},"Add Suspense and ErrorBoundary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2018/11/13/react-conf-recap.html"},"Suspense")," will show a fallback while content is loading."),(0,a.kt)("p",null,"Put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," component around the point where you want the fallback to be shown.\nAny usage of the hooks will need to be below this point in the tree."),(0,a.kt)("p",null,"Feel free to hook up multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," points if you want to show loaders at different\npoints in your application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/NetworkErrorBoundary"},(0,a.kt)("inlineCode",{parentName:"a"},"<NetworkErrorBoundary/>"))," will handle fallbacks upon any network errors."),(0,a.kt)("h4",{id:"apptsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"App.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nconst App = () => (\n  <div>\n    <h1>Main Title</h1>\n    <Nav />\n    <Suspense fallback={<Spinner />}>\n      <NetworkErrorBoundary>\n        <Routes />\n      </NetworkErrorBoundary>\n    </Suspense>\n  </div>\n);\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../guides/loading-state"},"More about loading state")))}d.isMDXComponent=!0}}]);