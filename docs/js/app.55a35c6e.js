(function(e){function t(t){for(var o,i,r=t[0],u=t[1],a=t[2],h=0,f=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},c=[];function i(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b39ce":"eeecfba3","chunk-2d0c229a":"a2776a0f","chunk-2d0c4237":"544bb099","chunk-2d0d6af4":"2233a45e"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=i(e);var a=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,n[1](a)}s[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/xWebsocket/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"205c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["a"].use(s["a"]);var c=[{path:"/socket1",name:"Socket1",component:function(){return n.e("chunk-2d0c4237").then(n.bind(null,"3a0c"))}},{path:"/socket2",name:"Socket2",component:function(){return n.e("chunk-2d0b39ce").then(n.bind(null,"28b4"))}},{path:"/other1",name:"Other1",component:function(){return n.e("chunk-2d0c229a").then(n.bind(null,"48aa"))}},{path:"/other2",name:"Other2",component:function(){return n.e("chunk-2d0d6af4").then(n.bind(null,"7434"))}}],i=new s["a"]({mode:"history",routes:c}),r=i,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"view"},[n("router-view")],1),n("div",{staticClass:"btn"},[n("router-link",{attrs:{to:"/socket1"}},[e._v("socket1 [单条上报]")]),n("router-link",{attrs:{to:"/socket2"}},[e._v("socket2 [并发上报]")]),n("router-link",{attrs:{to:"/other1"}},[e._v("other1 [无socket]")]),n("router-link",{attrs:{to:"/other2"}},[e._v("other2 [无socket]")])],1)])},a=[],h=(n("b0c0"),{name:"App",created:function(){this.initSocket()},beforeUpdate:function(){this.initSocket()},data:function(){return{messages:[]}},methods:{initSocket:function(){"Socket1"===this.$route.name||"Socket2"===this.$route.name?this.getSocket():1===this.XWebsocket.getState()&&this.XWebsocket.close()},getSocket:function(){try{this.XWebsocket.getSocketIns()}catch(e){console.log("socket:",e)}}}}),l=h,f=(n("f2e2"),n("2877")),p=Object(f["a"])(l,u,a,!1,null,"d9de3d5c",null),d=p.exports,k=n("d4ec"),v=n("bee2"),g=n("ade3"),b=(n("159b"),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{time:5,message:"heartbeat"};Object(k["a"])(this,e),Object(g["a"])(this,"socketIns",void 0),Object(g["a"])(this,"socketUrl",""),Object(g["a"])(this,"queue",[]),Object(g["a"])(this,"pingConfig",void 0),Object(g["a"])(this,"protocols",void 0),Object(g["a"])(this,"reconnectTimes",void 0),Object(g["a"])(this,"curReconnectTimes",0),Object(g["a"])(this,"pingInterval",null),this.socketUrl=t,this.protocols=n,this.pingConfig=s,this.reconnectTimes=o}return Object(v["a"])(e,[{key:"getSocketIns",value:function(){if("undefined"===typeof WebSocket)throw new Error("not support websocket");return this.socketIns||this.setSocketIns(),this.socketIns}},{key:"setSocketIns",value:function(){var e=this;this.protocols?this.socketIns=new WebSocket(this.socketUrl,this.protocols):this.socketIns=new WebSocket(this.socketUrl),this.socketIns.onerror=function(){e.reconnect()},this.socketIns.onclose=function(){e.clearPing()},this.socketIns.onopen=function(){console.log("onopen123"),e.curReconnectTimes=0,e.ping(),e.consumeQueue()}}},{key:"getState",value:function(){var e;return null===(e=this.socketIns)||void 0===e?void 0:e.readyState}},{key:"getMessage",value:function(e){this.socketIns.onmessage=e}},{key:"setQueue",value:function(e){this.queue.push(e)}},{key:"consumeQueue",value:function(){var e=this;this.queue&&this.queue.length>0&&(this.queue.forEach((function(t){e.send(t)})),this.queue=[])}},{key:"sendMessage",value:function(e){var t=this.getState();1===t?this.send(e):(this.setQueue(e),2!==t&&3!==t||this.reconnect())}},{key:"send",value:function(e){this.socketIns.send(e)}},{key:"close",value:function(){1===this.getState()&&this.socketIns.close()}},{key:"reconnect",value:function(){0!==this.getState()&&(this.curReconnectTimes+=1,this.curReconnectTimes<=this.reconnectTimes&&this.setSocketIns())}},{key:"ping",value:function(){var e=this;this.pingConfig.time>0&&!this.pingInterval&&(this.pingInterval=setInterval((function(){e.sendMessage(e.pingConfig.message)}),1e3*this.pingConfig.time))}},{key:"clearPing",value:function(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}}]),e}()),m=b;o["a"].config.productionTip=!1,o["a"].prototype.XWebsocket=new m("wss://echo.websocket.org",null,10,{time:5,message:"heartbeat"}),new o["a"]({router:r,render:function(e){return e(d)}}).$mount("#app")},f2e2:function(e,t,n){"use strict";n("205c")}});