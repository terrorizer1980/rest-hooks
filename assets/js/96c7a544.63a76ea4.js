/*! For license information please see 96c7a544.63a76ea4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42251],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,l=a(e),u=1;u<arguments.length;u++){for(var c in s=Object(arguments[u]))n.call(s,c)&&(l[c]=s[c]);if(t){i=t(s);for(var p=0;p<i.length;p++)r.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},41535:(e,t,n)=>{var r=n(62525),a=60103,o=60106;var s=60109,i=60110,l=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var v=b.prototype=new g;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var k=Array.isArray,N=Object.prototype.hasOwnProperty,w={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return s=s(l=e),e=""===r?"."+x(l,0):r,k(s)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),S(s,t,n,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var c=r+x(i=e[u],u);l+=S(i,t,n,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(i=e.next()).done;)l+=S(i=i.value,t,n,c=r+x(i,u++),s);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},C={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const u=37,c=39;const p=function(e){const{lazy:t,block:n,defaultValue:a,values:p,groupId:d,className:f}=e,{tabGroupChoices:m,setTabGroupChoices:h}=o(),[y,g]=(0,r.useState)(a),b=r.Children.toArray(e.children),v=[];if(null!=d){const e=m[d];null!=e&&e!==y&&p.some((t=>t.value===e))&&g(e)}const k=e=>{const t=e.currentTarget,n=v.indexOf(t),r=p[n].value;g(r),null!=d&&(h(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&a<=s&&r<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case c:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case u:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},f)},p.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:k,onClick:k},t)))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(55064),a=n(58215),o=n(67294);function s({children:e}){return o.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},e[0]),o.createElement(a.Z,{value:"generics"},e[1]))}},31155:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=n(11048);const s={id:"useresource",title:"useResource()"},i=void 0,l={unversionedId:"api/useresource",id:"api/useresource",isDocsHomePage:!1,title:"useResource()",description:"`typescript",source:"@site/../docs/api/useResource.md",sourceDirName:"api",slug:"/api/useresource",permalink:"/docs/next/api/useresource",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/useResource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"useresource",title:"useResource()"},sidebar:"docs",previous:{title:"Types",permalink:"/docs/next/api/types"},next:{title:"useFetcher()",permalink:"/docs/next/api/useFetcher"}},u=[{value:"Single",id:"single",children:[]},{value:"List",id:"list",children:[]},{value:"Parallel",id:"parallel",children:[]},{value:"Sequential",id:"sequential",children:[]},{value:"Paginated data",id:"paginated-data",children:[]},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",children:[]}],c={toc:u};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource(endpoint: ReadEndpoint, params: object | null):\n  Denormalize<typeof endpoint.schema>;\n\nfunction useResource(...[endpoint: ReadEndpoint, params: object | null]):\n  Denormalize<typeof endpoint.schema>[];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null): Denormalize<S>;\n\nfunction useResource<\n  Params extends Readonly<object>,\n  S extends Schema\n>(...[endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null]): Denormalize<S>[];\n"))),(0,a.kt)("p",null,"Excellent for retrieving the data you need."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResource()")," ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"suspends")," rendering until the data is available. This is much like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,a.kt)("p",null,"Cache policy is ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"./useInvalidator"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Throws error to be ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"caught")," by ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,a.kt)("li",{parentName:"ul"},"While Loading:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,a.kt)("a",{parentName:"li",href:"./useInvalidator"},"invalidation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"Suspend rendering")," otherwise")))),(0,a.kt)("h2",{id:"single"},"Single"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResource(PostResource.list(), {});\n  // posts as PostResource[]\n}\n")),(0,a.kt)("h2",{id:"parallel"},"Parallel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResource(\n    [UserResource.detail(), { id: userId }],\n    [PostResource.list(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,a.kt)("h2",{id:"sequential"},"Sequential"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResource(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useResource(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,a.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,a.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useResource(\n    PaginatedPostResource.list(),\n    { page },\n  );\n  // posts as PaginatedPostResource[]\n}\n")),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," as well."))}p.isMDXComponent=!0},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);