(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(14),n(1)),s=n.n(i),u=n(4),l=n(5),p=n(6),h=n(8),d=n(7),v=(n(16),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={apiResponse:""},a}return Object(p.a)(n,[{key:"getData",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:".concat(t,"/data/trimble"),(a=new XMLHttpRequest).open("GET",n,!1),e.next=5,a.send();case 5:o=a.responseText,this.setState({apiResponse:o});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/xpress/public",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT||5e3;this.getData(e)}},{key:"render",value:function(){return o.a.createElement("p",null,"echo ",this.state.apiResponse)}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6827b1b8.chunk.js.map