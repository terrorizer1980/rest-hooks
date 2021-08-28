"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95257:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>s,toc:()=>i,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"useResultCache()",id:"useResultCache",original_id:"useResultCache"},o=void 0,s={unversionedId:"api/useResultCache",id:"version-4.1/api/useResultCache",isDocsHomePage:!1,title:"useResultCache()",description:"`typescript",source:"@site/versioned_docs/version-4.1/api/useResultCache.md",sourceDirName:"api",slug:"/api/useResultCache",permalink:"/docs/4.1/api/useResultCache",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResultCache.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"useResultCache()",id:"useResultCache",original_id:"useResultCache"}},i=[{value:"Example",id:"example",children:[]},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[]}],u={toc:i};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResultCache(\n  fetchShape: ReadShape,\n  params: object | null,\n  defaults?: object,\n): typeof defaults;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResultCache<Params extends Readonly<object>, D extends object>(\n  { getFetchKey, fetch }: ReadShape<any, Params, any>,\n  params: Params | null,\n  defaults?: D,\n): D extends undefined\n  ? Resolved<ReturnType<typeof fetch>> | null\n  : Readonly<D>;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30---deprecation"},"Rest Hooks 3.0 - Deprecation"),(0,r.kt)("p",{parentName:"blockquote"},"This hook is being deprecated in favor of ",(0,r.kt)("a",{parentName:"p",href:"./useCacheNew"},"useCacheNew()")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"3.0 ",(0,r.kt)("inlineCode",{parentName:"li"},"useCacheNew()")," will be renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"useCache()")),(0,r.kt)("li",{parentName:"ul"},"3.1 will remove ",(0,r.kt)("inlineCode",{parentName:"li"},"useResultCache()")))),(0,r.kt)("p",null,"Excellent to use with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/guides/pagination"},"pagination")," or any other extra (non-entity) data in results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," if provided"),(0,r.kt)("li",{parentName:"ul"},"null otherwise"))),(0,r.kt)("li",{parentName:"ul"},"While loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," if provided"),(0,r.kt)("li",{parentName:"ul"},"null otherwise")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"By sending defaults we can destructure the values even if the results don't exist."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostList() {\n  const { prevPage, nextPage } = useResultCache(\n    PaginatedResource.listShape(),\n    {},\n    { prevPage: '', nextPage: '' },\n  );\n  // ...render stuff here\n}\n")),(0,r.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"listShape()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape"},"FetchShape")," as well."))}p.isMDXComponent=!0}}]);