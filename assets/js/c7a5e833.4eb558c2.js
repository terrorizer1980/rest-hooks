"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50964:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>i,default:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={id:"useresource",title:"useResource()",original_id:"useresource"},o=void 0,l={unversionedId:"api/useresource",id:"version-4.2/api/useresource",isDocsHomePage:!1,title:"useResource()",description:"`typescript",source:"@site/versioned_docs/version-4.2/api/useResource.md",sourceDirName:"api",slug:"/api/useresource",permalink:"/docs/4.2/api/useresource",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResource.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"useresource",title:"useResource()",original_id:"useresource"},sidebar:"version-4.2/docs",previous:{title:"FetchShape",permalink:"/docs/4.2/api/FetchShape"},next:{title:"useFetcher()",permalink:"/docs/4.2/api/useFetcher"}},i=[{value:"Single",id:"single",children:[]},{value:"List",id:"list",children:[]},{value:"Parallel",id:"parallel",children:[]},{value:"Sequential",id:"sequential",children:[]},{value:"Paginated data",id:"paginated-data",children:[]},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[]}],u={toc:i};function c({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource(fetchShape: ReadShape, params: object | null):\n  Denormalize<typeof fetchShape.schema>;\n\nfunction useResource(...[fetchShape: ReadShape, params: object | null]):\n  Denormalize<typeof fetchShape.schema>[];\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params>, params: Params | null): Denormalize<S>;\n\nfunction useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(...[fetchShape: ReadShape<S, Params>, params: Params | null]): Denormalize<S>[];\n")),(0,n.kt)("p",null,"Excellent for retrieving the data you need."),(0,n.kt)("p",null,"Cache policy is ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On first-render",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"or parameters change"),(0,n.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,n.kt)("li",{parentName:"ul"},"or imperative ",(0,n.kt)("a",{parentName:"li",href:"./useInvalidator"},"invalidation")," triggered"))),(0,n.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,n.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,n.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Throws error to be ",(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/network-errors"},"caught")," by ",(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,n.kt)("li",{parentName:"ul"},"While Loading:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/loading-state"},"Suspend rendering")," otherwise")))),(0,n.kt)("h2",{id:"single"},"Single"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detailShape(), { id });\n  // post as PostResource\n}\n")),(0,n.kt)("h2",{id:"list"},"List"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResource(PostResource.listShape(), {});\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"parallel"},"Parallel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResource(\n    [UserResource.detailShape(), { id: userId }],\n    [PostResource.listShape(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"sequential"},"Sequential"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResource(PostResource.detailShape(), { id });\n  // post as PostResource\n  const author = useResource(UserResource.detailShape(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,n.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,n.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.asSchema()], nextPage: '', lastPage: '' },\n    };\n  }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useResource(\n    PaginatedPostResource.listShape(),\n    { page },\n  );\n  // posts as PaginatedPostResource[]\n}\n")),(0,n.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,n.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"detailShape()"),(0,n.kt)("li",{parentName:"ul"},"listShape()")),(0,n.kt)("p",null,"Feel free to add your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.2/api/FetchShape"},"FetchShape")," as well."))}c.isMDXComponent=!0}}]);