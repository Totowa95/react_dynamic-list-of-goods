(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),s=n.n(a),l=n(3),c=n(4),i=n(6),u=n(5),d=(n(12),function(t){var e=t.goods;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,className:t.color},t.name)}))))});function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){return f().then((function(t){return t.sort((function(t,e){return t.name>e.name?1:-1})).slice(0,5)}))},h=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},G=function(t){var e=t.allGoods,n=t.firstFiveGoods,o=t.redGoods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return e(f)}},"All goods"),r.a.createElement("button",{type:"button",onClick:function(){return n(m)}},"First 5 goods"),r.a.createElement("button",{type:"button",onClick:function(){return o(h)}},"just red goods"))},g=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={listOfGoods:[]},t.loadGoods=function(e){e().then((function(e){t.setState({listOfGoods:e})}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.listOfGoods;return 0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement(G,{allGoods:this.loadGoods,firstFiveGoods:this.loadGoods,redGoods:this.loadGoods})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{goods:t}),r.a.createElement(G,{allGoods:this.loadGoods,firstFiveGoods:this.loadGoods,redGoods:this.loadGoods}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d1967d76.chunk.js.map