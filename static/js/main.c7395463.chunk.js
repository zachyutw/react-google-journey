(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(0),o=t.n(a),r=t(5),c=o.a.lazy(function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,38))}),i={name:"journey",main:{path:"/:target?",name:"main",url:"/"},create:{path:"/create",name:"create",url:"/create"}},l=[i];n.a=function(){return o.a.createElement(r.c,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(r.a,Object.assign({},i.main,{component:c}))))}},21:function(e,n,t){"use strict";var a=t(15),o=t(7),r=t(0),c=t.n(r),i=t(5),l=t(11),u=t.n(l),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,t=Object(r.useState)(0),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(r.useState)({}),s=Object(o.a)(l,2),d=s[0],v=s[1],w=Object(r.useCallback)(function(e){v(e)},[]),m=Object(r.useCallback)(function(e){var n=document.body.getBoundingClientRect().top-window.scrollPos;i(n||0),window.scrollPos=document.body.getBoundingClientRect().top},[]);return Object(r.useEffect)(function(){return window.addEventListener("scroll",u.a.debounce(m,300,{leading:!0,trailing:!1}),{capture:!0,passive:!0}),window.addEventListener("wheel",u.a.debounce(w,300,{leading:!0,trailing:!1}),{capture:!0,passive:!0}),function(){window.removeEventListener("scroll",m,{capture:!0,passive:!0}),window.removeEventListener("wheel",m,{capture:!0,passive:!0})}},[]),Object(r.useEffect)(function(){if(e&&0!==c){var t=null;t=setTimeout(function(){i(0),clearTimeout(t)},n)}},[c]),{scrollMoving:c,setScrollMoving:i,wheelEvent:d}};t.d(n,"a",function(){return v});var d=Object(r.createContext)({}),v=Object(i.f)(function(e){var n=Object(r.useState)({}),t=Object(o.a)(n,2),i=t[0],l=t[1],u=s(!0,1e3),v=u.scrollMoving,w=u.wheelEvent;return window.pushG=e.history.push,window.replaceG=e.history.replace,window.t=function(e){return e},c.a.createElement(d.Provider,{value:Object(a.a)({},i,{setState:l,scrollMoving:v,wheelEvent:w})},e.children)});n.b=d},25:function(e,n,t){e.exports=t(37)},31:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),c=t.n(r),i=(t(30),t(31),t(32),t(21));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(9),u=t(20);c.a.render(o.a.createElement(l.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,3]]]);
//# sourceMappingURL=main.c7395463.chunk.js.map