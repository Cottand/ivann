(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49ab6c91"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ivann/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"16f2":function(t,e,n){"use strict";var a=n("9ec9"),i=n.n(a);i.a},4581:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-sidebar h-100"},[n("h1",[t._v("Right")])])}]},"493a":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-sidebar d-flex flex-column h-100 text-center"},[a("div",{staticClass:"model pt-4 pb-3"},[a("img",{staticClass:"navbar-logo icon",attrs:{src:n("da7c"),alt:"IVANN"}})]),a("div",{staticClass:"data pt-3 pb-3"},[a("i",{staticClass:"fas fa-database icon"})]),a("div",{staticClass:"train pt-3"},[a("i",{staticClass:"fas fa-cogs icon"})]),a("div",{staticClass:"flex-grow-1"}),a("div",{staticClass:"build pb-4"},[a("i",{staticClass:"fas fa-hammer icon"})])])}]},"4c72":function(t,e,n){},"78a7":function(t,e,n){},"85ec":function(t,e,n){},"9c5f":function(t,e,n){"use strict";var a=n("493a"),i=n("d2f5"),r=(n("d911"),n("2877")),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"597f06c4",null);e["default"]=o.exports},"9ec9":function(t,e,n){},aa8e:function(t,e,n){"use strict";var a=n("b5e2"),i=n.n(a);i.a},b5e2:function(t,e,n){},c120:function(t,e){},c9d5:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,i,r=n("0c30"),o=(n("87e6"),n("15f5"),n("7051"),n("78a7"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],u=n("d4ec"),l=n("262e"),d=n("2caf"),f=n("60a3"),p=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return n}(f["b"]),v=p,O=(n("034f"),n("2877")),b=Object(O["a"])(v,c,s,!1,null,null,null),h=b.exports,g=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container-fluid d-flex flex-column"},[n("Navbar"),n("div",{staticClass:"row flex-grow-1"},[n("div",{staticClass:"left-sidebar-col"},[n("LeftSidebar")],1),n("div",{staticClass:"col d-flex flex-column"},[n("div",{staticClass:"row flex-grow-1"},[n("div",{staticClass:"col-9 px-0"},[n("NodeEditor")],1),n("div",{staticClass:"col-3 px-0"},[n("RightSidebar")],1)])])])],1)},j=[],C=n("9c5f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node-editor h-100"},[n("baklava-editor",{attrs:{plugin:t.viewPlugin}})],1)},I=[],x=n("bee2"),S=n("9ab4"),N=n("dac5"),_=n("9f16");(function(t){t["Linear"]="Linear",t["Conv"]="Convolution",t["Pool"]="Pooling",t["Regularization"]="Regularization",t["Reshape"]="Reshaping"})(a||(a={})),function(t){t["Dense"]="Dense",t["Conv2D"]="Convolution2D",t["MaxPool2D"]="MaxPooling2D",t["Dropout"]="Dropout",t["Flatten"]="Flatten"}(i||(i={}));n("b0c0");var w=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.call(this),t.type=a.Conv,t.name=i.Conv2D,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Filters","IntegerOption"),t.addOption("Kernel Size Height","IntegerOption"),t.addOption("Kernel Size Width","IntegerOption"),t.addOption("Stride Height","IntegerOption"),t.addOption("Stride Width","IntegerOption"),t.addOption("Padding","SelectOption","Valid",void 0,{items:["Valid","Same"]}),t.addOption("Activation","SelectOption","None",void 0,{items:["None","ReLU","Tanh","Sigmoid","Linear"]}),t.addOption("Use Bias","CheckboxOption",!0),t.addOption("Weights Initializer","SelectOption","Xavier",void 0,{items:["Xavier"]}),t.addOption("Bias Initializer","SelectOption","Zeros",void 0,{items:["Zeros","Ones"]}),t.addOption("Bias Regularizer","SelectOption","None",void 0,{items:["None"]}),t.addOption("Weights Regularizer","SelectOption","None",void 0,{items:["None"]}),t}return n}(N["Node"]),P=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.call(this),t.type=a.Pool,t.name=i.MaxPool2D,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Kernel Size Height","IntegerOption"),t.addOption("Kernel Size Width","IntegerOption"),t.addOption("Stride Height","IntegerOption"),t.addOption("Stride Width","IntegerOption"),t.addOption("Padding","SelectOption","Valid",void 0,{items:["Valid","Same"]}),t}return n}(N["Node"]),z=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.call(this),t.type=a.Linear,t.name=i.Dense,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Size","IntegerOption"),t.addOption("Activation","SelectOption","None",void 0,{items:["None","ReLU","Tanh","Sigmoid","Linear"]}),t.addOption("Use Bias","CheckboxOption",!0),t.addOption("Weights Initializer","SelectOption","Xavier",void 0,{items:["Xavier"]}),t.addOption("Bias Initializer","SelectOption","Zeros",void 0,{items:["Zeros","Ones"]}),t.addOption("Bias Regularizer","SelectOption","None",void 0,{items:["None"]}),t.addOption("Weights Regularizer","SelectOption","None",void 0,{items:["None"]}),t}return n}(N["Node"]),D=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.call(this),t.type=a.Reshape,t.name=i.Flatten,t.addInputInterface("Input"),t.addOutputInterface("Output"),t}return n}(N["Node"]),R=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.call(this),t.type=a.Regularization,t.name=i.Dropout,t.addInputInterface("Input"),t.addOutputInterface("Output"),t.addOption("Probability","SliderOption",.5,void 0,{min:0,max:1}),t}return n}(N["Node"]),E=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.editor=new N["Editor"],t.optionPlugin=new _["OptionPlugin"],t.viewPlugin=new r["ViewPlugin"],t}return Object(x["a"])(n,[{key:"created",value:function(){this.editor.use(this.optionPlugin),this.editor.use(this.viewPlugin),this.editor.registerNodeType(i.Dense,z,a.Linear),this.editor.registerNodeType(i.Conv2D,w,a.Conv),this.editor.registerNodeType(i.MaxPool2D,P,a.Pool),this.editor.registerNodeType(i.Dropout,R,a.Regularization),this.editor.registerNodeType(i.Flatten,D,a.Reshape)}}]),n}(f["b"]);E=Object(S["a"])([f["a"]],E);var T=E,L=T,k=Object(O["a"])(L,y,I,!1,null,"7df0ae17",null),$=k.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Navbar row py-2"},[a("div",{staticClass:"col text-left"},[a("img",{staticClass:"navbar-logo mr-2",attrs:{src:n("da7c"),alt:"IVANN"}}),a("span",{staticClass:"text"},[t._v("IVANN")])]),a("div",{staticClass:"col text-center"},[a("span",{staticClass:"text"},[t._v(" MNIST-Demo ")])]),a("div",{staticClass:"col text-right"},[a("i",{staticClass:"navbar-icon fas fa-share-alt fa-lg"}),a("i",{staticClass:"navbar-icon fas fa-folder-open fa-lg"}),a("i",{staticClass:"navbar-icon fas fa-save fa-lg"})])])}],W=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return n}(f["b"]);W=Object(S["a"])([f["a"]],W);var A,B,F=W,H=F,K=(n("16f2"),Object(O["a"])(H,M,V,!1,null,"314fd66f",null)),U=K.exports,X=n("f905"),Z=(A=Object(f["a"])({components:{Navbar:U,LeftSidebar:C["default"],NodeEditor:$,RightSidebar:X["default"]}}),A(B=function(t){Object(l["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return n}(f["b"]))||B),J=Z,q=(n("e491"),Object(O["a"])(J,m,j,!1,null,"6a970abb",null)),G=q.exports;o["default"].use(g["a"]);var Q=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new g["a"]({mode:"history",base:"/ivann/",routes:Q}),tt=Y,et=n("2f62");o["default"].use(et["a"]);var nt=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["default"].use(r["BaklavaVuePlugin"]),o["default"].config.productionTip=!1,new o["default"]({router:tt,store:nt,render:function(t){return t(h)}}).$mount("#app")},d2f5:function(t,e,n){"use strict";var a=n("c120"),i=n.n(a);e["default"]=i.a},d508:function(t,e){},d911:function(t,e,n){"use strict";var a=n("4c72"),i=n.n(a);i.a},da7c:function(t,e,n){t.exports=n.p+"img/nn_logo.c703f003.png"},e491:function(t,e,n){"use strict";var a=n("c9d5"),i=n.n(a);i.a},f905:function(t,e,n){"use strict";var a=n("4581"),i=n("fe4b"),r=(n("aa8e"),n("2877")),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"4b643cc4",null);e["default"]=o.exports},fe4b:function(t,e,n){"use strict";var a=n("d508"),i=n.n(a);e["default"]=i.a}});
//# sourceMappingURL=app.256e4527.js.map