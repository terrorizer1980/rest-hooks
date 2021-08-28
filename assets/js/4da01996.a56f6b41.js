"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33318],{58215:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const s=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),s=n(79443);const o=function(){const e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=n(86010);const l="tabItem_1uMI",i="tabItemActive_2DSg";const d=37,u=39;const c=function(e){const{lazy:t,block:n,defaultValue:s,values:c,groupId:m,className:p}=e,{tabGroupChoices:g,setTabGroupChoices:h}=o(),[k,f]=(0,a.useState)(s),v=a.Children.toArray(e.children),b=[];if(null!=m){const e=g[m];null!=e&&e!==k&&c.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.currentTarget,n=b.indexOf(t),a=c[n].value;f(a),null!=m&&(h(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:s}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&s<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case d:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},p)},c.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":k===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(55064),s=n(58215),o=n(67294),r=n(67934);function l({pkgs:e,dev:t=!1}){return o.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(s.Z,{value:"yarn"},o.createElement(r.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),o.createElement(s.Z,{value:"npm"},o.createElement(r.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),s=n(28953);const o={React:a,...a,...s}},32459:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>i,toc:()=>d,default:()=>c});var a=n(87462),s=(n(67294),n(3905)),o=n(96497);const r={title:"Usage without Suspense"},l=void 0,i={unversionedId:"guides/no-suspense",id:"version-5.0/guides/no-suspense",isDocsHomePage:!1,title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-5.0/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/5.0/guides/no-suspense",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Usage without Suspense"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Hook usage",id:"hook-usage",children:[]},{value:"API",id:"api",children:[]}],u={toc:d};function c({components:e,...t}){return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Some libraries you work with may take a ",(0,s.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,s.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(o.Z,{pkgs:"@rest-hooks/legacy",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,s.kt)("h4",{id:"resourcesprofileresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,s.kt)("h4",{id:"profilelisttsx"},(0,s.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null\n  ): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}c.isMDXComponent=!0}}]);