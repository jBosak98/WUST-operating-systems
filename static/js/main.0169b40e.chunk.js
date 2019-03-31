(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){e.exports=a(337)},225:function(e,t,a){},226:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),i=(a(225),a(20)),o=a(21),c=a(25),d=a(22),u=a(24),h=(a(226),a(40)),b=a(131),f=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.results;if(console.log(e),0===e.length)return r.a.createElement("div",null);var t=[["Algorithms","SSTF","FCFS","SCAN","C-SCAN","EDF","FD-SCAN"]];return e.map(function(e){return t.push([" ",e.sstf,e.fcfs,e.scan,e.cscan,e.edf,e.fdscan])}),r.a.createElement("div",null,r.a.createElement(b.a,{width:"500px",height:"300px",chartType:"Bar",loader:r.a.createElement("div",null,"Loading Chart"),data:t,options:{chart:{title:"Disk scheduling algorithms",subtitle:"simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN."}},rootProps:{"data-testid":"2"}}))}}]),t}(r.a.Component);var m=Object(h.a)(function(e){var t=e.TaskReducer;return{tasks:t.tasks,results:t.results}})(f),p=a(58),v=a.n(p),k=a(133),g=a(134),O=a(31),A=a(135),E=a(98),j=a(26),S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.tasks,t=this.props.classes;return e.length<1||void 0===e?r.a.createElement("div",null):r.a.createElement("div",{className:t.root},r.a.createElement(k.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(O.a,null,"id"),r.a.createElement(O.a,{align:"right"},"arrival time"),r.a.createElement(O.a,{align:"right"},"block address"))),r.a.createElement(A.a,null,e.map(function(e,t){return r.a.createElement(E.a,{key:t},r.a.createElement(O.a,{component:"th",scope:"row"},t),r.a.createElement(O.a,{align:"right"},e.arrivalTime),r.a.createElement(O.a,{align:"right"},e.blockAddress))})))))}}]),t}(r.a.Component);var w=Object(h.a)(function(e){return{tasks:e.TaskReducer.tasks}})(Object(j.withStyles)({root:{padding:"15px",display:"inline-block",float:"left"}})(S)),C=a(7),y=a(17),D=a(61),T=a(46),N=a.n(T),R={ADD_TASK:"ADD_TASK",RUN_SCHEDULER:"RUN_SCHEDULER"};function M(e){for(var t=0,a=[],n=0,r=void 0,s=0,l=0,i=1;t<e.length||0!==a.length;){for(var o=t;o<e.length;o++)n>=e[o].arrivalTime&&(a.push(e[o]),t++);if(0!==a.length){r=a[0];var c=a.filter(function(e){return s<e.blockAddress*i});0===c.length&&(i*=-1,c=a.filter(function(e){return s<e.blockAddress*i})),c.map(function(e){Math.abs(s-e.blockAddress)<Math.abs(s-r.blockAddress)&&(r=e)}),a=a.filter(function(e){return e!==r}),l+=Math.abs(s-r.blockAddress),s=r.blockAddress}n++}return l}function F(e){for(var t=0,a=[],n=0,r=void 0,s=0,l=0;t<e.length||0!==a.length;){for(var i=t;i<e.length;i++)n>=e[i].arrivalTime&&(a.push(e[i]),t++);0!==a.length&&(r=a[0],a.map(function(e){Math.abs(s-e.blockAddress)<Math.abs(s-r.blockAddress)&&(r=e)}),a=a.filter(function(e){return e!==r}),l+=Math.abs(s-r.blockAddress),s=r.blockAddress),n++}return l}function J(e){for(var t=0,a=[],n=0,r=void 0,s=0,l=0;t<e.length||0!==a.length;){for(var i=t;i<e.length;i++)n>=e[i].arrivalTime&&(a.push(e[i]),t++);0!==a.length&&(r=a.shift(),l+=Math.abs(s-r.blockAddress),s=r.blockAddress),n++}return l}function U(e){for(var t=0,a=[],n=0,r=void 0,s=0,l=0;t<e.length||0!==a.length;){for(var i=t;i<e.length;i++)n>=e[i].arrivalTime&&(a.push(e[i]),t++);if(0!==a.length){r=a[0];var o=a.filter(function(e){return s<e.blockAddress});0===o.length&&(l-=-s,s=0,o=a.filter(function(e){return s<e.blockAddress})),console.log("headMovement"),console.log(l),o.map(function(e){Math.abs(s-e.blockAddress)<Math.abs(s-r.blockAddress)&&(r=e)}),a=a.filter(function(e){return e!==r}),console.log("actual"),console.log(r),l+=Math.abs(s-r.blockAddress),s=r.blockAddress}n++}return l}var W=function(){function e(t){Object(i.a)(this,e),this.tasks=t}return Object(o.a)(e,[{key:"start",value:function(){console.log("start"),console.log(this.tasks);var e=JSON.stringify(this.tasks);return{sstf:F(JSON.parse(e)),fcfs:J(JSON.parse(e)),scan:M(JSON.parse(e)),cscan:U(JSON.parse(e)),edf:(JSON.parse(e),0),fdscan:(JSON.parse(e),0)}}}]),e}();var _=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={arrivalTime:0,blockAddress:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(y.a)(Object(y.a)(a))),a.handleAdd=a.handleAdd.bind(Object(y.a)(Object(y.a)(a))),a.handleChange=a.handleChange.bind(Object(y.a)(Object(y.a)(a))),a.handleStart=a.handleStart.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e){var t,a=this.props.dispatch,n=this.state,r=n.arrivalTime,s=n.blockAddress;a((t={arrivalTime:r<1?1:r,blockAddress:s<1?1:s,waitingTime:0},function(e){e({newTask:t,type:R.ADD_TASK})}))}},{key:"handleChange",value:function(e,t){this.setState(Object(C.a)({},e,t.target.value))}},{key:"handleStart",value:function(){var e=this.props;(0,e.dispatch)(function(e){return function(t){t({results:new W(e).start(),type:R.RUN_SCHEDULER})}}(e.tasks))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.isCollapsed;return n.createElement("div",{className:a?t.tightRoot:t.wideRoot},n.createElement(N.a,{label:"Arrival time",type:"number",onChange:function(t){e.handleChange("arrivalTime",t)}}),n.createElement("br",null),n.createElement(N.a,{label:"Block address",type:"number",onChange:function(t){e.handleChange("blockAddress",t)}}),n.createElement("br",null),n.createElement("br",null),n.createElement(D.a,{variant:"contained",onClick:this.handleAdd},"ADD"),n.createElement(D.a,{variant:"contained",onClick:this.handleStart},"Start"))}},{key:"updateWindowDimensions",value:function(){var e=window.innerWidth,t=e<=960;this.setState({width:e,isCollapsed:t})}}]),t}(n.Component);var x=Object(h.a)(function(e){return{tasks:e.TaskReducer.tasks}})(Object(j.withStyles)({wideRoot:{position:"fixed",display:"inline-block",margin:"auto",marginTop:"50px",left:"50%",transform:"translateX(-50%)"},tightRoot:{position:"inherit",display:"inline-block",margin:"auto",marginTop:"50px"}})(_)),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(w,null),r.a.createElement(x,null),r.a.createElement(m,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(55),H=a(39),K=a(47),z=a(48),I={tasks:[],results:[]};var P=Object(H.b)({TaskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.ADD_TASK:return{tasks:[].concat(Object(z.a)(e.tasks),[t.newTask]),results:e.results};case R.RUN_SCHEDULER:var a=t.results;return Object(K.a)({},e,{results:[].concat(Object(z.a)(e.results),[a])});default:return Object(K.a)({},e)}}}),X=a(137),$=a(136),q=Object(H.c)(P,Object(X.a)($.a));l.a.render(r.a.createElement(B.a,{store:q},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[220,1,2]]]);
//# sourceMappingURL=main.0169b40e.chunk.js.map