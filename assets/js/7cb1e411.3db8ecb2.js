"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),c=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,p=e.defaultValue,f=e.values,v=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,a.useState)(k),C=T[0],O=T[1],x=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==C&&y.some((function(e){return e.value===D}))&&O(D)}var _=function(e){var t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==C&&(Z(t),O(r),null!=v&&E(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;n=null!=(l=x[o])?l:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var r=n(67294),a=n(35742),l=n(14330),o=n(98576),i=n(61720),u=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(63366),a=n(87462),l=n(67294),o=n(10407),i=n(86010),u=(n(95999),n(52263)),c=n(91262),s=n(66412);const d="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",g="showCode_O0Od";var b=n(72389),y=n(5434),h=["children","transformCode"];function k(){return l.createElement("div",null,"Loading...")}function N(e){var t=(0,b.Z)(),n=(0,l.useContext)(o.L2),r=n.code,i=n.language,u=n.theme,c=n.disabled,s=n.onChange;return l.createElement(o.uz,(0,a.Z)({key:String(t),code:r,language:i,theme:u,disabled:c,onChange:s},e,{className:m}))}function w(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,l.useState(t)),u=a[0],s=a[1],d=function(){s((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(c.Z,{fallback:l.createElement(k,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:f},l.createElement("div",{className:(0,i.Z)(v),onClick:d},l.createElement(y.xoN,null),l.createElement("span",{className:g},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(N,{preImports:r,showCode:u}))}function E(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,h)),i=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return l.createElement("div",{className:d},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(w,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(32408),l=n(13925),o=n(77321),i=n(83279);const u=Object.assign({React:r,LinearGradient:i.Z},a,l,o,r)},93147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>f});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(65488),n(85162),n(96711)),u=n(47516),c=["components"],s={id:"dialog_title",title:"Dialog.Title"},d=void 0,m={unversionedId:"components/dialog_title",id:"components/dialog_title",title:"Dialog.Title",description:"DialogTitle allows you to add title to the Dialog.",source:"@site/docs/components/Dialog.Title.mdx",sourceDirName:"components",slug:"/components/dialog_title",permalink:"/docs/next/components/dialog_title",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Dialog.Title.mdx",tags:[],version:"current",frontMatter:{id:"dialog_title",title:"Dialog.Title"},sidebar:"docs",previous:{title:"Dialog.Loading",permalink:"/docs/next/components/dialog_loading"},next:{title:"Divider",permalink:"/docs/next/components/divider"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DialogTitle")," allows you to add title to the Dialog."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { Dialog } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"DialogTitle"))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add Dialog title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleProps")),(0,l.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add additional props for Text component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add additional styling for title component."))))))}g.isMDXComponent=!0}}]);