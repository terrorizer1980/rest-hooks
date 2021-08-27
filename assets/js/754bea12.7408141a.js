"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61728:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"mockInitialState()"},i=void 0,s={unversionedId:"api/mockInitialState",id:"version-2.2/api/mockInitialState",isDocsHomePage:!1,title:"mockInitialState()",description:"`typescript",source:"@site/versioned_docs/version-2.2/api/mockInitialState.md",sourceDirName:"api",slug:"/api/mockInitialState",permalink:"/docs/2.2/api/mockInitialState",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/mockInitialState.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"mockInitialState()"}},c=[{value:"Arguments",id:"arguments",children:[{value:"results",id:"results",children:[]}]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=p("MockResolver"),u=p("CacheProvider"),m={toc:c};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function mockInitialState(results: Fixture[]): State;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mockInitialState()")," makes it easy to construct prefill the cache with fixtures. It's\nused in ",(0,a.kt)("a",{parentName:"p",href:"./MockResolver"},"\\",(0,a.kt)(l,{mdxType:"MockResolver"}))," to process the results prop. However, this\ncan also be useful to send into a normal provider when testing more complete flows\nthat need to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatches")," (and thus fetch)."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"results"},"results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SuccessFixture {\n  request: ReadShape<Schema, object>;\n  params: object;\n  result: object | string | number;\n  error?: false;\n}\n\nexport interface ErrorFixture {\n  request: ReadShape<Schema, object>;\n  params: object;\n  result: Error;\n  error: true;\n}\n\nexport type Fixture = SuccessFixture | ErrorFixture;\n")),(0,a.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/2.2/api/Endpoint"},"Endpoint")," and params. ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"State\n")),(0,a.kt)("p",null,"This can be used as the initialState prop for ",(0,a.kt)("a",{parentName:"p",href:"./CacheProvider"},"\\",(0,a.kt)(u,{mdxType:"CacheProvider"}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CacheProvider } from 'rest-hooks';\nimport { mockInitialState } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    request: ArticleResource.list(),\n    params: { maxResults: 10 },\n    result: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n];\n\n<CacheProvider initialState={mockInitialState(results)}>\n  <MyComponentToTest />\n</CacheProvider>\n")))}d.isMDXComponent=!0}}]);