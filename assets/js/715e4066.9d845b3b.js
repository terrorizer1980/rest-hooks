/*! For license information please see 715e4066.9d845b3b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66548],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,l,i=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(i[u]=s[u]);if(t){l=t(s);for(var p=0;p<l.length;p++)n.call(s,l[p])&&(i[l[p]]=s[l[p]])}}return i}},41535:(e,t,r)=>{var n=r(62525),a=60103,o=60106;var s=60109,l=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var b=g.prototype=new k;b.constructor=g,n(b,y.prototype),b.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,R={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},s=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:R.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var F=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return s=s(i=e),e=""===n?"."+j(i,0):n,v(s)?(r="",null!=e&&(r=e.replace(F,"$&/")+"/"),_(s,t,r,"",(function(e){return e}))):null!=s&&(A(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(F,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=""===n?".":n+":",v(e))for(var c=0;c<e.length;c++){var u=n+j(l=e[c],c);i+=_(l,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)i+=_(l=l.value,t,r,u=n+j(l,c++),s);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function C(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},Z={transition:0}},27378:(e,t,r)=>{r(41535)},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},55064:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(79443);const o=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=r(86010);const l="tabItem_1uMI",i="tabItemActive_2DSg";const c=37,u=39;const p=function(e){const{lazy:t,block:r,defaultValue:a,values:p,groupId:d,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:h}=o(),[y,k]=(0,n.useState)(a),g=n.Children.toArray(e.children),b=[];if(null!=d){const e=f[d];null!=e&&e!==y&&p.some((t=>t.value===e))&&k(e)}const v=e=>{const t=e.currentTarget,r=b.indexOf(t),n=p[r].value;k(n),null!=d&&(h(d,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&a<=s&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},w=e=>{var t;let r;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;r=b[t]||b[0];break}case c:{const t=b.indexOf(e.target)-1;r=b[t]||b[b.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":y===e}),key:e,ref:e=>b.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},70523:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(55064),a=r(58215),o=r(67294);function s({children:e}){return o.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},e[0]),o.createElement(a.Z,{value:"js"},e[1]))}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(55064),a=r(58215),o=r(67294),s=r(67934);function l({pkgs:e,dev:t=!1}){return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(28953);const o={React:n,...n,...a}},79231:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>f});var n=r(87462),a=(r(27378),r(3905)),o=r(70523),s=r(55064),l=r(58215),i=r(96497);const c={id:"usage",title:"Usage"},u=void 0,p={unversionedId:"rest/usage",id:"rest/usage",isDocsHomePage:!1,title:"Usage",description:"Define a Resource",source:"@site/../docs/rest/usage.md",sourceDirName:"rest",slug:"/rest/usage",permalink:"/docs/rest/usage",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/usage.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630707151,formattedLastUpdatedAt:"9/3/2021",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/getting-started/entity"},next:{title:"Resource types",permalink:"/docs/guides/resource-types"}},d=[{value:"Define a Resource",id:"define-a-resource",children:[]},{value:"Use the Resource",id:"use-the-resource",children:[]},{value:"Dispatch mutation",id:"dispatch-mutation",children:[]}],m={toc:d};function f({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,a.kt)("h4",{id:"resourcesarticlets"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources/article.ts")),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," is used as the basis of common ",(0,a.kt)("a",{parentName:"p",href:"../guides/url"},"url patterns")),(0,a.kt)("p",null,"APIs quickly get much more complicated! ",(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Customizing Resources to fit your API")),(0,a.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,a.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useResource(ArticleResource.list(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"../guides/loading-state"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("h2",{id:"dispatch-mutation"},(0,a.kt)("a",{parentName:"h2",href:"/docs/api/useFetcher"},"Dispatch mutation")),(0,a.kt)("h4",{id:"articletsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"article.tsx")),(0,a.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const create = useFetcher(ArticleResource.create());\n  // create as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form onSubmit={e => create({}, new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(l.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const update = useFetcher(ArticleResource.update());\n  // update as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"update()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(l.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const del = useFetcher(ArticleResource.delete());\n  // del as (body: any, params?: Readonly<object>) => Promise<any>\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => del({ id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")))),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,a.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}f.isMDXComponent=!0}}]);