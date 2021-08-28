/*! For license information please see 1f655fb1.9b24bf1b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40310],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,u=o(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))r.call(s,l)&&(u[l]=s[l]);if(t){i=t(s);for(var p=0;p<i.length;p++)n.call(s,i[p])&&(u[i[p]]=s[i[p]])}}return u}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var s=60109,i=60110,u=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),c=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var v=b.prototype=new h;v.constructor=b,n(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,O=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return s=s(u=e),e=""===n?"."+x(u,0):n,j(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),N(s,t,r,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(u=0,n=""===n?".":n+":",j(e))for(var c=0;c<e.length;c++){var l=n+x(i=e[c],c);u+=N(i,t,r,l,s)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),c=0;!(i=e.next()).done;)u+=N(i=i.value,t,r,l=n+x(i,c++),s);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return N(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},$={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14142:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>i,toc:()=>u,default:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={title:"Computed Properties"},s=void 0,i={unversionedId:"guides/computed-properties",id:"guides/computed-properties",isDocsHomePage:!1,title:"Computed Properties",description:"Resource classes are just normal classes, so any common derived data can just be added as",source:"@site/../docs/guides/computed-properties.md",sourceDirName:"guides",slug:"/guides/computed-properties",permalink:"/docs/guides/computed-properties",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/computed-properties.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1596168852,formattedLastUpdatedAt:"7/30/2020",frontMatter:{title:"Computed Properties"},sidebar:"docs",previous:{title:"Mocking unfinished endpoints",permalink:"/docs/guides/mocking-unfinished"},next:{title:"Multi-column primary key",permalink:"/docs/guides/multi-pk"}},u=[],c={toc:u};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," classes are just normal classes, so any common derived data can just be added as\ngetters to the class itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly firstName: string = '';\n  readonly lastName: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = '/users/';\n\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n")),(0,o.kt)("p",null,"If the computations are expensive feel free to add some\nmemoization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { memoize } from 'lodash';\n\nclass User extends Resource {\n  truelyExpensiveValue = memoize(() => {\n    // compute that expensive thing!\n  });\n}\n")))}l.isMDXComponent=!0}}]);