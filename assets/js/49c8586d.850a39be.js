"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(67294),a=n(79443);const r=function(){const e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(86010);const s="tabItem_1uMI",d="tabItemActive_2DSg";const l=37,p=39;const c=function(e){const{lazy:t,block:n,defaultValue:a,values:c,groupId:u,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:f}=r(),[k,g]=(0,o.useState)(a),y=o.Children.toArray(e.children),b=[];if(null!=u){const e=h[u];null!=e&&e!==k&&c.some((t=>t.value===e))&&g(e)}const N=e=>{const t=e.currentTarget,n=b.indexOf(t),o=c[n].value;g(o),null!=u&&(f(u,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&a<=i&&o<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((()=>t.classList.remove(d)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case p:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case l:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},c.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":k===e}),key:e,ref:e=>b.push(e),onKeyDown:v,onFocus:N,onClick:N},t)))),t?(0,o.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(67294).createContext)(void 0)},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(55064),a=n(58215),r=n(67294);function i({children:e}){return r.createElement(o.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(a.Z,{value:"ts"},e[0]),r.createElement(a.Z,{value:"js"},e[1]))}},73656:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>f});var o=n(87462),a=(n(67294),n(3905)),r=n(55064),i=n(58215),s=n(70523);const d={title:"Introduction",slug:"/"},l=void 0,p={unversionedId:"introduction",id:"version-5.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,",source:"@site/versioned_docs/version-5.0/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/5.0/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/introduction.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630099958,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"Introduction",slug:"/"}},c=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Colocate data dependencies",id:"colocate-data-dependencies",children:[]},{value:"Async Fallbacks with Boundaries",id:"async-fallbacks-with-boundaries",children:[]},{value:"Mutations",id:"mutations",children:[{value:"Entities",id:"entities",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Optimistic Updates",id:"optimistic-updates",children:[]}]},{value:"Protocol specific patterns",id:"protocol-specific-patterns",children:[]},{value:"Debugging",id:"debugging",children:[]},{value:"Demo",id:"demo",children:[]}],u=(m="NetworkErrorBoundary",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:c};function f({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is an asynchronous data framework for TypeScript and JavaScript. While it is completely protocol and platform agnostic,\nit is not a networking stack for things like minecraft game servers."),(0,a.kt)("p",null,"A good way to tell if this could be useful is if you use something similar to ",(0,a.kt)("strong",{parentName:"p"},"any")," of the following to build data-driven applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://restfulapi.net/"},"REST"),", ",(0,a.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL"),", ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),", ",(0,a.kt)("a",{parentName:"li",href:"https://jsonapi.org/"},"JSON:API")),(0,a.kt)("li",{parentName:"ul"},"Transport protocols like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP"),", ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/5.0/guides/mocking-unfinished"},"local")),(0,a.kt)("li",{parentName:"ul"},"Async storage engines like ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDb"),", ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/asyncstorage"},"AsyncStorage"))),(0,a.kt)("p",null,"Rest Hooks focuses on solving the following challenges in a declarative composable manner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asynchronous")," behavior and race conditions"),(0,a.kt)("li",{parentName:"ul"},"Dynamic (changing) data ",(0,a.kt)("strong",{parentName:"li"},"consistency and integrity")),(0,a.kt)("li",{parentName:"ul"},"High ",(0,a.kt)("strong",{parentName:"li"},"performance")," at scale")),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/endpoint"},"Endpoints")," describe an asynchronous ",(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),"."),(0,a.kt)("p",null,"These define both ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," behaviors, as well as (optionally) ",(0,a.kt)("inlineCode",{parentName:"p"},"typing"),"."),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{18}","{18}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8}","{8}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,a.kt)("p",null,"By ",(0,a.kt)("em",{parentName:"p"},"decoupling")," endpoint definitions from their usage, we are able to reuse them in many contexts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy reuse in different ",(0,a.kt)("strong",{parentName:"li"},"components")," eases colocating data dependencies"),(0,a.kt)("li",{parentName:"ul"},"Reuse with different ",(0,a.kt)("strong",{parentName:"li"},"hooks")," allows different behaviors with the same endpoint"),(0,a.kt)("li",{parentName:"ul"},"Reuse across different ",(0,a.kt)("strong",{parentName:"li"},"platforms")," like React Native, React web, or even beyond React in Angular, Svelte, Vue, or Node"),(0,a.kt)("li",{parentName:"ul"},"Published as ",(0,a.kt)("strong",{parentName:"li"},"packages")," independent of their consumption")),(0,a.kt)("h2",{id:"colocate-data-dependencies"},"Colocate data dependencies"),(0,a.kt)("p",null,"Add one-line ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency"},"data hookup")," in the components that need it with ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useresource"},"useResource()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import { useResource } from 'rest-hooks';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid prop drilling"),(0,a.kt)("li",{parentName:"ul"},"Data updates only re-render components that need to")),(0,a.kt)("h2",{id:"async-fallbacks-with-boundaries"},"Async Fallbacks with Boundaries"),(0,a.kt)("p",null,"Unify and reuse ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency#async-fallbacks-loadingerror"},"loading and error fallbacks")," with ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"Suspense")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6-7,10-11}","{6-7,10-11}":!0},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nfunction App() {\n  return (\n    <Suspense fallback=\"loading\">\n      <NetworkErrorBoundary>\n        <AnotherRoute />\n        <TodoDetail id={5} />\n      </NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/data-dependency#stateful"},"Non-Suspense fallback handling")),(0,a.kt)("h2",{id:"mutations"},"Mutations"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData): Promise<Todo> =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoUpdate = ({ id }, body) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, { sideEffect: true });\n")))),(0,a.kt)("p",null,"Instead of just calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," endpoint with our data, we want to ensure\n",(0,a.kt)("strong",{parentName:"p"},"all")," colocated usages of the todo being edited are updated. This avoid both the complexity and performance\nproblems of attempting to cascade endpoint refreshes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")," enhances our function, integrating the Rest Hooks store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\n\nconst update = useFetcher(todoUpdate);\nreturn <ArticleForm onSubmit={data => update({ id }, data)} />;\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Tracking imperative loading/error state")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/useLoading"},"useLoading()")," enhances async functions by tracking their loading and error states."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nconst [update, loading, error] = useLoading(useFetcher(todoUpdate));\n"))),(0,a.kt)("p",null,"However, there is still one issue. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoint are not aware of each other\nso how can Rest Hooks know to update todoDetail with this data?"),(0,a.kt)("h3",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/schema#entities"},"Entities")," to our endpoint definition tells Rest Hooks\nhow to extract and find a given piece of data no matter where it is used. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Entity#pk"},"pk()")," (primary key)\nmethod is used as a key in a lookup table."),(0,a.kt)(r.Z,{defaultValue:"Entity",values:[{label:"Entity",value:"Entity"},{label:"todoDetail",value:"todoDetail"},{label:"todoUpdate",value:"todoUpdate"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Entity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nexport class Todo extends Entity {\n  readonly userId: number = 0;\n  readonly id: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"todoDetail",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{13}","{13}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  schema: Todo,\n  sideEffect: true,\n});\n"))),(0,a.kt)(i.Z,{value:"todoUpdate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{14}","{14}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  schema: Todo,\n  sideEffect: true,\n});\n")))),(0,a.kt)("h3",{id:"schema"},"Schema"),(0,a.kt)("p",null,"What if our entity is not the top level item? Here we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList"),"\nendpoint with ",(0,a.kt)("inlineCode",{parentName:"p"},"[Todo]")," as its schema. ",(0,a.kt)("a",{parentName:"p",href:"./getting-started/schema"},"Schemas")," tell Rest Hooks ",(0,a.kt)("em",{parentName:"p"},"where")," to find\nthe Entities. By placing inside a list, Rest Hooks knows to expect a response\nwhere each item of the list is the entity specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{7}","{7}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoList = (params: any) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.json());\n\nconst todoList = new Endpoint(fetchTodoList, {\n  schema: [Todo],\n  sideEffect: true,\n});\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/getting-started/schema"},"Schemas")," also automatically infer and enforce the response type, ensuring\nthe variable ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," will be typed precisely. If the API responds in another manner\nthe hook with throw instead, triggering the ",(0,a.kt)("inlineCode",{parentName:"p"},"error fallback")," specified in ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/NetworkErrorBoundary"},"\\",(0,a.kt)(u,{mdxType:"NetworkErrorBoundary"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import { useResource } from 'rest-hooks';\n\nexport default function TodoListComponent() {\n  const todos = useResource(todoList, {});\n\n  return (\n    <div>\n      {todos.map(todo => (\n        <TodoListItem key={todo.pk()} todo={todo} />\n      ))}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"This also guarantees data consistency (as well as referential equality) between ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail")," endpoints, as well\nas any mutations that occur."),(0,a.kt)("h3",{id:"optimistic-updates"},"Optimistic Updates"),(0,a.kt)("p",null,"By using the response of the mutation call to update the Rest Hooks store, we were able to\nkeep our components updated automatically and only after one request."),(0,a.kt)("p",null,"However, after toggling todo.completed, this is just too slow! No worries, ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/optimistic-updates"},"optimisticUpdate")," tells\nRest Hooks what response it ",(0,a.kt)("em",{parentName:"p"},"expects")," to receive from the mutation call, Rest Hooks\ncan ",(0,a.kt)("strong",{parentName:"p"},"immediately")," update ",(0,a.kt)("strong",{parentName:"p"},"all")," components using the relevant entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\ntodoUpdate = todoUpdate.extend({\n  optimisticUpdate,\n});\n")),(0,a.kt)("p",null,"Rest Hooks ensures data integrity against any possible networking failure or race condition, so don't\nworry about network failures, multiple mutation calls editing the same data, or other common\nproblems in asynchronous programming."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"todoUpdate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{16}","{16}":!0},"import { Endpoint } from '@rest-hooks/endpoint';\n\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoUpdate = ({ id }: Params, body: FormData) =>\n  fetch('https://jsonplaceholder.typicode.com/todos', {\n    method: 'PATCH',\n    body,\n  }).then(res => res.json());\n\nconst todoUpdate = new Endpoint(fetchTodoUpdate, {\n  sideEffect: true,\n  schema: Todo,\n  optimisticUpdate,\n});\n\nconst optimisticUpdate = (params: Params, body: FormData) => ({\n  id: params.id,\n  ...body,\n});\n"))),(0,a.kt)("h2",{id:"protocol-specific-patterns"},"Protocol specific patterns"),(0,a.kt)("p",null,"At this point we've defined ",(0,a.kt)("inlineCode",{parentName:"p"},"todoDetail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"todoList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"todoUpdate"),". You might have noticed\nthat these endpoint definitions share some logic and information. For this reason Rest Hooks\nencourages extracting shared logic among endpoints."),(0,a.kt)("p",null,"One common pattern is having endpoints Create Read Update Delete (CRUD) for a given resource.\nUsing ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/resource-types"},"docs"),") simplifies these patterns."),(0,a.kt)("p",null,"Instead of defining an ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Entity"},"Entity"),", we define a ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource"},"Resource"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"\nextends from ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", so we still need the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definiton."),(0,a.kt)("p",null,"In addition, providing ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#static-urlroot-string"},"static urlRoot")," enable ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#endpoints"},"6 Endpoints"),"\nwith easy logic sharing and overrides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/resource-types"},"Introduction to Resource")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Resource Endpoints")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// read\n// GET https://jsonplaceholder.typicode.com/todos/5\nconst todo = useResource(TodoResource.detail(), { id: 5 });\n\n// GET https://jsonplaceholder.typicode.com/todos\nconst todos = useResource(TodoResource.list(), {});\n\n// mutate\n// POST https://jsonplaceholder.typicode.com/todos\nconst create = useFetcher(TodoResource.create());\ncreate({}, { title: 'my todo' });\n\n// PUT https://jsonplaceholder.typicode.com/todos/5\nconst update = useFetcher(TodoResource.update());\nupdate({ id: 5 }, { title: 'my todo' });\n\n// PATCH https://jsonplaceholder.typicode.com/todos/5\nconst partialUpdate = useFetcher(TodoResource.partialUpdate());\npartialUpdate({ id: 5 }, { title: 'my todo' });\n\n// DELETE https://jsonplaceholder.typicode.com/todos/5\nconst del = useFetcher(TodoResource.delete());\ndel({ id: 5 });\n"))),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"Add the Redux DevTools for\n",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor\n",(0,a.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")),(0,a.kt)("p",null,"After installing and running your site, a new icon should appear in your location bar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redux-devtools button",src:n(21905).Z})),(0,a.kt)("p",null,"Clicking that will open the inspector, which allows you to observe dispatched actions,\ntheir effect on the cache state as well as ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/guides/debugging"},"current cache state"),"."),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"See this all in action in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/tree/master/examples/todo-app"},"examples/todo-app")))}f.isMDXComponent=!0},86010:(e,t,n)=>{function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})},21905:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);