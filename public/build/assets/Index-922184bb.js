import{r as h,hm as V,hn as y,ho as x,j as u,e as k,f as t,fx as o,fV as w,g as j,ge as D,fT as r,u as N,b as B,fB as g,fy as H,fz as P,i as F,hC as I,hp as v}from"./vee-validate-i18n.esm-8795b5a9.js";import{C as M}from"./vue-multiselect.esm-5ac34b22.js";import{u as U}from"./product-store-d4bdc2eb.js";import{f as E}from"./formatter-8fa69f9f.js";import{_ as q}from"./Spinner-f1d6211d.js";import{_ as z}from"./ModalForm-9234aefb.js";import"./CropperImage-bc84b991.js";const L={class:"section-body"},O=t("h2",{class:"section-title fs-lg"},"Daftar Barang",-1),R=t("p",{class:"section-lead"}," Daftar barang yang akan ditampilkan pada halaman utama ",-1),G={class:"row"},J={class:"col-12"},K={class:"card border-gray-light"},Q={class:"card-body"},W={class:"action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between"},X={class:"left-section"},Y={class:"right-section mt-2 mt-md-0"},Z={class:"input-group"},ee={class:"input-group-prepend"},te={class:"input-group-text"},ae={class:"text-center"},se=t("span",null,"Belum ada data",-1),ne={class:"text-center"},oe=t("span",null,"Data tidak ditemukan",-1),le={class:"d-flex align-items-baseline justify-content-center"},ie={class:"text-right"},re={class:"d-flex flex-column"},ce={class:"footer-wrapper"},de={class:"d-flex justify-content-between align-items-center"},be={__name:"Index",setup(ue){const f=h(null),C=M(),A=U(),_=h(!1),a=h({busy:!1,fields:[{key:"action",label:"Aksi",class:"text-center",sortable:!1,thStyle:{width:"35px"}},{key:"rownum",label:"No",thStyle:{width:"35px",textAlign:"center"}},{key:"tenant_name",label:"Nama Tenant",thStyle:{textAlign:"center",width:"20%"}},{key:"product_name",label:"Nama Barang",thStyle:{textAlign:"center",width:"20%"}},{key:"description",label:"Deskripsi",thStyle:{textAlign:"center"}},{key:"price",label:"Harga",thStyle:{textAlign:"center",width:"88px"},formatter:l=>{const e=parseFloat(l||0);return E(e)}}],search:{filter:null,columns:["name","description"]},meta:{page:1,from:1,limit:15,total:0}}),S=V.debounce((l,e)=>{a.value.busy=!0,y.get(x("backend.product.get",{search:a.value.search.filter,columns:a.value.search.columns.join(","),page:l.currentPage,limit:l.perPage})).then(n=>{var i,c,d,p,m;a.value.meta.from=(i=n.data)==null?void 0:i.meta.from,a.value.meta.page=(c=n.data)==null?void 0:c.meta.current_page,a.value.meta.limit=(d=n.data)==null?void 0:d.meta.per_page,a.value.meta.total=(p=n.data)==null?void 0:p.meta.total,e((m=n.data)==null?void 0:m.data)}).catch(()=>e([])).finally(()=>setTimeout(()=>a.value.busy=!1,500))},500),$=l=>{I({title:"Hapus Barang",text:`Apakah Anda yakin untuk menghapus data barang an. ${l.product_name}?`,icon:"question"},()=>y.post(x("backend.product.drop"),{_method:"delete",slug:l.slug}).then(e=>e).catch(e=>{let n=e.response.status,i=e.response.data.message;if([409,417,500].includes(n)){v.showValidationMessage(`${i}`);return}if(n=="422"){const c=e.response.data.errors;i=Object.keys(c).map(d=>Array.isArray(c[d])?c[d].join(", "):c[d]).join(", "),v.showValidationMessage(`${i}`);return}})).then(({value:e,isConfirmed:n,isDismissed:i})=>{if(i)return!1;n&&e&&v.fire({title:"Hapus Barang Berhasil",text:`Barang an ${l.product_name} berhasil dihapus`,icon:"success"}),f.value.refresh()})},T=l=>{A.setItem(l),C.push({name:"settings.product.detail",params:{slug:l.slug}})};return(l,e)=>{const n=u("FontAwesomeIcon"),i=u("b-button"),c=u("b-table"),d=u("b-dropdown-item"),p=u("b-dropdown"),m=u("b-pagination");return B(),k("div",L,[O,R,t("div",G,[t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("button",{class:"btn btn-icon icon-left btn-primary",onClick:e[0]||(e[0]=s=>_.value=!0)},[o(n,{icon:["fas","plus"]}),w(" Tambah ")])]),t("div",Y,[t("div",Z,[t("div",ee,[t("div",te,[o(n,{icon:["fas","search"]})])]),j(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.value.search.filter=s),type:"text",class:"form-control",placeholder:"Pencarian"},null,512),[[D,a.value.search.filter]])])])]),o(c,{ref_key:"refTable",ref:f,"table-class":"custom-bordered dataTable",fields:a.value.fields,items:N(S),filter:a.value.search.filter,"current-page":a.value.meta.page,"per-page":a.value.meta.limit,busy:a.value.busy,"show-empty":"",hover:"",striped:"",responsive:""},{"table-busy":r(()=>[o(q)]),empty:r(()=>[t("div",ae,[o(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),se])]),emptyfiltered:r(()=>[t("div",ne,[o(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),oe])]),"cell(action)":r(({item:s})=>[t("div",le,[o(i,{variant:"link",class:"text-info py-0 px-1 outline-none cursor-pointer",onClick:b=>T(s)},{default:r(()=>[o(n,{icon:["fas","info-circle"]})]),_:2},1032,["onClick"]),o(i,{variant:"link",class:"text-danger py-0 px-1 outline-none cursor-pointer",onClick:b=>$(s)},{default:r(()=>[o(n,{icon:["fas","trash-alt"]})]),_:2},1032,["onClick"])])]),"cell(rownum)":r(({index:s})=>[t("div",ie,g(s+1),1)]),"cell(condition)":r(({item:s})=>[t("div",re,g(s.condition==0?"Baru":"Bekas"),1)]),_:1},8,["fields","items","filter","current-page","per-page","busy"]),t("div",ce,[t("div",de,[o(p,{variant:"light",class:"mr-2 form-control-height-sm perpage",text:a.value.meta.limit.toString()},{default:r(()=>[(B(),k(H,null,P([5,10,15,25,50,100],s=>o(d,{key:s,"link-class":"btn",onClick:F(b=>a.value.meta.limit=s,["prevent"])},{default:r(()=>[w(g(s),1)]),_:2},1032,["onClick"])),64))]),_:1},8,["text"]),o(m,{value:a.value.meta.page,"onUpdate:value":e[2]||(e[2]=s=>a.value.meta.page=s),"total-rows":a.value.meta.total,"per-page":a.value.meta.limit,"aria-controls":"group-table","first-class":"hidden-md-down","last-class":"hidden-md-down",class:"pagination mb-0",onChange:e[3]||(e[3]=s=>a.value.meta.page=s)},null,8,["value","total-rows","per-page"])])])])])])]),o(z,{visible:_.value,"onUpdate:visible":e[4]||(e[4]=s=>_.value=s),onSubmit:e[5]||(e[5]=s=>f.value.refresh())},null,8,["visible"])])}}};export{be as default};
