import{fk as c,fV as j,fz as q,r as A,c as C,fo as t,ft as p,fn as r,fS as x,o as E,ho as H,hp as N,hq as R}from"./vee-validate-i18n.esm-0c3fc239.js";import{A as $,X as F}from"./vue-multiselect.esm-4795f2c0.js";import{u as K}from"./tenant-store-6b8d8565.js";import{_ as Q}from"./IframeModal-f7592ee9.js";import{_ as z}from"./ModalForm-63b0d432.js";import"./CropperImage-0c2785e6.js";const L={class:"section-body"},M={class:"section-title fs-lg"},P={class:"section-lead"},X={class:"row"},G={class:"col-12"},J={class:"d-flex align-items-start flex-wrap flex-sm-nowrap"},O=["src","alt"],W={class:"flex-1 ml-0 ml-sm-3"},Y={class:"action d-flex align-items-center mt-3"},ne={__name:"Detail",props:{slug:{type:[String,null],required:!0}},setup(T){const y=T,B=$(),a=c(null),o=j(y,"slug"),u=K(),{getSelectedByUrl:_}=F(u),d=c(!1),m=c(!1),h=c({}),w=()=>B.push({name:"settings.tenant"}),b=()=>{_.value(o.value)||H.get(N("backend.tenant.get",{search:o.value,columns:"url",fetch_first:!0})).then(e=>{var s;return u.setItemByUrl(o.value,(s=e.data)==null?void 0:s.data)}).catch(e=>{var s,n;R.fire({title:"Terjadi Kesalahan",text:((n=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:n.message)||"Data tenant tidak ditemukan",icon:"error",timer:5e3,timerProgressBar:!0,confirmButtonText:"Kembali"}).then(({isConfirmed:l,dismiss:i})=>{(l||i=="timer")&&w()})}).finally(()=>I()),a.value=_.value(o.value)},D=()=>{h.value=a.value,d.value=!0},U=f=>{u.setItemByUrl(o.value,f),b()},V=()=>{m.value=!0},I=q(()=>{a.value||b()});return(f,e)=>{var n,l,i,g,S,k;const s=A("FontAwesomeIcon");return E(),C("div",L,[t("h2",M,p((n=a.value)==null?void 0:n.name),1),t("p",P,p((l=a.value)==null?void 0:l.short_location),1),t("div",X,[t("div",G,[t("div",J,[t("img",{src:(g=(i=a.value)==null?void 0:i.logo)==null?void 0:g.thumb,alt:`Logo ${(S=a.value)==null?void 0:S.name}`},null,8,O),t("div",W,p((k=a.value)==null?void 0:k.description),1)]),t("div",Y,[t("a",{href:"javascript:void(0)",rel:"noopener noreferrer",class:"btn btn-info btn-icon mr-2",onClick:D},[r(s,{icon:["fas","edit"],class:"mr-1"}),x(" Ubah ")]),t("a",{href:"javascript:void(0)",rel:"noopener noreferrer",class:"btn btn-primary btn-icon",onClick:V},[r(s,{icon:["fas","qrcode"],class:"mr-1"}),x(" Tampilkan Qrcode ")])])])]),r(z,{visible:d.value,"onUpdate:visible":e[0]||(e[0]=v=>d.value=v),"init-data":h.value,"is-edit":"",onSubmit:U},null,8,["visible","init-data"]),r(Q,{visible:m.value,"onUpdate:visible":e[1]||(e[1]=v=>m.value=v),slug:o.value},null,8,["visible","slug"])])}}};export{ne as default};