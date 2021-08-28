"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return r?a.createElement(m,o(o({ref:t},i),{},{components:r})):a.createElement(m,o({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75206:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={id:"useresourcelegacy",title:"useResourceLegacy()",original_id:"useresourcelegacy"},o=void 0,l={unversionedId:"api/useresourcelegacy",id:"version-4.0/api/useresourcelegacy",isDocsHomePage:!1,title:"useResourceLegacy()",description:"`typescript",source:"@site/versioned_docs/version-4.0/api/useResourceLegacy.md",sourceDirName:"api",slug:"/api/useresourcelegacy",permalink:"/docs/4.0/api/useresourcelegacy",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResourceLegacy.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"useresourcelegacy",title:"useResourceLegacy()",original_id:"useresourcelegacy"}},c=[{value:"Single",id:"single",children:[]},{value:"List",id:"list",children:[]},{value:"Parallel",id:"parallel",children:[]},{value:"Sequential",id:"sequential",children:[]},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[]}],u={toc:c};function i({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceLegacy(fetchShape: ReadShape, params: object | null):\n  SchemaOf<typeof fetchShape.schema>;\n\nfunction useResourceLegacy(...[fetchShape: ReadShape, params: object | null]):\n  SchemaOf<typeof fetchShape.schema>[];\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceLegacy<\n  Params extends Readonly<object>,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params>, params: Params | null): SchemaOf<S>;\n\nfunction useResourceLegacy<\n  Params extends Readonly<object>,\n  S extends Schema\n>(...[fetchShape: ReadShape<S, Params>, params: Params | null]): SchemaOf<S>[];\n")),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"rest-hooks-31---removal"},"Rest Hooks 3.1 - Removal"),(0,n.kt)("p",{parentName:"blockquote"},"This hook is deprecated in favor of ",(0,n.kt)("a",{parentName:"p",href:"./useresource"},"useResource()")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"3.1 will remove ",(0,n.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")))),(0,n.kt)("p",null,"Excellent for retrieving the data you need."),(0,n.kt)("p",null,"Cache policy is ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On first-render and when parameters change"),(0,n.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,n.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,n.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Throws error to be ",(0,n.kt)("a",{parentName:"li",href:"/docs/4.0/guides/network-errors"},"caught")," by ",(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,n.kt)("li",{parentName:"ul"},"While Loading:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.0/guides/loading-state"},"Suspend rendering")," otherwise")))),(0,n.kt)("h2",{id:"single"},"Single"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResourceLegacy(PostResource.detailShape(), { id });\n  // post as PostResource\n}\n")),(0,n.kt)("h2",{id:"list"},"List"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResourceLegacy(PostResource.listShape(), {});\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"parallel"},"Parallel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResourceLegacy(\n    [UserResource.detailShape(), { id: userId }],\n    [PostResource.listShape(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"sequential"},"Sequential"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResourceLegacy(PostResource.detailShape(), { id });\n  // post as PostResource\n  const author = useResourceLegacy(UserResource.detailShape(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,n.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,n.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/4.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"detailShape()"),(0,n.kt)("li",{parentName:"ul"},"listShape()")),(0,n.kt)("p",null,"Feel free to add your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.0/api/FetchShape"},"FetchShape")," as well."))}i.isMDXComponent=!0}}]);