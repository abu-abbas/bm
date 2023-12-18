import{R as D,_ as R,e as y,o as j,c as F,$ as z,K as A,m as n,L as c,Q as e,x as m,u as s,C as v,F as T,B as E,q as H,t as M,r as N}from"../../../vendor/vue-utils-cea615f1.js";import{i as $}from"../../../vendor/common-utils-e0afba66.js";import{_ as f,f as w}from"../../../vendor/id-959b107e.js";import{u as P}from"../../resource/tenant-store-da1e4e6a.js";import U from"../errors/404-cdc910a9.js";import"../../../vendor/bootstrap-utils-9ffca17a.js";import"../../../vendor/jquery-utils-4b2e19e3.js";import"../../resource/_plugin-vue_export-helper-c27b6911.js";function V(o){const u=D(),l=P(),{getSelectedByUrl:t}=R(l),i=y(null),d=y(!1),r=y(!1),g=()=>{if(r.value)return;r.value=!0;const _=t.value(o);if(_){i.value=_,d.value=!0,r.value=!1;return}l.fetchTenantByUrl(o).then(()=>{i.value=t.value(o),d.value=!0}).catch(()=>d.value=!1).finally(()=>setTimeout(()=>r.value=!1,500))},x=_=>{u.push({name:"tenant.product",params:{tenantSlug:o,productSlug:_}})};return j(()=>g()),{data:i,found:d,loading:r,onHandleSelectedProduct:x}}const K={class:"root-wrapper tenant-page-for-mobile-wrapper"},Q={class:"page-wrapper"},Y={class:"fixed-header"},G={class:"button-wrapper"},J={class:"d-flex justify-content-center align-items-center"},O={class:"align-self-center"},W={class:"searchbar"},X={class:"searchbar__icon"},Z=["placeholder"],ee={class:"header-action-wrapper"},se={key:1,class:"d-flex justify-content-center align-items-center text__header fs-icon-size",href:"javascript:void(0)",onclick:"doLogout.apply(this, arguments)"},te=e("div",{class:"spacing-wrapper"},null,-1),ne={class:"user-information"},oe={class:"info__wrapper"},ae={class:"d-flex w-100 align-items-center m-2"},ce={key:0},re={key:1},le={class:"content-wrapper"},ie={class:"shop-logo d-block"},de={class:"intrinsic w-100 h-100"},_e=["src","alt"],ue={class:"shop-name"},pe={class:"badge-text"},he={class:"ml-2 text-content"},me={class:"shop-location-wrapper"},fe={class:"ml-2 text-content"},ve={class:"content-product px-3 mt-4"},ge={class:"row no-gutters"},ye={class:"product-wrapper"},xe=["onClick"],we=["src","alt"],ke={class:"card-body p-2 d-flex flex-column"},Se={class:"product-description fs-sm"},be={__name:"Index",props:{slug:{type:[String,null],required:!0,default:null}},setup(o){const u=o,l=F(()=>u.slug),{data:t,found:i,onHandleSelectedProduct:d}=V(l.value),r=y(null),g=()=>{var p;const _=window.scrollY>200?"add":"remove";(p=r.value)==null||p.classList[_]("sticky-top")},x=()=>{if(!f.user){w();return}};return j(()=>document.addEventListener("scroll",g)),z(()=>document.removeEventListener("scroll",g)),(_,p)=>{var k,S,b,C,B,I,L;const h=A("FontAwesomeIcon");return n(),c("div",K,[e("div",Q,[e("header",Y,[e("div",G,[e("div",J,[m(h,{icon:["fas","arrow-left"]})])]),e("div",O,[e("div",W,[e("div",X,[m(h,{icon:["fas","search"]})]),e("input",{type:"search",class:"searchbar__input",placeholder:`Cari di ${s(i)?(k=s(t))==null?void 0:k.name:s(f).appname}`},null,8,Z)])]),e("div",ee,[e("a",{class:"d-flex justify-content-center align-items-center text__header fs-icon-size",onClick:x},[m(h,{icon:["fas","cart-shopping"]})]),s(f).user?(n(),c("a",se,[m(h,{icon:["fas","arrow-right-from-bracket"]})])):(n(),c("a",{key:0,class:"d-flex justify-content-center align-items-center text__header fs-icon-size",onClick:p[0]||(p[0]=(...a)=>s(w)&&s(w)(...a))},[m(h,{icon:["fas","arrow-right-to-bracket"]})]))])]),te,e("div",ne,[e("div",oe,[e("div",ae,[s(f).user?(n(),c("span",re,"Halo, "+v(s(f).user.name),1)):(n(),c("span",ce,"Anda belum login."))])])])]),e("div",le,[s(i)?(n(),c(T,{key:0},[e("div",{ref_key:"needSticky",ref:r,class:"tenant-information-wrapper"},[e("div",ie,[e("div",de,[e("img",{src:(b=(S=s(t))==null?void 0:S.logo)==null?void 0:b.thumb,alt:(C=s(t))==null?void 0:C.name,class:"tenant-logo"},null,8,_e)])]),e("div",ue,[e("div",pe,[e("div",he,v((B=s(t))==null?void 0:B.name),1)]),e("div",me,[e("div",fe,v((I=s(t))==null?void 0:I.short_location),1)])])],512),e("div",ve,[e("div",ge,[(n(!0),c(T,null,E((L=s(t))==null?void 0:L.products,(a,q)=>(n(),c("div",{key:q,class:"col-6"},[e("div",ye,[e("div",{class:"card border shadow-sm rounded-lg",onClick:Ie=>s(d)(a.slug)},[e("img",{src:a==null?void 0:a.images[0],alt:a.product_name},null,8,we),e("div",ke,[e("div",Se,v(a==null?void 0:a.description),1)])],8,xe)])]))),128))])])],64)):(n(),H(U,{key:1,class:"px-3"}))])])}}},Ce={class:"tenant-page-for-desktop-wrapper"},Be={__name:"Index",props:{slug:{type:[String,null],required:!0,default:null}},setup(o){const u=o;return(l,t)=>(n(),c("div",Ce,v(u.slug)+" on desktop pc device ",1))}};const Re={__name:"Index",props:{slug:{type:[String,null],required:!0,default:null}},setup(o){const l=M(o,"slug"),t=F(()=>!$(window.navigator).phone||$(window.navigator).tablet);return(i,d)=>(n(),H(N(t.value?Be:be),{slug:l.value},null,8,["slug"]))}};export{Re as default};