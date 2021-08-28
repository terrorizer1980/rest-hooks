"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(79443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,d=39;const p=function(e){const{lazy:t,block:n,defaultValue:r,values:p,groupId:u,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:f}=o(),[y,b]=(0,a.useState)(r),k=a.Children.toArray(e.children),g=[];if(null!=u){const e=h[u];null!=e&&e!==y&&p.some((t=>t.value===e))&&b(e)}const v=e=>{const t=e.currentTarget,n=g.indexOf(t),a=p[n].value;b(a),null!=u&&(f(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&r<=s&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},E=e=>{var t;let n;switch(e.keyCode){case d:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:E,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},66408:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(55064),s=n(58215);const i={title:"Schemas and Normalized data",sidebar_label:"Schema"},l=void 0,c={unversionedId:"getting-started/schema",id:"version-5.0/getting-started/schema",isDocsHomePage:!1,title:"Schemas and Normalized data",description:"Schemas are a declarative definition of how to process responses",source:"@site/versioned_docs/version-5.0/getting-started/schema.md",sourceDirName:"getting-started",slug:"/getting-started/schema",permalink:"/docs/5.0/getting-started/schema",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/schema.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Schemas and Normalized data",sidebar_label:"Schema"}},d=[{value:"Entities",id:"entities",children:[]},{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",children:[]}],p={toc:d};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Schemas are a declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"./Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint, Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\nconst TodoDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),\n    { schema: Todo }\n);\n")),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,r.kt)(o.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"},{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"State",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entities cache",src:n(64625).Z}))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n'))),(0,r.kt)(s.Z,{value:"Endpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,r.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useResource(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,r.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,r.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoCreate = new Endpoint(\n  (body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/`, {\n      method: 'POST',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function NewTodoForm() {\n  const create = useFetcher(todoCreate);\n  return (\n    <Form onSubmit={e => create(new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoUpdate = new Endpoint(\n  ({ id }: { id: number }, body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'PUT',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n  const update = useFetcher(todoUpdate);\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoDelete = new Endpoint(\n  ({ id }: { id: number }) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'DELETE',\n    }).then(() => ({ id })),\n  { schema: new schema.Delete(Todo), sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const del = useFetcher(todoDelete);\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => del({ id: todo.id })}>Delete</button>\n    </div>\n  );\n}\n"))))),(0,r.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}u.isMDXComponent=!0},86010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})},64625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"}}]);