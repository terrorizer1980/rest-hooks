/*! For license information please see 452810d3.7393dcf9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54570],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var s,o,l=a(e),p=1;p<arguments.length;p++){for(var u in s=Object(arguments[p]))n.call(s,u)&&(l[u]=s[u]);if(t){o=t(s);for(var c=0;c<o.length;c++)r.call(s,o[c])&&(l[o[c]]=s[o[c]])}}return l}},41535:(e,t,n)=>{var r=n(62525),a=60103,i=60106;var s=60109,o=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),i=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),s=c("react.provider"),o=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),c("react.suspense_list"),p=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function k(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var b=g.prototype=new y;b.constructor=g,r(b,k.prototype),b.isPureReactComponent=!0;var v=Array.isArray,N=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,r)&&!R.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function q(e,t,n,r,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return s=s(l=e),e=""===r?"."+I(l,0):r,v(s)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),q(s,t,n,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",v(e))for(var p=0;p<e.length;p++){var u=r+I(o=e[p],p);l+=q(o,t,n,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),p=0;!(o=e.next()).done;)l+=q(o=o.value,t,n,u=r+I(o,p++),s);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function j(e,t,n){if(null==e)return e;var r=[],a=0;return q(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},S={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(79443);const i=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const p=37,u=39;const c=function(e){const{lazy:t,block:n,defaultValue:a,values:c,groupId:d,className:h}=e,{tabGroupChoices:m,setTabGroupChoices:f}=i(),[k,y]=(0,r.useState)(a),g=r.Children.toArray(e.children),b=[];if(null!=d){const e=m[d];null!=e&&e!==k&&c.some((t=>t.value===e))&&y(e)}const v=e=>{const t=e.currentTarget,n=b.indexOf(t),r=c[n].value;y(r),null!=d&&(f(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:s}=window;return t>=0&&a<=s&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case p:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},c.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":k===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(55064),a=n(58215),i=n(67294);function s({children:e}){return i.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(a.Z,{value:"ts"},e[0]),i.createElement(a.Z,{value:"js"},e[1]))}},64820:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>p,default:()=>c});var r=n(87462),a=(n(27378),n(3905)),i=n(70523);const s={id:"resource",title:"Resource"},o=void 0,l={unversionedId:"api/resource",id:"api/resource",isDocsHomePage:!1,title:"Resource",description:"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.",source:"@site/../docs/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/next/api/resource",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/Resource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"resource",title:"Resource"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/next/api/Endpoint"},next:{title:"Index",permalink:"/docs/next/api/Index"}},p=[{value:"Static",id:"static",children:[]},{value:"Instance",id:"instance",children:[]},{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof Resource&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[]}]},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",children:[{value:"pk: (parent?: any, key?: string) =&gt; string",id:"pk-parent-any-key-string--string",children:[]},{value:"static urlRoot: string",id:"static-urlroot-string",children:[]},{value:"static get key(): string",id:"static-get-key-string",children:[]}]},{value:"Static network methods and properties",id:"static-network-methods-and-properties",children:[{value:"static url&lt;T extends typeof Resource&gt;(urlParams: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;) =&gt; string",id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string",children:[]},{value:"static listUrl(searchParams: Readonly&lt;Record&lt;string, string&gt;&gt;) =&gt; string",id:"static-listurlsearchparams-readonlyrecordstring-string--string",children:[]},{value:"static fetch(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;any&gt;",id:"static-fetchinput-requestinfo-init-requestinit--promiseany",children:[]},{value:"static fetchResponse(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;Response&gt;",id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse",children:[]},{value:"static useFetchInit(init: RequestInit): RequestInit",id:"static-usefetchinitinit-requestinit-requestinit",children:[]},{value:"static getFetchInit(init: RequestInit): RequestInit",id:"static-getfetchinitinit-requestinit-requestinit",children:[]},{value:"static getEndpointExtra() =&gt; EndpointExtraOptions | undefined",id:"static-getendpointextra--endpointextraoptions--undefined",children:[]}]},{value:"Endpoints",id:"endpoints",children:[{value:"detail(): Endpoint",id:"detail-endpoint",children:[]},{value:"list(): Endpoint",id:"list-endpoint",children:[]},{value:"create(): Endpoint",id:"create-endpoint",children:[]},{value:"update(): Endpoint",id:"update-endpoint",children:[]},{value:"partialUpdate(): Endpoint",id:"partialupdate-endpoint",children:[]},{value:"delete(): Endpoint",id:"delete-endpoint",children:[]}]}],u={toc:p};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," is an ",(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entity")," with multiple ",(0,a.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse."),(0,a.kt)("p",null,"For other patterns, feel free to use ",(0,a.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s on their own or in any other way you see fit."),(0,a.kt)(i.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entity")),(0,a.kt)("p",null,"Package: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("p",null,"There are two sides to ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," definition - the static and instance side."),(0,a.kt)("h3",{id:"static"},"Static"),(0,a.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint"),"s, which\ntell the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useresource"},"hooks")," how to process requests. Endpoints are provided for the\ncommon ",(0,a.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,a.kt)("p",null,"Resource extends from ",(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entity"),", which includes many static methods defining how to process\nnetwork data to ensure performance and consistency. ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"Deserilization"),"\nfor instance can be done using the ",(0,a.kt)("a",{parentName:"p",href:"./Entity#static-schema--k-keyof-this-schema-"},"static schema"),"."),(0,a.kt)("h3",{id:"instance"},"Instance"),(0,a.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as all the data members\nare immutable (this library enforces that)!"),(0,a.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,a.kt)("p",null,"A final note: ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,a.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,a.kt)("h2",{id:"factory-method"},"Factory method"),(0,a.kt)("h3",{id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof Resource",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,a.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,a.kt)("p",null,"This is used to create new entities when normalizing data. These are stored in the entities cache."),(0,a.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,a.kt)("h3",{id:"pk-parent-any-key-string--string"},"pk: (parent?: any, key?: string) => string"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,a.kt)("p",null,"PK stands for ",(0,a.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,a.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk(parent?: any, key?: string) {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,a.kt)("h4",{id:"undefined-value"},"undefined value"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,a.kt)("a",{parentName:"p",href:"./api/resource#static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Resource.fromJS()"),"\ndirectly. If ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,a.kt)("h4",{id:"other-uses"},"Other uses"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,a.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,a.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,a.kt)("h3",{id:"static-urlroot-string"},"static urlRoot: string"),(0,a.kt)("p",null,"Used to build url patterns in ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,a.kt)("a",{parentName:"p",href:"#static-get-key-string"},"key")," so typically you'll want this to be globally unique per Resource."),(0,a.kt)("h3",{id:"static-get-key-string"},"static get key(): string"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,a.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic get key(): string {\n  return this.urlRoot;\n}\n")),(0,a.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,a.kt)("p",null,"These are the basic building blocks used to compile the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," below."),(0,a.kt)("h3",{id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"static url\\<T extends typeof Resource",">","(urlParams: Partial\\<AbstractInstanceType\\<T",">",">",") => string"),(0,a.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,a.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,a.kt)("p",null,"Used in ",(0,a.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),", ",(0,a.kt)("a",{parentName:"p",href:"#update-endpoint"},"update()"),",\n",(0,a.kt)("a",{parentName:"p",href:"#partialupdate-endpoint"},"partialUpdate()"),", and ",(0,a.kt)("a",{parentName:"p",href:"#delete-endpoint"},"delete()")),(0,a.kt)("h3",{id:"static-listurlsearchparams-readonlyrecordstring-string--string"},"static listUrl(searchParams: Readonly\\<Record\\<string, string>>) => string"),(0,a.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,a.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,a.kt)("p",null,"Used in ",(0,a.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()")," and ",(0,a.kt)("a",{parentName:"p",href:"#create-endpoint"},"create()")),(0,a.kt)("h3",{id:"static-fetchinput-requestinfo-init-requestinit--promiseany"},"static fetch(input: RequestInfo, init: RequestInit) => Promise\\<any",">"),(0,a.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,a.kt)("h3",{id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse"},"static fetchResponse(input: RequestInfo, init: RequestInit) => Promise\\<Response",">"),(0,a.kt)("p",null,"Used in ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,a.kt)("h3",{id:"static-usefetchinitinit-requestinit-requestinit"},"static useFetchInit(init: RequestInit): RequestInit"),(0,a.kt)("p",null,"Allows simple overrides to extend ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called in endpoint methods (",(0,a.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()"),", ",(0,a.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),"), which allows for hooks that\nuse React context."),(0,a.kt)("p",null,"This is often useful for ",(0,a.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,a.kt)("h3",{id:"static-getfetchinitinit-requestinit-requestinit"},"static getFetchInit(init: RequestInit): RequestInit"),(0,a.kt)("p",null,"Allows simple overrides to extend ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called during the fetch callback. Don't use hooks here."),(0,a.kt)("p",null,"This is often useful for ",(0,a.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,a.kt)("h3",{id:"static-getendpointextra--endpointextraoptions--undefined"},"static getEndpointExtra() => EndpointExtraOptions | undefined"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#dataexpirylength-number"},"Returns")," the default request options for this resource. By default this returns undefined"),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"These provide the standard ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"endpoints"),"s common in ",(0,a.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,a.kt)("h3",{id:"detail-endpoint"},"detail(): Endpoint"),(0,a.kt)("p",null,"A GET request using standard ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uses ",(0,a.kt)("a",{parentName:"li",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,a.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,a.kt)("h4",{id:"implementation"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static detail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,a.kt)("h3",{id:"list-endpoint"},"list(): Endpoint"),(0,a.kt)("p",null,"A GET request using ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uses ",(0,a.kt)("a",{parentName:"li",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,a.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,a.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static list<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,a.kt)("h3",{id:"create-endpoint"},"create(): Endpoint"),(0,a.kt)("p",null,"A POST request sending a payload to ",(0,a.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,a.kt)("p",null,"Not compatible with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/useRetrieve"},"useRetrieve()"))),(0,a.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static create<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,a.kt)("h3",{id:"update-endpoint"},"update(): Endpoint"),(0,a.kt)("p",null,"A PUT request sending a payload to a ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,a.kt)("p",null,"Not compatible with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/useRetrieve"},"useRetrieve()"))),(0,a.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static update<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,a.kt)("h3",{id:"partialupdate-endpoint"},"partialUpdate(): Endpoint"),(0,a.kt)("p",null,"A PATCH request sending a partial payload to ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,a.kt)("p",null,"Not compatible with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/useRetrieve"},"useRetrieve()"))),(0,a.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static partialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,a.kt)("h3",{id:"delete-endpoint"},"delete(): Endpoint"),(0,a.kt)("p",null,"A DELETE request sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,a.kt)("p",null,"Not compatible with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/useRetrieve"},"useRetrieve()"))),(0,a.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static delete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}c.isMDXComponent=!0},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);