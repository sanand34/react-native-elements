"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[13416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),i=r(67392),c=r(7094),u=r(12466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,c.U)(),k=O.tabGroupChoices,T=O.setTabGroupChoices,x=(0,a.useState)(w),E=x[0],C=x[1],_=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=k[v];null!=N&&N!==E&&y.some((function(e){return e.value===N}))&&C(N)}var P=function(e){var t=e.currentTarget,r=_.indexOf(t),n=y[r].value;n!==E&&(j(t),C(n),null!=v&&T(v,String(n)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=_.indexOf(e.currentTarget)+1;r=null!=(n=_[a])?n:_[0];break;case"ArrowLeft":var o,l=_.indexOf(e.currentTarget)-1;r=null!=(o=_[l])?o:_[_.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},50728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(65488),r(85162),r(32408),["components"]),i={id:"card_title",title:"Card.Title"},c=void 0,u={unversionedId:"components/card_title",id:"version-4.0.0-rc.1/components/card_title",title:"Card.Title",description:"Add a general title to the Card.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Card.Title.mdx",sourceDirName:"components",slug:"/components/card_title",permalink:"/docs/4.0.0-rc.1/components/card_title",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Card.Title.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"card_title",title:"Card.Title"},sidebar:"docs",previous:{title:"Card.Image",permalink:"/docs/4.0.0-rc.1/components/card_image"},next:{title:"CheckBox",permalink:"/docs/4.0.0-rc.1/components/checkbox"}},s={},p=[{value:"Props",id:"props",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add a general title to the Card.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"text#props"},"Text")," props.")))}m.isMDXComponent=!0}}]);