/*! For license information please see 6a27197a.381250c3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61845],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,u=a(e),l=1;l<arguments.length;l++){for(var c in s=Object(arguments[l]))r.call(s,c)&&(u[c]=s[c]);if(t){i=t(s);for(var p=0;p<i.length;p++)n.call(s,i[p])&&(u[i[p]]=s[i[p]])}}return u}},41535:(e,t,r)=>{var n=r(62525),a=60103,o=60106;var s=60109,i=60110,u=60112;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),p("react.suspense_list"),l=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=k.prototype=new y;b.constructor=k,n(b,g.prototype),b.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,n)&&!I.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:N.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var j=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return s=s(u=e),e=""===n?"."+R(u,0):n,v(s)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),S(s,t,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(u=0,n=""===n?".":n+":",v(e))for(var l=0;l<e.length;l++){var c=n+R(i=e[l],l);u+=S(i,t,r,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),l=0;!(i=e.next()).done;)u+=S(i=i.value,t,r,c=n+R(i,l++),s);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:0}},27378:(e,t,r)=>{r(41535)},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},55064:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(79443);const o=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=r(86010);const i="tabItem_1uMI",u="tabItemActive_2DSg";const l=37,c=39;const p=function(e){const{lazy:t,block:r,defaultValue:a,values:p,groupId:f,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=o(),[g,y]=(0,n.useState)(a),k=n.Children.toArray(e.children),b=[];if(null!=f){const e=m[f];null!=e&&e!==g&&p.some((t=>t.value===e))&&y(e)}const v=e=>{const t=e.currentTarget,r=b.indexOf(t),n=p[r].value;y(n),null!=f&&(h(f,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&a<=s&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((()=>t.classList.remove(u)),2e3))}),150))},w=e=>{var t;let r;switch(e.keyCode){case c:{const t=b.indexOf(e.target)+1;r=b[t]||b[0];break}case l:{const t=b.indexOf(e.target)-1;r=b[t]||b[b.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":g===e}),key:e,ref:e=>b.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},96497:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(55064),a=r(58215),o=r(67294),s=r(67934);function i({pkgs:e,dev:t=!1}){return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(28953);const o={React:n,...n,...a}},81239:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var n=r(87462),a=(r(27378),r(3905)),o=r(96497),s=r(55064),i=r(58215);const u={title:"Fetching Media"},l=void 0,c={unversionedId:"guides/binary-fetches",id:"guides/binary-fetches",isDocsHomePage:!1,title:"Fetching Media",description:"After setting up Rest Hooks for structured data fetching, you might want to incorporate",source:"@site/../docs/guides/binary-fetches.md",sourceDirName:"guides",slug:"/guides/binary-fetches",permalink:"/docs/guides/binary-fetches",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/binary-fetches.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Fetching Media"},sidebar:"docs",previous:{title:"Custom cache lifetime",permalink:"/docs/guides/resource-lifetime"},next:{title:"Infinite Scrolling",permalink:"/docs/guides/infinite-scrolling-pagination"}},p=[{value:"Storing buffers",id:"storing-buffers",children:[]},{value:"Just Images",id:"just-images",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],f={toc:p};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,a.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,a.kt)(s.Z,{defaultValue:"useResource",values:[{label:"useResource",value:"useResource"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"useResource",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useResource(getPhoto, { userId });\n"))),(0,a.kt)(i.Z,{value:"useCache",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,a.kt)(i.Z,{value:"JS/Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,a.kt)("h2",{id:"just-images"},"Just Images"),(0,a.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("h4",{id:"prefetching"},"Prefetching"),(0,a.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("b",null,"Profile.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource, useRetrieve } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useRetrieve(getImage, { src: imageSrc });\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,a.kt)("p",null,"When using the ",(0,a.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}d.isMDXComponent=!0}}]);