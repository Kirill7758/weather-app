(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/icons8-react.9e3a25e1.svg"},,,function(e,a,t){e.exports=t.p+"static/media/002-sun.2110aa2c.svg"},,,,,,,function(e,a,t){e.exports=t.p+"static/media/IMG_0785.3a7139fb.jpeg"},function(e,a,t){e.exports=t.p+"static/media/back-white.aeebca5b.svg"},function(e,a,t){e.exports=t.p+"static/media/back.265e3007.svg"},function(e,a,t){e.exports=t.p+"static/media/001-sky.acd8aae3.svg"},function(e,a,t){e.exports=t.p+"static/media/003-snow.0f0243b4.svg"},function(e,a,t){e.exports=t.p+"static/media/004-water.77078e60.svg"},function(e,a,t){e.exports=t.p+"static/media/005-rain.1493d0b7.svg"},function(e,a,t){e.exports=t.p+"static/media/001-sky-night.89ef778b.svg"},function(e,a,t){e.exports=t.p+"static/media/003-rain-night.869b50be.svg"},function(e,a,t){e.exports=t.p+"static/media/004-rain-clouds-night.7d2f80e1.svg"},function(e,a,t){e.exports=t.p+"static/media/002-moon.ba638086.svg"},function(e,a,t){e.exports=t.p+"static/media/001-empire-state-building.2f413c59.svg"},function(e,a,t){e.exports=t(68)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(20),s=t.n(r),i=(t(39),t(40),t(1)),l=t(12),m=t.n(l),o=t(6),d=function(e){var a=e.setBurger,t=e.visible,c=e.theme;return n.a.createElement("div",{className:"header-start"},n.a.createElement("div",{className:"header-block"},n.a.createElement("div",{className:"burger",style:{display:"flex",alignItems:"center"}},n.a.createElement("div",{className:"burger-block "+t,onClick:function(){return a()}},n.a.createElement("span",{className:"burger-part "+c}),n.a.createElement("span",{className:"burger-part "+c}),n.a.createElement("span",{className:"burger-part "+c})))),n.a.createElement(o.b,{to:"./",className:"link logo-block"},n.a.createElement("img",{src:m.a,className:"logo",alt:"#"}),n.a.createElement("h1",{className:"logo-title"},"Weather App")))},u=function(e){var a=e.theme,t=e.switcher,c=e.setSwitcher;return n.a.createElement("div",{className:"switcher-block"},n.a.createElement("span",{className:"switcher-light"},"Light"),n.a.createElement("div",{className:"switcher "+a,onClick:function(){return c(!t)}},n.a.createElement("div",{className:"switcher-circle"})),n.a.createElement("span",{className:"switcher-dark"},"Dark"))},h=(t(46),t(47),t(48),function(e){var a=e.theme,t=e.switcher,r=e.setSwitcher,s=e.setBurger,l=e.visible,m=e.setToday,o=(new Date+"").split(" "),h=Object(i.a)(o,4),f=h[0],p=h[1],E=h[2],b=h[3];return Object(c.useEffect)((function(){m(f)}),[f,m]),n.a.createElement("header",{className:"header "+a},n.a.createElement(d,{setBurger:s,visible:l,theme:a}),n.a.createElement("div",{className:"date-block"},n.a.createElement("h1",{className:"date-title"},E," ",p," ",b)),n.a.createElement(u,{switcher:t,setSwitcher:r,theme:a}))}),f=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=Object(c.useState)(e),r=Object(i.a)(n,2),s=r[0],l=r[1],m=s?a:t,o=function(e){l("boolean"===typeof e?e:!s)};return[s,o,m]},p=t(22),E=t.n(p),b=(t(49),t(50),function(e){var a=e.burger,t=e.theme,c=a?"":"hide ";return n.a.createElement("div",{className:"side-bar "+c},n.a.createElement("div",{className:"side-col "+t},n.a.createElement("div",{className:"info"},n.a.createElement("h3",{className:"info-title"},"Welcome Back"),n.a.createElement("div",{className:"info-user"},n.a.createElement("div",{className:"info-img-block"},n.a.createElement("img",{className:"info-img",src:E.a,alt:"#"})),n.a.createElement("div",{className:"info-user-contact"},n.a.createElement("h3",{className:"info-user-name"},"Gerasimenko Kirill"),n.a.createElement("span",{className:"info-user-email"},"kirillg7758@gmail.com"))))))}),v=t(2),g=(t(51),t(52),t(53),t(23)),N=t.n(g),w=t(24),y=t.n(w),j=t(25),k=t.n(j),O=t(15),S=t.n(O),C=t(26),x=t.n(C),T=t(27),M=t.n(T),I=t(28),A=t.n(I),B=t(29),W=t.n(B),J=t(30),P=t.n(J),R=t(31),V=t.n(R),_=t(32),D=t.n(_),L={imgArr:[{dec:"Clouds",img:k.a},{dec:"Clear",img:S.a},{dec:"Snow",img:x.a},{dec:"Rain",img:M.a},{dec:"Thunderstorm",img:A.a},{dec:"Thunderstorm",img:V.a,at:22},{dec:"Rain",img:P.a,at:22,from:5},{dec:"Clouds",img:W.a,at:22,from:5},{dec:"Clear",img:D.a,at:22,from:5}],API_KEY:"a5453c530d029c9500231fc1a65b49df",week:["Sun","Mon","Tues","Wed","Thu","Fri","Sat"],PREV:"prev",NEXT:"next",interval:332},X=function(e){var a=e.coord,t=e.today,r=a.lat,s=a.lon,l=L.API_KEY,m=L.week,o=L.imgArr,d=Object(c.useState)([]),u=Object(i.a)(d,2),h=u[0],f=u[1];Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(s,"&exclude=Tus&appid=").concat(l)).then((function(e){return e.json()})).then((function(e){var a=e.daily.map((function(e,a){return{temp:e.temp,weather:e.weather,day:m[a]}})).filter((function(e,a,t){return a!==t.length-1}));f(a)})).catch((function(e){console.log(e)}))}),[r,s,l,m]);var p=h.map((function(e,a){var c=e.temp,r=e.weather,s=e.day,l=c.day,m=Object(i.a)(r,1)[0].main,d=(o.find((function(e){return e.dec===m}))||{img:""}).img,u=t===s?"active":"";return console.log(t,s),n.a.createElement("div",{className:"weather-day "+u,key:"weather-day-"+a},n.a.createElement("h3",{className:"day-title"},s),n.a.createElement("img",{src:d,alt:"",className:"day-img"}),n.a.createElement("span",{className:"day-temperature card-temperature"},Math.floor(l-273.15)),n.a.createElement("span",{className:"day-weather"},m))}));return console.log(p),n.a.createElement(n.a.Fragment,null,p)},F=function(e){var a=e.info,t=a.name,c=a.Temperature,r=a.description,s=a.speed,i=a.humidity,l=a.capital;return n.a.createElement("div",{className:"weather-info"},n.a.createElement("div",{className:"weather-block"},n.a.createElement("h3",{className:"weather-temperature card-temperature"},c),n.a.createElement("span",{className:"weather card-weather-title"},r),n.a.createElement("div",{className:"weather-character"},n.a.createElement("div",{className:"weather-humidity"},n.a.createElement("span",{className:"humidity"},"Humidity"),n.a.createElement("span",{className:"humidity-number"},i," %")),n.a.createElement("div",{className:"weather-wind"},n.a.createElement("span",{className:"wind"},"Wind"),n.a.createElement("span",{className:"wind-number"},s," k/m")))),n.a.createElement("div",{className:"city-block"},n.a.createElement("h3",{className:"weather-city-title"},t,", ",l)))},K=function(e){var a=e.coord,t=e.today;return n.a.createElement("div",{className:"card"},n.a.createElement(F,{info:e}),n.a.createElement("div",{className:"weather-days"},n.a.createElement(X,{coord:a,today:t})))},U=function(e){var a=e.theme,t=e.today,c=Object(v.f)().state,r="light"===a?y.a:N.a;return n.a.createElement("main",{className:"main-card "+a},n.a.createElement("div",{className:"card-info-block"},n.a.createElement(o.b,{to:"/"},n.a.createElement("div",{className:"comeback-block"},n.a.createElement("div",{className:"comeback-arrow"},n.a.createElement("img",{className:"comeback-img",src:r,alt:"#"})),n.a.createElement("span",{className:"comeback-title"},"Back"))),n.a.createElement("div",{className:"decor"}),n.a.createElement(K,Object.assign({},c,{today:t}))))},G=(t(54),function(e){var a=e.switcher,t=e.btn,c=e.obj,r=void 0===c?{}:c,s=e.animate,i=r.name,l=r.Temperature,m=r.TemperatureMin,o=r.TemperatureMax,d=r.description,u=r.capital,h=L.imgArr,f=(new Date).getHours(),p=(h.find((function(e){var a=e.dec,t=e.at,c=e.from;return(f>=t||f<=c)&&a===d||a===d}))||{img:""}).img;return n.a.createElement("div",{className:"slider-card "+a+" "+s},n.a.createElement("h3",{className:"card-city"},i,", ",u),n.a.createElement("img",{className:"card-icon",src:p,alt:"#"}),n.a.createElement("div",{className:"card-weather"},n.a.createElement("h2",{className:"card-temperature"},l),n.a.createElement("span",{className:"card-weather-title"},d)),n.a.createElement("div",{className:"card-minmax"},n.a.createElement("span",{className:"card-min"},m),n.a.createElement("span",{className:"card-max"},o)),t)}),H=t(33),Y=t.n(H),q=(t(55),t(56),t(57),function(e){var a=e.switcher,t=e.setShow,c=e.setObjCard;return n.a.createElement("div",{className:"slider-card "+a,onClick:function(){t(!1),c({})}},n.a.createElement("h3",{className:"card-city"},"Add Country"),n.a.createElement("div",{className:"card-add "+a},n.a.createElement("span",{className:"card-plus "+a}),n.a.createElement("span",{className:"card-plus "+a})),n.a.createElement("img",{className:"card-city-img",src:Y.a,alt:"#"}))}),$=(t(58),t(59),t(60),L.PREV),z=L.NEXT,Q=L.interval,Z=function(e,a){a(!!e)},ee=t(13),ae=function(e){var a=e.children,t=Object(i.a)(a,2),r=t[0],s=t[1],l=L.interval,m=L.PREV,o=L.NEXT,d=Object(c.useState)(0),u=Object(i.a)(d,2),h=u[0],p=u[1],E=f(!1,"disable"),b=Object(i.a)(E,3),v=(b[0],b[1]),g=b[2],N=f(!1,"disable"),w=Object(i.a)(N,3),y=(w[0],w[1]),j=w[2],k=f(!1,"click"),O=Object(i.a)(k,3),S=O[1],C=O[2],x={transform:"translateX(".concat(h,"px)"),transition:"1.5s",width:r.length>2?"auto":"100%"},T={display:"none"},M=2;switch(window.innerWidth){case 1440:M=2;break;case 1024:M=1;break;case 768:case 425:M=0}Object(c.useEffect)((function(){Z(h===(r.length-M)*-l||0===r.length,v),Z(0===h,y)}),[h,r,M,l,v,y]);var I=[{className:m,disable:j},{className:o,disable:g}].map((function(e,a){var t=e.className,c=e.disable;return n.a.createElement("span",{className:t+" "+c,key:"arrow-"+a,style:r.length<3?T:{display:""},onClick:function(){S(),function(e,a,t,c){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2;if(a>=3)switch(e){case $:0!==t&&c(t+Q);break;case z:t!==(a-n)*-Q&&c(t-Q)}}(t,r.length,h,p,M)}})}));return n.a.createElement("div",{className:"slider-block"},n.a.createElement("div",{className:"slider slider-md"},n.a.createElement("div",{className:"slider-visible "+C},n.a.createElement("div",{className:"slider-row",style:x},s,r))),I)},te=(t(61),t(62),t(63),function(e){var a=e.switcher,t=e.arrCards,r=e.setShow,s=e.setObjCard,l=Object(c.useState)([]),m=Object(i.a)(l,2),d=m[0],u=m[1],h=a?"dark":"light";return Object(c.useEffect)((function(){if(t){var e=t.map((function(e,a){return n.a.createElement(o.b,{className:"link",to:{pathname:"/card",state:e},key:"NavLinkCard-"+a},n.a.createElement(G,{switcher:h,obj:e,key:"MainCard-"+a}))}));u(e)}}),[h,t]),n.a.createElement("main",{className:"main "+h},n.a.createElement(ae,null,d,n.a.createElement(o.b,{className:"link",to:"/add-city"},n.a.createElement(q,{switcher:h,setShow:r,setObjCard:s}))))}),ce=(t(64),t(65),t(66),t(67),function(e){var a=e.value,t=e.result,r=e.listCountryShow,s=e.setValue,l=e.setListCountryShow,o=e.setCard,d=e.setShowCard,u=e.setAnimate,h=Object(c.useState)([]),f=Object(i.a)(h,2),p=f[0],E=f[1],b=Object(c.useState)([]),v=Object(i.a)(b,2),g=v[0],N=v[1];Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var a=e.map((function(e){var a=e.name,t=e.capital;return"".concat(a.toUpperCase(),", ").concat(t.toUpperCase())}));E(a)})),l(!1)}),[l]);var w=function(e){s(e),l(!1),o(e),d(!0),u()};return n.a.createElement("div",{className:"search-block"},n.a.createElement("form",{className:{minWidth:"100%"},onSubmit:function(e){e.preventDefault(),o(a),d(!0)}},n.a.createElement("label",{className:"search"},n.a.createElement("input",{value:a,type:"text",placeholder:"Input Country",className:"search-input",onChange:function(e){var t=e.target;s(t.value.toUpperCase()),function(e,a,t,c,r,s){var i=e.filter((function(e){return e.includes(a)})).map((function(e,a){return n.a.createElement("li",{onClick:function(){return t(e)},className:"search-city",key:"city-"+a},e)}));""===a||c.length?r(!1):r(!0),s(i)}(p,a,w,r,l,N)}}),n.a.createElement("img",{src:m.a,className:"search-btn",alt:"#",onClick:function(){u(),o(a),d(!0)}})),n.a.createElement("ul",{className:"search-list "+t},g)))}),ne=function(e){var a=e.switcher,t=e.objCard,r=e.setObjCard,s=e.addCard,l=e.setShow,m=e.resultShow,d=Object(c.useState)(""),u=Object(i.a)(d,2),h=u[0],p=u[1],E=Object(c.useState)(""),b=Object(i.a)(E,2),v=b[0],g=b[1],N=f(!0,"","hide"),w=Object(i.a)(N,3),y=w[0],j=w[1],k=w[2],O=f(!1,"add-card"),S=Object(i.a)(O,3),C=S[1],x=S[2];!function(e,a){Object(c.useEffect)((function(){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("a5453c530d029c9500231fc1a65b49df")).then((function(e){return e.json()})).then((function(t){if(t.cod<=200){var c=t.main,n=t.name,r=t.weather,s=t.wind,l=t.coord,m=c.temp,o=c.temp_min,d=c.temp_max,u=c.pressure,h=c.humidity,f=s.speed,p=Object(i.a)(r,1)[0].main,E=Math.floor(m-273.15),b=Math.floor(o-273.15),v=Math.floor(d-273.15);a({name:n,Temperature:E,TemperatureMin:b,TemperatureMax:v,description:p,speed:f,pressure:u,humidity:h,coord:l,capital:e.split(", ")[1]})}})).catch((function(e){return console.log(e.message)}))}),[e,a])}(v,r);var T=n.a.createElement(o.b,{to:"/",className:"link-btn"},n.a.createElement("button",{className:"btn",onClick:s},"Add Country +"));return n.a.createElement("div",{className:"search-page "+a},n.a.createElement("h3",{className:"search-title"},"Search Country"),n.a.createElement(ce,{value:h,result:k,listCountryShow:y,setValue:p,setListCountryShow:j,setCard:g,setShowCard:l,setAnimate:C}),n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader-pipe"}),n.a.createElement("span",{className:"loader-pipe"}),n.a.createElement("span",{className:"loader-pipe"})),n.a.createElement("div",{className:"hidden-block "+m},n.a.createElement(G,{switcher:a,btn:T,obj:t,animate:x})),n.a.createElement("div",{className:"search-decor"}),n.a.createElement("div",{className:"search-decor-right"}))},re=function(){var e=f(!0,"dark","light"),a=Object(i.a)(e,3),t=a[0],r=a[1],s=a[2],l=f(!1,"active"),m=Object(i.a)(l,3),o=m[0],d=m[1],u=m[2],p=f(!1,"show","hide"),E=Object(i.a)(p,3),g=E[0],N=E[1],w=E[2],y=Object(c.useState)({}),j=Object(i.a)(y,2),k=j[0],O=j[1],S=Object(c.useState)([]),C=Object(i.a)(S,2),x=C[0],T=C[1],M=Object(c.useState)(""),I=Object(i.a)(M,2),A=I[0],B=I[1],W=Object(c.useMemo)((function(){return n.a.createElement(v.a,{path:"/card"},n.a.createElement(U,{theme:s,today:A}))}),[s,A]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cards"));T(e)}),[k]),n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{switcher:t,theme:s,visible:u,setSwitcher:r,setBurger:d,setToday:B}),n.a.createElement(v.a,{exact:!0,path:"/"},n.a.createElement(te,{switcher:t,arrCards:x,setObjCard:O,setShow:N})),W,n.a.createElement(v.a,{path:"/add-city"},n.a.createElement(ne,{switcher:s,objCard:k,resultShow:w,show:g,setObjCard:O,setShow:N,addCard:function(){return function(e,a,t){t((function(a){return a?[e].concat(Object(ee.a)(a)):[e]})),localStorage.getItem("cards")?(localStorage.removeItem("cards"),localStorage.setItem("cards",JSON.stringify([e].concat(Object(ee.a)(a))))):a?localStorage.setItem("cards",JSON.stringify([e].concat(Object(ee.a)(a)))):localStorage.setItem("cards",JSON.stringify([e]))}(k,x,T)}})),n.a.createElement(b,{burger:o,theme:s}))};var se=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"body"},n.a.createElement(v.c,null,n.a.createElement(re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.369efbb5.chunk.js.map