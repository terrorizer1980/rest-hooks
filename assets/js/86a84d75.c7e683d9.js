/*! For license information please see 86a84d75.c7e683d9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35507],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,l=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))n.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var d=0;d<i.length;d++)r.call(s,i[d])&&(l[i[d]]=s[i[d]])}}return l}},41535:(e,t,n)=>{var r=n(62525),a=60103,o=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),s=d("react.provider"),i=d("react.context"),l=d("react.forward_ref"),d("react.suspense"),d("react.suspense_list"),c=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=g.prototype=new b;v.constructor=g,r(v,h.prototype),v.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:E.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return s=s(l=e),e=""===r?"."+x(l,0):r,k(s)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),S(s,t,n,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(N,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+x(i=e[c],c);l+=S(i,t,n,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)l+=S(i=i.value,t,n,u=r+x(i,c++),s);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},C={transition:0}},27378:(e,t,n)=>{n(41535)},34692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,u=39;const d=function(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:p,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:y}=o(),[h,b]=(0,r.useState)(a),g=r.Children.toArray(e.children),v=[];if(null!=p){const e=f[p];null!=e&&e!==h&&d.some((t=>t.value===e))&&b(e)}const k=e=>{const t=e.currentTarget,n=v.indexOf(t),r=d[n].value;b(r),null!=p&&(y(p,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&a<=s&&r<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case c:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},18507:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=n(55064),s=n(58215);const i={title:"Schemas and Normalized data",sidebar_label:"Schema"},l=void 0,c={unversionedId:"getting-started/schema",id:"getting-started/schema",isDocsHomePage:!1,title:"Schemas and Normalized data",description:"Schemas are a declarative definition of how to process responses",source:"@site/../docs/getting-started/schema.md",sourceDirName:"getting-started",slug:"/getting-started/schema",permalink:"/docs/getting-started/schema",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/schema.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Schemas and Normalized data",sidebar_label:"Schema"},sidebar:"docs",previous:{title:"Data Dependencies",permalink:"/docs/getting-started/data-dependency"},next:{title:"Resource types",permalink:"/docs/guides/resource-types"}},u=[{value:"Entities",id:"entities",children:[]},{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",children:[]}],d={toc:u};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Schemas are a declarative definition of how to ",(0,a.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,a.kt)("a",{parentName:"li",href:"./Entity"},"Entities")),(0,a.kt)("li",{parentName:"ul"},"Classes to ",(0,a.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint, Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\nconst TodoDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),\n    { schema: Todo }\n);\n")),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,a.kt)(o.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"},{label:"React",value:"React"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"State",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Entities cache",src:n(34692).Z}))),(0,a.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n'))),(0,a.kt)(s.Z,{value:"Endpoint",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,a.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,a.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useResource(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,a.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,a.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoCreate = new Endpoint(\n  (body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/`, {\n      method: 'POST',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Example Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function NewTodoForm() {\n  const create = useFetcher(todoCreate);\n  return (\n    <Form onSubmit={e => create(new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,a.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoUpdate = new Endpoint(\n  ({ id }: { id: number }, body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'PUT',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Example Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n  const update = useFetcher(todoUpdate);\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,a.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoDelete = new Endpoint(\n  ({ id }: { id: number }) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'DELETE',\n    }).then(() => ({ id })),\n  { schema: new schema.Delete(Todo), sideEffect: true },\n);\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Example Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const del = useFetcher(todoDelete);\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => del({ id: todo.id })}>Delete</button>\n    </div>\n  );\n}\n"))))),(0,a.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}p.isMDXComponent=!0},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);