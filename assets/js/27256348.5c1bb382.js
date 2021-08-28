"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(a),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||s;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38254:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={id:"resource",title:"Resource",original_id:"resource"},i=void 0,o={unversionedId:"api/resource",id:"version-4.0/api/resource",isDocsHomePage:!1,title:"Resource",description:"`typescript",source:"@site/versioned_docs/version-4.0/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/4.0/api/resource",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Resource.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"resource",title:"Resource",original_id:"resource"},sidebar:"version-4.0/docs",previous:{title:"API Reference",permalink:"/docs/4.0/api/README"},next:{title:"SimpleRecord",permalink:"/docs/4.0/api/SimpleRecord"}},p=[{value:"Static",id:"static",children:[]},{value:"Instance",id:"instance",children:[]},{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof Resource&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[]}]},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",children:[{value:"pk: () =&gt; string | number | undefined",id:"pk---string--number--undefined",children:[]},{value:"static urlRoot: string",id:"static-urlroot-string",children:[]},{value:"static getKey()",id:"static-getkey",children:[]}]},{value:"Static network methods and properties",id:"static-network-methods-and-properties",children:[{value:"static url&lt;T extends typeof Resource&gt;(urlParams: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;) =&gt; string",id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string",children:[]},{value:"static listUrl(searchParams: Readonly&lt;Record&lt;string, string&gt;&gt;) =&gt; string",id:"static-listurlsearchparams-readonlyrecordstring-string--string",children:[]},{value:"static fetch(method: &quot;get&quot; | &quot;post&quot; | &quot;put&quot; | &quot;patch&quot; | &quot;delete&quot; | &quot;options&quot;, url: string, body?: Readonly&lt;object | string&gt;) =&gt; Promise&lt;any&gt;",id:"static-fetchmethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseany",children:[]},{value:"static fetchResponse(method: &quot;get&quot; | &quot;post&quot; | &quot;put&quot; | &quot;patch&quot; | &quot;delete&quot; | &quot;options&quot;, url: string, body?: Readonly&lt;object | string&gt;) =&gt; Promise&lt;Response&gt;",id:"static-fetchresponsemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseresponse",children:[]},{value:"static getEntitySchema() =&gt; schema.Entity",id:"static-getentityschema--schemaentity",children:[]},{value:"static getFetchOptions() =&gt; FetchOptions | undefined",id:"static-getfetchoptions--fetchoptions--undefined",children:[]}]},{value:"Fetch shapes",id:"fetch-shapes",children:[{value:"detailShape(): ReadShape",id:"detailshape-readshape",children:[]},{value:"listShape(): ReadShape",id:"listshape-readshape",children:[]},{value:"createShape(): MutateShape",id:"createshape-mutateshape",children:[]},{value:"updateShape(): MutateShape",id:"updateshape-mutateshape",children:[]},{value:"partialUpdateShape(): MutateShape",id:"partialupdateshape-mutateshape",children:[]},{value:"deleteShape(): DeleteShape",id:"deleteshape-deleteshape",children:[]}]}],l={toc:p};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  +id: ?number = undefined;\n  +title: string = '';\n  +content: string = '';\n  +author: ?number = null;\n  +tags: string[] = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is an abstract class that will help you define the data you are working with. There are\ntwo sides to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," - the static and instance side."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,r.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord")),(0,r.kt)("h3",{id:"static"},"Static"),(0,r.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/FetchShape"},"FetchShapes"),", which\ntell the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useresource"},"hooks")," how to process requests. Shapes are provided for the\ncommon ",(0,r.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as you\nshould be treating all your data as immutable (this library assumes that)!"),(0,r.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,r.kt)("p",null,"A final note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof Resource",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,r.kt)("p",null,"This is used to create instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction, among other things. ",(0,r.kt)("em",{parentName:"p"},"Be sure to always call ",(0,r.kt)("inlineCode",{parentName:"em"},"super.fromJS()")," when\noverriding.")),(0,r.kt)("p",null,"Can be useful to override to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"Deserialize fields")),(0,r.kt)("li",{parentName:"ul"},"Add runtime field validation")),(0,r.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,r.kt)("h3",{id:"pk---string--number--undefined"},"pk: () => string | number | undefined"),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"./api/resource#static-fromjs-t-extends-typeof-resource-this-t-props-partial-abstractinstancetype-t-abstractinstancetype-t"},"Resource.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,r.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,r.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"static-urlroot-string"},"static urlRoot: string"),(0,r.kt)("p",null,"Used to build url patterns in ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,r.kt)("inlineCode",{parentName:"p"},"getKey()")," so typically you'll want this to be globally unique per Resource."),(0,r.kt)("h3",{id:"static-getkey"},"static getKey()"),(0,r.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic getKey<T extends typeof Resource>(this: T) {\n  return this.urlRoot;\n}\n")),(0,r.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,r.kt)("p",null,"These are the basic building blocks used to compile the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/FetchShape"},"Fetch shapes")," below."),(0,r.kt)("h3",{id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"static url\\<T extends typeof Resource",">","(urlParams: Partial<AbstractInstanceType\\<T",">",">",") => string"),(0,r.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,r.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#detailshape-readshape"},"detailShape()"),", ",(0,r.kt)("a",{parentName:"p",href:"#updateshape-mutateshape"},"updateShape()"),"\n",(0,r.kt)("a",{parentName:"p",href:"#partialupdateshape-mutateshape"},"partialUpdateShape()"),", and ",(0,r.kt)("a",{parentName:"p",href:"#deleteshape-deleteshape"},"deleteShape()")),(0,r.kt)("h3",{id:"static-listurlsearchparams-readonlyrecordstring-string--string"},"static listUrl(searchParams: Readonly\\<Record\\<string, string>>) => string"),(0,r.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#listshape-readshape"},"listShape()")," and ",(0,r.kt)("a",{parentName:"p",href:"#createshape-mutateshape"},"createShape()")),(0,r.kt)("h3",{id:"static-fetchmethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseany"},'static fetch(method: "get" | "post" | "put" | "patch" | "delete" | "options", url: string, body?: Readonly\\<object | string>) => Promise\\<any',">"),(0,r.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,r.kt)("h3",{id:"static-fetchresponsemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseresponse"},'static fetchResponse(method: "get" | "post" | "put" | "patch" | "delete" | "options", url: string, body?: Readonly\\<object | string',">",") => Promise\\<Response",">"),(0,r.kt)("p",null,"Used in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,r.kt)("h3",{id:"static-getentityschema--schemaentity"},"static getEntitySchema() => ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ntucker/normalizr/blob/master/docs/api.md#entitykey-definition---options--"},"schema.Entity")),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ntucker/normalizr/blob/master/docs/api.md#schema"},"shape of the data"),"\nwhen requesting one resource at a time. Defaults to a plain object\ncontaining the keys. This can be useful to override if your response is in a different form."),(0,r.kt)("h3",{id:"static-getfetchoptions--fetchoptions--undefined"},"static getFetchOptions() => ",(0,r.kt)("a",{parentName:"h3",href:"/docs/4.0/api/FetchShape#FetchOptions"},"FetchOptions")," | undefined"),(0,r.kt)("p",null,"Returns the default request options for this resource. By default this returns undefined"),(0,r.kt)("h2",{id:"fetch-shapes"},(0,r.kt)("a",{parentName:"h2",href:"../api/FetchShape"},"Fetch shapes")),(0,r.kt)("p",null,"These provide the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\nshapes common in ",(0,r.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew shapes based to match your API."),(0,r.kt)("h3",{id:"detailshape-readshape"},"detailShape(): ReadShape"),(0,r.kt)("p",null,"A GET request using standard ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useresource"},"useResource")),(0,r.kt)("h3",{id:"listshape-readshape"},"listShape(): ReadShape"),(0,r.kt)("p",null,"A GET request using ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useresource"},"useResource")),(0,r.kt)("h3",{id:"createshape-mutateshape"},"createShape(): MutateShape"),(0,r.kt)("p",null,"A POST request sending a payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useFetcher"},"useFetcher")),(0,r.kt)("h3",{id:"updateshape-mutateshape"},"updateShape(): MutateShape"),(0,r.kt)("p",null,"A PUT request sending a payload to a ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useFetcher"},"useFetcher")),(0,r.kt)("h3",{id:"partialupdateshape-mutateshape"},"partialUpdateShape(): MutateShape"),(0,r.kt)("p",null,"A PATCH request sending a partial payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useFetcher"},"useFetcher")),(0,r.kt)("h3",{id:"deleteshape-deleteshape"},"deleteShape(): DeleteShape"),(0,r.kt)("p",null,"A DELETE request sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/api/useFetcher"},"useFetcher")))}u.isMDXComponent=!0}}]);