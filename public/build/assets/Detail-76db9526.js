import{fl as c,fB as I,hj as C,r as E,c as H,fp as t,fu as p,fo as r,gT as T,o as N,gW as R,gX as $,gY as q}from"./vee-validate-i18n.esm-2681c40c.js";import{y as A,V as F}from"./vue-multiselect.esm-3fb3c5c8.js";import{u as K}from"./tenant-store-5cf52376.js";import{_ as Q}from"./IframeModal-026bfa58.js";import{_ as L}from"./ModalForm-c69c4872.js";import"./CropperImage-b1fc698f.js";const M={class:"section-body"},P={class:"section-title fs-lg"},W={class:"section-lead"},X={class:"row"},Y={class:"col-12"},z={class:"d-flex align-items-start flex-wrap flex-sm-nowrap"},G=["src","alt"],J={class:"flex-1 ml-0 ml-sm-3"},O={class:"action d-flex align-items-center mt-3"},ne={__name:"Detail",props:{slug:{type:[String,null],required:!0}},setup(k){const y=k,B=A(),a=c(null),o=I(y,"slug"),u=K(),{getSelectedByUrl:_}=F(u),d=c(!1),m=c(!1),h=c({}),w=()=>B.push({name:"settings.tenant"}),g=()=>{_.value(o.value)||R.get($("backend.tenant.get",{search:o.value,columns:"url",fetch_first:!0})).then(e=>{var s;return u.setItemByUrl(o.value,(s=e.data)==null?void 0:s.data)}).catch(e=>{var s,n;q.fire({title:"Terjadi Kesalahan",text:((n=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:n.message)||"Data tenant tidak ditemukan",icon:"error",timer:5e3,timerProgressBar:!0,confirmButtonText:"Kembali"}).then(({isConfirmed:l,dismiss:i})=>{(l||i=="timer")&&w()})}).finally(()=>j()),a.value=_.value(o.value)},D=()=>{h.value=a.value,d.value=!0},U=f=>{u.setItemByUrl(o.value,f),g()},V=()=>{m.value=!0},j=C(()=>{a.value||g()});return(f,e)=>{var n,l,i,b,x,S;const s=E("FontAwesomeIcon");return N(),H("div",M,[t("h2",P,p((n=a.value)==null?void 0:n.name),1),t("p",W,p((l=a.value)==null?void 0:l.short_location),1),t("div",X,[t("div",Y,[t("div",z,[t("img",{src:(b=(i=a.value)==null?void 0:i.logo)==null?void 0:b.thumb,alt:`Logo ${(x=a.value)==null?void 0:x.name}`},null,8,G),t("div",J,p((S=a.value)==null?void 0:S.description),1)]),t("div",O,[t("a",{href:"javascript:void(0)",rel:"noopener noreferrer",class:"btn btn-info btn-icon mr-2",onClick:D},[r(s,{icon:["fas","edit"],class:"mr-1"}),T(" Ubah ")]),t("a",{href:"javascript:void(0)",rel:"noopener noreferrer",class:"btn btn-primary btn-icon",onClick:V},[r(s,{icon:["fas","qrcode"],class:"mr-1"}),T(" Tampilkan Qrcode ")])])])]),r(L,{visible:d.value,"onUpdate:visible":e[0]||(e[0]=v=>d.value=v),"init-data":h.value,"is-edit":"",onSubmit:U},null,8,["visible","init-data"]),r(Q,{visible:m.value,"onUpdate:visible":e[1]||(e[1]=v=>m.value=v),slug:o.value},null,8,["visible","slug"])])}}};export{ne as default};
