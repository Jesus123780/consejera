(this.webpackJsonpadvice_app=this.webpackJsonpadvice_app||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(11),o=a.n(i),s=a(12),r=a(13),l=a(16),u=a(14),d=a(17),p=a(15),v=a.n(p),h=(a(40),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={advice:""},a.fetchAdvice=function(){v.a.get("https://api.adviceslip.com/advice").then((function(e){var t=e.data.slip.advice;a.setState({advice:t})})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},this.state.advice),c.a.createElement("button",{className:"button",onClick:this.fetchAdvice},c.a.createElement("span",null,"GIVE ME ADVICE!"))))}}]),t}(c.a.Component));o.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ee0811da.chunk.js.map