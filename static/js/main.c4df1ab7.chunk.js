(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(18),i=n.n(o),r=(n(28),n(7)),s=n(8),u=n(10),l=n(9),h=n(11),m=n(20),p=n(5),d=(n(29),n(30),n(31),n(19)),f=n.n(d),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={ava:"",nickname:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=this;f.a.ajax({method:"GET",url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx424b3ab946fd8b61&redirect_uri=https://xc.muho.tv/wf/getWXFUserinfo&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect",success:function(t){var n=t.nickname,a=t.headimgurl;e.setState({nickname:n,ava:a})}})}},{key:"render",value:function(){var e=this.state,t=e.nickname,n=e.ava;return c.a.createElement("div",{className:"me_Container"},c.a.createElement("h1",null,t),c.a.createElement("img",{src:n,alt:"",width:"100%",height:"100%"}))}}]),t}(c.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p.a,{exact:!0,path:"/",component:v})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.c4df1ab7.chunk.js.map