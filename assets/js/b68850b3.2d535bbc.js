/*! For license information please see b68850b3.2d535bbc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9911],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var u,i,c=o(e),s=1;s<arguments.length;s++){for(var l in u=Object(arguments[s]))r.call(u,l)&&(c[l]=u[l]);if(t){i=t(u);for(var p=0;p<i.length;p++)n.call(u,i[p])&&(c[i[p]]=u[i[p]])}}return c}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var u=60109,i=60110,c=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),u=p("react.provider"),i=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function v(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var g=h.prototype=new v;g.constructor=h,n(g,b.prototype),g.isPureReactComponent=!0;var O=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,a={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return u=u(c=e),e=""===n?"."+S(c,0):n,O(u)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),x(u,t,r,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(c=0,n=""===n?".":n+":",O(e))for(var s=0;s<e.length;s++){var l=n+S(i=e[s],s);c+=x(i,t,r,l,u)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(i=e.next()).done;)c+=x(i=i.value,t,r,l=n+S(i,s++),u);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function M(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},U={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(c,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27137:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>u,metadata:()=>i,toc:()=>c,default:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={title:"useMeta()"},u=void 0,i={unversionedId:"api/useMeta",id:"api/useMeta",isDocsHomePage:!1,title:"useMeta()",description:"`typescript",source:"@site/../docs/api/useMeta.md",sourceDirName:"api",slug:"/api/useMeta",permalink:"/docs/api/useMeta",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useMeta.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1614385119,formattedLastUpdatedAt:"2/26/2021",frontMatter:{title:"useMeta()"},sidebar:"docs",previous:{title:"useResetter()",permalink:"/docs/api/useResetter"},next:{title:"useError()",permalink:"/docs/api/useError"}},c=[],s={toc:c};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useMeta(\n  endpoint: Endpoint,\n  params: object | null,\n): {\n    readonly date: number;\n    readonly error?: NetworkError | UnknownError;\n    readonly expiresAt: number;\n    readonly prevExpiresAt?: number | undefined;\n    readonly invalidated?: boolean | undefined;\n} | null;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./types#networkerror"},"NetworkError")," ",(0,o.kt)("a",{parentName:"p",href:"./types#unknownerror"},"UnknownError")),(0,o.kt)("p",null,"Retrieves metadata about a request from the cache."),(0,o.kt)("p",null,"Used in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./useError"},"useError()"))))}l.isMDXComponent=!0}}]);