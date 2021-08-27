/*! For license information please see 53deb6fc.7b2bd2b5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48666],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))n.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(c[s[d]]=i[s[d]])}}return c}},41535:(e,t,n)=>{var r=n(62525),a=60103,o=60106;var i=60109,s=60110,c=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),d("react.suspense"),d("react.suspense_list"),l=d("react.memo"),p=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,r(v,h.prototype),v.isPureReactComponent=!0;var k=Array.isArray,T=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)T.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:S.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===r?"."+N(c,0):r,k(i)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),R(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",k(e))for(var l=0;l<e.length;l++){var p=r+N(s=e[l],l);c+=R(s,t,n,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,n,p=r+N(s,l++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function A(e,t,n){if(null==e)return e;var r=[],a=0;return R(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},C={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(86010);const s="tabItem_1uMI",c="tabItemActive_2DSg";const l=37,p=39;const d=function(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:u,className:f}=e,{tabGroupChoices:y,setTabGroupChoices:m}=o(),[h,g]=(0,r.useState)(a),b=r.Children.toArray(e.children),v=[];if(null!=u){const e=y[u];null!=e&&e!==h&&d.some((t=>t.value===e))&&g(e)}const k=e=>{const t=e.currentTarget,n=v.indexOf(t),r=d[n].value;g(r),null!=u&&(m(u,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&a<=i&&r<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((()=>t.classList.remove(c)),2e3))}),150))},T=e=>{var t;let n;switch(e.keyCode){case p:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case l:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},d.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:T,onFocus:k,onClick:k},t)))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(55064),a=n(58215),o=n(67294);function i({children:e}){return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},e[0]),o.createElement(a.Z,{value:"js"},e[1]))}},113:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var r=n(87462),a=(n(27378),n(3905)),o=n(70523);const i={title:"SimpleRecord"},s=void 0,c={unversionedId:"api/SimpleRecord",id:"api/SimpleRecord",isDocsHomePage:!1,title:"SimpleRecord",description:"SimpleRecord provides a simple immutable interface to store values that have",source:"@site/../docs/api/SimpleRecord.md",sourceDirName:"api",slug:"/api/SimpleRecord",permalink:"/docs/next/api/SimpleRecord",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/SimpleRecord.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"SimpleRecord"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/next/api/Entity"},next:{title:"Object",permalink:"/docs/next/api/Object"}},l=[{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[]}]},{value:"Data methods",id:"data-methods",children:[{value:"static merge&lt;T extends typeof SimpleRecord&gt;(first: InstanceType&lt;T&gt;, second: InstanceType&lt;T&gt;) =&gt; InstanceType&lt;T&gt;",id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet",children:[]},{value:"static hasDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;, key: keyof InstanceType&lt;T&gt;) =&gt; boolean",id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean",children:[]},{value:"static toObjectDefined&lt;T extends typeof SimpleRecord&gt;(instance: AbstractInstanceType&lt;T&gt;) =&gt; Partial&lt;InstanceType&lt;T&gt;&gt;",id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet",children:[]},{value:"static keysDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;) =&gt; (keyof InstanceType&lt;T&gt;)[]",id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet",children:[]},{value:"static schema: { k: keyof this: Schema }",id:"static-schema--k-keyof-this-schema-",children:[]}]}],p={toc:l};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SimpleRecord")," provides a simple immutable interface to store values that have\ndefaults. When constructed it distinguishes between actually set values and ones\nonly provided by defaults. This is useful to produce accurate merging algorithms\nwhen dealing with partial data definitions."),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n}\n"))),(0,a.kt)("h2",{id:"factory-method"},"Factory method"),(0,a.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof SimpleRecord",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,a.kt)("p",null,"This is used to create instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction, among other things. ",(0,a.kt)("em",{parentName:"p"},"Be sure to always call ",(0,a.kt)("inlineCode",{parentName:"em"},"super.fromJS()")," when\noverriding.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const articleA = Article.fromJS({\n  title: 'The best library',\n  tags: ['Immutable'],\n});\nconst articleB = Article.fromJS({\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n});\n")),(0,a.kt)("h2",{id:"data-methods"},"Data methods"),(0,a.kt)("h3",{id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet"},"static merge\\<T extends typeof SimpleRecord",">","(first: InstanceType\\<T",">",", second: InstanceType\\<T",">",") => InstanceType\\<T",">"),(0,a.kt)("p",null,"Takes only the defined (non-default) values of first and second and creates a new instance copying them over.\nSecond will override values of first. Merge is shallow, so you'll need to override this to do any deep merges."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const mergedArticle = Article.merge(articleA, articleB);\nconsole.log(mergedArticle);\n/*\n{\n  id: undefined,\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  author: null,\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,a.kt)("h3",{id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean"},"static hasDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",", key: keyof InstanceType\\<T",">",") => boolean"),(0,a.kt)("p",null,"Returns whether provided ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is defined (non-default) in ",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(articleA.hasDefined('title'));\n/* true */\nconsole.log(articleA.hasDefined('content'));\n/* false */\n")),(0,a.kt)("h3",{id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet"},"static toObjectDefined\\<T extends typeof SimpleRecord",">","(instance: AbstractInstanceType\\<T",">",") => Partial\\<InstanceType\\<T",">",">"),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," with only the defined (non-default) members of ",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.toObjectDefined());\n/*\n{\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,a.kt)("h3",{id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet"},"static keysDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",") => (keyof InstanceType\\<T",">",")[]"),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of all defined (non-default) keys of ",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.keysDefined());\n/* ['title', 'content', 'tags'] */\n")),(0,a.kt)("h3",{id:"static-schema--k-keyof-this-schema-"},"static schema: { ","[k: keyof this]",": Schema }"),(0,a.kt)("p",null,"Set this to ",(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,a.kt)("p",null,"Additionally can be used to ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,a.kt)("h4",{id:"optional-members"},"Optional members"),(0,a.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserResponse extends SimpleRecord {\n  readonly data: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    data: User,\n    lastUpdated: Date,\n  }\n}\n")))}d.isMDXComponent=!0},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);