import{fq as O,fl as x,r as b,o as f,a as N,gS as r,fp as t,fo as l,u as v,gZ as q,g_ as B,c as k,fu as w,fv as P,gT as D,g$ as X,fI as Y,hh as W,gY as V,gW as H,gX as M,gV as Z,gO as z,hi as G,_ as R,fr as J,fs as K,gN as Q}from"./vee-validate-i18n.esm-b9e812f9.js";import{_ as ee}from"./Spinner-c7efc148.js";const te={class:"px-3 pb-0 mb-0"},ae={class:"form-group row"},se=t("label",{for:"nama",class:"col-sm-3 col-form-label"}," Username ",-1),ne={class:"col-sm-9"},oe=["readonly"],le={key:0,class:"form-text text-danger fs-nano"},ie={class:"form-group row"},re=t("label",{for:"nama",class:"col-sm-3 col-form-label"}," Nama ",-1),ce={class:"col-sm-9"},de={key:0,class:"form-text text-danger fs-nano"},ue={class:"form-group row"},me=t("label",{for:"nama",class:"col-sm-3 col-form-label"}," Password ",-1),pe={class:"col-sm-9"},fe={key:0,class:"form-text text-danger fs-nano"},_e={class:"form-group row"},ge={class:"col-sm-9 offset-sm-3"},he={type:"submit",class:"btn btn-primary mr-2"},be=["onClick"],L={__name:"ModalForm",props:{visible:{type:Boolean,required:!0,default:!1},initData:{type:[Object,null],required:!1,default:()=>{}},isEdit:{type:Boolean,required:!0,default:!1}},emits:["update:visible","submit"],setup(T,{emit:y}){const g=T,C=Math.random().toString(36).substring(2,9),S=O(()=>g.visible),a=O(()=>g.initData),j=x(null),$=x(null),E=()=>Y(()=>{j.value.focus(),a.value&&($.value.setFieldValue("username",a.value.username),$.value.setFieldValue("name",a.value.name),$.value.setFieldValue("password",a.value.password))}),c=()=>y("update:visible",!1),s=(n,{resetForm:i})=>{var h;console.log(n);const o=g.isEdit,d=o?`Apakah Anda yakan untuk mengubah data ${(h=a.value)==null?void 0:h.username} ?`:`Apakah Anda yakin untuk menambahkan ${n.username} sebagai pengguna?`,p=o?"put":"post",u=`backend.user.${o?"edit":"store"}`;let e=!1;o&&Object.keys(n).forEach(m=>{n[m]!=a.value[m]&&(e=!0)}),!(o&&!e)&&W({title:`${o?"Ubah":"Tambah"} pengguna`,text:d,icon:"question"},()=>{var m;return H.post(M(u),{...n,_method:p,slug:o?(m=a.value)==null?void 0:m.username:null},{headers:{"Content-Type":"multipart/form-data"}}).then(_=>_).catch(_=>{let F=_.response.status,A=_.response.data.message;if([409,417,500].includes(F)){V.showValidationMessage(`${A}`);return}if(F=="422"){const I=_.response.data.errors;A=Object.keys(I).map(U=>Array.isArray(I[U])?I[U].join(", "):I[U]).join(", "),V.showValidationMessage(`${A}`);return}})}).then(({value:m,isConfirmed:_,isDismissed:F})=>{var A;if(F)return!1;_&&m.data.status=="success"&&(V.fire({title:"Tambah pengguna",text:m.data.message,icon:"success"}),i(),y("submit",(A=m.data)==null?void 0:A.data),c())})};return(n,i)=>{const o=b("FontAwesomeIcon"),d=b("b-modal");return f(),N(d,{id:v(C),visible:S.value,"onUpdate:visible":i[0]||(i[0]=p=>S.value=p),title:`${g.isEdit?"Ubah":"Tambah"} Pengguna`,"hide-footer":"",onShown:E,onHide:c},{default:r(({hide:p})=>[t("div",te,[l(v(X),{ref_key:"formRef",ref:$,onSubmit:s},{default:r(()=>[t("div",ae,[se,t("div",ne,[l(v(q),{label:"Username Pengguna",name:"username",rules:"required|min:3|max:200"},{default:r(({field:u,errorMessage:e})=>[t("input",B({id:"username",ref_key:"usernameInput",ref:j},u,{type:"text",class:"form-control",placeholder:"Masukkan username pengguna",readonly:T.isEdit}),null,16,oe),e?(f(),k("div",le,w(e),1)):P("",!0)]),_:1})])]),t("div",ie,[re,t("div",ce,[l(v(q),{label:"Nama pengguna",name:"name",rules:"required|min:3|max:200"},{default:r(({field:u,errorMessage:e})=>[t("input",B({id:"nama",ref:"nameInput"},u,{type:"text",class:"form-control",placeholder:"Masukkan nama pengguna"}),null,16),e?(f(),k("div",de,w(e),1)):P("",!0)]),_:1})])]),t("div",ue,[me,t("div",pe,[l(v(q),{label:"Password Pengguna",name:"password",rules:T.isEdit?[]:"required|min:6"},{default:r(({field:u,errorMessage:e})=>[t("input",B({id:"password",ref:"passwordInput"},u,{type:"password",class:"form-control"}),null,16),e?(f(),k("div",fe,w(e),1)):P("",!0)]),_:1},8,["rules"])])]),t("div",_e,[t("div",ge,[t("button",he,[l(o,{icon:["fas","save"],class:"mr-1"}),D(" Simpan ")]),t("button",{type:"reset",class:"btn btn-light",onClick:p}," Batal ",8,be)])])]),_:2},1536)])]),_:1},8,["id","visible","title"])}}},ve={class:"section-body"},ye=t("h2",{class:"section-title fs-lg"},"Daftar Pengguna",-1),xe=t("p",{class:"section-lead"}," Daftar pengguna terdaftar ",-1),ke={class:"row"},we={class:"col-12"},$e={class:"card border-gray-light"},Ae={class:"card-body"},Ve={class:"action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between"},Ce={class:"left-section"},Se={class:"right-section mt-2 mt-md-0"},Pe={class:"input-group"},Te={class:"input-group-prepend"},je={class:"input-group-text"},Fe={class:"text-center"},Ie=t("span",null,"Belum ada data",-1),De={class:"text-center"},Ee=t("span",null,"Data tidak ditemukan",-1),Ue={class:"d-flex align-items-baseline justify-content-center"},qe={class:"text-right"},Be={class:"d-flex flex-column"},Ne={class:"fs-sm text-muted"},He={key:0},Me=["src","alt"],Oe={class:"footer-wrapper"},Re={class:"d-flex justify-content-between align-items-center"},Xe={__name:"Index",setup(T){const y=x(null),g=x(!1),C=x(!1),S=x({}),a=x({busy:!1,fields:[{key:"action",label:"Aksi",class:"text-center",sortable:!1,thStyle:{width:"35px"}},{key:"rownum",label:"No",thStyle:{width:"35px",textAlign:"center"}},{key:"username",label:"Username",thStyle:{textAlign:"center",width:"20%"}},{key:"name",label:"Nama",thStyle:{textAlign:"center",width:"80%"}}],search:{filter:null,columns:["name","short_location","description"]},meta:{page:1,from:1,limit:15,total:0}}),j=Z.debounce((c,s)=>{a.value.busy=!0,H.get(M("backend.user.get",{search:a.value.search.filter,columns:a.value.search.columns.join(","),page:c.currentPage,limit:c.perPage})).then(n=>{var i,o,d,p,u;a.value.meta.from=(i=n.data)==null?void 0:i.meta.from,a.value.meta.page=(o=n.data)==null?void 0:o.meta.current_page,a.value.meta.limit=(d=n.data)==null?void 0:d.meta.per_page,a.value.meta.total=(p=n.data)==null?void 0:p.meta.total,s((u=n.data)==null?void 0:u.data)}).catch(()=>s([])).finally(()=>setTimeout(()=>a.value.busy=!1,500))},500),$=c=>{W({title:"Hapus Pengguna",text:`Apakah Anda yakin untuk menghapus data pengguna dengan username. ${c.username}?`,icon:"question"},()=>H.post(M("backend.user.drop"),{_method:"delete",username:c.username}).then(s=>s).catch(s=>{let n=s.response.status,i=s.response.data.message;if([409,417,500].includes(n)){V.showValidationMessage(`${i}`);return}if(n=="422"){const o=s.response.data.errors;i=Object.keys(o).map(d=>Array.isArray(o[d])?o[d].join(", "):o[d]).join(", "),V.showValidationMessage(`${i}`);return}})).then(({value:s,isConfirmed:n,isDismissed:i})=>{if(i)return!1;n&&s&&V.fire({title:"Hapus Pengguna Berhasil",text:`Pengguna dengan username ${c.username} berhasil dihapus`,icon:"success"}),y.value.refresh()})},E=c=>{S.value=c,C.value=!0};return(c,s)=>{const n=b("FontAwesomeIcon"),i=b("b-button"),o=b("b-table"),d=b("b-dropdown-item"),p=b("b-dropdown"),u=b("b-pagination");return f(),k("div",ve,[ye,xe,t("div",ke,[t("div",we,[t("div",$e,[t("div",Ae,[t("div",Ve,[t("div",Ce,[t("button",{class:"btn btn-icon icon-left btn-primary",onClick:s[0]||(s[0]=e=>g.value=!0)},[l(n,{icon:["fas","plus"]}),D(" Tambah ")])]),t("div",Se,[t("div",Pe,[t("div",Te,[t("div",je,[l(n,{icon:["fas","search"]})])]),z(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>a.value.search.filter=e),type:"text",class:"form-control",placeholder:"Pencarian"},null,512),[[G,a.value.search.filter]])])])]),l(o,{ref_key:"refTable",ref:y,"table-class":"custom-bordered dataTable",fields:a.value.fields,items:v(j),filter:a.value.search.filter,"current-page":a.value.meta.page,"per-page":a.value.meta.limit,busy:a.value.busy,"show-empty":"",hover:"",striped:"",responsive:""},{"table-busy":r(()=>[l(ee)]),empty:r(()=>[t("div",Fe,[l(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),Ie])]),emptyfiltered:r(()=>[t("div",De,[l(n,{icon:["fas","exclamation-circle"],class:"mr-2"}),Ee])]),"cell(action)":r(({item:e})=>{var h,m;return[t("div",Ue,[!e.is_etpp&&e.username!=((h=v(R).user)==null?void 0:h.username)?(f(),N(i,{key:0,variant:"link",class:"text-info py-0 px-1 outline-none cursor-pointer",onClick:_=>E(e)},{default:r(()=>[l(n,{icon:["fas","edit"]})]),_:2},1032,["onClick"])):P("",!0),!e.is_etpp&&e.username!=((m=v(R).user)==null?void 0:m.username)?(f(),N(i,{key:1,variant:"link",class:"text-danger py-0 px-1 outline-none cursor-pointer",onClick:_=>$(e)},{default:r(()=>[l(n,{icon:["fas","trash-alt"]})]),_:2},1032,["onClick"])):P("",!0)])]}),"cell(rownum)":r(({index:e})=>[t("div",qe,w(e+1),1)]),"cell(name)":r(({item:e})=>[t("div",Be,[D(w(e.name)+" ",1),t("span",Ne,w(e.short_location),1)])]),"cell(logo)":r(({value:e,item:h})=>[e.thumb?(f(),k("img",{key:1,src:e.thumb,alt:h.name,class:"image-on-table"},null,8,Me)):(f(),k("span",He))]),_:1},8,["fields","items","filter","current-page","per-page","busy"]),t("div",Oe,[t("div",Re,[l(p,{variant:"light",class:"mr-2 form-control-height-sm perpage",text:a.value.meta.limit.toString()},{default:r(()=>[(f(),k(J,null,K([5,10,15,25,50,100],e=>l(d,{key:e,"link-class":"btn",onClick:Q(h=>a.value.meta.limit=e,["prevent"])},{default:r(()=>[D(w(e),1)]),_:2},1032,["onClick"])),64))]),_:1},8,["text"]),l(u,{value:a.value.meta.page,"onUpdate:value":s[2]||(s[2]=e=>a.value.meta.page=e),"total-rows":a.value.meta.total,"per-page":a.value.meta.limit,"aria-controls":"group-table","first-class":"hidden-md-down","last-class":"hidden-md-down",class:"pagination mb-0",onChange:s[3]||(s[3]=e=>a.value.meta.page=e)},null,8,["value","total-rows","per-page"])])])])])])]),l(L,{visible:g.value,"onUpdate:visible":s[4]||(s[4]=e=>g.value=e),onSubmit:s[5]||(s[5]=e=>y.value.refresh())},null,8,["visible"]),l(L,{visible:C.value,"onUpdate:visible":s[6]||(s[6]=e=>C.value=e),"init-data":S.value,"is-edit":!0,onSubmit:s[7]||(s[7]=e=>y.value.refresh())},null,8,["visible","init-data"])])}}};export{Xe as default};