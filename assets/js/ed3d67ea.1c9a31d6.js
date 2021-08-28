"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47063:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>o,toc:()=>l,default:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Entity",id:"Entity",original_id:"Entity"},s=void 0,o={unversionedId:"api/Entity",id:"version-4.1/api/Entity",isDocsHomePage:!1,title:"Entity",description:"`typescript",source:"@site/versioned_docs/version-4.1/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/4.1/api/Entity",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Entity",id:"Entity",original_id:"Entity"},sidebar:"version-4.1/docs",previous:{title:"Resource",permalink:"/docs/4.1/api/resource"},next:{title:"SimpleRecord",permalink:"/docs/4.1/api/SimpleRecord"}},l=[{value:"Methods",id:"methods",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[]},{value:"abstract pk: (parent?: any, key?: string): string | number | undefined",id:"abstract-pk-parent-any-key-string-string--number--undefined",children:[]},{value:"static get key(): string",id:"static-get-key-string",children:[]},{value:"static merge(first, second): mergedValue",id:"static-mergefirst-second-mergedvalue",children:[]},{value:"static schema: { k: keyof this: Schema }",id:"static-schema--k-keyof-this-schema-",children:[]},{value:"static asSchema() =&gt; Entity",id:"static-asschema--entity",children:[]}]}],c={toc:l};function p({components:e,...t}){return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," extends ",(0,i.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,i.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,i.kt)("p",null,"By defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,i.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof SimpleRecord",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,i.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,i.kt)("p",null,"This is used to create new entities when normalizing data. These are stored in the entities cache."),(0,i.kt)("h3",{id:"abstract-pk-parent-any-key-string-string--number--undefined"},"abstract pk: (parent?: any, key?: string): string | number | undefined"),(0,i.kt)("p",null,"PK stands for ",(0,i.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,i.kt)("h4",{id:"undefined-value"},"undefined value"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,i.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,i.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,i.kt)("h4",{id:"other-uses"},"Other uses"),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,i.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,i.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,i.kt)("h3",{id:"static-get-key-string"},"static get key(): string"),(0,i.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,i.kt)("h3",{id:"static-mergefirst-second-mergedvalue"},"static merge(first, second): mergedValue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(first: InstanceType<T>, second: InstanceType<T>) => InstanceType<T>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,i.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,i.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,i.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static merge<T extends typeof SimpleRecord>(first: InstanceType<T>, second: InstanceType<T>) {\n    if (first.timestamp > second.timestamp) return first;\n    return second;\n  }\n}\n")),(0,i.kt)("h3",{id:"static-schema--k-keyof-this-schema-"},"static schema: { ","[k: keyof this]",": Schema }"),(0,i.kt)("p",null,"Set this to ",(0,i.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,i.kt)("h3",{id:"static-asschema--entity"},"static asSchema() => ",(0,i.kt)("a",{parentName:"h3",href:"./Entity"},"Entity")),(0,i.kt)("p",null,"Returns this ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," with the TypeScript type set properly. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"asSchema()")," instead of\n",(0,i.kt)("inlineCode",{parentName:"p"},"this")," directly is key to getting correct typing from the hooks."),(0,i.kt)("p",null,"This can be used as a ",(0,i.kt)("a",{parentName:"p",href:"./FetchShape#schema-schema"},"Schema")," or to build other ",(0,i.kt)("a",{parentName:"p",href:"./FetchShape#schema-schema"},"Schema"),"s."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { universalFetchFunction } from 'utils';\nimport ArticleEntity from './ArticleEntity';\n\nexport const articleListShape = {\n  type: 'read',\n  schema: { results: [ArticleEntity.asSchema()], nextPage: '', prevPage: '' },\n  getFetchKey(params: Readonly<object>): {return `article/${JSON.stringify(params)}`;},\n  fetch: universalFetchFunction,\n}\n")))}p.isMDXComponent=!0}}]);