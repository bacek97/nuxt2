(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{211:function(t,e,n){"use strict";n.r(e);n(34);var r=n(3),o=n(120),c=Object(o.a)({setup:function(){var t=Object(o.c)(null),e=Object(o.d)().$http;return Object(o.e)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$get("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.slice(0,20)}));case 2:t.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),{posts:t}}}),l=n(64),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Blog posts")]),t._v(" "),t.$fetchState.pending?[n("content-placeholders",[n("content-placeholders-text",{attrs:{lines:20}})],1)]:t.$fetchState.error?[n("p",[t._v("Error while fetching posts: "+t._s(t.$fetchState.error.message))])]:[n("ul",[t._l(t.posts,(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:"/posts/"+e.id}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),t._v(" "),n("li",[n("n-link",{attrs:{to:"/posts/404"}},[t._v("\n          404 post\n        ")])],1)],2)]],2)}),[],!1,null,null,null);e.default=component.exports}}]);