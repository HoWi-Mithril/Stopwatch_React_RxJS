(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),i=n(17),o=n.n(i),r=(n(27),n(18)),a=n(19),l=n(21),u=n(20),b=(n(28),n(29),n(0));function d(t){return t<10?"0"+t:t}var h=function(t){var e=d(t.time.hours),n=d(t.time.minutes),c=d(t.time.seconds);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Time is:"}),Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsxs)("span",{children:[" ",e," "]}),Object(b.jsx)("span",{children:":"}),Object(b.jsxs)("span",{children:[" ",n," "]}),Object(b.jsx)("span",{children:":"}),Object(b.jsxs)("span",{children:[" ",c," "]})]})]})},j=(n(31),n(36)),m=n(13),O=n(34),p=n(38),f=n(35),S=function(t){return Object(c.useEffect)((function(){var e=Object(j.a)(document.getElementById("btn_wait"),"click"),n=e.pipe(Object(O.a)(e.pipe(Object(p.a)(299,m.b,{trailing:!0}))),Object(f.a)((function(t){return 2===t.length}))).subscribe((function(e){t.onClickWait()}));return function(){return n.unsubscribe()}})),Object(b.jsxs)("div",{className:"controlButtons",children:[Object(b.jsx)("h3",{children:"Control Panel"}),Object(b.jsx)("button",{className:"btn",onClick:t.onClickActionStart,children:"Start"}),Object(b.jsx)("button",{className:"btn",onClick:t.onClickActionStop,children:"Stop"}),Object(b.jsx)("button",{className:"btn",id:"btn_wait",children:"Wait"}),Object(b.jsx)("button",{className:"btn",onClick:t.onClickReset,children:"Reset"})]})},x=n(37),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).handleActionStart=function(){c.subscribe?console.log("Error - Timer Already Start"):(console.log("Start Timer"),c.subscribe=c.source.subscribe((function(t){return c.addSeconds()})))},c.handleActionStop=function(){c.clearTimerId(),c.clearTime()},c.handleActionWait=function(){console.log("WAIT"),c.clearTimerId()},c.handleActionReset=function(){c.handleActionStop(),setTimeout((function(){return c.handleActionStart()}),0)},c.state={hours:0,minutes:0,seconds:0,timerId:null},c.source=Object(x.a)(1e3),c.subscribe=null,c}return Object(a.a)(n,[{key:"addSeconds",value:function(){var t=+this.state.seconds,e=+this.state.minutes,n=+this.state.hours;e>=59&&t>=59?this.setState({hours:n+1,minutes:0,seconds:0}):t>=59?this.setState({minutes:e+1,seconds:0}):this.setState({seconds:t+1})}},{key:"clearTime",value:function(){this.setState({hours:0,minutes:0,seconds:0})}},{key:"clearTimerId",value:function(){this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("section",{className:"section_app_react",children:[Object(b.jsx)("h1",{children:"Stopwatch - React, RxJS"}),Object(b.jsx)(h,{time:this.state}),Object(b.jsx)(S,{onClickActionStart:this.handleActionStart,onClickActionStop:this.handleActionStop,onClickWait:this.handleActionWait,onClickReset:this.handleActionReset})]})})}}]),n}(s.a.Component);o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.aee4e5da.chunk.js.map