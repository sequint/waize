(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(24),r=n.n(i),o=n(156),s=n(39),j=n(50),u=Object(j.b)({name:"capturedPhoto",initialState:{open:!1,photoURL:""},reducers:{togglePhotoView:function(e){e.open=!e.open},updatePhotoURL:function(e,t){e.photoURL=t.payload,console.log(e.photoURL)}}}),l=u.actions,d=(l.togglePhotoView,l.updatePhotoURL,u.reducer),b=Object(j.a)({reducer:{capturedPhoto:d}}),h=n(38),O=n(13),x=n(157),f=n(150),m=n(158),p=n(153),g=n(46),v=n.n(g),w=n(71),z=n.n(w),y=n(154),L=(n(93),n(1)),P=[{icon:Object(L.jsx)(v.a,{}),title:"Wave Detection",text:"Waize uses pixl technology to analyze pictures in real time and detect waves that are forming."},{icon:Object(L.jsx)(z.a,{}),title:"Wave Size",text:"Using the wave detection technology, Waize will analyze what it deems the face of a wave compared to its surroundings and predict in real time its size."}],W=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h2",{className:"aboutTitle",children:"What It Does"}),Object(L.jsx)(x.a,{className:"aboutList",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:P.map((function(e){return Object(L.jsxs)(f.a,{children:[Object(L.jsx)(m.a,{children:Object(L.jsx)(y.a,{className:"iconColor",children:e.icon})}),Object(L.jsx)(p.a,{primary:e.title,secondary:e.text})]})}))})]})},k=n(72),N=n(10),R=n(63),I=n.n(R),F=(n(96),{audio:!1,video:{facingMode:"environment"}}),S=function(){var e=Object(c.useRef)(),t=function(e){var t=Object(c.useState)(null),n=Object(N.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(k.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia(e);case 3:n=t.sent,i(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();if(a)return function(){a.getTracks().forEach((function(e){e.stop()}))};t()}),[a,e]),a}(F);t&&e.current&&!e.current.srcObject&&(e.current.srcObject=t);return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("video",{ref:e,onCanPlay:function(){e.current.play()},className:"streamScreen",autoPlay:!0,playsInline:!0,muted:!0})})},U=(s.c,n(155),n(159)),C=(n(148),n(151),n(97),n(98),n(36),n(99),function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("h1",{className:"homeTitle",children:"Waize"})})}),D=n.p+"static/media/dashboardWave.980ac552.jpeg",E=n.p+"static/media/dashboardWaveSmall.74d48754.png",M=(n(100),function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("img",{src:D,alt:"waves with waize generator",className:"homeWavePic largePic"}),Object(L.jsx)("img",{src:E,alt:"waves with waize generator",className:"homeWavePic smallPic"})]})}),T=(n(73),n(101),n(160)),B=n(161),H=n(75),J=n.n(H),V=(n(102),function(e){var t=Object(c.useState)(0),n=Object(N.a)(t,2),a=n[0],i=n[1],r=function(t){switch(t){case"home":return"home"===e.definedRoute?"activeLinkIcon":"inactiveLinkIcon";case"waize":return"waize"===e.definedRoute?"activeLinkIcon":"inactiveLinkIcon";default:return"inactiveLinkIcon"}};return Object(L.jsx)(U.a,{className:"navBarHolder",children:Object(L.jsxs)(T.a,{showLabels:!0,value:a,onChange:function(e,t){i(t)},children:[Object(L.jsx)(h.b,{to:"/",children:Object(L.jsx)(B.a,{className:r("home"),label:"Home",icon:Object(L.jsx)(J.a,{})})}),Object(L.jsx)(h.b,{to:"/waize",children:Object(L.jsx)(B.a,{className:r("waize"),label:"Waize",icon:Object(L.jsx)(v.a,{})})})]})})}),q=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(C,{}),Object(L.jsx)(M,{}),Object(L.jsx)(W,{}),Object(L.jsx)(V,{definedRoute:"home"})]})},A=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(S,{}),Object(L.jsx)(V,{definedRoute:"waize"})]})},G=(n(109),function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(h.a,{children:Object(L.jsxs)(O.c,{children:[Object(L.jsx)(O.a,{exact:!0,path:"/",children:Object(L.jsx)(q,{})}),Object(L.jsx)(O.a,{path:"/waize",children:Object(L.jsx)(A,{})})]})})})});r.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)(s.a,{store:b,children:Object(L.jsx)(G,{})})})}),document.getElementById("root"))},93:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.b1a06df4.chunk.js.map