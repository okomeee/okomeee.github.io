(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"28bb":function(t,e,n){},"45a1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"d-flex mb-3"},[a("router-link",{staticClass:"mx-auto",attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{src:n("790a"),alt:"logo"}})])],1),a("div",{staticClass:"d-flex mb-4",attrs:{id:"nav"}},[a("div",{staticClass:"mx-auto"},t._l(t.tabs,(function(e,n){return a("span",{key:n},[a("router-link",{attrs:{to:e.link,exact:e.exact}},[t._v(t._s(e.tab))]),n!=t.tabs.length-1?a("span",[t._v(" | ")]):t._e()],1)})),0)]),a("router-view"),a("div",{staticClass:"my-5"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-3"},t._l(t.links,(function(t,e){return a("span",{key:e},[a("a",{attrs:{href:t["link"]}},[a("i",{class:t["class"],style:t["style"]})])])})),0),a("div",[a("small",[a("span",{staticClass:"mr-3"},[t._v(t._s(t.updateDate))]),a("span",{domProps:{innerHTML:t._s(t.copyright)}})])])])])],1)},s=[],r={data:function(){return{name:"app",updateDate:"Last Updated: 22 December 2019",copyright:"&copy; 2018 okomeee",tabs:[{link:"/",tab:"Home",exact:!0},{link:"/aboutme",tab:"AboutMe",exact:!0},{link:"/products",tab:"Products",exact:!1},{link:"/activity",tab:"Activity",exact:!0}],links:[{link:"https://twitter.com/Ka2Robo",class:this.iconClass("fa-twitter"),style:"color: #1DA1F2;"},{link:"https://github.com/okomeee",class:this.iconClass("fa-github"),style:""},{link:"mailto:marukome.diary@gmail.com",class:this.iconClass("fa-envelope"),style:""}]}},methods:{iconClass:function(t){var e="";return e+="fa-envelope"==t?"fas ":"fab ",e+=t,e+=" ",e+="fa-fw fa-2x faa-spin animated-hover mr-3",e}}},i=r,c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,o,s,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-auto"},[n("div",{staticClass:"mottos"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.mottos)))]),n("div",{staticClass:"cbody px-3 py-2"},t._l(t.mottos,(function(e,a){return n("p",{key:a,staticClass:"mb-0"},[t._v(t._s(e))])})),0)])])])])},p=[],h={title:function(){return"Home"},data:function(){return{name:"home",cmd:{mottos:"mottos"},mottos:["It's never too late to start something."]}}},f=h,v=(n("b897"),Object(c["a"])(f,m,p,!1,null,"fec47c68",null)),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-auto mb-4 whois"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.whois)))]),n("div",{staticClass:"cbody px-3 py-2"},[t._v(t._s(t.whois_msg))])]),n("div",{staticClass:"col-12 mb-4 hobby"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.hobby)))]),n("div",{staticClass:"cbody px-3 pt-2"},[n("div",{staticClass:"row"},t._l(t.hobbies,(function(e,a){return n("div",{key:"hobbies-"+a,staticClass:"col-12 col-md-6 mb-2"},[t._v(t._s(t.addDot(e)))])})),0)])]),n("div",{staticClass:"col-12 mb-4 interest"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.interest)))]),n("div",{staticClass:"cbody px-3 pt-2"},[n("div",{staticClass:"row"},t._l(t.interests,(function(e,a){return n("div",{key:"interests-"+a,staticClass:"col-6 col-md-3 col-lg-2 mb-2"},[t._v(t._s(t.addDot(e)))])})),0)])]),n("div",{staticClass:"col-12 mb-4 skill"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.skills)))]),n("div",{staticClass:"cbody px-3 py-2"},[n("div",{staticClass:"row"},[t._l(t.skills,(function(e,a){return n("div",{key:"skills-"+a,staticClass:"col-12 col-md-6 col-lg-4 mb-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-7"},[t._v(t._s(t.addDot(e.name)))]),n("div",{staticClass:"col-5"},[t._v(t._s(t.setStar(e.star)))])])])})),t._m(0),t._l(t.tools,(function(e,a){return n("div",{key:"tools-"+a,staticClass:"col-12 col-md-6 col-lg-4 mb-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-7"},[t._v("\n                "+t._s(t.addDot(e.name))+"\n                "),e["reference"]?n("span",{staticClass:"reference"},[t._v(t._s(t.getIndex(e.name)))]):t._e()]),n("div",{staticClass:"col-5"},[t._v("\n                "+t._s(t.setStar(e.star))+"\n              ")])])])})),t._l(t.references,(function(e,a,o){return n("div",{key:"references-"+o,staticClass:"col-12 mb-1 reference text-right"},[t._v("\n            ["+t._s(o+1)+"] "+t._s(a)+": "+t._s(e)+"\n          ")])}))],2)])])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("hr")])}],C=(n("ac6a"),n("456d"),n("f576"),n("28a5"),n("14b9"),{title:function(){return"AboutMe"},data:function(){return{name:"home",cmd:{whois:"whois",hobby:"hobby",interest:"interest",skills:"skills"},whois_msg:"Second-year master's student at Kagoshima University.",hobbies:["Motorcycle Touring [ Ninja250 (2013) ]","Smart House [ Raspberry Pi (IoT) ]"],interests:["Network","Front-End","Back-End","Seucurity","Darknet","Honeypot"],skills:[{name:"Ruby on Rails",star:4},{name:"Ruby",star:4},{name:"HTML",star:4},{name:"JavaScript",star:4},{name:"CSS",star:4},{name:"Bash",star:3},{name:"Vue.js",star:3},{name:"Python",star:3},{name:"Swift",star:2},{name:"Flutter",star:1},{name:"C",star:1}],tools:[{name:"Git",star:3,reference:!1},{name:"WordPress",star:3,reference:!1},{name:"GAS",star:3,reference:!0}],references:{GAS:"Google Apps Script"}}},methods:{setStar:function(t){var e="★".repeat(t);return e=e.padStart(5,"☆").split("").reverse().join(""),e},getIndex:function(t){var e=Object.keys(this.references).indexOf(t)+1;return"["+e+"]"}}}),g=C,w=(n("731c"),Object(c["a"])(g,y,_,!1,null,"7bf7243a",null)),k=w.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-auto"},[n("div",{staticClass:"products"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v("$ products")]),n("div",{staticClass:"cbody px-3 pt-2"},[n("div",{staticClass:"row"},[t._l(t.products,(function(e,a){return n("p",{key:"product-"+a,staticClass:"col-6 col-md-4 col-lg-3 mb-2"},[t._v("\n              ●\n              "),n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),t._m(0),t._m(1),t._m(2)],2)])])])]),n("div",{staticClass:"mt-4"},[n("router-view")],1)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"col-6 mb-2"},[t._v("\n              ●\n              "),n("a",{attrs:{href:"https://kokokarakaigi.com/"}},[t._v("kokokarakaigi (2nd)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"col-6 mb-2"},[t._v("\n              ●\n              "),n("a",{attrs:{href:"https://kadaiinfo.com/"}},[t._v("KADAI INFO (AboutUs & ClabList)")])])}],A={title:function(){return"Products"},data:function(){return{name:"Products",cmd:{products:"products"},products:[{name:"PairMaker",path:"/products/pair"},{name:"Accel",path:"/products/accelerometer"},{name:"Locater",path:"/products/locater"},{name:"Dice",path:"/products/dice"},{name:"RandomPref",path:"/products/randomprefecture"},{name:"TouringTool",path:"/products/travelingtool"},{name:"NumGame",path:"/products/numgame"},{name:"LTOrder",path:"/products/ltorder"}]}}},S=A,T=(n("721c"),Object(c["a"])(S,P,x,!1,null,"b4c9bc6c",null)),I=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-auto"},[n("div",{staticClass:"activity"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.cmd.activity)))]),n("div",{staticClass:"cbody px-3 pt-2"},[t._m(0),t._l(t.activities,(function(e,a){return n("div",{key:"activityobj-"+a,staticClass:"row no-gutters mb-3"},[n("div",{staticClass:"col-12 mb-2"},[t._v(t._s(t.addTag(e.year)))]),n("div",{staticClass:"offset-1 col-11 mb-1"},[n("div",{staticClass:"row no-gutters"},t._l(e.activity,(function(e,a){return n("div",{key:"activity-"+a,staticClass:"col-12 col-md-6 col-lg-4 mb-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._v(t._s(t.addDot(e.name)))]),n("div",{staticClass:"offset-1 col-11 award"},[t._v(t._s(e.award))])])])})),0)])])}))],2)])])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-gutters mb-3"},[n("div",{staticClass:"col-12 mb-2"},[t._v("[*]")]),n("div",{staticClass:"offset-1 col-11 mb-1"},[n("div",{staticClass:"row no-gutters"},[n("p",{staticClass:"col-12 col-md-6 col-lg-4 mb-2"},[t._v("● "),n("a",{staticClass:"mb-0",staticStyle:{color:"red"},attrs:{href:"https://connpass.com/user/Mochida/"}},[t._v("connpass")])]),n("p",{staticClass:"col-12 col-md-6 col-lg-4 mb-2"},[t._v("● ksnctf")])])])])}],E={title:function(){return"Activity"},data:function(){return{name:"Activity",cmd:{activity:"activity"},activities:[{year:2018,activity:[{name:"SECCON Beginners CTF QUALS",award:""},{name:"CyberRebeatCTF",award:""},{name:"CODE BLUE STUDENT STAFF",award:""},{name:"AVTOKYO",award:""},{name:"BSides Tokyo",award:"SPEAKER"},{name:"JPHACKS HACK DAY @FUKUOKA",award:"Local Sponsor Award (WearLog)"}]},{year:2019,activity:[{name:"SECCON Beginners CTF QUALS",award:""},{name:"FUKUOKA Ruby Award",award:"Special Company Award: GMO Pepabo, Inc."},{name:"SPAJAM @FUKUOKA",award:""},{name:"CODE BLUE STUDENT STAFF",award:""},{name:"SecHack365 (Research)",award:""}]}]}},methods:{addTag:function(t){return"["+t+"]"}}},D=E,M=(n("9e24"),Object(c["a"])(D,O,j,!1,null,"4199fb8f",null)),$=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},F=[],G=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"products"},[n("div",{staticClass:"cheader px-3 py-1"},[t._v(t._s(t.addDollar(t.name)))]),n("div",{staticClass:"cbody px-3 py-2 text-white"},[t._v(t._s(t.content))])])]),n("div",{staticClass:"col-auto mt-4"},[n("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.path}},[t._v("To the application")])])])}),R=[],U={props:{name:String,content:String,path:String},mounted:function(){null==this.name&&location.reload()}},H=U,K=(n("6cea"),Object(c["a"])(H,G,R,!1,null,"13e5d4df",null)),N=K.exports,q={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"PairMaker",path:"https://okomeee.github.io/RandomPair/",content:'      If you select "追加” installed in the top bar, prompt will be activated and you can enter letters. If it is an empty input, an alert will be launched saying "Please enter your name." If you select Cancel, nothing happens. (There will be no addition of Mr. Nameless.) If you select "読み込み" installed in the top bar, the most recently entered list will be loaded. The entered list is stored sequentially in localstorate. The saved list will be loaded when "読み込み" is selected. If the participant list is not empty, pressing the "ガチャぽん!" Button will switch to the Result screen and the result will be displayed. Randomly generate pairs from the list and draw them. If the participant list is empty, pressing the "Gacha Pon!" Button launches an alert "Please add participant". (In this case the screen does not change.)      '}}},B=q,J=Object(c["a"])(B,L,F,!1,null,null,null),W=J.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},Q=[],V={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"Accel",path:"https://okomeee.github.io/AccelerationSensor/",content:'      Please use from smartphone. Clicking the "加速度センサ" button gets values in the x, y, z direction from the acceleration sensor of the device. If the acquired value is over a certain value, the moving direction is displayed. I made it for preparing for the creation of the web application using the acceleration sensor in the future.      '}}},z=V,X=Object(c["a"])(z,Y,Q,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},et=[],nt={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"Locater",path:"https://okomeee.github.io/puchi/",content:'        You can acquire the current address by pressing "現在地の取得" button. Two APIs are used, "Geolocation API" and "GoogleMaps Javascript API". We acquire the current latitude and longitude with "Geolocation API" and we obtain address from latitude and longitude with "GoogleMapsJavascriptAPI". Internally, if "Geolocation API" can not be used I will alert you for why I can not do it. Also, if you can not decode an address from latitude / longitude information with "GoogleMapsJavascriptAPI", we will also alert you.      '}}},at=nt,ot=Object(c["a"])(at,tt,et,!1,null,null,null),st=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},it=[],ct={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"Dice",path:"https://okomeee.github.io/sai/",content:'      Please use from smartphone. Shake the dice using the acceleration sensor of the smartphone. I made my own dice using "Three.js". It rotates randomly around the origin without setting of gravity and ground etc. Therefore, sometimes the eyes of the dice will not turn this way. The dice will stop after a certain time (3 seconds). The rotation speed is defined based on the value obtained from the acceleration sensor. Therefore, if you shake the smartphone quickly it will rotate faster.      '}}},lt=ct,ut=Object(c["a"])(lt,rt,it,!1,null,null,null),dt=ut.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},pt=[],ht={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"RandomPref",path:"https://okomeee.github.io/RandomPrefecture/",content:'        Press "Start" button to start roulette. Press "Stop" button stops the roulette. I will update various things from now on!      '}}},ft=ht,vt=Object(c["a"])(ft,mt,pt,!1,null,null,null),bt=vt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},_t=[],Ct={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"TouringTool",path:"https://randomprefecture.k-appdev.com/",content:'        I made it with my senior at Circle. I often go to tooling, so I thought that I wanted an app that randomly chooses the destination. The destination can be narrowed down by prefecture. We can get map, weather and sightseeing information as destination information. The API uses three of "GoogleMapsJavascriptAPI", "OpenWeatherMapAPI", and "Shared Cloud System API".      '}}},gt=Ct,wt=Object(c["a"])(gt,yt,_t,!1,null,null,null),kt=wt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},xt=[],At={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"NumGame",path:"https://okomeee.github.io/numgame/",content:'        I made PWA. As an advantage of PWA, once you load a web page, it may work without connecting to the Internet. So, I implemented dynamic processing with JavaScript alone, without using the API that requires the Internet. This application is a game that guesses randomly generated N number sequence. First, decide the number of digits of the generated sequence. Next, guess the generated sequence and enter a sequence. If the input sequence matches the generated sequence, "正解" is displayed. If they do not match, an answer hint is presented. (HIT: Matching the number.) (BLOW: Matching the position and the number.) By using this web service you can kill time even in the environment without internet! Have fun with this web service!:)      '}}},St=At,Tt=Object(c["a"])(St,Pt,xt,!1,null,null,null),It=Tt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductComponent",{attrs:{name:t.name,path:t.path,content:t.content}})},jt=[],Et={title:function(){return this.name},components:{ProductComponent:N},data:function(){return{name:"LTOrder",path:"https://okomeee.github.io/DetermineLTOrder/",content:"        This app determines the order of LT. ;)      "}}},Dt=Et,Mt=Object(c["a"])(Dt,Ot,jt,!1,null,null,null),$t=Mt.exports;a["a"].use(d["a"]);var Lt=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:b},{path:"/aboutme",name:"AboutMe",component:k},{path:"/products",name:"Products",component:I,children:[{path:"pair",name:"Pair",component:W},{path:"accelerometer",name:"Accelerometer",component:Z},{path:"locater",name:"Locater",component:st},{path:"dice",name:"Dice",component:dt},{path:"randomprefecture",name:"RandomPrefecture",component:bt},{path:"travelingtool",name:"TravelingTool",component:kt},{path:"numgame",name:"NumGame",component:It},{path:"ltorder",name:"LTOrder",component:$t}]},{path:"/activity",name:"Activity",component:$},{path:"/notfound",component:b},{path:"*",redirect:"/notfound"}]}),Ft={mounted:function(){var t=this.$options.title;t&&(t="function"===typeof t?t.call(this):t,document.title="Home"===t?"okome":"okome | ".concat(t))}},Gt={methods:{addDot:function(t){return"● "+t},addDollar:function(t){return"$ "+t}}};n("8b04");a["a"].config.productionTip=!1,a["a"].mixin(Ft),a["a"].mixin(Gt),bubbly({colorStart:"#0e263d",colorStop:"#151e27",blur:1,bubbles:Math.floor(.015*(window.innerWidth+window.innerHeight)),compose:"source-over",bubbleFunc:function(){return"hsla(".concat(300*Math.random(),", 50%, 50%, .3)")}}),new a["a"]({router:Lt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),o=n.n(a);o.a},"6cea":function(t,e,n){"use strict";var a=n("b375"),o=n.n(a);o.a},"721c":function(t,e,n){"use strict";var a=n("d2aa"),o=n.n(a);o.a},"731c":function(t,e,n){"use strict";var a=n("45a1"),o=n.n(a);o.a},"790a":function(t,e,n){t.exports=n.p+"img/okome.fe3358c2.png"},"9e24":function(t,e,n){"use strict";var a=n("28bb"),o=n.n(a);o.a},b375:function(t,e,n){},b897:function(t,e,n){"use strict";var a=n("d54f"),o=n.n(a);o.a},d2aa:function(t,e,n){},d54f:function(t,e,n){},e332:function(t,e,n){}});
//# sourceMappingURL=app.c446e7f0.js.map