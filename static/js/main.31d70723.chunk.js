(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(n,e,t){"use strict";t.r(e);var l=t(1),r=t.n(l),c=t(4),u=t.n(c),i=(t(9),t(2)),o=t(0),s=function(n){var e=n.x?null:n.o?"computer":"",t="square ".concat(e);return Object(o.jsx)("div",{className:t,onClick:function(){return n.handle(n.index)},children:n.x?"x":n.o?"o":""})},a=[null,null,null,null,null,null,null,null,null],f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]],d=function(){var n=Object(l.useState)(a),e=Object(i.a)(n,2),t=e[0],r=e[1],c=Object(l.useState)(""),u=Object(i.a)(c,2),d=u[0],j=u[1],h=Object(l.useState)(!1),x=Object(i.a)(h,2),b=x[0],O=x[1];function v(n){if(null==t[n]&&(t.filter((function(n){return null!==n})).length%2===0&&!b)){var e=t.slice();e[n]="x",r(e)}}return Object(l.useEffect)((function(){var n=t.filter((function(n){return null!==n})).length%2===1,e=function(n,e,l){return f.filter((function(r){var c=r.map((function(n){return t[n]}));return JSON.stringify(c.sort())===JSON.stringify([n,e,l].sort())}))},l=e("x","x","x");if(e("o","o","o").length>0)return j("computer"),void O(!0);if(l.length>0)return j("you"),void O(!0);var c=function(n){var e=t.slice();e[n]="o",r(e)};if(n){var u=e("o","o",null);if(u.length>0)return console.log("fdfdfdfdfdf"),void c(u[0].filter((function(n){return null===t[n]}))[0]);var i=e("x","x",null);if(i.length>0)return void c(i[0].filter((function(n){return null===t[n]}))[0]);var o=e("o",null,null);if(console.log(o),o.length>0)return void c(o[0].filter((function(n){return null===t[n]}))[0]);var s=t.map((function(n,e){return null===n?e:null})).filter((function(n){return null!==n}));if(0!==s.length)c(s[Math.ceil(Math.random()*s.length)])}}),[t]),console.log(d,b),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"game-board",children:t.map((function(n,e){return Object(o.jsx)(s,{handle:v,index:e,x:"x"===n,o:"o"===n},e)}))}),Object(o.jsx)("div",{children:b?"you"===d?Object(o.jsx)("div",{className:"result",children:Object(o.jsx)("p",{children:"You Won"})}):Object(o.jsx)("div",{className:"result",children:Object(o.jsx)("p",{children:"You Lost"})}):null}),Object(o.jsx)("button",{className:"reset",onClick:function(){r(a),j(""),O(!1)},children:"RESET"})]})};var j=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"name",children:"Tic-Tac-Toe"}),Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(d,{})})]})};u.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(n,e,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.31d70723.chunk.js.map