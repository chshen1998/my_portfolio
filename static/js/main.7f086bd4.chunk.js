(this["webpackJsonpportfolio-react-website"]=this["webpackJsonpportfolio-react-website"]||[]).push([[0],{15:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(9),n=s.n(a),r=(s(15),s(2)),i=s(3),o=s(5),l=s(4),j=s(8),d=s(10),h=s.n(d),b=(s(18),s(0)),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,c=this.props.data.address.city,a=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,target:"popup",children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#education",children:"Education"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#career",children:"Career"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#projects",children:"Projects"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsx)("h1",{className:"responsive-headline",children:e}),Object(b.jsxs)("h3",{children:["I'm a ",c," based ",Object(b.jsx)("span",{children:t})," ",s,"."]}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{className:"social",children:a})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"twelve columns",children:Object(b.jsx)("ul",{className:"social-links",children:e})}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=(this.props.data.address.street,this.props.data.address.city),a=(this.props.data.address.state,this.props.data.address.zip,this.props.data.phone),n=this.props.data.email,r=this.props.data.resumedownload;return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:t,alt:"Chew Hoa Shen Profile Pic"})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:s}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"columns contact-details",children:[Object(b.jsx)("h2",{children:"Contact Details"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:a}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:n})]})]}),Object(b.jsx)("div",{className:"columns download",children:Object(b.jsx)("p",{children:Object(b.jsxs)("a",{href:r,target:"popup",className:"button",children:[Object(b.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(c.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.work.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.company}),Object(b.jsxs)("p",{className:"info",children:[e.title,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.years})]}),Object(b.jsx)("p",{children:e.description})]},e.company)}));return Object(b.jsx)("section",{id:"career",children:Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Career"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:e})]})})}}]),s}(c.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:e.url,target:"popup",children:Object(b.jsx)("h3",{children:e.title})}),Object(b.jsx)("p",{children:e.category}),Object(b.jsx)("div",{className:"imageRow",children:Object(b.jsx)("a",{href:e.url,target:"popup",children:Object(b.jsx)("img",{alt:"No preview available (Deals Together is a work in progress)",src:t})})}),Object(b.jsx)("br",{})]},e.title)}));return Object(b.jsx)("section",{id:"projects",children:Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Projects"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:e})]})})}}]),s}(c.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]})]},e.school)}));return Object(b.jsx)("section",{id:"education",children:Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:e})})})]})})}}]),s}(c.Component),v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(i.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.main}),Object(b.jsx)(f,{data:this.state.resumeData.resume}),Object(b.jsx)(m,{data:this.state.resumeData.resume}),Object(b.jsx)(x,{data:this.state.resumeData.portfolio}),Object(b.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(c.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(b.jsx)(v,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/my_portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/my_portfolio","/service-worker.js");N?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.7f086bd4.chunk.js.map