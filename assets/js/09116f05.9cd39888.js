"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62798:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={title:"Union"},o=void 0,s={unversionedId:"api/Union",id:"version-4.5/api/Union",isDocsHomePage:!1,title:"Union",description:"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by schema.Array or schema.Values but for non-collection fields.",source:"@site/versioned_docs/version-4.5/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/docs/4.5/api/Union",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/Union.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Union"}},l=[],p={toc:l};function c({components:e,...n}){return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,i.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,i.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,i.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,i.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  readonly name: string = '';\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n")),(0,i.kt)("h4",{id:"output"},"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: { '1': { id: 1, type: 'user', name: 'Anne' } }\n  },\n  result: { owner: { id: 1, schema: 'User' } }\n}\n")))}c.isMDXComponent=!0}}]);