"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(79443);const i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,u=39;const d=function(e){const{lazy:t,block:n,defaultValue:r,values:d,groupId:p,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:y}=i(),[f,k]=(0,a.useState)(r),g=a.Children.toArray(e.children),b=[];if(null!=p){const e=h[p];null!=e&&e!==f&&d.some((t=>t.value===e))&&k(e)}const v=e=>{const t=e.currentTarget,n=b.indexOf(t),a=d[n].value;k(a),null!=p&&(y(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:s}=window;return t>=0&&r<=s&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case c:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":f===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(55064),r=n(58215),i=n(67294);function s({children:e}){return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},e[0]),i.createElement(r.Z,{value:"js"},e[1]))}},25709:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(70523);const s={title:"Values"},o=void 0,l={unversionedId:"api/Values",id:"version-5.0/api/Values",isDocsHomePage:!1,title:"Values",description:"Like Array, Values are unbounded in size. The definition here describes the types of values to expect,",source:"@site/versioned_docs/version-5.0/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/docs/5.0/api/Values",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Values.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Values"}},c=[{value:"Instance Methods",id:"instance-methods",children:[]},{value:"Usage",id:"usage",children:[{value:"Dynamic entity types",id:"dynamic-entity-types",children:[]}]}],u={toc:c};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,r.kt)("p",null,"Describes a map whose values follow the given schema."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() { return `${this.id}` };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  pk() { return this.id };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Item: { '1': { id: 1 }, '2': { id: 2 } }\n  },\n  result: { firstThing: 1, secondThing: 2 }\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admin: Admin,\n    user: User\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input: any, parent: unknown, key: string) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  pk() { return this.id; }\n}\nclass Admin extends Entity {\n  pk() { return this.id; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input, parent, key) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: {\n    '1': { id: 1, schema: 'Admin' },\n    '2': { id: 2, schema: 'User' }\n  }\n}\n")))}d.isMDXComponent=!0},86010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);