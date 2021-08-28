"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34454:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>i,toc:()=>l,default:()=>p});var r=t(87462),s=(t(67294),t(3905));const a={title:"Transforming data on fetch",id:"network-transform",original_id:"network-transform"},o=void 0,i={unversionedId:"guides/network-transform",id:"version-4.1/guides/network-transform",isDocsHomePage:!1,title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/versioned_docs/version-4.1/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/docs/4.1/guides/network-transform",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/network-transform.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Transforming data on fetch",id:"network-transform",original_id:"network-transform"},sidebar:"version-4.1/docs",previous:{title:"Authentication",permalink:"/docs/4.1/guides/auth"},next:{title:"Mocking unfinished endpoints",permalink:"/docs/4.1/guides/mocking-unfinished"}},l=[{value:"Snakes to camels",id:"snakes-to-camels",children:[]},{value:"Deserializing fields",id:"deserializing-fields",children:[]},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",children:[]},{value:"Using HTTP Headers",id:"using-http-headers",children:[]},{value:"Name calling",id:"name-calling",children:[]}],c={toc:l};function p({components:e,...n}){return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All network requests flow through the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,s.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,s.kt)("p",null,"Commonly APIs are designed with keys using ",(0,s.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,s.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CamelResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { camelCase, snakeCase } from 'lodash';\nimport { Method, Resource } from 'rest-hooks';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: { [key: string]: any } = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\n// We can now extend CamelResource instead of Resource to build\n// all of our classes.\nabstract class CamelResource extends Resource {\n  static async fetch(\n    method: Method = 'get',\n    url: string,\n    body?: Readonly<object | string>,\n  ) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body) {\n      body = deeplyApplyKeyTransform(body, snakeCase);\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(method, url, body);\n    // do the conversion!\n    return deeplyApplyKeyTransform(jsonResponse, camelCase);\n  }\n}\n")),(0,s.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,s.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,s.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,s.kt)("p",null,"In this case override the ",(0,s.kt)("a",{parentName:"p",href:"../api/resource#static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"fromJS()"),"\nfactory method, transforming the fields you wish to change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  readonly createdAt: Date | null = new Date(0);\n  readonly largeNumber = BigInt(0);\n  // other fields here\n\n  /** MyResource factory. Takes an object of properties to assign to MyResource. */\n  static fromJS<T extends typeof Resource>(\n    this: T,\n    props: Partial<AbstractInstanceType<T>>,\n  ) {\n    return super.fromJS({\n      ...props,\n      createdAt: props.createdAt ? new Date(props.createdAt) : null,\n      largeNumber: BigInt(props.largeNumber):\n    });\n  }\n}\n")),(0,s.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,s.kt)("inlineCode",{parentName:"h2"},"Id")),(0,s.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,s.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,s.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,s.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET https://mystreamsite.tv/ntucker/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"StreamResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nabstract class StreamResource extends CamelResource {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n\n  static detailShape<T extends typeof Resource>(\n    this: T,\n  ): ReadShape<SchemaDetail<AbstractInstanceType<T>>, { username: string }> {\n    const superShape = super.detailShape();\n    return {\n      ...superShape,\n      fetch: async (params: { username: string }, body?: Readonly<object | string>) => {\n        const response = await superShape.fetch(params, body);\n        response.username = params.username;\n        return response;\n      },\n    };\n  }\n}\n")),(0,s.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,s.kt)("p",null,"HTTP ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,s.kt)("a",{parentName:"p",href:"../api/resource#static-fetchresponsemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseresponse"},"Resource.fetchResponse()"),"\ncan be used to construct ",(0,s.kt)("a",{parentName:"p",href:"../api/FetchShape#fetchparams-param-body-payload-promiseany"},"FetchShape.fetch()"),"."),(0,s.kt)("p",null,"Sometimes this is used for cursor based ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.1/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Shape to get a list of entities */\n  static listShape<T extends typeof Resource>(this: T) {\n    const fetch = async (params: Readonly<Record<string, string | number>>) => {\n      const response = await this.fetchResponse('get', this.listUrl(params));\n      return {\n        link: response.headers.get('link'),\n        results: await response.json().catch((error: any) => {\n          error.status = 400;\n          throw error;\n        }),\n      };\n    };\n    return {\n      ...super.listShape(),\n      fetch,\n      schema: { results: [this.asSchema()], link: '' },\n    };\n  }\n}\n")),(0,s.kt)("h2",{id:"name-calling"},"Name calling"),(0,s.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ArticleResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// We're using camelCase now as well ;)\nclass ArticleResource extends CamelResource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly carrotsUsed: number = 0;\n\n  static async fetch(\n    method: Method = 'get',\n    url: string,\n    body?: Readonly<object | string>,\n  ) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body && 'carrotsUsed' in body) {\n      // caller should manage body, so we don't want to modify it\n      body = { ...body };\n      body.carrotsUsedIsThisNameTooLong = body.carrotsUsed;\n      delete body.carrotsUsed;\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(method, url, body);\n    // only replace the name if it exists. This also helps us ignore list responses.\n    if ('carrotsUsedIsThisNameTooLong' in jsonResponse) {\n      // ok to mutate jsonResponse since we control it\n      jsonResponse.carrotsUsed = jsonResponse.carrotsUsedIsThisNameTooLong;\n      delete jsonResponse.carrotsUsedIsThisNameTooLong;\n    }\n    return jsonResponse;\n  }\n}\n")))}p.isMDXComponent=!0}}]);