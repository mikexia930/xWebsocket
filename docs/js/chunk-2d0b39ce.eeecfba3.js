(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b39ce"],{"28b4":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("socket2")]),e._l(e.messages,(function(s,n){return t("p",{key:n},[e._v(" "+e._s(s)+" ")])}))],2)},a=[],o={name:"Socket2",data:function(){return{messages:[]}},mounted:function(){for(var e=0;e<10;e+=1)this.XWebsocket.sendMessage(JSON.stringify(["data",{test:"multi_".concat(e+1)}]));this.XWebsocket.getMessage(this.showMessage)},methods:{showMessage:function(e){this.messages.push(JSON.stringify(e.data))}}},c=o,i=t("2877"),u=Object(i["a"])(c,n,a,!1,null,null,null);s["default"]=u.exports}}]);