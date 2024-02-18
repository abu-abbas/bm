import{r as q,c as P,j as C,b as l,e as n,f as e,fx as c,fy as z,fz as G,fC as h,k as E,fB as V,fJ as Q,o as Y,hn as M,ho as K,fT as v,u as g,hq as w,fR as x,fV as Z,hr as ee,hC as te,hp as L}from"./vee-validate-i18n.esm-8795b5a9.js";import{_ as ae}from"./CropperImage-bc84b991.js";const le={class:"uploader-image-wrapper"},oe={for:"file-input",class:"border"},se=["accept"],ne=["src"],ie=["onClick"],re={key:0,class:"fs-nano text-danger"},ce={__name:"UploadingImage",props:{accept:{type:Array,required:!1,default:()=>["image/gif","image/jpg","image/jpeg","image/png","image/tiff"]},maxSize:{type:Number,required:!1,default:5},modelValue:{type:[Array,null],required:!0,default:null},urlObject:{type:[Array,null],required:!1,default:null},errorMessage:{type:[String,null],required:!1,default:null}},emits:["update:modelValue","update:urlObject","cropping"],setup(j,{emit:F}){const A=j,$=window.URL||window.webkitURL,b=q([]),o=P(()=>A.accept.join(",")),H=d=>{if(!d.target.files.length)return;Array.from(d.target.files).forEach(i=>{const y={visible:!0,input:$.createObjectURL(i),output:null,name:i.name,mime:i.type,file:null};b.value.push(y)}),Q(()=>d.target.value="")},k=({image:d})=>{const u=b.value[b.value.length-1];u.output=$.createObjectURL(d),u.file=new File([d],u.name,{type:u.mime}),I()},U=d=>{b.value.splice(d,1),I()},I=()=>{const d=b.value.map(i=>i.file),u=b.value.map(i=>i.output);F("update:modelValue",d),F("update:urlObject",u),F("cropping",{files:d,urlObjects:u})};return(d,u)=>{const i=C("FontAwesomeIcon");return l(),n("div",le,[e("label",oe,[c(i,{icon:["far","image"]}),e("input",{id:"file-input",type:"file",name:"upload",multiple:"",accept:o.value,onChange:H},null,40,se)]),(l(!0),n(z,null,G(b.value,(y,T)=>(l(),n("div",{key:T,class:"preview-wrapper"},[y.output?(l(),n("img",{key:0,src:y.output,class:"image-preview",alt:"Output after crop and resize"},null,8,ne)):h("",!0),e("a",{href:"javascript:void(0)",onClick:N=>U(T)},[c(i,{icon:["fas","trash-alt"]})],8,ie),y.visible?(l(),E(ae,{key:1,visible:y.visible,"onUpdate:visible":N=>y.visible=N,"image-url":y.input,onAfterCropping:k},null,8,["visible","onUpdate:visible","image-url"])):h("",!0)]))),128)),j.errorMessage?(l(),n("div",re,V(j.errorMessage),1)):h("",!0)])}}};const ue={class:"px-3 pb-0 mb-0"},de={class:"form-group row"},me=e("label",{for:"tenant",class:"col-sm-3 col-form-label"}," Tenant ",-1),pe={class:"col-sm-9"},_e={key:0,class:"form-text text-danger fs-nano"},fe={class:"form-group row"},ve=e("label",{for:"name",class:"col-sm-3 col-form-label"}," Nama Barang ",-1),ge={class:"col-sm-9"},he={key:0,class:"form-text text-danger fs-nano"},be={class:"form-group row"},ke=e("label",{for:"category",class:"col-sm-3 col-form-label"}," Kategori ",-1),ye={class:"col-sm-9"},we={key:0,class:"form-text text-danger fs-nano"},xe={class:"form-group row"},Ve=e("label",{for:"deskripsi",class:"col-sm-3 col-form-label"}," Deskripsi ",-1),qe={class:"col-sm-9"},Fe={key:0,class:"form-text text-danger fs-nano"},Ae={class:"form-group row"},Ce=e("label",{for:"min_qty",class:"col-sm-3 col-form-label"}," Minimum Kuantiti ",-1),je={class:"col-sm-9"},Ue={key:0,class:"form-text text-danger fs-nano"},Ie={class:"form-group row"},Te=e("label",{for:"min_unit",class:"col-sm-3 col-form-label"}," Satuan ",-1),$e={class:"col-sm-9"},Ne={key:0,class:"form-text text-danger fs-nano"},De={class:"form-group row"},Oe=e("label",{for:"tkdn",class:"col-sm-3 col-form-label"}," Nilai TKDN ",-1),Be={class:"col-sm-9"},Ee={key:0,class:"form-text text-danger fs-nano"},He={class:"form-group row"},Re=e("label",{for:"price",class:"col-sm-3 col-form-label"}," Harga ",-1),Se={class:"col-sm-9"},Me={key:0,class:"form-text text-danger fs-nano"},Ke={class:"form-group row"},Le=e("label",{for:"ecatalogue",class:"col-sm-3 col-form-label"}," Link e-Katalog ",-1),Pe={class:"col-sm-9"},ze={key:0,class:"form-text text-danger fs-nano"},Ge={class:"form-group row"},Je=e("label",{class:"col-sm-3 col-form-label"}," Gambar ",-1),Qe={class:"col-sm-9"},We={key:0,class:"preview-wrapper"},Xe=["src","alt"],Ye=["onClick"],Ze={class:"form-group row"},et={class:"col-sm-9 offset-sm-3"},tt={type:"submit",class:"btn btn-primary mr-2"},at=["onClick"],st={__name:"ModalForm",props:{visible:{type:Boolean,required:!0,default:!1},initData:{type:[Object,null],required:!1,default:()=>{}},isEdit:{type:Boolean,required:!0,default:!1}},emits:["update:visible","submit"],setup(j,{emit:F}){const A=j;Y(()=>{y(),T()});const $=Math.random().toString(36).substring(2,9),b=P(()=>A.visible),o=P(()=>A.initData),H=q(null),k=q(null),U=q(!1),I=q([]),d=q([]),u=q(null),i=q([]),y=async()=>{try{const p=(await(await M.get(K("backend.tenant.get")).then(_=>_)).data.data).map(_=>({text:_.name,value:_.id}));I.value=p}catch(s){console.error("Error fetching data from the API:",s)}},T=async()=>{try{const p=(await(await M.get(K("backend.category.get",{})).then(_=>_)).data.data).map(_=>({label:_.name,value:_.url}));d.value=p}catch(s){console.error("Error fetching data from the API:",s)}},N=()=>Q(()=>{var s;o.value&&(u.value={value:o.value.tenant_id,text:o.value.tenant_name},i.value=(s=o.value)==null?void 0:s.categories,k.value.setFieldValue("name",o.value.product_name),k.value.setFieldValue("description",o.value.description),k.value.setFieldValue("min_qty",o.value.minimum_qty),k.value.setFieldValue("min_unit",o.value.minimum_unit),k.value.setFieldValue("price",o.value.price),k.value.setFieldValue("tkdn",o.value.tkdn_value),k.value.setFieldValue("ecatalogue",o.value.ecatalogue),U.value=!0)}),J=()=>F("update:visible",!1),W=s=>{s>=0&&s<o.value.images.length&&(o.value.images.splice(s,1),o.value.images.length===0&&(U.value=!1))},X=(s,{resetForm:m})=>{const p=A.isEdit,_=p?`Apakah Anda yakan untuk mengubah data ${s.name} ?`:`Apakah Anda yakin untuk menambahkan barang ${s.name} ?`,R=p?"put":"post",D=`backend.product.${p?"edit":"store"}`;let O=!1;p&&Object.keys(s).forEach(f=>{s[f]!=o.value[f]&&(O=!0)}),!(p&&!O)&&te({title:`${p?"Ubah":"Tambah"} barang`,text:_,icon:"question"},()=>{var f;return M.post(K(D),{...s,_method:R,slug:p?(f=o.value)==null?void 0:f.slug:null},{headers:{"Content-Type":"multipart/form-data"}}).then(a=>a).catch(a=>{let t=a.response.status,r=a.response.data.message;if([409,417,500].includes(t)){L.showValidationMessage(`${r}`);return}if(t=="422"){const B=a.response.data.errors;r=Object.keys(B).map(S=>Array.isArray(B[S])?B[S].join(", "):B[S]).join(", "),L.showValidationMessage(`${r}`);return}})}).then(({value:f,isConfirmed:a,isDismissed:t})=>{var r;if(t)return!1;a&&f.data.status=="success"&&(L.fire({title:"Tambah barang",text:f.data.message,icon:"success"}),m(),T(),i.value=[],u.value=[],F("submit",(r=f.data)==null?void 0:r.data),J())})};return(s,m)=>{const p=C("vue-multiselect"),_=C("el-option"),R=C("el-select"),D=C("FontAwesomeIcon"),O=C("b-modal");return l(),E(O,{id:g($),visible:b.value,"onUpdate:visible":m[4]||(m[4]=f=>b.value=f),title:`${A.isEdit?"Ubah":"Tambah"} Barang`,"hide-footer":"",onShown:N,onHide:J},{default:v(({hide:f})=>[e("div",ue,[c(g(ee),{ref_key:"formRef",ref:k,onSubmit:X},{default:v(()=>[e("div",de,[me,e("div",pe,[c(g(w),{modelValue:u.value,"onUpdate:modelValue":m[1]||(m[1]=a=>u.value=a),label:"Nama tenant",name:"tenant",rules:"required"},{default:v(({field:a,errorMessage:t})=>[c(p,x({modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=r=>u.value=r),options:I.value,"close-on-select":!0,"clear-on-select":!1,placeholder:"Pilih nama tenant"},a,{label:"text","track-by":"text"}),null,16,["modelValue","options"]),t?(l(),n("div",_e,V(t),1)):h("",!0)]),_:1},8,["modelValue"])])]),e("div",fe,[ve,e("div",ge,[c(g(w),{label:"Nama barang",name:"name",rules:"required|min:3|max:200"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"name",ref_key:"nameInput",ref:H},a,{type:"text",class:"form-control",placeholder:"Masukkan nama barang"}),null,16),t?(l(),n("div",he,V(t),1)):h("",!0)]),_:1})])]),e("div",be,[ke,e("div",ye,[c(g(w),{modelValue:i.value,"onUpdate:modelValue":m[3]||(m[3]=a=>i.value=a),label:"Kategori barang",name:"category",rules:"required|min:3|max:200"},{default:v(({field:a,errorMessage:t})=>[c(R,x(a,{modelValue:i.value,"onUpdate:modelValue":m[2]||(m[2]=r=>i.value=r),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"Pilih atau ketik kategori"}),{default:v(()=>[(l(!0),n(z,null,G(d.value,r=>(l(),E(_,{key:r.label,label:r.label,value:r.label},null,8,["label","value"]))),128))]),_:2},1040,["modelValue"]),t?(l(),n("div",we,V(t),1)):h("",!0)]),_:1},8,["modelValue"])])]),e("div",xe,[Ve,e("div",qe,[c(g(w),{label:"Deskripsi",name:"description",rules:"required|max:2000"},{default:v(({field:a,errorMessage:t})=>[e("textarea",x({id:"deskripsi"},a,{type:"text",class:"form-control custom-scroll",placeholder:"Masukkan deskripsi tentang barang"}),null,16),t?(l(),n("div",Fe,V(t),1)):h("",!0)]),_:1})])]),e("div",Ae,[Ce,e("div",je,[c(g(w),{label:"Minimum kuantiti",name:"min_qty",rules:"required|min:1|max:11"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"min_qty"},a,{type:"number",class:"form-control",placeholder:"Masukkan jumlah minimum kuantity"}),null,16),t?(l(),n("div",Ue,V(t),1)):h("",!0)]),_:1})])]),e("div",Ie,[Te,e("div",$e,[c(g(w),{label:"Nama barang",name:"min_unit",rules:"required|min:1|max:11"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"min_unit"},a,{class:"form-control",placeholder:"Masukkan minimum unit"}),null,16),t?(l(),n("div",Ne,V(t),1)):h("",!0)]),_:1})])]),e("div",De,[Oe,e("div",Be,[c(g(w),{label:"Nilai TKDN",name:"tkdn",rules:"required"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"tkdn"},a,{class:"form-control",placeholder:"Masukkan nilai TKDN"}),null,16),t?(l(),n("div",Ee,V(t),1)):h("",!0)]),_:1})])]),e("div",He,[Re,e("div",Se,[c(g(w),{label:"Harga",name:"price",rules:"required|min:1|max:200"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"price"},a,{type:"number",class:"form-control",placeholder:"Masukkan harga"}),null,16),t?(l(),n("div",Me,V(t),1)):h("",!0)]),_:1})])]),e("div",Ke,[Le,e("div",Pe,[c(g(w),{label:"Link e-Katalog",name:"ecatalogue"},{default:v(({field:a,errorMessage:t})=>[e("input",x({id:"ecatalogue"},a,{class:"form-control",placeholder:"Masukkan link e-katalog"}),null,16),t?(l(),n("div",ze,V(t),1)):h("",!0)]),_:1})])]),e("div",Ge,[Je,e("div",Qe,[U.value?(l(),n("div",We,[(l(!0),n(z,null,G(o.value.images,(a,t)=>{var r;return l(),n("div",{key:t},[e("img",{src:(r=o.value)==null?void 0:r.images[t],alt:a.product_name,class:"image-preview"},null,8,Xe),e("a",{href:"javascript:void(0)",onClick:()=>W(t)},[c(D,{icon:["fas","trash-alt"]})],8,Ye)])}),128))])):(l(),E(g(w),{key:1,label:"Gambar",name:"pict",rules:"required"},{default:v(({field:a,errorMessage:t})=>[c(ce,x(a,{"error-message":t}),null,16,["error-message"])]),_:1}))])]),e("div",Ze,[e("div",et,[e("button",tt,[c(D,{icon:["fas","save"],class:"mr-1"}),Z(" Simpan ")]),e("button",{type:"reset",class:"btn btn-light",onClick:f}," Batal ",8,at)])])]),_:2},1536)])]),_:1},8,["id","visible","title"])}}};export{st as _};