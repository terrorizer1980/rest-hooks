/*! For license information please see 39b73d74.a01389fe.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72345],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))r.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},41535:(e,t,r)=>{var n=r(62525),a=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),u("react.suspense_list"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var w=v.prototype=new y;w.constructor=v,n(w,g.prototype),w.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+N(l,0):n,b(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",b(e))for(var c=0;c<e.length;c++){var p=n+N(s=e[c],c);l+=S(s,t,r,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,r,p=n+N(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:0}},27378:(e,t,r)=>{r(41535)},45649:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/managers-12ec42d958a182bcb3eb9a337a73cb90.png"},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3330:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>d});var n=r(87462),a=(r(27378),r(3905));const o={title:"Manager"},i=void 0,s={unversionedId:"api/Manager",id:"api/Manager",isDocsHomePage:!1,title:"Manager",description:"Managers are singletons that orchestrate the complex asynchronous behavior of rest-hooks.",source:"@site/../docs/api/Manager.md",sourceDirName:"api",slug:"/api/Manager",permalink:"/docs/api/Manager",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Manager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1595361016,formattedLastUpdatedAt:"7/21/2020",frontMatter:{title:"Manager"},sidebar:"docs",previous:{title:"<NetworkErrorBoundary />",permalink:"/docs/api/NetworkErrorBoundary"},next:{title:"NetworkManager",permalink:"/docs/api/NetworkManager"}},l=[{value:"getMiddleware()",id:"getmiddleware",children:[]},{value:"cleanup()",id:"cleanup",children:[]},{value:"init()",id:"init",children:[]},{value:"Provided managers:",id:"provided-managers",children:[]},{value:"Control flow",id:"control-flow",children:[{value:"Middleware logging",id:"middleware-logging",children:[]},{value:"Middleware data stream",id:"middleware-data-stream",children:[]}]}],c=(p="CacheProvider",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:l};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managers are singletons that orchestrate the complex asynchronous behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),".\nSeveral managers are provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks")," and used by default; however there is nothing\nstopping other compatible managers to be built that expand the functionality. We encourage\nPRs or complimentary libraries!"),(0,a.kt)("p",null,"While managers often have complex internal state and methods - the exposed interface is quite simple.\nBecause of this, it is encouraged to keep any supporting state or methods marked at protected by\ntypescript. Managers have three exposed pieces - the constructor to build initial state and\ntake any parameters; a simple cleanup() method to tear down any dangling pieces like setIntervals()\nor unresolved Promises; and finally getMiddleware() - providing the mechanism to hook into\nthe flux data flow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Dispatch<R extends React.Reducer<any, any>> = (action: React.ReducerAction<R>) => Promise<void>;\n\ntype Middleware = <R extends React.Reducer<any, A>, A extends Actions>({\n  dispatch,\n}: MiddlewareAPI<R>) => (\n  next: Dispatch<R>,\n) => Dispatch<R>;\n\ninterface Manager {\n  getMiddleware<T extends Manager>(this: T): Middleware;\n  cleanup(): void;\n  init?: (state: State<any>) => void;\n}\n")),(0,a.kt)("h2",{id:"getmiddleware"},"getMiddleware()"),(0,a.kt)("p",null,"getMiddleware() returns a function that very similar to a ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux middleware"),".\nThe only differences is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," function returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),". This promise resolves when the reducer update is\n",(0,a.kt)("a",{parentName:"p",href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/#general-algorithm"},"committed"),"\nwhen using ",(0,a.kt)(c,{mdxType:"CacheProvider"}),". This is necessary since the commit phase is asynchronously scheduled. This enables building\nmanagers that perform work after the DOM is updated and also with the newly computed state."),(0,a.kt)("p",null,"Since redux is fully synchronous, an adapter must be placed in front of Rest Hooks style middleware to\nensure they can consume a promise. Conversely, redux middleware must be changed to pass through promises."),(0,a.kt)("p",null,"Middlewares will intercept actions that are dispatched and then potentially dispatch their own actions as well.\nTo read more about middlewares, see the ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux documentation"),"."),(0,a.kt)("h2",{id:"cleanup"},"cleanup()"),(0,a.kt)("p",null,"Provides any cleanup of dangling resources after manager is no longer in use."),(0,a.kt)("h2",{id:"init"},"init()"),(0,a.kt)("p",null,"Called with initial state after provider is mounted. Can be useful to run setup at start that\nrelies on state actually existing."),(0,a.kt)("h2",{id:"provided-managers"},"Provided managers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/NetworkManager"},"NetworkManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/SubscriptionManager"},"SubscriptionManager"))),(0,a.kt)("h2",{id:"control-flow"},"Control flow"),(0,a.kt)("p",null,"Managers live in the CacheProvider centralized store. They orchestrate complex control flows by interfacing\nvia intercepting and dispatching actions, as well as reading the internal state."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manager flux flow",src:r(45649).Z})),(0,a.kt)("h3",{id:"middleware-logging"},"Middleware logging"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.middleware = ({ dispatch, getState }) => (next) => async (action) => {\n  console.log('before', action, getState());\n  await next(action);\n  console.log('after', action, getState())\n}\n")),(0,a.kt)("h3",{id:"middleware-data-stream"},"Middleware data stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createReceive } from '@rest-hooks/core';\n\nthis.middleware = ({ dispatch, getState }) => {\n  this.websocket.onmessage = (event) => {\n    dispatch(\n      createReceive(event.data, { schema: this.Schemas[event.type] })\n    );\n  }\n  return (next) => async (action) => next(action);\n}\n")))}d.isMDXComponent=!0}}]);