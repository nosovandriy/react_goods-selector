(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var c=o(4),n=o.n(c),s=o(5),a=o(6),l=o(8),r=o(7),d=o(1),i=o.n(d),u=o(2),b=(o(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=o(0),h=function(e){Object(l.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(s.a)(this,o);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,o=t?"".concat(t," is selected"):"No goods selected";return Object(p.jsxs)("main",{className:"App",children:[Object(p.jsxs)("header",{className:"App__header",children:[Object(p.jsx)("h1",{className:"App__title",children:o}),Object(p.jsx)("button",{hidden:!t,type:"button",className:i()("App__clear","button",{button__hidden:!t}),onClick:function(){e.setState({selectedGood:""})},children:"Clear"})]}),Object(p.jsx)("ul",{className:"App__list",children:b.map((function(o){return Object(p.jsxs)("li",{className:i()("Good",{"Good--active":o===t}),children:[o,Object(p.jsx)("button",{type:"button",className:i()("Good","button","Good__remove",{button__hidden:o!==t}),onClick:function(){e.setState({selectedGood:""})},children:"Remove"}),Object(p.jsx)("button",{type:"button",className:i()("Good","button","Good__select",{button__hidden:o===t}),onClick:function(){e.setState({selectedGood:o})},children:"Select"})]},o)}))})]})}}]),o}(u.Component);n.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9a7360e3.chunk.js.map