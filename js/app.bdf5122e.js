(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f87472f0"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ivann/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0b19":function(t,e,n){},"155d":function(t,e,n){"use strict";var a=n("5802"),i=n.n(a);i.a},"16ca":function(t,e,n){},2954:function(t,e,n){},3510:function(t,e,n){"use strict";var a=n("9161"),i=n.n(a);i.a},"3de2":function(t,e,n){},5454:function(t,e,n){"use strict";var a=n("859c"),i=n.n(a);i.a},5569:function(t,e,n){"use strict";var a=n("3de2"),i=n.n(a);i.a},5802:function(t,e,n){},"739f":function(t,e,n){"use strict";var a=n("f459"),i=n.n(a);i.a},7403:function(t,e,n){"use strict";var a=n("16ca"),i=n.n(a);i.a},"766e":function(t,e,n){},"78a7":function(t,e,n){},"847c":function(t,e,n){},"859c":function(t,e,n){},"85ec":function(t,e,n){},"88e6":function(t,e,n){"use strict";var a=n("2954"),i=n.n(a);i.a},"8b3c":function(t,e,n){"use strict";var a=n("0b19"),i=n.n(a);i.a},9161:function(t,e,n){},"91e7":function(t,e,n){},"99e8":function(t,e,n){},ba97:function(t,e,n){},c53b:function(t,e,n){"use strict";var a=n("847c"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("0c30"),i=(n("87e6"),n("15f5"),n("7051"),n("78a7"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=n("d4ec"),c=n("262e"),u=n("2caf"),l=n("60a3"),d=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]),p=d,v=(n("034f"),n("2877")),f=Object(v["a"])(p,o,r,!1,null,null,null),b=f.exports,O=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container-fluid d-flex flex-column"},[n("Titlebar"),n("div",{staticClass:"row flex-grow-1"},[n("div",{staticClass:"navbar-col"},[n("Navbar")],1),n("div",{staticClass:"col d-flex flex-column p-0"},[n("Editor")],1)])],1)},m=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left d-flex flex-column h-100 text-center"},[a("div",{staticClass:"build pt-4 pb-2"},[a("i",{staticClass:"fas fa-hammer tab-icon"})]),a("div",{staticClass:"py-1 px-2"},[a("hr")]),a("div",{staticClass:"model py-2"},[a("img",{staticClass:"navbar-logo tab-icon",attrs:{src:n("da7c"),alt:"IVANN"}})]),a("div",{staticClass:"py-1 px-2"},[a("hr")]),a("div",{staticClass:"data py-2"},[a("i",{staticClass:"fas fa-database tab-icon"})]),a("div",{staticClass:"py-1 px-2"},[a("hr")]),a("div",{staticClass:"train py-2"},[a("i",{staticClass:"fas fa-cogs tab-icon"})])])}],y=n("9ab4"),x=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);x=Object(y["a"])([Object(l["a"])({})],x);var _=x,w=_,k=(n("f6e4"),Object(v["a"])(w,j,g,!1,null,"b032d092",null)),C=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex flex-column"},[n("Resizable",{staticClass:"row"},[n("div",{staticClass:"px-0 canvas-frame"},[0===t.$store.state.editor?n("Canvas",{attrs:{editor:t.manager.modelBaklavaEditor}}):1===t.$store.state.editor?n("Canvas",{attrs:{editor:t.manager.dataBaklavaEditor}}):2===t.$store.state.editor?n("Canvas",{attrs:{editor:t.manager.trainBaklavaEditor}}):3===t.$store.state.editor?n("Canvas",{attrs:{editor:t.manager.overviewBaklavaEditor}}):t._e()],1),n("Resizer"),n("div",{staticClass:"px-0 flex-grow-1"},[n("Sidebar")],1)],1)],1)},N=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("Tabs",[n("Tab",{attrs:{name:"Layers"}},[n("LayersTab")],1),n("Tab",{attrs:{name:"Search"}},[n("SearchTab")],1)],1)],1)},D=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100"},[n("div",{staticClass:"tabs"},t._l(t.tabs,(function(e,a){return n("div",{key:a,staticClass:"tab-head",class:a===t.selected&&"selected",on:{click:function(e){return t.selectTab(a)}}},[t._v(" "+t._s(e.name)+" ")])})),0),n("div",{staticClass:"tab-content"},[t._t("default")],2)])},P=[],S=(n("4160"),n("159b"),n("bee2")),V=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.tabs=t.$children,t.selected=0,t}return Object(S["a"])(n,[{key:"selectTab",value:function(t){this.selected=t,this.tabs.forEach((function(e,n){e.setVisible(n===t)}))}},{key:"mounted",value:function(){this.tabs[0].setVisible(!0)}}]),n}(l["c"]);V=Object(y["a"])([l["a"]],V);var B=V,T=B,R=(n("c53b"),Object(v["a"])(T,$,P,!1,null,"5a966caa",null)),z=R.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{},[t._t("default")],2):t._e()},M=[],L=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.visible=!1,t}return Object(S["a"])(n,[{key:"setVisible",value:function(t){this.visible=t}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],L.prototype,"name",void 0),L=Object(y["a"])([l["a"]],L);var W=L,F=W,G=Object(v["a"])(F,A,M,!1,null,null,null),U=G.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layers-tab"},[n("ExpandablePanel",{attrs:{name:"Linear"}},[n("ButtonGrid",[n("AddNodeButton",{attrs:{node:"Dense",name:"Dense"}})],1)],1),n("ExpandablePanel",{attrs:{name:"Convolutional"}},[n("ButtonGrid",[n("AddNodeButton",{attrs:{node:"Convolution2D",name:"Conv2D"}})],1)],1),n("ExpandablePanel",{attrs:{name:"Pooling"}},[n("ButtonGrid",[n("AddNodeButton",{attrs:{node:"MaxPooling2D",name:"MaxPool2D"}})],1)],1),n("ExpandablePanel",{attrs:{name:"Regularization"}},[n("ButtonGrid",[n("AddNodeButton",{attrs:{node:"Dropout",name:"Dropout"}})],1)],1),n("ExpandablePanel",{attrs:{name:"Reshaping"}},[n("ButtonGrid",[n("AddNodeButton",{attrs:{node:"Flatten",name:"Flatten"}})],1)],1)],1)},q=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"header",on:{click:t.toggleOpen}},[t._v(" "+t._s(t.name)+" ")]),t.open?t._t("default"):t._e()],2)},J=[],K=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.open=!1,t}return Object(S["a"])(n,[{key:"toggleOpen",value:function(){this.open=!this.open}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])({required:!0})],K.prototype,"name",void 0),K=Object(y["a"])([l["a"]],K);var H=K,Q=H,Y=(n("5569"),Object(v["a"])(Q,Z,J,!1,null,"6aa0f21d",null)),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node-button",on:{click:t.addNode}},[n("div",{staticClass:"icon"},[t._t("default")],2),n("div",{staticClass:"name",style:"font-size: "+t.fontSize+"em"},[t._v(t._s(t.name))])])},nt=[],at=(n("b0c0"),n("dac5")),it=n("dba4"),ot=n.n(it),rt=function(){function t(){Object(s["a"])(this,t),this.model=new at["Editor"],this.train=new at["Editor"],this.data=new at["Editor"],this.overview=new at["Editor"]}return Object(S["a"])(t,[{key:"addNode",value:function(t,e){var n;switch(e){case ot.a.MODEL:n=this.model;break;case ot.a.DATA:n=this.data;break;case ot.a.TRAIN:n=this.train;break;case ot.a.OVERVIEW:n=this.overview;break;default:n=this.model}var a=n.nodeTypes.get(t);void 0===a?console.error("Undefined Node Type: ".concat(t)):n.addNode(new a)}},{key:"overviewBaklavaEditor",get:function(){return this.overview}},{key:"dataBaklavaEditor",get:function(){return this.data}},{key:"trainBaklavaEditor",get:function(){return this.train}},{key:"modelBaklavaEditor",get:function(){return this.model}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}(),st=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.fontSize=1,t}return Object(S["a"])(n,[{key:"created",value:function(){var t=(this.name.length-10)/3;t>0&&(t>3&&(t=3),this.fontSize-=.15*t)}},{key:"addNode",value:function(){rt.getInstance().addNode(this.node,this.$store.state.editor)}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])({required:!0})],st.prototype,"node",void 0),Object(y["a"])([Object(l["b"])()],st.prototype,"name",void 0),st=Object(y["a"])([Object(l["a"])({})],st);var ct=st,ut=ct,lt=(n("fb62"),Object(v["a"])(ut,et,nt,!1,null,"7cbc1e54",null)),dt=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-grid"},[t._t("default",[t._v("Add your buttons here.")])],2)},vt=[],ft=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);ft=Object(y["a"])([Object(l["a"])({})],ft);var bt,Ot,ht,mt,jt,gt,yt,xt=ft,_t=xt,wt=(n("739f"),Object(v["a"])(_t,pt,vt,!1,null,"32747298",null)),kt=wt.exports,Ct=(bt=Object(l["a"])({components:{ExpandablePanel:tt,AddNodeButton:dt,ButtonGrid:kt}}),bt(Ot=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]))||Ot),Et=Ct,Nt=Object(v["a"])(Et,X,q,!1,null,null,null),It=Nt.exports,Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-tab h-100"},[n("h3",[t._v("Search...")])])}],Pt=Object(l["a"])(ht=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]))||ht,St=Pt,Vt=Object(v["a"])(St,Dt,$t,!1,null,"8bfae07e",null),Bt=Vt.exports,Tt=(mt=Object(l["a"])({components:{SearchTab:Bt,LayersTab:It,Tab:U,Tabs:z}}),mt(jt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]))||jt),Rt=Tt,zt=(n("3510"),Object(v["a"])(Rt,I,D,!1,null,"833b4fd0",null)),At=zt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas h-100"},[n("baklava-editor",{attrs:{plugin:t.viewPlugin}})],1)},Lt=[],Wt=n("9f16");(function(t){t["Linear"]="Linear",t["Conv"]="Convolution",t["Pool"]="Pooling",t["Regularization"]="Regularization",t["Reshape"]="Reshaping"})(gt||(gt={})),function(t){t["Dense"]="Dense",t["Conv2D"]="Convolution2D",t["MaxPool2D"]="MaxPooling2D",t["Dropout"]="Dropout",t["Flatten"]="Flatten"}(yt||(yt={}));var Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles,attrs:{id:t.data.id}},[n("div",{style:t.titleBackground,attrs:{id:"header"},on:{mousedown:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.startDrag(e))},contextmenu:function(e){return e.target!==e.currentTarget?null:(e.preventDefault(),t.openContextMenu(e))}}},[t.renaming?n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempName,expression:"tempName"},{name:"click-outside",rawName:"v-click-outside",value:t.doneRenaming,expression:"doneRenaming"}],staticClass:"dark-input",attrs:{type:"text",placeholder:"Node Name"},domProps:{value:t.tempName},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneRenaming(e)},input:function(e){e.target.composing||(t.tempName=e.target.value)}}}):n("span",[t._v(" "+t._s(t.data.name)+" "),n("ArrowButton",{attrs:{id:"arrow-button",initialUp:!0},on:{"arrow-button-clicked":t.toggleShouldShowOptions}})],1),n(t.plugin.components.contextMenu,{tag:"component",attrs:{x:t.contextMenu.x,y:t.contextMenu.y,items:t.contextMenu.items},on:{click:t.onContextMenu},model:{value:t.contextMenu.show,callback:function(e){t.$set(t.contextMenu,"show",e)},expression:"contextMenu.show"}})],1),n("div",{staticClass:"__content",attrs:{id:"content"}},[n("div",{staticClass:"__outputs"},t._l(t.data.outputInterfaces,(function(e,a){return n(t.plugin.components.nodeInterface,{key:e.id,tag:"component",attrs:{name:a,data:e}})})),1),t.shouldShowOptions?n("div",{staticClass:"__options"},[t._l(t.data.options,(function(e){var a=e[0],i=e[1];return[n(t.plugin.components.nodeOption,{key:a,tag:"component",attrs:{name:a,option:i,componentName:i.optionComponent,node:t.data},on:{openSidebar:function(e){return t.openSidebar(a)}}}),t.plugin.sidebar.nodeId===t.data.id&&t.plugin.sidebar.optionName===a&&i.sidebarComponent?n("portal",{key:"sb_"+a,attrs:{to:"sidebar"}},[n(t.plugin.components.nodeOption,{key:t.data.id+a,tag:"component",attrs:{name:a,option:i,componentName:i.sidebarComponent,node:t.data}})],1):t._e()]}))],2):t._e(),n("div",{staticClass:"__inputs"},t._l(t.data.inputInterfaces,(function(e,a){return n(t.plugin.components.nodeInterface,{key:e.id,tag:"component",attrs:{name:a,data:e}})})),1)])])},Gt=[],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.onClick}},[t.up?n("div",[t._v("▲")]):n("div",[t._v("▼")])])},Xt=[],qt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.up=t.initialUp,t}return Object(S["a"])(n,[{key:"onClick",value:function(){this.up=!this.up,this.$emit("arrow-button-clicked")}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])({default:!0})],qt.prototype,"initialUp",void 0),qt=Object(y["a"])([l["a"]],qt);var Zt=qt,Jt=Zt,Kt=Object(v["a"])(Jt,Ut,Xt,!1,null,null,null),Ht=Kt.exports,Qt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.shouldShowOptions=!1,t}return Object(S["a"])(n,[{key:"toggleShouldShowOptions",value:function(){this.shouldShowOptions=!this.shouldShowOptions}},{key:"titleBackground",get:function(){switch(this.data.type){case gt.Linear:return{background:"var(--black)"};case gt.Conv:return{background:"var(--blue)"};case gt.Pool:return{background:"var(--red)"};case gt.Regularization:return{background:"var(--pink)"};case gt.Reshape:return{background:"var(--green)"};default:return{background:"var(--black)"}}}}]),n}(a["Components"].Node);Qt=Object(y["a"])([Object(l["a"])({components:{ArrowButton:Ht}})],Qt);var Yt,te,ee=Qt,ne=ee,ae=(n("fc7f"),Object(v["a"])(ne,Ft,Gt,!1,null,"f1db423a",null)),ie=ae.exports;(function(t){t[t["Valid"]=0]="Valid",t[t["Same"]=1]="Same"})(Yt||(Yt={})),function(t){t[t["Zeroes"]=0]="Zeroes",t[t["Ones"]=1]="Ones",t[t["Xavier"]=2]="Xavier"}(te||(te={}));var oe,re;(function(t){t[t["None"]=0]="None"})(oe||(oe={})),function(t){t[t["None"]=0]="None",t[t["Relu"]=1]="Relu",t[t["Tanh"]=2]="Tanh",t[t["Sigmoid"]=3]="Sigmoid",t[t["Linear"]=4]="Linear"}(re||(re={}));n("4de4"),n("07ac"),n("ac1f"),n("25f0"),n("5319");function se(t){return Object.values(t).filter((function(t){return"string"===typeof t}))}var ce=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.type=gt.Conv,t.name=yt.Conv2D,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Filters","IntegerOption",1),t.addOption("Kernel Size","VectorOption",[1,1]),t.addOption("Stride","VectorOption",[1,1]),t.addOption("Padding","DropdownOption","Valid",void 0,{items:se(Yt)}),t.addOption("Activation","DropdownOption","None",void 0,{items:se(re)}),t.addOption("Use Bias","CheckboxOption",!0),t.addOption("Weights Initializer","DropdownOption","Xavier",void 0,{items:se(te)}),t.addOption("Bias Initializer","DropdownOption","Zeros",void 0,{items:se(te)}),t.addOption("Bias Regularizer","DropdownOption","None",void 0,{items:se(oe)}),t.addOption("Weights Regularizer","DropdownOption","None",void 0,{items:se(oe)}),t}return n}(at["Node"]),ue=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.type=gt.Pool,t.name=yt.MaxPool2D,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Kernel Size","VectorOption",[1,1]),t.addOption("Stride","VectorOption",[1,1]),t.addOption("Padding","DropdownOption","Valid",void 0,{items:se(Yt)}),t}return n}(at["Node"]),le=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.type=gt.Linear,t.name=yt.Dense,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Size","IntegerOption",1),t.addOption("Activation","DropdownOption","None",void 0,{items:se(re)}),t.addOption("Use Bias","CheckboxOption",!0),t.addOption("Weights Initializer","DropdownOption","Xavier",void 0,{items:se(te)}),t.addOption("Bias Initializer","DropdownOption","Zeros",void 0,{items:se(te)}),t.addOption("Bias Regularizer","DropdownOption","None",void 0,{items:se(oe)}),t.addOption("Weights Regularizer","DropdownOption","None",void 0,{items:se(oe)}),t}return n}(at["Node"]),de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-sm-flex"},[n("div",{staticClass:"ml-1"},[t._v(t._s(t.name))]),t._l(t.value,(function(e,a){return n("div",{key:a,staticClass:"d-sm-flex"},[a>0?n("span",[t._v(",")]):t._e(),n("IntegerInc",{attrs:{index:a,value:e},on:{"value-change":t.updateValue}})],1)}))],2)},pe=[],ve=n("2909"),fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"box",attrs:{tabindex:"1"}},[t.edit?t._e():n("div",{ref:"text",staticClass:"text-display",on:{click:t.editOn}},[t._v(" "+t._s(t.value)+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editValue,expression:"editValue"},{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],ref:"input",style:"width: "+t.inputBoxWidth+"px",attrs:{tabindex:"0"},domProps:{value:t.editValue},on:{focus:function(t){return t.target.select()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},focusout:t.focusOut,input:function(e){e.target.composing||(t.editValue=e.target.value)}}}),n("div",{staticClass:"buttons"},[n("div",{staticClass:"inc-button",on:{click:t.increment}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"4",viewBox:"0 0 7 4"}},[n("line",{attrs:{x1:"0.5",y1:"4",x2:"3.5",y2:"1",fill:"none",stroke:"#202020","stroke-width":"1"}}),n("line",{attrs:{x1:"6",x2:"3",y1:"4",y2:"1",fill:"none",stroke:"#202020","stroke-width":"1"}})])]),n("div",{staticClass:"inc-button",on:{click:t.decrement}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"4",viewBox:"0 0 7 4"}},[n("line",{attrs:{x1:"0.5",y2:"3",x2:"3.5",fill:"none",stroke:"#202020","stroke-width":"1"}}),n("line",{attrs:{x1:"6",x2:"3",y2:"3",fill:"none",stroke:"#202020","stroke-width":"1"}})])])])])},be=[],Oe=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.edit=!1,t.editValue="",t.inputBoxWidth=0,t}return Object(S["a"])(n,[{key:"increment",value:function(){this.$emit("value-change",this.value+1,this.index)}},{key:"decrement",value:function(){this.$emit("value-change",this.value-1,this.index)}},{key:"updateValue",value:function(){this.$emit("value-change",parseInt(this.editValue,10),this.index)}},{key:"focusOut",value:function(){this.updateValue(),this.toggle()}},{key:"enter",value:function(){this.$refs.box.focus(),this.updateValue()}},{key:"editOn",value:function(){var t=this;this.editValue=this.value.toString(),this.inputBoxWidth=this.$refs.text.clientWidth,this.toggle(),this.$nextTick((function(){t.$refs.input.focus()}))}},{key:"toggle",value:function(){this.edit=!this.edit}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],Oe.prototype,"value",void 0),Object(y["a"])([Object(l["b"])()],Oe.prototype,"index",void 0),Oe=Object(y["a"])([l["a"]],Oe);var he=Oe,me=he,je=(n("5454"),Object(v["a"])(me,fe,be,!1,null,"4762c9d5",null)),ge=je.exports,ye=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(S["a"])(n,[{key:"updateValue",value:function(t,e){var n=Object(ve["a"])(this.value);n[e]=t,this.$emit("input",n)}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],ye.prototype,"value",void 0),Object(y["a"])([Object(l["b"])({type:String})],ye.prototype,"name",void 0),ye=Object(y["a"])([Object(l["a"])({components:{IntegerInc:ge}})],ye);var xe=ye,_e=xe,we=Object(v["a"])(_e,de,pe,!1,null,null,null),ke=we.exports,Ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-sm-flex"},[n("div",{staticClass:"ml-1"},[t._v(t._s(t.name))]),n("IntegerInc",{attrs:{index:0,value:this.value},on:{"value-change":t.updateValue}})],1)},Ee=[],Ne=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(S["a"])(n,[{key:"updateValue",value:function(t){this.$emit("input",t)}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],Ne.prototype,"value",void 0),Object(y["a"])([Object(l["b"])({type:String})],Ne.prototype,"name",void 0),Ne=Object(y["a"])([Object(l["a"])({components:{IntegerInc:ge}})],Ne);var Ie=Ne,De=Ie,$e=Object(v["a"])(De,Ce,Ee,!1,null,null,null),Pe=$e.exports,Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-sm-flex"},[n("div",{staticClass:"ml-1"},[t._v(t._s(t.name))]),n("DropdownInput",{attrs:{value:t.value,items:this.items},on:{"value-change":t.updateValue}})],1)},Ve=[],Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"button d-sm-flex",on:{click:t.toggleOpen}},[t._v(" "+t._s(t.value)+" "),n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"4",viewBox:"0 0 7 4"}},[n("line",{attrs:{x1:"0.5",y2:"3",x2:"3.5",fill:"none",stroke:"#202020","stroke-width":"1"}}),n("line",{attrs:{x1:"6",x2:"3",y2:"3",fill:"none",stroke:"#202020","stroke-width":"1"}})])])]),t.open?n("div",{staticClass:"dropdown-container"},t._l(t.items,(function(e){return n("div",{key:e,staticClass:"dropdown-option",class:e===t.value&&"dropdown-selected",on:{click:function(n){return t.select(e)}}},[t._v(t._s(e)+" ")])})),0):t._e()])},Te=[],Re=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.open=!1,t}return Object(S["a"])(n,[{key:"toggleOpen",value:function(){this.open=!this.open}},{key:"select",value:function(t){this.$emit("value-change",t),this.toggleOpen()}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],Re.prototype,"value",void 0),Object(y["a"])([Object(l["b"])()],Re.prototype,"items",void 0),Re=Object(y["a"])([l["a"]],Re);var ze=Re,Ae=ze,Me=(n("7403"),Object(v["a"])(Ae,Be,Te,!1,null,"aaf87310",null)),Le=Me.exports,We=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.items=t.option.items||[],t}return Object(S["a"])(n,[{key:"updateValue",value:function(t){this.$emit("input",t)}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])()],We.prototype,"value",void 0),Object(y["a"])([Object(l["b"])({type:String})],We.prototype,"name",void 0),Object(y["a"])([Object(l["b"])({type:Object})],We.prototype,"option",void 0),We=Object(y["a"])([Object(l["a"])({components:{DropdownInput:Le,IntegerInc:ge}})],We);var Fe=We,Ge=Fe,Ue=Object(v["a"])(Ge,Se,Ve,!1,null,null,null),Xe=Ue.exports,qe=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.type=gt.Reshape,t.name=yt.Flatten,t.addInputInterface("Input"),t.addOutputInterface("Output"),t}return n}(at["Node"]),Ze=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.type=gt.Regularization,t.name=yt.Dropout,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Probability","SliderOption",.5,void 0,{min:0,max:1}),t}return n}(at["Node"]),Je=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.optionPlugin=new Wt["OptionPlugin"],t.viewPlugin=new a["ViewPlugin"],t}return Object(S["a"])(n,[{key:"created",value:function(){this.editor.use(this.optionPlugin),this.editor.use(this.viewPlugin),this.viewPlugin.components.node=ie,this.viewPlugin.registerOption("VectorOption",ke),this.viewPlugin.registerOption("IntegerOption",Pe),this.viewPlugin.registerOption("DropdownOption",Xe),this.editor.registerNodeType(yt.Dense,le,gt.Linear),this.editor.registerNodeType(yt.Conv2D,ce,gt.Conv),this.editor.registerNodeType(yt.MaxPool2D,ue,gt.Pool),this.editor.registerNodeType(yt.Dropout,Ze,gt.Regularization),this.editor.registerNodeType(yt.Flatten,qe,gt.Reshape)}}]),n}(l["c"]);Object(y["a"])([Object(l["b"])({required:!0})],Je.prototype,"editor",void 0),Je=Object(y["a"])([l["a"]],Je);var Ke=Je,He=Ke,Qe=Object(v["a"])(He,Mt,Lt,!1,null,"5b7120db",null),Ye=Qe.exports,tn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resizer"},[t._t("default")],2)},en=[],nn=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);nn=Object(y["a"])([Object(l["a"])({})],nn);var an=nn,on=an,rn=(n("e1a3"),Object(v["a"])(on,tn,en,!1,null,null,null)),sn=rn.exports,cn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resizable",on:{mousedown:t.resize}},[t._t("default")],2)},un=[],ln=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(S["a"])(n,[{key:"resize",value:function(t){var e=this,n=t.target,a=t.pageX;if("resizer"===n.className){var i=n.previousElementSibling,o=i.offsetWidth,r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=t+n;i.style.width="".concat(100*a/e.$el.clientWidth,"%")},s=function(t){r(o,t.pageX-a)},c=function t(){r(i.clientWidth),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",t)};window.addEventListener("mousemove",s),window.addEventListener("mouseup",c)}}}]),n}(l["c"]);ln=Object(y["a"])([Object(l["a"])({})],ln);var dn=ln,pn=dn,vn=(n("8b3c"),Object(v["a"])(pn,cn,un,!1,null,"a2f9d72a",null)),fn=vn.exports,bn=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.manager=rt.getInstance(),t}return n}(l["c"]);bn=Object(y["a"])([Object(l["a"])({components:{Resizer:sn,Resizable:fn,Sidebar:At,Canvas:Ye}})],bn);var On=bn,hn=On,mn=(n("88e6"),Object(v["a"])(hn,E,N,!1,null,"bf3c8b70",null)),jn=mn.exports,gn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yn=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar row py-2"},[a("div",{staticClass:"col text-left"},[a("img",{staticClass:"img-fluid titlebar-logo mr-2",attrs:{src:n("da7c"),alt:"IVANN"}}),a("span",{staticClass:"text"},[t._v("IVANN")])]),a("div",{staticClass:"col text-center"},[a("span",{staticClass:"text"},[t._v(" MNIST-Demo ")])]),a("div",{staticClass:"col text-right"},[a("i",{staticClass:"titlebar-icon fas fa-share-alt fa-lg mx-2"}),a("i",{staticClass:"titlebar-icon fas fa-folder-open fa-lg mx-2"}),a("i",{staticClass:"titlebar-icon fas fa-save fa-lg mx-2"})])])}],xn=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);xn=Object(y["a"])([l["a"]],xn);var _n,wn,kn=xn,Cn=kn,En=(n("f4a1"),Object(v["a"])(Cn,gn,yn,!1,null,"a7988ff8",null)),Nn=En.exports,In=(_n=Object(l["a"])({components:{Titlebar:Nn,Navbar:C,Editor:jn}}),_n(wn=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]))||wn),Dn=In,$n=(n("155d"),Object(v["a"])(Dn,h,m,!1,null,"5ef8e794",null)),Pn=$n.exports;i["default"].use(O["a"]);var Sn=[{path:"/",name:"Home",component:Pn},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Vn=new O["a"]({mode:"history",base:"/ivann/",routes:Sn}),Bn=Vn,Tn=n("2f62");i["default"].use(Tn["a"]);var Rn=new Tn["a"].Store({state:{editor:0},mutations:{},actions:{},modules:{}});i["default"].use(a["BaklavaVuePlugin"]),i["default"].config.productionTip=!1,new i["default"]({router:Bn,store:Rn,render:function(t){return t(b)}}).$mount("#app")},da7c:function(t,e,n){t.exports=n.p+"img/nn_logo.c703f003.png"},dba4:function(t,e){var n;(function(t){t[t["MODEL"]=0]="MODEL",t[t["DATA"]=1]="DATA",t[t["TRAIN"]=2]="TRAIN",t[t["OVERVIEW"]=3]="OVERVIEW"})(n||(n={}))},e1a3:function(t,e,n){"use strict";var a=n("766e"),i=n.n(a);i.a},e3ad:function(t,e,n){},f459:function(t,e,n){},f4a1:function(t,e,n){"use strict";var a=n("91e7"),i=n.n(a);i.a},f6e4:function(t,e,n){"use strict";var a=n("99e8"),i=n.n(a);i.a},fb62:function(t,e,n){"use strict";var a=n("ba97"),i=n.n(a);i.a},fc7f:function(t,e,n){"use strict";var a=n("e3ad"),i=n.n(a);i.a}});
//# sourceMappingURL=app.bdf5122e.js.map