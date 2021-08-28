"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58598],{58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function({children:e,hidden:t,className:a}){return n.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},55064:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(79443);const o=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(86010);const l="tabItem_1uMI",i="tabItemActive_2DSg";const c=37,d=39;const p=function(e){const{lazy:t,block:a,defaultValue:r,values:p,groupId:u,className:m}=e,{tabGroupChoices:v,setTabGroupChoices:g}=o(),[h,k]=(0,n.useState)(r),b=n.Children.toArray(e.children),f=[];if(null!=u){const e=v[u];null!=e&&e!==h&&p.some((t=>t.value===e))&&k(e)}const y=e=>{const t=e.currentTarget,a=f.indexOf(t),n=p[a].value;k(n),null!=u&&(g(u,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&r<=s&&n<=o&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},x=e=>{var t;let a;switch(e.keyCode){case d:{const t=f.indexOf(e.target)+1;a=f[t]||f[0];break}case c:{const t=f.indexOf(e.target)-1;a=f[t]||f[f.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":h===e}),key:e,ref:e=>f.push(e),onKeyDown:x,onFocus:y,onClick:y},t)))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},79443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(55064),r=a(58215),o=a(67294),s=a(67934);function l({pkgs:e,dev:t=!1}){return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(r.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),o.createElement(r.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(28953);const o={React:n,...n,...r}},57810:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(55064),s=a(58215),l=a(96497);const i={id:"installation",title:"Installation"},c=void 0,d={unversionedId:"getting-started/installation",id:"version-5.0/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/versioned_docs/version-5.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/5.0/getting-started/installation",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630099958,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"installation",title:"Installation"}},p=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",children:[]}],u={toc:p};function m({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{pkgs:"rest-hooks @rest-hooks/rest @rest-hooks/test",mdxType:"PkgTabs"}),(0,r.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,r.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,r.kt)(o.Z,{defaultValue:"web",groupId:"platform",values:[{label:"Web",value:"web"},{label:"Concurrent mode",value:"concurrent"},{label:"React Native",value:"native"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,r.kt)(s.Z,{value:"concurrent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,r.kt)(s.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n")))),(0,r.kt)("p",null,"Alternatively ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/guides/redux"},"integrate state with redux")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Legacy (IE) browser support")),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}m.isMDXComponent=!0}}]);