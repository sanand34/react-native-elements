"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[71400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),O=T.tabGroupChoices,k=T.setTabGroupChoices,E=(0,a.useState)(g),x=E[0],I=E[1],N=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=O[v];null!=j&&j!==x&&h.some((function(e){return e.value===j}))&&I(j)}var _=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==x&&(Z(t),I(r),null!=v&&k(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,i=N.indexOf(e.currentTarget)-1;n=null!=(o=N[i])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:_,onClick:_},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>s});var r=n(67294),a=n(35742),o=n(14330),i=n(98576),l=n(61720),s=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},81195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(37047),l=(n(65488),n(85162),["components"]),s={id:"tabview_item",title:"TabView.Item"},c=void 0,u={unversionedId:"components/tabview_item",id:"version-4.0.0-rc.4/components/tabview_item",title:"TabView.Item",description:"They are individual item of the parent Tab.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/TabView.Item.mdx",sourceDirName:"components",slug:"/components/tabview_item",permalink:"/docs/4.0.0-rc.4/components/tabview_item",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/TabView.Item.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"tabview_item",title:"TabView.Item"},sidebar:"docs",previous:{title:"TabView",permalink:"/docs/4.0.0-rc.4/components/tabview"},next:{title:"Text",permalink:"/docs/4.0.0-rc.4/components/text"}},p={},m=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"They are individual item of the parent Tab."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { TabView } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")))}f.isMDXComponent=!0},61720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);