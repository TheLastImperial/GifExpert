(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=(n(15),n(16),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,a,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Vxdmw9dR5IeMME4ug2ZMTqfZa5h1nl4a"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__faster",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",e," "]}),c&&"Cargando...",Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t})}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1827f257.chunk.js.map