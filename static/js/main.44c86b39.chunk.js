(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=(n(28),n(7)),s=n(8),u=n(10),l=n(9),m=n(11),h=n(20),d=n(5),p=(n(29),n(30),n(31),n(19)),f=n.n(p),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={ava:"",nickname:"",msg:"",data:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=this;f.a.ajax({method:"get",dataType:"json",contentType:"application/x-www-form-urlencoded",url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx424b3ab946fd8b61&redirect_uri=https://xc.muho.tv/wf/getWXFUserinfo&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect",success:function(t){var n=t.nickname,a=t.headimgurl;e.setState({nickname:n,ava:a,msg:"\u83b7\u53d6\u6570\u636e\u6210\u529f",data:t})},error:function(t){console.log(t),e.setState({msg:"\u83b7\u53d6\u6570\u636e\u5931\u8d25"})}})}},{key:"render",value:function(){var e=this.state,t=e.nickname,n=e.ava,a=e.msg,c=e.data;return o.a.createElement("div",{className:"me_Container"},o.a.createElement("h1",null,a),o.a.createElement("h1",null,c),o.a.createElement("h1",null,t),o.a.createElement("img",{src:n,alt:"",width:"100%",height:"100%"}))}}]),t}(o.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(d.a,{exact:!0,path:"/",component:w})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.44c86b39.chunk.js.map