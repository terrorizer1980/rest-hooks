"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},55064:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),o=r(79443);const s=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var a=r(86010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,u=39;const p=function(e){const{lazy:t,block:r,defaultValue:o,values:p,groupId:d,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:y}=s(),[k,b]=(0,n.useState)(o),g=n.Children.toArray(e.children),h=[];if(null!=d){const e=f[d];null!=e&&e!==k&&p.some((t=>t.value===e))&&b(e)}const v=e=>{const t=e.currentTarget,r=h.indexOf(t),n=p[r].value;b(n),null!=d&&(y(d,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:o}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:a}=window;return t>=0&&o<=a&&n<=s&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},x=e=>{var t;let r;switch(e.keyCode){case u:{const t=h.indexOf(e.target)+1;r=h[t]||h[0];break}case c:{const t=h.indexOf(e.target)-1;r=h[t]||h[h.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":k===e}),key:e,ref:e=>h.push(e),onKeyDown:x,onFocus:v,onClick:v},t)))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},59612:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>f});var n=r(87462),o=(r(67294),r(3905)),s=r(55064),a=r(58215);const i={title:"Mocking data for Storybook"},l=void 0,c={unversionedId:"guides/storybook",id:"version-5.0/guides/storybook",isDocsHomePage:!1,title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/versioned_docs/version-5.0/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/guides/storybook",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/guides/storybook.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Mocking data for Storybook"},sidebar:"version-5.0/docs",previous:{title:"Debugging",permalink:"/docs/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/guides/unit-testing-hooks"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Fixtures",id:"fixtures",children:[]},{value:"Decorators",id:"decorators",children:[]},{value:"Story",id:"story",children:[]}],p=(d="MockResolver",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:u};function f({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/MockResolver"},"\\",(0,o.kt)(p,{mdxType:"MockResolver"}))," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"../api/useFetcher"},"imperative fetches")," like ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(s.Z,{defaultValue:"ArticleResource.ts",values:[{label:"ArticleResource.ts",value:"ArticleResource.ts"},{label:"ArticleList.tsx",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,o.kt)(a.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ArticleResource from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useResource(ArticleResource.list(), { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("b",null,"fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n    {\n      endpoint: ArticleResource.update(),\n      args: [{ id: 532 }] as const,\n      response: {\n        id: 532,\n        content: 'updated \"never again\"',\n        author: 23,\n        contributors: [5],\n      },\n    },\n  ],\n  empty: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [],\n    },\n  ],\n  error: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: { message: 'Bad request', status: 400, name: 'Not Found' },\n      error: true,\n    },\n  ],\n  loading: [],\n};\n"))),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("h4",{id:"storybookpreviewtsx"},(0,o.kt)("inlineCode",{parentName:"h4"},".storybook/preview.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <Suspense fallback=\"loading\">\n        <NetworkErrorBoundary>\n          <Story />\n        </NetworkErrorBoundary>\n      </Suspense>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with \\",(0,o.kt)(p,{mdxType:"MockResolver"})," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("h4",{id:"articleliststoriestsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ArticleList.stories.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport options from './fixtures';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(options),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}f.isMDXComponent=!0},86010:(e,t,r)=>{function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);