import{r as d,o as u,c as h,fp as s,u as _,fo as a,fu as f,_ as g,fT as p,fr as b,fQ as i,ft as l}from"./vee-validate-i18n.esm-14720df6.js";import{u as k}from"./admin-f281e157.js";import"./vue-multiselect.esm-aaf679ef.js";const $="/build/assets/avatar-1-f00bb589.png",w=s("div",{class:"navbar-bg"},null,-1),C={class:"navbar navbar-expand-lg main-navbar"},x={class:"form-inline mr-auto"},B={class:"navbar-nav mr-3"},F={class:"navbar-bar navbar-right"},M={class:"dropdown"},A={href:"#","data-toggle":"dropdown",class:"nav-link dropdown-toggle nav-link-lg nav-link-user"},I=s("img",{alt:"image",src:$,class:"rounded-circle mr-1"},null,-1),N={class:"d-sm-none d-lg-inline-block"},S={class:"dropdown-menu dropdown-menu-right"},T={href:"/",class:"dropdown-item has-icon"},y=s("div",{class:"dropdown-divider"},null,-1),H={class:"dropdown-item has-icon text-danger",href:"javascript:void(0)",onclick:"doLogout.apply(this, arguments)"},V={__name:"Navbar",setup(m){const{onHandleSidebarToggle:r}=k();return(v,c)=>{const e=d("FontAwesomeIcon");return u(),h(b,null,[w,s("nav",C,[s("form",x,[s("ul",B,[s("li",null,[s("a",{href:"#","data-toggle":"sidebar",class:"nav-link nav-link-lg",onClick:c[0]||(c[0]=(...n)=>_(r)&&_(r)(...n))},[a(e,{icon:["fas","bars"]})])])])]),s("ul",F,[s("li",M,[s("a",A,[I,s("div",N,"Hi, "+f(_(g).user.name),1)]),s("div",S,[s("a",T,[a(e,{icon:["fas","house"],class:"mr-2"}),p("Beranda ")]),y,s("a",H,[a(e,{icon:["fas","sign-out-alt"],class:"mr-2"}),p("Logout ")])])])])])],64)}}},D={class:"main-sidebar sidebar-style-2"},E={class:"sidebar-wrapper"},L={class:"sidebar-brand"},P={href:"/"},j=s("div",{class:"sidebar-brand sidebar-brand-sm"},[s("a",{href:"/"},"BM")],-1),q={class:"sidebar-menu"},z=["href","onClick"],Q=s("span",null,"Dashboard",-1),G=s("li",{class:"menu-header"},"Pengaturan",-1),J=["href","onClick"],K=s("span",null,"Master Tenant",-1),O=["href","onClick"],R=s("span",null,"Master Barang",-1),U=["href","onClick"],W=s("span",null,"Master Pengguna",-1),X=["href","onClick"],Y=s("span",null,"Master Event",-1),Z={__name:"Sidebar",setup(m){return(r,v)=>{const c=d("FontAwesomeIcon"),e=d("router-link");return u(),h("div",D,[s("aside",E,[s("div",L,[s("a",P,f(_(g).appname),1)]),j,s("ul",q,[a(e,{to:{name:"admin.home"},custom:"","active-class":"active","exact-active-class":"active"},{default:i(({href:n,navigate:t,isActive:o})=>[s("li",{class:l({active:o})},[s("a",{href:n,class:"nav-link",onClick:t},[a(c,{icon:["far","square"]}),Q],8,z)],2)]),_:1},8,["to"]),G,a(e,{to:{name:"settings.tenant"},custom:"","active-class":"active"},{default:i(({href:n,navigate:t,isActive:o})=>[s("li",{class:l({active:o})},[s("a",{href:n,class:"nav-link",onClick:t},[a(c,{icon:["fas","people-group"]}),K],8,J)],2)]),_:1},8,["to"]),a(e,{to:{name:"settings.product"},custom:"","active-class":"active"},{default:i(({href:n,navigate:t,isActive:o})=>[s("li",{class:l({active:o})},[s("a",{href:n,class:"nav-link",onClick:t},[a(c,{icon:["fas","boxes"]}),R],8,O)],2)]),_:1},8,["to"]),a(e,{to:{name:"settings.user"},custom:"","active-class":"active"},{default:i(({href:n,navigate:t,isActive:o})=>[s("li",{class:l({active:o})},[s("a",{href:n,class:"nav-link",onClick:t},[a(c,{icon:["fas","user"]}),W],8,U)],2)]),_:1},8,["to"]),a(e,{to:{name:"settings.event"},custom:"","active-class":"active"},{default:i(({href:n,navigate:t,isActive:o})=>[s("li",{class:l({active:o})},[s("a",{href:n,class:"nav-link",onClick:t},[a(c,{icon:["fas","calendar"]}),Y],8,X)],2)]),_:1},8,["to"])])])])}}},es={__name:"Header",setup(m){return(r,v)=>(u(),h(b,null,[a(V),a(Z)],64))}};export{es as default};