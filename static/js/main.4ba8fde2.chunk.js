(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(4),a=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(1),l=(n(25),n(2)),s=n(11),d=n(12),u=n(17),m=n(13),h=n(19),f=n(5),p=n.n(f),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.canvas=new p.a(this.props.sketch,this.wrapper),this.canvas.myCustomRedrawAccordingToNewPropsHandler&&this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.props.shouldRedrawOnPropsChange&&this.props.sketch!==e.sketch&&(this.canvas.remove(),this.canvas=new p.a(e.sketch,this.wrapper)),this.canvas.myCustomRedrawAccordingToNewPropsHandler&&this.canvas.myCustomRedrawAccordingToNewPropsHandler(e)}},{key:"componentWillUnmount",value:function(){this.canvas.remove()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:this.props.style,ref:function(t){return e.wrapper=t}})}}]),t}(r.Component),b=n(16),g=function(e,t){var n=[],r=window.innerWidth,o=window.innerHeight,i=0;window.addEventListener("resize",function(){e.resizeCanvas(window.innerWidth,window.innerHeight),r=window.innerWidth,o=window.innerHeight}),e.setup=function(){e.createCanvas(r,o)},e.draw=function(){e.noStroke();for(var t=[],a=0;a<n.length;a++){var c=n[a],l=c.rRatio+.001;if(l>1)break;e.fill.apply(e,Object(b.a)(c.colours)),e.ellipse(c.width,c.height,c.r*l),t.push({width:c.width,height:c.height,r:c.r,colours:c.colours,rRatio:l})}if(n=t,i%8===0){var s=e.random(r),d=e.random(o),u=e.random(20,r*o/5e3);e.ellipse(s,d,.1*u);var m=[e.random(100,255),e.random(100,255),e.random(100,255)];e.fill.apply(e,m),n.push({r:u,rRatio:.1,width:s,height:d,colours:m})}i+=1}},v=function(){return Object(r.useEffect)(function(){return function(){window.removeEventListener("resize",function(){})}}),o.a.createElement(w,{sketch:function(e){return g(e)},style:{position:"absolute"}})},k=n(3),y={colours:{appBackground:"#7B6287",tileBackground:"#483F54",tileFont:"#E78A7C",scoreboardContainerBackground:"#94D68D",scoreboardMessageBackground:"#465E96",primaryButton:"#465E96",scoreFont:"#f00"}};function E(){var e=Object(k.a)(["\n  to {\n    stroke-dashoffset: 0;\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(k.a)(["\nto {\n  stroke-dashoffset: 0;\n}"]);return C=function(){return e},e}var j=c.b.div.withConfig({displayName:"Gameboard__Board",componentId:"lvfjqe-0"})(["width:95%;margin:0 auto;max-width:450px;"]),x=c.b.div.withConfig({displayName:"Gameboard__BoardContainer",componentId:"lvfjqe-1"})(["width:100%;padding-top:100%;position:relative;"]),O=c.b.div.withConfig({displayName:"Gameboard__TileRow",componentId:"lvfjqe-2"})(["display:flex;width:100%;height:33.33%;top:","%;left:0;bottom:0;right:0;position:absolute;"],function(e){return 33.33*e.i}),_=c.b.div.withConfig({displayName:"Gameboard__Tile",componentId:"lvfjqe-3"})(["padding:5%;width:33.33%;margin:3%;background-color:",";color:",";border-radius:10px;"],function(e){return e.theme.colours.tileBackground},function(e){return e.theme.colours.tileFont}),W=Object(c.c)(C()),B=c.b.svg.withConfig({displayName:"Gameboard__OSVG",componentId:"lvfjqe-4"})(["stroke-dasharray:1000;stroke-dashoffset:1000;animation:"," 0.7s ease-in forwards;"],W),S=function(){return o.a.createElement(B,{height:"100%",width:"100%",viewBox:"0 0 100 100"},o.a.createElement("circle",{cx:"50",cy:"50",r:"45",stroke:y.colours.tileFont,strokeWidth:"10",fill:"none"}))},N=Object(c.c)(E()),R=c.b.line.withConfig({displayName:"Gameboard__XSVG1",componentId:"lvfjqe-5"})(["stroke-dasharray:1000;stroke-dashoffset:1000;animation:"," 0.4s ease-in forwards;"],N),I=c.b.line.withConfig({displayName:"Gameboard__XSVG2",componentId:"lvfjqe-6"})(["stroke-dasharray:1000;stroke-dashoffset:1000;animation:"," 0.4s ease-in forwards;animation-delay:0.2s;"],N),q=function(){return o.a.createElement("svg",{height:"100%",width:"100%",viewBox:"0 0 100 100"},o.a.createElement(R,{x1:"5",y1:"5",x2:"95",y2:"95",stroke:y.colours.tileFont,strokeWidth:"10"}),o.a.createElement(I,{x1:"95",y1:"5",x2:"5",y2:"95",stroke:y.colours.tileFont,strokeWidth:"10"}))},z=function(e){switch(e){case"X":return o.a.createElement(q,null);case"O":return o.a.createElement(S,null);default:return""}},G=function(e){var t=e.board,n=e.onClick;return o.a.createElement(j,null,o.a.createElement(x,null,o.a.createElement(O,{i:0},o.a.createElement(_,{onClick:n(0)},z(t[0])),o.a.createElement(_,{onClick:n(1)},z(t[1])),o.a.createElement(_,{onClick:n(2)},z(t[2]))),o.a.createElement(O,{i:1},o.a.createElement(_,{onClick:n(3)},z(t[3])),o.a.createElement(_,{onClick:n(4)},z(t[4])),o.a.createElement(_,{onClick:n(5)},z(t[5]))),o.a.createElement(O,{i:2},o.a.createElement(_,{onClick:n(6)},z(t[6])),o.a.createElement(_,{onClick:n(7)},z(t[7])),o.a.createElement(_,{onClick:n(8)},z(t[8])))))},A=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(l.a)(t[n],3),o=r[0],i=r[1],a=r[2];if(e[o]&&e[o]===e[i]&&e[o]===e[a])return e[o]}for(var c=!0,s=0;s<e.length;s++)null==e[s]&&(c=!1);return c?"draw":null};function P(){var e=Object(k.a)(["\nfrom,\n  29.9% {\n    opacity: 0;\n  }\n  30%,\n  to {\n    opacity: 1;\n  }\n\n"]);return P=function(){return e},e}var X=c.b.div.withConfig({displayName:"Scoreboard__Board",componentId:"mqrtwo-0"})(["width:90%;margin:0 auto;max-width:425px;"]),F=c.b.div.withConfig({displayName:"Scoreboard__ScoreboardContainer",componentId:"mqrtwo-1"})(["width:100%;height:","px;background-color:",";border-radius:10px;font-family:digital-clock-font;color:white;display:flex;align-items:center;padding:0 4%;"],function(e){return e.containerWidth/3.4},function(e){return e.theme.colours.scoreboardContainerBackground}),T=c.b.div.withConfig({displayName:"Scoreboard__ScoreTile",componentId:"mqrtwo-2"})(["color:",";font-size:","px;line-height:","px;border-radius:1vw;text-align:center;width:15%;justify-content:space-around;"],function(e){return e.theme.colours.scoreFont},function(e){return e.containerWidth/4},function(e){return e.containerWidth/4}),H=Object(c.c)(P()),L=c.b.div.withConfig({displayName:"Scoreboard__ScoreboardMessage",componentId:"mqrtwo-3"})(["color:",";font-size:","px;line-height:","px;animation:"," 1s linear infinite;padding-bottom:","px;"],function(e){return e.theme.colours.scoreboardMessageBackground},function(e){return e.containerWidth/8},function(e){return e.containerWidth/8},function(e){return null!=e.winner&&H},function(e){return e.containerWidth/100}),M=c.b.button.withConfig({displayName:"Scoreboard__PrimaryButton",componentId:"mqrtwo-4"})(["width:45%;height:","px;position:relative;background:none;color:",";text-transform:uppercase;text-decoration:none;border:0.1em solid ",";outline:none;font-family:digital-clock-font;font-size:",'px;&::before{content:"";display:block;position:absolute;width:10%;background:',';height:0.11em;right:20%;top:-0.1em;transform:skewX(-45deg);-webkit-transition:all 0.45s cubic-bezier(0.86,0,0.07,1);transition:all 0.45s cubic-bezier(0.86,0,0.07,1);}&::after{content:"";display:block;position:absolute;width:10%;background:',";height:0.11em;left:20%;bottom:-0.1em;transform:skewX(45deg);-webkit-transition:all 0.45 cubic-bezier(0.86,0,0.07,1);transition:all 0.45s cubic-bezier(0.86,0,0.07,1);}&:hover{&::before{right:80%;}&::after{left:80%;}}"],function(e){return e.containerWidth/15},function(e){return e.theme.colours.primaryButton},function(e){return e.theme.colours.primaryButton},function(e){return e.containerWidth/20},function(e){return e.theme.colours.scoreboardContainerBackground},function(e){return e.theme.colours.scoreboardContainerBackground}),D=c.b.div.withConfig({displayName:"Scoreboard__ScoreboardCentre",componentId:"mqrtwo-5"})(["align-items:center;display:flex;flex-direction:column;height:100%;justify-content:space-evenly;flex:1;"]),V=function(e){var t,n,i=Object(r.useState)(),a=Object(l.a)(i,2),c=a[0],s=a[1],d=Object(r.useRef)(null);return Object(r.useEffect)(function(){var e=function(){return s(d.current.getBoundingClientRect().width)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),o.a.createElement(X,{ref:d},o.a.createElement(F,{containerWidth:c},o.a.createElement(T,{containerWidth:c},e.score[0]),o.a.createElement(D,null,o.a.createElement(L,{containerWidth:c,winner:e.winner},(t=e.winner,n=e.currentPlayer,null==t?n+"'s Turn":"draw"===t?"It's a draw!":t+"  Wins!")),o.a.createElement(M,{onClick:e.handleResetGame,containerWidth:c},null==e.winner?"Reset":"Start")),o.a.createElement(T,{containerWidth:c},e.score[1])))},J=Array(9).fill(null),U=c.b.div.withConfig({displayName:"App__AppContainer",componentId:"sc-17ce6pq-0"})(["position:absolute;right:0;left:0;bottom:0;top:0;margin:auto;width:100%;max-width:500px;border-radius:10px;padding-bottom:2.5%;justify-content:center;user-select:none;display:flex;flex-direction:column;align-items:center;background-color:",";",""],function(e){return e.theme.colours.appBackground},function(e){return e.hasAppRendered&&"visibility: hidden;"}),$=function(){var e=Object(r.useState)(J),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)("X"),c=Object(l.a)(a,2),s=c[0],d=c[1],u=Object(r.useState)([0,0]),m=Object(l.a)(u,2),h=m[0],f=m[1],p=Object(r.useState)(!0),w=Object(l.a)(p,2),b=w[0],g=w[1];Object(r.useEffect)(function(){g(!1)},[]);var k=A(n);return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(U,{hasAppRendered:b},o.a.createElement(G,{board:n,onClick:function(e){return function(){if(null==k&&null==n[e]){var t=n.slice(0);t[e]=s,i(t);var r=function(e){return"X"===e?"O":"X"}(s);d(r);var o=A(t);if(null!=o&&"draw"!==o){var a="X"===o?[h[0]+1,h[1]]:[h[0],h[1]+1];f(a)}}}}}),o.a.createElement("br",null),o.a.createElement(V,{score:h,winner:k,currentPlayer:s,handleResetGame:function(){i(J)}})))};a.a.render(o.a.createElement(c.a,{theme:y},o.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.4ba8fde2.chunk.js.map