import{fl as y,gV as j,gW as w,gX as T,r as u,c as f,fp as t,fo as o,gT as x,gO as D,hi as B,gS as r,u as N,o as h,fu as g,fr as H,fs as I,gN as M,hh as P,gY as k}from"./vee-validate-i18n.esm-b9e812f9.js";import{y as U}from"./vue-multiselect.esm-6b6e0179.js";import{u as F}from"./tenant-store-d558fdeb.js";import{_ as E}from"./Spinner-c7efc148.js";import{_ as L}from"./ModalForm-4fbad6d2.js";import"./CropperImage-c2cb432e.js";const O={class:"section-body"},q=t("h2",{class:"section-title fs-lg"},"Daftar Tenant",-1),R=t("p",{class:"section-lead"}," Daftar tenant yang akan ditampilkan pada halaman utama ",-1),W={class:"row"},X={class:"col-12"},Y={class:"card border-gray-light"},z={class:"card-body"},G={class:"action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between"},J={class:"left-section"},K={class:"right-section mt-2 mt-md-0"},Q={class:"input-group"},Z={class:"input-group-prepend"},ee={class:"input-group-text"},te={class:"text-center"},ae=t("span",null,"Belum ada data",-1),se={class:"text-center"},ne=t("span",null,"Data tidak ditemukan",-1),oe={class:"d-flex align-items-baseline justify-content-center"},le={class:"text-right"},ie={class:"d-flex flex-column"},re={class:"fs-sm text-muted"},ce={key:0},de=["src","alt"],ue={class:"footer-wrapper"},me={class:"d-flex justify-content-between align-items-center"},ye={__name:"Index",setup(pe){const v=y(null),A=U(),S=F(),b=y(!1),s=y({busy:!1,fields:[{key:"action",label:"Aksi",class:"text-center",sortable:!1,thStyle:{width:"35px"}},{key:"rownum",label:"No",thStyle:{width:"35px",textAlign:"center"}},{key:"name",label:"Nama",thStyle:{textAlign:"center",width:"20%"}},{key:"description",label:"Deskripsi",thStyle:{textAlign:"center"}},{key:"logo",label:"Logo",thStyle:{textAlign:"center",width:"88px"}}],search:{filter:null,columns:["name","short_location","description"]},meta:{page:1,from:1,limit:15,total:0}}),$=j.debounce((l,a)=>{s.value.busy=!0,w.get(T("backend.tenant.get",{search:s.value.search.filter,columns:s.value.search.columns.join(","),page:l.currentPage,limit:l.perPage})).then(n=>{var i,c,d,m,p;s.value.meta.from=(i=n.data)==null?void 0:i.meta.from,s.value.meta.page=(c=n.data)==null?void 0:c.meta.current_page,s.value.meta.limit=(d=n.data)==null?void 0:d.meta.per_page,s.value.meta.total=(m=n.data)==null?void 0:m.meta.total,a((p=n.data)==null?void 0:p.data)}).catch(()=>a([])).finally(()=>setTimeout(()=>s.value.busy=!1,500))},500),C=l=>{P({title:"Hapus Tenant",text:`Apakah Anda yakin untuk menghapus data tenant an. ${l.name}?`,icon:"question"},()=>w.post(T("backend.tenant.drop"),{_method:"delete",slug:l.slug}).then(a=>a).catch(a=>{let n=a.response.status,i=a.response.data.message;if([409,417,500].includes(n)){k.showValidationMessage(`${i}`);return}if(n=="422"){const c=a.response.data.errors;i=Object.keys(c).map(d=>Array.isArray(c[d])?c[d].join(", "):c[d]).join(", "),k.showValidationMessage(`${i}`);return}})).then(({value:a,isConfirmed:n,isDismissed:i})=>{if(i)return!1;n&&a&&k.fire({title:"Hapus Tenant Berhasil",text:`Tenant an ${l.name} berhasil dihapus`,icon:"success"}),v.value.refresh()})},V=l=>{S.setItemByUrl(l.slug,l),A.push({name:"settings.tenant.detail",params:{slug:l.slug}})};return(l,a)=>{const n=u("FontAwesomeIcon"),i=u("b-button"),c=u("b-table"),d=u("b-dropdown-item"),m=u("b-dropdown"),p=u("b-pagination");return h(),f("div",O,[q,R,t("div",W,[t("div",X,[t("div",Y,[t("div",z,[t("div",G,[t("div",J,[t("button",{class:"btn btn-icon icon-left btn-primary",onClick:a[0]||(a[0]=e=>b.value=!0)},[o(n,{icon:["fas","plus"]}),x(" Tambah ")])]),t("div",K,[t("div",Q,[t("div",Z,[t("div",ee,[o(n,{icon:["fas","search"]})])]),D(t("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>s.value.search.filter=e),type:"text",class:"form-control",placeholder:"Pencarian"},null,512),[[B,s.value.search.filter]])])])]),o(c,{ref_key:"refTable",ref:v,"table-class":"custom-bordered dataTable",fields:s.value.fields,items:N($),filter:s.value.search.filter,"current-page":s.value.meta.page,"per-page":s.value.meta.limit,busy:s.value.busy,"show-empty":"",hover:"",striped:"",responsive:""},{"table-busy":r(()=>[o(E)]),empty:r(()=>[t("div",te,[o(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),ae])]),emptyfiltered:r(()=>[t("div",se,[o(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),ne])]),"cell(action)":r(({item:e})=>[t("div",oe,[o(i,{variant:"link",class:"text-info py-0 px-1 outline-none cursor-pointer",onClick:_=>V(e)},{default:r(()=>[o(n,{icon:["fas","info-circle"]})]),_:2},1032,["onClick"]),o(i,{variant:"link",class:"text-danger py-0 px-1 outline-none cursor-pointer",onClick:_=>C(e)},{default:r(()=>[o(n,{icon:["fas","trash-alt"]})]),_:2},1032,["onClick"])])]),"cell(rownum)":r(({index:e})=>[t("div",le,g(e+1),1)]),"cell(name)":r(({item:e})=>[t("div",ie,[x(g(e.name)+" ",1),t("span",re,g(e.short_location),1)])]),"cell(logo)":r(({value:e,item:_})=>[e.thumb?(h(),f("img",{key:1,src:e.thumb,alt:_.name,class:"image-on-table"},null,8,de)):(h(),f("span",ce))]),_:1},8,["fields","items","filter","current-page","per-page","busy"]),t("div",ue,[t("div",me,[o(m,{variant:"light",class:"mr-2 form-control-height-sm perpage",text:s.value.meta.limit.toString()},{default:r(()=>[(h(),f(H,null,I([5,10,15,25,50,100],e=>o(d,{key:e,"link-class":"btn",onClick:M(_=>s.value.meta.limit=e,["prevent"])},{default:r(()=>[x(g(e),1)]),_:2},1032,["onClick"])),64))]),_:1},8,["text"]),o(p,{value:s.value.meta.page,"onUpdate:value":a[2]||(a[2]=e=>s.value.meta.page=e),"total-rows":s.value.meta.total,"per-page":s.value.meta.limit,"aria-controls":"group-table","first-class":"hidden-md-down","last-class":"hidden-md-down",class:"pagination mb-0",onChange:a[3]||(a[3]=e=>s.value.meta.page=e)},null,8,["value","total-rows","per-page"])])])])])])]),o(L,{visible:b.value,"onUpdate:visible":a[4]||(a[4]=e=>b.value=e),onSubmit:a[5]||(a[5]=e=>v.value.refresh())},null,8,["visible"])])}}};export{ye as default};
