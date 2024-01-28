import{fl as p,fq as N,fB as W,o as d,c as S,fp as e,fM as U,u as B,r as $,a as R,g7 as ae,fs as K,fQ as i,fO as G,fv as F,fT as C,hn as se,fd as oe,fm as z,fr as D,fo as o,hs as le,hr as T,fu as c,ft as ne,_ as Z,hC as ee,ho as M,hp as P,hD as ie,hq as E,fW as Y,fn as te,fS as ue}from"./vee-validate-i18n.esm-14720df6.js";import{i as Q}from"./isMobile-b3e8a064.js";import{y as re,u as ce}from"./vue-multiselect.esm-aaf679ef.js";import{f as X}from"./formatter-8fa69f9f.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";const me=["id"],_e={class:"header"},pe=e("span",null,null,-1),ge=[pe],ve={class:"static-title"},fe=e("h2",null,"Fixed Header",-1),he={class:"body"},ke={__name:"BottomSheet",props:{visible:{type:Boolean,required:!0,default:!1}},emits:["update:visible","show","hide"],setup(H,{emit:L}){const m=H,y=Math.random().toString(36).substring(2,9),u=p(null),x=p(null),k=p(null),I=p(null),V=p(!1),O=p(null),n=p(null),l=N(()=>m.visible),t=s=>{k.value.style.height=`${s}vh`,u.value.classList.toggle("fullscreen",s===100)},r=()=>{u.value.classList.remove("show"),document.body.style.overflowY="auto",L("update:visible",!1),L("hide")},b=()=>{u.value.classList.add("show"),document.body.style.overflowY="hidden",t(50),L("update:visible",!0),L("show")},j=s=>{var a;V.value=!0,O.value=s.pageY||((a=s.touches)==null?void 0:a[0].pageY),n.value=parseInt(k.value.style.height),u.value.classList.add("dragging")},A=s=>{var g;if(!V.value)return;const a=O.value-(s.pageY||((g=s.touches)==null?void 0:g[0].pageY)),f=n.value+a/window.innerHeight*100;t(f)},q=()=>{V.value=!1,u.value.classList.remove("dragging");const s=parseInt(k.value.style.height);s<25?r():s>75?t(100):t(50)};return W(()=>l.value,s=>s?b():r()),(s,a)=>(d(),S("div",{id:B(y),ref_key:"bottomSheet",ref:u,class:"bottom-sheet"},[e("div",{ref_key:"sheetOverlay",ref:x,class:"sheet-overlay",onClick:r},null,512),e("div",{ref_key:"sheetContent",ref:k,class:"content"},[e("div",_e,[e("div",{ref_key:"dragIcon",ref:I,class:"drag-icon",onMousedown:j,onMousemove:A,onMouseup:q,onTouchstart:j,onTouchmove:A,onTouchend:q},ge,544),e("div",ve,[U(s.$slots,"fixed-header",{},()=>[fe])])]),e("div",he,[U(s.$slots,"header"),U(s.$slots,"default")])],512)],8,me))}};const J={__name:"Select",props:{options:{type:[Array,null],required:!0,default:()=>[]},selected:{type:[Object,null],required:!1,default:()=>{}},multiselectOptions:{type:[Object,null],required:!1,default:()=>({trackBy:"key",label:"value",selectLabel:"",selectedLabel:"",deselectLabel:"",placeholder:""})},loading:{type:Boolean,required:!1,default:!1}},emits:["select","remove","update:selected"],setup(H,{expose:L,emit:m}){const y=H,u=Math.random().toString(36).substring(2,9),x=N(()=>y.options),k=N(()=>y.loading),I=p(y.selected||null),V=(n,l,t)=>m(t,n,l),O=()=>{I.value=null,m("update:selected",null)};return W(()=>I.value,n=>m("update:selected",n)),L({removeSelected:O}),(n,l)=>{const t=$("vue-multiselect");return d(),R(t,G({id:B(u),modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=r=>I.value=r)},H.multiselectOptions,{options:x.value,disabled:k.value,loading:k.value,class:"dropdown-custom",onSelect:l[1]||(l[1]=(r,b)=>V(r,b,"select")),onRemove:l[2]||(l[2]=(r,b)=>V(r,b,"remove"))}),ae({noResult:i(()=>[C("Data tidak ditemukan")]),noOptions:i(()=>[C("Tidak ada data")]),_:2},[K(Object.keys(n.$slots),r=>({name:r,fn:i(b=>[b?U(n.$slots,r,G({key:0},b,{disabled:k.value})):F("",!0)])}))]),1040,["id","modelValue","options","disabled","loading"])}}};const be={class:"checkout-wrapper"},ye=e("h2",null,"Ajukan ketertarikan",-1),xe={class:"form-group mt-4"},we=e("label",{class:"form-label text-muted"},"Kegiatan",-1),Se={class:"d-flex flex-column"},$e={class:"text-sm text-muted"},Ie={class:"d-flex flex-column"},Le={class:"text-sm text-muted fw-500"},Ve={key:0,class:"text-danger fs-sm mt-2"},Be={key:0,class:"form-group"},Ce=e("label",{class:"form-label text-muted"},"RSK",-1),je={key:0,class:"text-danger fs-sm mt-2"},He={key:1,class:"form-group"},Oe=e("label",{class:"form-label text-muted"},"Akun",-1),qe={class:"d-flex flex-column"},Ae={class:"text-sm text-muted"},Fe={class:"d-flex align-items-center mt-2"},Re={class:"text-sm fw-500"},De={class:"d-flex flex-column"},Ke={class:"text-sm text-muted fw-500"},Ne={class:"d-flex align-items-center mt-2"},Te={class:"text-sm fw-500"},Ue={key:0,class:"text-danger fs-sm mt-2"},Me={key:2,class:"form-group"},Pe=e("label",{class:"form-label text-muted"},"Nilai Ketertarikan",-1),Ye={key:0,class:"text-danger fs-sm mt-2"},Ee={__name:"Index",props:{tenantSlug:{type:[String,null],required:!0,default:null},productSlug:{type:[String,null],required:!0,default:null},product:{type:[Object,null],required:!0,default:()=>{}}},emits:["update:product"],setup(H,{emit:L}){const m=H,y=re(),u=N(()=>({tenantSlug:m.tenantSlug,productSlug:m.productSlug,product:m.product})),x=p(!1),k=p(null),I=p(null),V=p(null),O=p(null),n=p(0),l=p(!1),t=p({kegiatan:{options:[],selected:null,props:{trackBy:"kode_kegiatan",label:"nama_kegiatan",placeholder:"Pilih kegiatan"},loading:!1},rsk:{options:[],selected:null,props:{trackBy:"nama_rsk",label:"nama_rsk",placeholder:"Pilih rsk"},loading:!1},akun:{options:[],selected:null,props:{trackBy:"id_rskbas",label:"nama_akun",placeholder:"Pilih akun"},loading:!1}}),r=()=>{var s,a;if(!Z.user){ee();return}if((a=(s=u.value)==null?void 0:s.product)!=null&&a.has_transaction){y.push({name:"landing.transaction"});return}x.value=!0},b=(s="kegiatan",a=null,f=null)=>{t.value[s].loading=!0,M.get(P("backend.budget.get",{type:s,value:a,addons:f})).then(g=>t.value[s].options=[...g.data.data]).catch(()=>t.value[s].options=[]).finally(()=>t.value[s].loading=!1)},j=se.debounce(s=>{const a="0123456789.",f=[...s.target.value].filter(w=>a.includes(w)).join("");s.target.value=f;const g=parseFloat(s.target.value.split(".").join("")||0),_=parseFloat(t.value.akun.selected.dpa_rsk||0);if(g<0){n.value=0,s.target.value=0;return}if(g>_){n.value=_,s.target.value=_.toLocaleString("id-ID",{style:"decimal"});return}n.value=g,s.target.value=g.toLocaleString("id-ID",{style:"decimal"})},500);oe("voi_value",(s,[a])=>{var f;return s==0?"Nilai ketertarikan tidak boleh 0":s<=parseFloat(a==null?void 0:a.dpa_rsk)?!0:`Nilai ketertarikan maksimal ${(f=parseFloat(a==null?void 0:a.dpa_rsk))==null?void 0:f.toLocaleString("id-ID",{style:"decimal"})}`});const A=()=>setTimeout(()=>O.value.focus(),250);W([()=>t.value.kegiatan.selected,()=>t.value.rsk.selected],([s,a],[f,g])=>{var _,w,v;s&&JSON.stringify(f)!=JSON.stringify(s)&&(t.value.rsk.selected=null,t.value.akun.selected=null,(_=I.value)==null||_.removeSelected(),(w=V.value)==null||w.removeSelected(),b("rsk",s.kode_kegiatan)),a&&JSON.stringify(a)!=JSON.stringify(g)&&(t.value.akun.selected=null,(v=V.value)==null||v.removeSelected(),b("akun",t.value.kegiatan.selected.kode_kegiatan,a.kode_rsk))});const q=async()=>{const{valid:s}=await k.value.validate();s&&ie({title:"Buat ketertarikan",text:"Apakah Anda yakin untuk membuat ketertarikan ini?",icon:"question"},()=>M.post(P("backend.transaction.store"),{product:m.productSlug,...k.value.getValues()}).then(a=>a).catch(a=>{let f=a.response.status,g=a.response.data.message;if([409,417,500].includes(f)){E.showValidationMessage(`${g}`);return}if(f=="422"){const _=a.response.data.errors;g=Object.keys(_).map(w=>Array.isArray(_[w])?_[w].join(", "):_[w]).join(", "),E.showValidationMessage(`${g}`);return}})).then(({value:a,isConfirmed:f,isDismissed:g})=>{if(g)return!1;f&&a.data.status=="success"&&(E.fire({title:"Tambah ketertarikan",text:a.data.message,icon:"success"}),L("update:product",{...u.value.product,has_transaction:!0}),l.value=!0,x.value=!1)})};return z(()=>{var s,a;b(),l.value=(a=(s=u.value)==null?void 0:s.product)==null?void 0:a.has_transaction}),(s,a)=>{var g,_;const f=$("FontAwesomeIcon");return d(),S("div",be,[e("button",{class:"btn btn-lg btn-primary",onClick:r},[(_=(g=u.value)==null?void 0:g.product)!=null&&_.has_transaction||l.value?(d(),S(D,{key:0},[C(" Lihat ketertarikan ")],64)):(d(),S(D,{key:1},[o(f,{icon:["fas","plus"]}),C(" Ketertarikan ")],64))]),o(ke,{visible:x.value,"onUpdate:visible":a[8]||(a[8]=w=>x.value=w)},{"fixed-header":i(()=>[ye]),default:i(()=>[o(B(le),{ref_key:"formRef",ref:k},{default:i(({errors:w})=>[e("div",xe,[we,o(B(T),{modelValue:t.value.kegiatan.selected,"onUpdate:modelValue":a[1]||(a[1]=v=>t.value.kegiatan.selected=v),label:"Kegiatan",name:"kegiatan",rules:"required"},{default:i(({errorMessage:v})=>[o(J,{selected:t.value.kegiatan.selected,"onUpdate:selected":a[0]||(a[0]=h=>t.value.kegiatan.selected=h),options:t.value.kegiatan.options,"multiselect-options":t.value.kegiatan.props,loading:t.value.kegiatan.loading},{option:i(h=>[e("div",Se,[e("strong",$e,c(h.option.kode_kegiatan),1),e("span",null,c(h.option.nama_kegiatan),1)])]),singleLabel:i(h=>[e("div",Ie,[e("strong",Le,c(h.option.kode_kegiatan),1),e("span",null,c(h.option.nama_kegiatan),1)])]),_:1},8,["selected","options","multiselect-options","loading"]),v?(d(),S("div",Ve,c(v),1)):F("",!0)]),_:1},8,["modelValue"])]),t.value.kegiatan.selected?(d(),S("div",Be,[Ce,o(B(T),{modelValue:t.value.rsk.selected,"onUpdate:modelValue":a[3]||(a[3]=v=>t.value.rsk.selected=v),label:"RSK",name:"rsk",rules:"required"},{default:i(({errorMessage:v})=>[o(J,{ref_key:"refRsk",ref:I,selected:t.value.rsk.selected,"onUpdate:selected":a[2]||(a[2]=h=>t.value.rsk.selected=h),options:t.value.rsk.options,"multiselect-options":t.value.rsk.props,loading:t.value.rsk.loading},null,8,["selected","options","multiselect-options","loading"]),v?(d(),S("div",je,c(v),1)):F("",!0)]),_:1},8,["modelValue"])])):F("",!0),t.value.rsk.selected?(d(),S("div",He,[Oe,o(B(T),{modelValue:t.value.akun.selected,"onUpdate:modelValue":a[5]||(a[5]=v=>t.value.akun.selected=v),label:"Akun",name:"akun",rules:"required"},{default:i(({errorMessage:v})=>[o(J,{ref_key:"refAkun",ref:V,selected:t.value.akun.selected,"onUpdate:selected":a[4]||(a[4]=h=>t.value.akun.selected=h),options:t.value.akun.options,"multiselect-options":t.value.akun.props,loading:t.value.akun.loading,onSelect:A},{option:i(h=>[e("div",qe,[e("strong",Ae,c(h.option.kode_akun),1),e("span",null,c(h.option.nama_akun),1),e("div",Fe,[e("strong",Re,"PAGU Anggaran: "+c(B(X)(parseFloat(h.option.dpa_rsk||0))),1)])])]),singleLabel:i(h=>[e("div",De,[e("strong",Ke,c(h.option.kode_akun),1),e("span",null,c(h.option.nama_akun),1),e("div",Ne,[e("strong",Te,"PAGU Anggaran: "+c(B(X)(parseFloat(h.option.dpa_rsk||0))),1)])])]),_:1},8,["selected","options","multiselect-options","loading"]),v?(d(),S("div",Ue,c(v),1)):F("",!0)]),_:1},8,["modelValue"])])):F("",!0),t.value.akun.selected?(d(),S("div",Me,[Pe,o(B(T),{modelValue:n.value,"onUpdate:modelValue":a[7]||(a[7]=v=>n.value=v),label:"Nilai Ketertarikan",name:"voi",rules:"required|voi_value:@akun"},{default:i(({errorMessage:v})=>[e("input",{ref_key:"refVoi",ref:O,type:"text",class:"form-control text-right custom-form-control font-bold",onKeyup:a[6]||(a[6]=(...h)=>B(j)&&B(j)(...h))},null,544),v?(d(),S("div",Ye,c(v),1)):F("",!0)]),_:1},8,["modelValue"])])):F("",!0),e("button",{type:"button",class:ne({"btn btn-primary btn-block":!0,disabled:w}),onClick:q}," Simpan ",2)]),_:1},512)]),_:1},8,["visible"])])}}};const Je={class:"mainImage"},We={class:"gradient-background bg-white"},ze={class:"container"},Ge={class:"text-dark mt-2"},Qe={class:"mt-2 text-dark"},Xe={class:"text-info mt-4"},Ze={class:"detail"},et={class:"text-dark",style:{"white-space":"pre-line"}},tt={__name:"Index",props:{tenantSlug:{type:[String,null],required:!0,default:null},productSlug:{type:[String,null],required:!0,default:null}},setup(H){const L=H,m=p({}),y=Y(L,"tenantSlug"),u=Y(L,"productSlug"),x=p(null),k=p([]),I=l=>window.location=l,V=function(){window.doLogout.apply(this,arguments)},O=l=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(l),n=async()=>{try{M.get(P("backend.landing.product.getsingelproduct",{tenant:y.value,product:u.value})).then(l=>{var t,r;if(l.data.data==null)return I("/404");m.value=l.data.data,k.value=[...((r=(t=l==null?void 0:l.data)==null?void 0:t.data)==null?void 0:r.images)||[]]}).catch(l=>{console.log(l)})}catch(l){console.log(l)}};return z(()=>{n(),x.value&&x.value.addEventListener("click",V)}),te(()=>{x.value&&x.value.removeEventListener("click",V)}),(l,t)=>{const r=$("b-icon"),b=$("b-nav-item"),j=$("b-nav"),A=$("b-carousel-slide"),q=$("b-carousel"),s=$("FontAwesomeIcon");return d(),S("div",null,[o(j,{tabs:"",fill:"",class:"fixed-top bg-white"},{default:i(()=>[o(b,{class:"text-left"},{default:i(()=>[o(r,{icon:"arrow-left"}),C(" "+c(m.value.tenant_name),1)]),_:1})]),_:1}),e("div",Je,[o(q,{id:"carousel",controls:!0,indicators:!0,interval:0},{default:i(()=>[(d(!0),S(D,null,K(k.value,(a,f)=>(d(),R(A,{key:f,"img-src":a},null,8,["img-src"]))),128))]),_:1})]),e("div",We,[e("div",ze,[e("h3",Ge,c(m.value.nama_barang),1),e("span",Qe,[o(r,{icon:"shop"}),C(" Product By: "+c(m.value.tenant_name),1)]),e("h4",Xe,[o(r,{icon:"tags",varian:"info"}),C(" "+c(O(m.value.price)),1)]),e("div",Ze,[e("span",et,c(m.value.description),1)]),B(Z).user?(d(),R(Ee,{key:1,product:m.value,"onUpdate:product":t[1]||(t[1]=a=>m.value=a),"tenant-slug":y.value,"product-slug":u.value,class:"mt-3"},null,8,["product","tenant-slug","product-slug"])):(d(),S("button",{key:0,class:"btn btn-lg btn-primary mt-3 mb-5",onClick:t[0]||(t[0]=a=>B(ee)())},[o(s,{icon:["fas","plus"]}),C(" Ketertarikan ")]))])]),o(j,{tabs:"",justified:"",class:"fixed-bottom bg-white"},{default:i(()=>[o(b,{active:"",onClick:t[2]||(t[2]=a=>I("/"))},{default:i(()=>[o(r,{icon:"house",variant:"primary"})]),_:1}),o(b,{onClick:t[3]||(t[3]=a=>I("/"+y.value))},{default:i(()=>[o(r,{icon:"shop",variant:"primary"})]),_:1}),o(b,null,{default:i(()=>[o(r,{icon:"cart",variant:"primary"})]),_:1})]),_:1})])}}},at=de(tt,[["__scopeId","data-v-5227bf63"]]),st={class:"container home-wrapper mt-5"},ot={class:"row"},lt={class:"col-12"},nt={class:"col-12 d-block d-sm-none mb-3"},it={class:"col-12 d-none d-sm-block d-md-none mb-3"},ut={class:"col-12 d-none d-md-block d-lg-none mb-3"},rt={class:"imagedekstop"},ct={class:"row"},dt={class:"col-lg-6 d-none d-lg-block d-xl-block"},mt={class:"col-12 mb-2"},_t={class:"col-12"},pt={class:"col-sm-12 col-xs-12 col-lg-6 d-flex align-items-center mb-5"},gt={class:"row"},vt={class:"col-12"},ft={class:"b-text text-warning nama-tenant"},ht={class:"col-12"},kt={class:"b-text text-dark nama-product"},bt={class:"col-12 my-3"},yt={style:{"white-space":"pre-line"}},xt={class:"col-12 mt-2"},wt={class:"b-text text-dark harga-product"},St={class:"col-12 mb-3 d-none d-lg-block d-xl-block"},$t={class:"b-text text-muted harga-product"},It={class:"col-lg-8 col-sm-12 col-xs-12 col-md-12 w-100"},Lt={__name:"Index",setup(H){const L=n=>window.location=n,m=ce(),y=p(null),u=p({}),x=p(""),k=p(["https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1","https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg","https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg"]),I=n=>{x.value=n},V=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(n),O=async()=>{try{M.get(P("backend.landing.product.getsingelproduct",{tenant:m.params.tenantSlug,product:m.params.productSlug})).then(n=>{var l,t;if(n.data.data==null)return L("/404");u.value=n.data.data,x.value=[...((t=(l=n==null?void 0:n.data)==null?void 0:l.data)==null?void 0:t.images)||[]]}).catch(n=>{console.log(n)})}catch(n){console.log(n)}};return z(()=>{O(),y.value&&y.value.addEventListener("click",function(){window.doLogout.apply(this,arguments)})}),te(()=>{y.value&&y.value.removeEventListener("click")}),(n,l)=>{const t=$("b-icon"),r=$("b-breadcrumb-item"),b=$("b-breadcrumb"),j=$("b-carousel-slide"),A=$("b-carousel"),q=$("b-img"),s=$("b-col"),a=$("b-row"),f=$("b-badge"),g=$("b-button");return d(),S("div",st,[e("div",ot,[e("div",lt,[o(b,null,{default:i(()=>[o(r,{href:"#home"},{default:i(()=>[o(t,{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}),C(" "+c(u.value.tenant_name),1)]),_:1}),o(r,{active:""},{default:i(()=>[C(c(u.value.product_name),1)]),_:1})]),_:1})]),e("div",nt,[o(A,{id:"carousel",controls:!0,indicators:!0,"img-height":"25rem",interval:0},{default:i(()=>[(d(!0),S(D,null,K(k.value,(_,w)=>(d(),R(j,{key:w,"img-src":_},null,8,["img-src"]))),128))]),_:1})]),e("div",it,[o(A,{id:"carousel",controls:!0,indicators:!0,"img-height":"25rem",interval:0},{default:i(()=>[(d(!0),S(D,null,K(k.value,(_,w)=>(d(),R(j,{key:w,"img-src":_},null,8,["img-src"]))),128))]),_:1})]),e("div",ut,[o(A,{id:"carousel",controls:!0,indicators:!0,"img-height":"25rem",interval:0},{default:i(()=>[(d(!0),S(D,null,K(k.value,(_,w)=>(d(),R(j,{key:w,"img-src":_},null,8,["img-src"]))),128))]),_:1})]),e("div",rt,[e("div",ct,[e("div",dt,[e("div",mt,[o(q,{src:x.value,"fluid-grow":"",alt:"Responsive image",style:{width:"100%",height:"27rem","border-radius":"1rem"}},null,8,["src"])]),e("div",_t,[o(a,{class:"mb-3"},{default:i(()=>[o(s,{onClick:l[0]||(l[0]=_=>I("https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg"))},{default:i(()=>[o(q,{contain:"",thumbnail:"","fluid-grow":"",src:"https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg",alt:"Image 1",style:{width:"100%",height:"100%"}})]),_:1}),o(s,{onClick:l[1]||(l[1]=_=>I("https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"))},{default:i(()=>[o(q,{contain:"",thumbnail:"","fluid-grow":"",src:"https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg",alt:"Image 2",style:{width:"100%",height:"100%"}})]),_:1}),o(s,{onClick:l[2]||(l[2]=_=>I("https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1"))},{default:i(()=>[o(q,{contain:"",thumbnail:"","fluid-grow":"",src:"https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1",alt:"Image 3",style:{width:"100%",height:"100%"}})]),_:1})]),_:1})])]),e("div",pt,[e("div",gt,[e("div",vt,[e("h5",ft,c(u.value.tenant_name),1)]),e("div",ht,[e("h3",kt,c(u.value.product_name),1)]),e("div",bt,[e("span",yt,c(u.value.description),1)]),e("div",xt,[e("h4",wt,c(V(u.value.price)),1)]),e("div",St,[e("h5",$t,[o(f,{variant:"danger"},{default:i(()=>[C("15%")]),_:1}),C(),e("del",null,c(V(u.value.price+u.value.price*.15)),1)])]),e("div",It,[o(g,{class:"w-100",size:"lg",variant:"primary"},{default:i(()=>[o(t,{icon:"cart-fill",class:"mr-2"}),C(" Tambah Ke Keranjang")]),_:1})])])])])])])])}}};const Ot={__name:"Index",props:{tenantSlug:{type:[String,null],required:!0,default:null},productSlug:{type:[String,null],required:!0,default:null}},setup(H){const L=H,m=Y(L,"tenantSlug"),y=Y(L,"productSlug"),u=N(()=>!Q(window.navigator).phone||Q(window.navigator).tablet);return(x,k)=>(d(),R(ue(u.value?Lt:at),{"tenant-slug":m.value,"product-slug":y.value},null,8,["tenant-slug","product-slug"]))}};export{Ot as default};