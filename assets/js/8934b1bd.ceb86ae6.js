"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96277:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>a,toc:()=>p,default:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"Computed Properties",id:"computed-properties",original_id:"computed-properties"},s=void 0,a={unversionedId:"guides/computed-properties",id:"version-4.3/guides/computed-properties",isDocsHomePage:!1,title:"Computed Properties",description:"Resource classes are just normal classes, so any common derived data can just be added as",source:"@site/versioned_docs/version-4.3/guides/computed-properties.md",sourceDirName:"guides",slug:"/guides/computed-properties",permalink:"/docs/4.3/guides/computed-properties",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/guides/computed-properties.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Computed Properties",id:"computed-properties",original_id:"computed-properties"},sidebar:"version-4.3/docs",previous:{title:"Mocking unfinished endpoints",permalink:"/docs/4.3/guides/mocking-unfinished"},next:{title:"Multi-column primary key",permalink:"/docs/4.3/guides/multi-pk"}},p=[],c={toc:p};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," classes are just normal classes, so any common derived data can just be added as\ngetters to the class itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nclass User extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly firstName: string = '';\n  readonly lastName: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = '/users/';\n\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n")),(0,o.kt)("p",null,"If the computations are expensive feel free to add some\nmemoization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\nimport { memoize } from 'lodash';\n\nclass User extends Resource {\n  truelyExpensiveValue = memoize(() => {\n    // compute that expensive thing!\n  });\n}\n")))}u.isMDXComponent=!0}}]);