"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[39570],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,l(l({ref:e},d),{},{components:n})):a.createElement(f,l({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),c=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function m(t){var e,n,l=t.lazy,m=t.block,p=t.defaultValue,f=t.values,b=t.groupId,k=t.className,v=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,i.l)(g,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(e=null!=p?p:null==(n=v.find((function(t){return t.props.default})))?void 0:n.props.value)?e:v[0].props.value;if(null!==y&&!g.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),I=h.tabGroupChoices,w=h.setTabGroupChoices,C=(0,r.useState)(y),x=C[0],L=C[1],O=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=I[b];null!=E&&E!==x&&g.some((function(t){return t.value===E}))&&L(E)}var D=function(t){var e=t.currentTarget,n=O.indexOf(e),a=g[n].value;a!==x&&(T(e),L(a),null!=b&&w(b,String(a)))},A=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a,r=O.indexOf(t.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(t.currentTarget)-1;n=null!=(o=O[l])?o:O[O.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return O.push(t)},onKeyDown:A,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),l?(0,r.cloneElement)(v.filter((function(t){return t.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function p(t){var e=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(e)},t))}},37047:(t,e,n)=>{n.d(e,{w:()=>s});var a=n(67294),r=n(35742),o=n(14330),l=n(98576),i=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},68323:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>b});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(37047),i=(n(65488),n(85162),["components"]),s={toc:[]};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/accorsion.gif",width:"500"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<ListItem.Accordion\n  content={\n    <>\n      <Icon name="place" size={30} />\n      <ListItem.Content>\n        <ListItem.Title>List Accordion</ListItem.Title>\n      </ListItem.Content>\n    </>\n  }\n  isExpanded={expanded}\n  onPress={() => {\n    setExpanded(!expanded);\n  }}\n>\n  {list2.map((l, i) => (\n    <ListItem key={i} onPress={log} bottomDivider>\n      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />\n      <ListItem.Content>\n        <ListItem.Title>{l.name}</ListItem.Title>\n        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n      </ListItem.Content>\n      <ListItem.Chevron />\n    </ListItem>\n  ))}\n</ListItem.Accordion>\n')))}c.isMDXComponent=!0;var d=["components"],u={id:"listitem_accordion",title:"ListItem.Accordion"},m=void 0,p={unversionedId:"components/listitem_accordion",id:"version-4.0.0-rc.5/components/listitem_accordion",title:"ListItem.Accordion",description:"This allows making a accordion list which can show/hide content.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/ListItem.Accordion.mdx",sourceDirName:"components",slug:"/components/listitem_accordion",permalink:"/docs/4.0.0-rc.5/components/listitem_accordion",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/ListItem.Accordion.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"listitem_accordion",title:"ListItem.Accordion"},sidebar:"docs",previous:{title:"ListItem",permalink:"/docs/4.0.0-rc.5/components/listitem"},next:{title:"ListItem.ButtonGroup",permalink:"/docs/4.0.0-rc.5/components/listitem_buttongroup"}},f={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],k={toc:b};function v(t){var e=t.components,n=(0,r.Z)(t,d);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"This allows making a accordion list which can show/hide content."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(c,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"listitem#props"},"ListItem")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animation")),(0,o.kt)("td",{parentName:"tr",align:null},"Animated.TimingAnimationConfig"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Object with duration 350ms and type timing")),(0,o.kt)("td",{parentName:"tr",align:null},"Decide whether to show animation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"content")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to ListItem's child.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expandIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Icon when Accordion is expanded, if not provided ",(0,o.kt)("inlineCode",{parentName:"td"},"icon")," will be rotated 180deg.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<Icon name={'chevron-down'} type=\"material-community\" />")),(0,o.kt)("td",{parentName:"tr",align:null},"Icon for unexpanded Accordion.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isExpanded")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Decide if Accordion is Expanded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"leftRotate")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Rotate Icon left side")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"noIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Don't show accordion icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"noRotation")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Don't rotate when Accordion is expanded."))))))}v.isMDXComponent=!0},61720:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);