"use strict";(self.webpackChunkmufeng=self.webpackChunkmufeng||[]).push([[433],{74542:function(f,n,e){e.r(n);var d=e(28152),t=e.n(d),_=e(50959),r=e(32503),u=e(16618),l=e(20877),a=e(11527),s=function(){var c=(0,_.useState)("\u70B9\u51FB\u53D1\u9001\u9A8C\u8BC1\u7801"),i=t()(c,2),E=i[0],h=i[1],M=(0,_.useState)(!1),m=t()(M,2),v=m[0],P=m[1],D=function(b){var C=null;return function(){if(!C){var j=b/1e3;P(!0),h("".concat(b/1e3,"\u79D2\u540E\u91CD\u65B0\u53D1\u9001"));var A=setInterval(function(){--j,h("".concat(j,"\u79D2\u540E\u91CD\u65B0\u53D1\u9001"))},1e3);C=setTimeout(function(){clearInterval(A),h("\u70B9\u51FB\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u7801"),P(!1)},b)}}};return(0,a.jsxs)(r.Z.Compact,{style:{width:"100%"},children:[(0,a.jsx)(u.Z,{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),(0,a.jsx)(l.ZP,{type:"primary",className:"bg-cyan-400",disabled:v,onClick:D(1e4),children:E})]})};n.default=s},95952:function(f,n,e){e.r(n);var d=e(13762),t=e.n(d),_=e(41206),r=e.n(_),u=e(15033),l=e.n(u),a=e(96345),s=e.n(a),o=e(50959),c=e(11527),i=function(){function m(v){l()(this,m),this.name=v}return s()(m,[{key:"printName",value:function(){console.log("Department name: "+this.name)}}]),m}(),E=function(m){t()(P,m);var v=r()(P);function P(){return l()(this,P),v.call(this,"Accounting and Auditing")}return s()(P,[{key:"printMeeting",value:function(){console.log("The Accounting Department meets each Monday at 10am.")}},{key:"generateReports",value:function(){console.log("Generating accounting reports...")}}]),P}(i),h;h=new E,h.printName(),h.printMeeting();var M=function(){return(0,c.jsx)("div",{children:"AbstractFactoryPattern"})};n.default=M},63062:function(f,n,e){e.r(n);var d=e(13762),t=e.n(d),_=e(41206),r=e.n(_),u=e(15033),l=e.n(u),a=e(96345),s=e.n(a),o=e(50959),c=e(11527),i=function(){function v(){l()(this,v)}return s()(v,[{key:"show",value:function(){console.log("TencentMap.show")}}]),v}(),E=function(){function v(){l()(this,v)}return s()(v,[{key:"display",value:function(){console.log("BaiduMap.show")}}]),v}(),h=function(v){t()(D,v);var P=r()(D);function D(){return l()(this,D),P.apply(this,arguments)}return s()(D,[{key:"display",value:function(){console.log("TencentAdapater.display"),this.show()}}]),D}(i);function M(v){v.display()}M(new h),M(new E);var m=function(){return(0,c.jsx)("div",{children:"AdapterPattern"})};n.default=m},60727:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_={bounce:{show:function(s){console.log(s,"\u5F39\u8DF3\u663E\u793A")},hide:function(s){console.log(s,"\u5F39\u8DF3\u9690\u85CF")}},slide:{show:function(s){console.log(s,"\u6ED1\u52A8\u663E\u793A")},hide:function(s){console.log(s,"\u6ED1\u52A8\u9690\u85CF")}}};function r(a,s){this.ele=a,this.Aniations=s}r.prototype.show=function(){this.Aniations.bounce.show(this.ele)},r.prototype.hide=function(){this.Aniations.bounce.hide(this.ele)};var u=new r("div",_);u.show();var l=function(){return(0,t.jsx)("div",{children:"BridgePattern"})};n.default=l},15265:function(f,n,e){e.r(n);var d=e(15033),t=e.n(d),_=e(96345),r=e.n(_),u=e(50959),l=e(11527),a=function(){function o(){t()(this,o)}return r()(o,[{key:"init",value:function(){}},{key:"getData",value:function(){}},{key:"render",value:function(){}}]),o}();console.log(a);var s=function(){return(0,l.jsx)("div",{children:"BuilderPattern"})};n.default=s},92899:function(f,n,e){e.r(n);var d=e(21320),t=e.n(d),_=e(15033),r=e.n(_),u=e(96345),l=e.n(u),a=e(50959),s=e(11527),o=function(){function m(){r()(this,m)}return l()(m,[{key:"execute",value:function(){console.log("\u63A5\u53D7\u8005\u6267\u884C\u547D\u4EE4")}}]),m}(),c=function(){function m(v){r()(this,m),t()(this,"receiver",void 0),this.receiver=v}return l()(m,[{key:"execute",value:function(){console.log("\u547D\u4EE4\u5BF9\u8C61->\u63A5\u53D7\u8005->\u5BF9\u5E94\u63A5\u53E3\u6267\u884C"),this.receiver.execute()}}]),m}(),i=function(){function m(v){r()(this,m),t()(this,"command",void 0),this.command=v}return l()(m,[{key:"execute",value:function(){console.log("\u8C03\u7528\u8005\u6267\u884C\u547D\u4EE4"),this.command.execute()}}]),m}(),E=new c(new o),h=new i(E);console.log(h);var M=function(){return(0,s.jsx)("div",{children:"CommandPattern"})};n.default=M},3446:function(f,n,e){e.r(n);var d=e(96345),t=e.n(d),_=e(15033),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=t()(function h(M,m){r()(this,h),l()(this,"name",void 0),l()(this,"salary",void 0),this.name=M,this.salary=m}),c=new o("a",1e3),i=new o("b",2e3),E=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"",children:c.name}),(0,s.jsx)("div",{className:"",children:i.name})]})};n.default=E},60728:function(f,n,e){e.r(n);var d=e(96345),t=e.n(d),_=e(15033),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=t()(function i(E,h){r()(this,i),l()(this,"role",void 0),l()(this,"pages",void 0),this.role=E,this.pages=h}),c=function(){var E=new o("admin",["/admin/users","/admin/products"]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"",children:E.role}),(0,s.jsx)("div",{className:"",children:E.pages})]})};n.default=c},97208:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_=function(l,a){for(var s=0;s<l.length;s++)a(l[s],s,l)};_([1,2,3],function(u,l,a){console.log(u,l,a)});var r=function(){return(0,t.jsx)("div",{children:"index"})};n.default=r},38857:function(f,n,e){e.r(n);var d=e(15033),t=e.n(d),_=e(96345),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=function(){function m(){t()(this,m),l()(this,"observers",void 0),this.observers=[]}return r()(m,[{key:"add",value:function(P){console.log(this.observers),this.observers.push(P)}},{key:"notify",value:function(){this.observers.forEach(function(P){P.update()})}},{key:"remove",value:function(P){this.observers=this.observers.filter(function(D){return D!==P})}}]),m}(),c=function(){function m(v){t()(this,m),l()(this,"name",void 0),this.name=v}return r()(m,[{key:"update",value:function(){console.log("\u6211\u66F4\u65B0\u4E86")}}]),m}(),i=new o,E=new c("\u5C0F\u7EA2"),h=new c("\u5C0F\u660E");i.add(E),i.add(h);var M=function(){return(0,s.jsx)("div",{children:"ObserverPattern"})};n.default=M},29007:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_=new Proxy({selected:null},{set:function(a,s,o){var c=a[s];return s==="selected"&&(c&&c.setAttribute("aria-selected","false"),o&&o.setAttribute("aria-selected","true")),a[s]=o,!0}}),r=new Proxy({browsers:["Internet Explorer","Netscape"]},{get:function(a,s){return s==="latestBrowser"?a.browsers[a.browsers.length-1]:a[s]},set:function(a,s,o){return s==="latestBrowser"?(a.browsers.push(o),!0):(a[s]=o,!0)}});r.latestBrowser="Chrome";var u=function(){return(0,d.useEffect)(function(){_.selected=document.getElementById("item-1"),_.selected=document.getElementById("item-2")},[]),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{id:"item-1",children:"1"}),(0,t.jsx)("div",{id:"item-2",children:"2"})]})};n.default=u},60562:function(f,n,e){e.r(n);var d=e(15033),t=e.n(d),_=e(96345),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=function(){function m(){t()(this,m),l()(this,"_subscribers",{})}return r()(m,[{key:"subscribe",value:function(P,D){this._subscribers[P]||(this._subscribers[P]=[]),this._subscribers[P].push(D),console.log(this._subscribers)}},{key:"unsubscribe",value:function(P,D){this._subscribers[P]&&(D?this._subscribers[P]=this._subscribers[P].filter(function(O){return O!==D}):delete this._subscribers[P],console.log(this._subscribers))}},{key:"emit",value:function(P){this._subscribers[P]&&this._subscribers[P].forEach(function(D){D()})}}]),m}(),c=new o;function i(){console.log("event1")}function E(){console.log("event2")}function h(){console.log("event3")}c.subscribe("event1",i),c.subscribe("event1",E),c.subscribe("event2",h),c.unsubscribe("event1",E),c.emit("event1");var M=function(){return(0,s.jsx)("div",{children:"PublishSubscribePattern"})};n.default=M},54442:function(f,n,e){e.r(n);var d=e(96345),t=e.n(d),_=e(15033),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=t()(function i(E){return r()(this,i),l()(this,"key",void 0),i.instance||(this.key=E,i.instance=this),i.instance});l()(o,"instance",void 0);var c=function(){var E=new o("a"),h=new o("b");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:E.key}),(0,s.jsx)("div",{className:"",children:h.key}),(0,s.jsx)("div",{className:"",children:E===h?"true":"false"})]})};n.default=c},75832:function(f,n,e){e.r(n);var d=e(15033),t=e.n(d),_=e(96345),r=e.n(_),u=e(21320),l=e.n(u),a=e(50959),s=e(11527),o=function(){function i(E,h){t()(this,i),E&&(i.authority[E]=h)}return r()(i,null,[{key:"userFactory",value:function(h){return i.authority[h]}}]),i}();l()(o,"authority",{admin:["home","user-manage","right-manage","news-manage"],user:["home","news-manage"]});var c=function(){var E=o.userFactory("admin"),h=o.userFactory("user");return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"",children:E}),(0,s.jsx)("div",{className:"",children:h})]})};n.default=c},24674:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_=function(){var u=function(s){switch(s){case 1:return"\u521D\u7EA7";case 2:return"\u4E2D\u7EA7";case 3:return"\u9AD8\u7EA7"}},l=function(s){var o={1:"\u521D\u7EA7",2:"\u4E2D\u7EA7",3:"\u9AD8\u7EA7"};return o[s]};return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"",children:u(1)}),(0,t.jsx)("div",{className:"",children:l(1)})]})};n.default=_},66956:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){var l=[{transform:"rotate(0) scale(1)"},{transform:"rotate(360deg) scale(0)"}],a={duration:2e3,iterations:1},s=(0,d.useRef)(null),o=function(){var i;s==null||(i=s.current)===null||i===void 0||i.animate(l,a)};return(0,t.jsxs)("div",{className:"newspaper",onClick:o,ref:s,children:["\u7FFB\u62A5\u7EB8\u771F\u7684",(0,t.jsx)("br",{}),"\u4F1A\u5934\u6655"]})},r=_},88575:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_=function(){var u=navigator,l="\u5E26\u5BBD"+u.connection.downlink+"Mb/S",a="\u7F51\u7EDC\u7C7B\u578B"+u.connection.effectiveType,s="\u5EF6\u8FDF"+u.connection.rtt+"ms";return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"",children:l}),(0,t.jsx)("div",{className:"",children:a}),(0,t.jsx)("div",{className:"",children:s})]})};n.default=_},83891:function(f,n,e){e.r(n),e.d(n,{default:function(){return l}});var d=e(50959),t=e.p+"static/2.94f7cc09.jpg",_={img:"lW8mDlgv2aEdkzplwr23"},r=e(11527),u=function(){return(0,r.jsx)("div",{className:"h-40",children:(0,r.jsx)("img",{className:_.img,width:"100px",src:t,alt:""})})},l=u},31674:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsxs)("div",{className:"container x mandatory-scroll-snapping",children:[(0,t.jsx)("div",{children:"x \u8F74\u5F3A\u5236\u3001\u4ECE\u5DE6\u5F80\u53F3"}),(0,t.jsx)("div",{children:"2"}),(0,t.jsx)("div",{children:"3"}),(0,t.jsx)("div",{children:"4"}),(0,t.jsx)("div",{children:"5"})]})},r=_},99993:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){var l=(0,d.useRef)(null),a=function(o){l.current&&(l.current.style.left=o.clientX-245+"px",l.current.style.top=o.clientY-245+"px")};return(0,t.jsxs)("div",{id:"container-wrapper",onMouseMove:a,children:[(0,t.jsx)("div",{className:"text-color",children:"Hello World"}),(0,t.jsx)("div",{className:"mouse",ref:l})]})},r=_},71150:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("span",{className:"text-gradient",children:"TextGradient"})},r=_},43940:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{className:"box4"})},r=_},66253:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{className:"box"})},r=_},85815:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{className:"box2"})},r=_},55217:function(f,n,e){e.r(n),e.d(n,{default:function(){return a}});var d=e(28152),t=e.n(d),_=e(50959),r=e(20877),u=e(11527),l=function(){var o=_.useState("dark"),c=t()(o,2),i=c[0],E=c[1];return(0,_.useEffect)(function(){document.documentElement.setAttribute("data-theme",i)},[i]),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.ZP,{type:"primary",onClick:function(){E(i==="dark"?"light":"dark")},children:"\u5207\u6362\u4E3B\u9898"}),(0,u.jsx)("div",{className:" two",children:"\u6211\u5F88\u597D"})]})},a=l},70396:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"box-container",children:(0,t.jsx)("div",{className:"box"})})})},r=_},32188:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"btn3",children:"Hello World"})})},r=_},47207:function(f,n,e){e.r(n),e.d(n,{default:function(){return a}});var d=e(28152),t=e.n(d),_=e(50959),r=e(20877),u=e(11527),l=function(){var o=_.useState("theme-blue"),c=t()(o,2),i=c[0],E=c[1];return(0,_.useEffect)(function(){document.documentElement.classList.toggle("theme-blue")},[i]),(0,u.jsx)("div",{className:"h-96 bg-skin-bg  p-20",children:(0,u.jsxs)("div",{className:"bg-skin-card h-40 w-80 ",children:[(0,u.jsx)(r.ZP,{className:"bg-skin-btn",onClick:function(){return E("")},children:"\u84DD\u8272\u4E3B\u9898"}),(0,u.jsx)(r.ZP,{className:"bg-skin-btn",onClick:function(){return E("theme-blue")},children:"\u7EA2\u8272\u4E3B\u9898"})]})})},a=l},84259:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"btn",children:"Hello World"}),(0,t.jsx)("div",{className:"btn",children:"\u4F60\u597D,\u4E16\u754C"})]})},r=_},73228:function(f,n,e){e.r(n),e.d(n,{default:function(){return o}});var d=e(28152),t=e.n(d),_=e(50959),r=e(65093),u=e(92264),l=e(20877),a=e(11527),s=function(){var i=(0,_.useState)(!0),E=t()(i,2),h=E[0],M=E[1],m=function(){M(!h)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.ZP,{type:"primary",className:"bg-cyan-400",onClick:m,children:"\u5207\u6362\u663E\u793A\u72B6\u6001"}),(0,a.jsx)(r.Z,{mode:"out-in",children:(0,a.jsx)(u.Z,{timeout:2e3,classNames:"fade",unmountOnExit:!0,appear:!0,children:(0,a.jsx)("div",{children:"react-transition-group"})},h?1:2)})]})},o=s},6158:function(f,n,e){e.r(n);var d=e(50959),t=e(11527),_=function(u){var l=u.name,a=u.age,s=u.sex,o=u.hobby;return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"",children:l}),(0,t.jsx)("div",{className:"",children:a}),(0,t.jsx)("div",{className:"",children:s}),(0,t.jsx)("div",{className:"",children:o})]})};_.defaultProps={name:"\u738B\u77F3\u9E4F",age:20,sex:"\u7537",hobby:"\u8DB3\u7403"},n.default=_},22023:function(f,n,e){e.r(n);var d=e(50959),t=e(20877),_=e(11527),r=(0,d.forwardRef)(function(l,a){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{ref:a,children:"\u6211\u662F\u738B\u77F3\u9E4F"})})}),u=function(){var a=(0,d.useRef)(null),s=function(){a.current&&(a.current.style.background="red")};return(0,_.jsxs)("div",{children:[(0,_.jsx)(t.ZP,{onClick:s,className:"bg-blue-400",children:"\u70B9\u51FB"}),(0,_.jsx)(r,{ref:a})]})};n.default=u},95118:function(f,n,e){e.r(n);var d=e(50959),t=e(20877),_=e(11527),r=(0,d.forwardRef)(function(l,a){var s=(0,d.useRef)(null);return(0,d.useImperativeHandle)(a,function(){return{focus:function(){s.current&&(s.current.style.background="red")}}}),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{ref:s,children:"\u6211\u662F\u738B\u77F3\u9E4F"})})}),u=function(){var a=(0,d.useRef)(null),s=function(){a.current&&a.current.focus()};return(0,_.jsxs)("div",{children:[(0,_.jsx)(t.ZP,{onClick:s,className:"bg-blue-400",children:"\u70B9\u51FB"}),(0,_.jsx)(r,{ref:a})]})};n.default=u},15327:function(f,n,e){e.r(n);var d=e(50959),t=e(73278),_=e(11527),r=(0,t.D5)({name:"\u738B\u77F3\u9E4F",age:20,address:{city:"\u5317\u4EAC",street:"\u4E1C\u57CE\u533A"},role:"admin"}),u=r.set("name","\u738B\u6C90\u9633");console.log(r,u);var l=u.get("name");console.log(l);var a=u.toJS();console.log(a);var s=(0,t.aV)([1,2,3,4,5]),o=s.push(6);console.log(s,o);var c=function(){return(0,_.jsx)("div",{children:"immutable"})};n.default=c},73702:function(f,n,e){e.r(n);var d=e(50959),t=e(934),_=e(11527),r=function(){return(0,_.jsx)("div",{className:"h-96",children:(0,_.jsx)(t._F,{version:"2.0",akey:"d94f087668786a19cd51d7f6bcc8f43d",children:(0,_.jsx)(t.D5,{viewMode:"3D",center:[113.687086,34.773092],zoom:18,children:(0,_.jsx)(t.Jx,{visiable:!0,animation:"AMAP_ANIMATION_BOUNCE",title:"\u534A\u4EA9\u5730",position:[113.687086,34.773092]})})})})};n.default=r},42952:function(f,n,e){e.r(n),e.d(n,{default:function(){return r}});var d=e(50959),t=e(11527),_=function(){return(0,t.jsx)("div",{className:"text-3xl text-center font-bold underline",children:"Hello World"})},r=_}}]);
