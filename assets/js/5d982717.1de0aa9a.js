/*! For license information please see 5d982717.1de0aa9a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14989],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},41535:(e,t,n)=>{var r=n(62525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=b.prototype=new g;v.constructor=b,r(v,m.prototype),v.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+S(l,0):r,k(i)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+S(s=e[c],c);l+=E(s,t,n,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=E(s=s.value,t,n,u=r+S(s,c++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},q={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6986:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>u});var r=n(87462),o=(n(27378),n(3905));const a={title:"Aborting Fetch"},i=void 0,s={unversionedId:"guides/abort",id:"guides/abort",isDocsHomePage:!1,title:"Aborting Fetch",description:"AbortController provides a new way of cancelling",source:"@site/../docs/guides/abort.md",sourceDirName:"guides",slug:"/guides/abort",permalink:"/docs/guides/abort",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/abort.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1597452674,formattedLastUpdatedAt:"8/14/2020",frontMatter:{title:"Aborting Fetch"},sidebar:"docs",previous:{title:"Optimistic Updates",permalink:"/docs/guides/optimistic-updates"},next:{title:"Redux integration",permalink:"/docs/guides/redux"}},l=[{value:"Resource",id:"resource",children:[]},{value:"Endpoint",id:"endpoint",children:[]},{value:"Cancelling on params change",id:"cancelling-on-params-change",children:[]}],c={toc:l};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController")," provides a new way of cancelling\nfetches that are no longer considered relevant. This can be hooked into fetch via the second ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestInit")," parameter."),(0,o.kt)("h2",{id:"resource"},"Resource"),(0,o.kt)("p",null,"Easy integration is provided with the ",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s defined in ",(0,o.kt)("a",{parentName:"p",href:"../api/resource"},"Resource")," via the signal member:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const abort = new AbortController();\nconst AbortableArticle = CoolerArticleResource.detail().extend({\n  signal: abort.signal,\n});\n// ...somewhere later trigger cancellation\nabort.abort();\n")),(0,o.kt)("h2",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"Additionally similar functionality can easily be added to any endpoint using custom members."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Params = { id: string };\n\nconst UserDetail = new Endpoint(\n  function ({ id }: Params) {\n    const init: RequestInit = {};\n    if (this.signal) {\n      init.signal = this.signal;\n    }\n    return fetch(this.url({ id }), init).then(res => res.json()) as Promise<\n      typeof payload\n    >;\n  },\n  {\n    url({ id }: Params) { return `/users/${id}` },\n    signal: undefined as AbortSignal | undefined,\n  },\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const abort = new AbortController();\nconst AbortableUserDetail = UserDetail.extend({\n  signal: abort.signal,\n});\n// ...somewhere later trigger cancellation\nabort.abort();\n")),(0,o.kt)("h2",{id:"cancelling-on-params-change"},"Cancelling on params change"),(0,o.kt)("p",null,"Sometimes a user has the opportunity to fill out a field that is used to affect the results of a network call.\nIf this is a text input, they could potentially type quite quickly, thus creating a lot of network requests."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/hooks")," package with ",(0,o.kt)("a",{parentName:"p",href:"../api/useCancelling"},"useCancelling()")," will automatically cancel in-flight requests if the parameters\nchange before the request is resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCancelling } from '@rest-hooks/hooks';\n\nconst CancelingUserList = useCancelling(UserList, { query });\nconst users = useResource(CancelingUserList, { query });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Warning: Be careful when using this with many disjoint components fetching the same\narguments (Endpoint/params pair) to useResource(). This solution aborts fetches per-component,\nwhich means you might end up canceling a fetch that another component still cares about.")))}u.isMDXComponent=!0}}]);