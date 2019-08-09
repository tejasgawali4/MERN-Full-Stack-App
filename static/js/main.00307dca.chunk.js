(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),s=t.n(l),c=(t(38),t(2)),o=t(7),m=function(){return r.a.createElement("nav",{className:"navbar bg-dark"},r.a.createElement("h1",null,r.a.createElement(c.b,{to:"/"},r.a.createElement("i",{className:"fas fa-code"}),"DevConnector")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"!#"},"Developers")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/login"},"Login"))))},i=function(){return r.a.createElement("section",{className:"landing"},r.a.createElement("div",{className:"dark-overlay"},r.a.createElement("div",{className:"landing-inner"},r.a.createElement("h1",{className:"x-large"},"Developer Connector"),r.a.createElement("p",{className:"lead"},"Create a developer profile/portfolio, share posts and get help from other developers"),r.a.createElement("div",{className:"buttons"},r.a.createElement(c.b,{to:"/register",className:"btn btn-primary"},"Sign Up"),r.a.createElement(c.b,{to:"/login",className:"btn btn-light"},"Login")))))},u=t(10),p=t.n(u),d=t(12),E=t(8),g=t(13),f=t(15),v=t(14),h=t.n(v),b=function(){var e=Object(n.useState)({name:"",email:""}),a=Object(f.a)(e,2),t=a[0],l=a[1],s=t.email,o=t.password,m=function(e){return l(Object(g.a)({},t,Object(E.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(d.a)(p.a.mark(function e(a){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={email:s,password:o},e.prev=2,n={headers:{"Content-Type":"application/json"}},JSON.stringify(t),e.next=7,h.a.post("/api/auth",t,n);case 7:r=e.sent,console.log(r.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.response);case 14:case"end":return e.stop()}},e,null,[[2,11]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"large text-primary"},"Sign In"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return i(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:s,onChange:function(e){return m(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar so if you want a profile image, use a Gravatar email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:o,onChange:function(e){return m(e)},required:!0})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Login"})),r.a.createElement("p",{className:"my-1"},"Create an account? ",r.a.createElement(c.b,{to:"register"},"Register"))))},N=function(){var e=Object(n.useState)({name:"",email:"",password:"",password2:""}),a=Object(f.a)(e,2),t=a[0],l=a[1],s=t.name,o=t.email,m=t.password,i=t.password2,u=function(e){return l(Object(g.a)({},t,Object(E.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(d.a)(p.a.mark(function e(a){var n,r,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),m===i){e.next=5;break}console.log("Password Does not Match..."),e.next=19;break;case 5:return console.log("Data"+JSON.stringify(t)),n={name:s,email:o,password:m,password2:i},e.prev=7,r={headers:{"Content-Type":"application/json"}},JSON.stringify(n),e.next=12,h.a.post("/api/users",n,r);case 12:l=e.sent,console.log(l.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0.response.data);case 19:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"large text-primary"},"Sign Up"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:s,onChange:function(e){return u(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:o,onChange:function(e){return u(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar so if you want a profile image, use a Gravatar email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:m,onChange:function(e){return u(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",minLength:"6",value:i,onChange:function(e){return u(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})),r.a.createElement("p",{className:"my-1"},"Already have an account? ",r.a.createElement(c.b,{to:"login"},"Sign In"))))},w=function(){return r.a.createElement(c.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(m,null),r.a.createElement(o.a,{exact:!0,path:"/",component:i}),r.a.createElement("section",{className:"container"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/register",component:N}),r.a.createElement(o.a,{exact:!0,path:"/login",component:b})))))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.00307dca.chunk.js.map