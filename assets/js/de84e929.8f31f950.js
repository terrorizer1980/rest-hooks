"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97346:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>i,toc:()=>c,default:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"useResetter()",id:"useResetter",original_id:"useResetter"},o=void 0,i={unversionedId:"api/useResetter",id:"version-4.2/api/useResetter",isDocsHomePage:!1,title:"useResetter()",description:"`typescript",source:"@site/versioned_docs/version-4.2/api/useResetter.md",sourceDirName:"api",slug:"/api/useResetter",permalink:"/docs/4.2/api/useResetter",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResetter.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"useResetter()",id:"useResetter",original_id:"useResetter"},sidebar:"version-4.2/docs",previous:{title:"useInvalidator()",permalink:"/docs/4.2/api/useInvalidator"},next:{title:"<CacheProvider />",permalink:"/docs/4.2/api/CacheProvider"}},c=[{value:"Example",id:"example",children:[]}],u={toc:c};function l({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResetter(): () => void;\n")),(0,a.kt)("p",null,"Mostly useful for imperatively resetting the cache."),(0,a.kt)("p",null,"Does not accept any arguments will always reset when called."),(0,a.kt)("p",null,"This is more than just expiring the items.  Useful when so much has changed\ne.g. impersonating a user that the entire cache set must be thrown away and\nretrieved again."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\n// Server returns the logged in user\nexport default class CurrentUserResource extends Resource {\n  readonly id: string = null;\n  readonly name: string = '';\n  // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useResource(CurrentUserResource.detailShape(), { });\n  const resetCache = useResetter();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // Empty the cache\n    resetCache();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')))}l.isMDXComponent=!0}}]);