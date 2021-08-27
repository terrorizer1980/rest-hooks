"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55450],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(y,s(s({ref:n},d),{},{components:t})):a.createElement(y,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);const r=function({children:e,hidden:n,className:t}){return a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}},55064:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(67294),r=t(79443);const i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(86010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,d=39;const u=function(e){const{lazy:n,block:t,defaultValue:r,values:u,groupId:p,className:m}=e,{tabGroupChoices:y,setTabGroupChoices:h}=i(),[f,k]=(0,a.useState)(r),b=a.Children.toArray(e.children),g=[];if(null!=p){const e=y[p];null!=e&&e!==f&&u.some((n=>n.value===e))&&k(e)}const v=e=>{const n=e.currentTarget,t=g.indexOf(n),a=u[t].value;k(a),null!=p&&(h(p,a),setTimeout((()=>{(function(e){const{top:n,left:t,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:s}=window;return n>=0&&r<=s&&a<=i&&t>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((()=>n.classList.remove(l)),2e3))}),150))},N=e=>{var n;let t;switch(e.keyCode){case d:{const n=g.indexOf(e.target)+1;t=g[n]||g[0];break}case c:{const n=g.indexOf(e.target)-1;t=g[n]||g[g.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},m)},u.map((({value:e,label:n})=>a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:v,onClick:v},n)))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}},79443:(e,n,t)=>{t.d(n,{Z:()=>a});const a=(0,t(67294).createContext)(void 0)},70523:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(55064),r=t(58215),i=t(67294);function s({children:e}){return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},e[0]),i.createElement(r.Z,{value:"js"},e[1]))}},36980:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>u});var a=t(87462),r=(t(67294),t(3905)),i=(t(55064),t(58215),t(70523));const s={title:"Array"},o=void 0,l={unversionedId:"api/Array",id:"version-5.0/api/Array",isDocsHomePage:!1,title:"Array",description:"Creates a schema to normalize an array of schemas. If the input value is an Object instead of an Array,",source:"@site/versioned_docs/version-5.0/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/docs/api/Array",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/Array.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Array"},sidebar:"version-5.0/docs",previous:{title:"Object",permalink:"/docs/api/Object"},next:{title:"Union",permalink:"/docs/api/Union"}},c=[{value:"Instance Methods",id:"instance-methods",children:[]},{value:"Usage",id:"usage",children:[{value:"Dynamic entity types",id:"dynamic-entity-types",children:[]}]}],d={toc:c};function u({components:e,...n}){return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,r.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,r.kt)("em",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: {\n      '123': { id: '123', name: 'Jim' },\n      '456': { id: '456', name: 'Jane' }\n    }\n  },\n  result: [ '123', '456' ]\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admin: Admin,\n    user: User,\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [{ id: 1, type: 'admin' }, { id: 2, type: 'user' }];\n\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n"))),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: [\n    { id: 1, schema: 'Admin' },\n    { id: 2, schema: 'User' }\n  ]\n}\n")))}u.isMDXComponent=!0},86010:(e,n,t)=>{function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:()=>r})}}]);