import{fk as w,fp as L,r as j,o as l,c as i,fo as e,fn as n,fq as z,fr as G,fu as g,a as E,ft as q,fC as W,fl as ee,hn as M,ho as R,fP as f,u as b,hq as y,fN as x,fS as te,hr as ae,hB as le,hp as K}from"./vee-validate-i18n.esm-a7fc52c1.js";import{_ as oe}from"./CropperImage-f9371739.js";const se={class:"uploader-image-wrapper"},ne={for:"file-input",class:"border"},ie=["accept"],re=["src"],ce=["onClick"],ue={key:0,class:"fs-nano text-danger"},de={__name:"UploadingImage",props:{accept:{type:Array,required:!1,default:()=>["image/gif","image/jpg","image/jpeg","image/png","image/tiff"]},maxSize:{type:Number,required:!1,default:5},modelValue:{type:[Array,null],required:!0,default:null},urlObject:{type:[Array,null],required:!1,default:null},errorMessage:{type:[String,null],required:!1,default:null}},emits:["update:modelValue","update:urlObject","cropping"],setup(U,{emit:A}){const C=U,N=window.URL||window.webkitURL,k=w([]),o=L(()=>C.accept.join(",")),H=c=>{if(!c.target.files.length)return;Array.from(c.target.files).forEach(v=>{const m={visible:!0,input:N.createObjectURL(v),output:null,name:v.name,mime:v.type,file:null};k.value.push(m)}),W(()=>c.target.value="")},V=({image:c})=>{const u=k.value[k.value.length-1];u.output=N.createObjectURL(c),u.file=new File([c],u.name,{type:u.mime}),$()},I=c=>{k.value.splice(c,1),$()},$=()=>{const c=k.value.map(v=>v.file),u=k.value.map(v=>v.output);A("update:modelValue",c),A("update:urlObject",u),A("cropping",{files:c,urlObjects:u})};return(c,u)=>{const v=j("FontAwesomeIcon");return l(),i("div",se,[e("label",ne,[n(v,{icon:["far","image"]}),e("input",{id:"file-input",type:"file",name:"upload",multiple:"",accept:o.value,onChange:H},null,40,ie)]),(l(!0),i(z,null,G(k.value,(m,F)=>(l(),i("div",{key:F,class:"preview-wrapper"},[m.output?(l(),i("img",{key:0,src:m.output,class:"image-preview",alt:"Output after crop and resize"},null,8,re)):g("",!0),e("a",{href:"javascript:void(0)",onClick:T=>I(F)},[n(v,{icon:["fas","trash-alt"]})],8,ce),m.visible?(l(),E(oe,{key:1,visible:m.visible,"onUpdate:visible":T=>m.visible=T,"image-url":m.input,onAfterCropping:V},null,8,["visible","onUpdate:visible","image-url"])):g("",!0)]))),128)),U.errorMessage?(l(),i("div",ue,q(U.errorMessage),1)):g("",!0)])}}};const me={class:"px-3 pb-0 mb-0"},pe={class:"form-group row"},_e=e("label",{for:"tenant",class:"col-sm-3 col-form-label"}," Tenant ",-1),fe={class:"col-sm-9"},ve={key:0,class:"form-text text-danger fs-nano"},he={class:"form-group row"},be=e("label",{for:"name",class:"col-sm-3 col-form-label"}," Nama Barang ",-1),ge={class:"col-sm-9"},ke={key:0,class:"form-text text-danger fs-nano"},ye={class:"form-group row"},xe=e("label",{for:"category",class:"col-sm-3 col-form-label"}," Kategori ",-1),we={class:"col-sm-9"},qe={key:0,class:"form-text text-danger fs-nano"},Ve={class:"form-group row"},Ae=e("label",{for:"deskripsi",class:"col-sm-3 col-form-label"}," Deskripsi ",-1),Ce={class:"col-sm-9"},Fe={key:0,class:"form-text text-danger fs-nano"},je={class:"form-group row"},Ue=e("label",{for:"min_qty",class:"col-sm-3 col-form-label"}," Minimum Kuantiti ",-1),Ie={class:"col-sm-9"},$e={key:0,class:"form-text text-danger fs-nano"},Ne={class:"form-group row"},Te=e("label",{for:"min_unit",class:"col-sm-3 col-form-label"}," Minimum Unit ",-1),Be={class:"col-sm-9"},De={key:0,class:"form-text text-danger fs-nano"},Oe={class:"form-group row"},Ee=e("label",{for:"tkdn",class:"col-sm-3 col-form-label"}," Nilai TKDN ",-1),He={class:"col-sm-9"},Pe={key:0,class:"form-text text-danger fs-nano"},Se={class:"form-group row"},Me=e("label",{for:"price",class:"col-sm-3 col-form-label"}," Harga ",-1),Re={class:"col-sm-9"},Ke={key:0,class:"form-text text-danger fs-nano"},Le={class:"form-group row"},ze=e("label",{for:"condition",class:"col-sm-3 col-form-label"}," Kondisi ",-1),Ge={class:"col-sm-9"},Je={key:0,class:"form-text text-danger fs-nano"},Qe={class:"form-group row"},We=e("label",{class:"col-sm-3 col-form-label"}," Gambar ",-1),Xe={class:"col-sm-9"},Ye={key:0,class:"preview-wrapper"},Ze=["src","alt"],et=["onClick"],tt={class:"form-group row"},at={class:"col-sm-9 offset-sm-3"},lt={type:"submit",class:"btn btn-primary mr-2"},ot=["onClick"],it={__name:"ModalForm",props:{visible:{type:Boolean,required:!0,default:!1},initData:{type:[Object,null],required:!1,default:()=>{}},isEdit:{type:Boolean,required:!0,default:!1}},emits:["update:visible","submit"],setup(U,{emit:A}){const C=U;ee(()=>{T(),J()});const N=Math.random().toString(36).substring(2,9),k=L(()=>C.visible),o=L(()=>C.initData),H=w(null),V=w(null),I=w(!1),$=w([]),c=w([]),u=w(null),v=w([{text:"Baru",value:"0"},{text:"Bekas",value:"1"}]),m=w(null),F=w([]),T=async()=>{try{const d=(await(await M.get(R("backend.tenant.get",{})).then(p=>p)).data.data).map(p=>({text:p.name,value:p.id}));$.value=d}catch(r){console.error("Error fetching data from the API:",r)}},J=async()=>{try{const d=(await(await M.get(R("backend.category.get",{})).then(p=>p)).data.data).map(p=>({label:p.name,value:p.url}));c.value=d}catch(r){console.error("Error fetching data from the API:",r)}},X=()=>W(()=>{o.value&&(console.log(o.value),m.value={value:o.value.condition,text:o.value.condition==0?"Baru":"Bekas"},u.value={value:o.value.tenant_id,text:o.value.tenant_name},V.value.setFieldValue("name",o.value.product_name),V.value.setFieldValue("description",o.value.description),V.value.setFieldValue("min_qty",o.value.minimum_qty),V.value.setFieldValue("min_unit",o.value.minimum_unit),V.value.setFieldValue("price",o.value.price),V.value.setFieldValue("tkdn",o.value.tkdn_value),I.value=!0)}),Q=()=>A("update:visible",!1),Y=r=>{r>=0&&r<o.value.images.length&&(o.value.images.splice(r,1),o.value.images.length===0&&(I.value=!1))},Z=(r,{resetForm:h})=>{const d=C.isEdit,p=d?`Apakah Anda yakan untuk mengubah data ${r.name} ?`:`Apakah Anda yakin untuk menambahkan barang ${r.name} ?`,P=d?"put":"post",B=`backend.product.${d?"edit":"store"}`;let D=!1;d&&Object.keys(r).forEach(_=>{r[_]!=o.value[_]&&(D=!0)}),!(d&&!D)&&le({title:`${d?"Ubah":"Tambah"} barang`,text:p,icon:"question"},()=>{var _;return M.post(R(B),{...r,_method:P,slug:d?(_=o.value)==null?void 0:_.slug:null},{headers:{"Content-Type":"multipart/form-data"}}).then(a=>a).catch(a=>{let t=a.response.status,s=a.response.data.message;if([409,417,500].includes(t)){K.showValidationMessage(`${s}`);return}if(t=="422"){const O=a.response.data.errors;s=Object.keys(O).map(S=>Array.isArray(O[S])?O[S].join(", "):O[S]).join(", "),K.showValidationMessage(`${s}`);return}})}).then(({value:_,isConfirmed:a,isDismissed:t})=>{var s;if(t)return!1;a&&_.data.status=="success"&&(K.fire({title:"Tambah barang",text:_.data.message,icon:"success"}),h(),J(),F.value=[],m.value=[],u.value=[],A("submit",(s=_.data)==null?void 0:s.data),Q())})};return(r,h)=>{const d=j("vue-multiselect"),p=j("el-option"),P=j("el-select"),B=j("FontAwesomeIcon"),D=j("b-modal");return l(),E(D,{id:b(N),visible:k.value,"onUpdate:visible":h[3]||(h[3]=_=>k.value=_),title:`${C.isEdit?"Ubah":"Tambah"} Barang`,"hide-footer":"",onShown:X,onHide:Q},{default:f(({hide:_})=>[e("div",me,[n(b(ae),{ref_key:"formRef",ref:V,onSubmit:Z},{default:f(()=>[e("div",pe,[_e,e("div",fe,[n(b(y),{label:"Nama tenant",name:"tenant",rules:"required"},{default:f(({field:a,errorMessage:t})=>[n(d,x({modelValue:u.value,"onUpdate:modelValue":h[0]||(h[0]=s=>u.value=s),options:$.value,"close-on-select":!0,"clear-on-select":!1,placeholder:"Pilih nama tenant"},a,{label:"text","track-by":"text"}),null,16,["modelValue","options"]),t?(l(),i("div",ve,q(t),1)):g("",!0)]),_:1})])]),e("div",he,[be,e("div",ge,[n(b(y),{label:"Nama barang",name:"name",rules:"required|min:3|max:200"},{default:f(({field:a,errorMessage:t})=>[e("input",x({id:"name",ref_key:"nameInput",ref:H},a,{type:"text",class:"form-control",placeholder:"Masukkan nama barang"}),null,16),t?(l(),i("div",ke,q(t),1)):g("",!0)]),_:1})])]),e("div",ye,[xe,e("div",we,[n(b(y),{label:"Kategori barang",name:"category",rules:"required|min:3|max:200"},{default:f(({field:a,errorMessage:t})=>[n(P,x(a,{modelValue:F.value,"onUpdate:modelValue":h[1]||(h[1]=s=>F.value=s),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"Pilih atau ketik kategori"}),{default:f(()=>[(l(!0),i(z,null,G(c.value,s=>(l(),E(p,{key:s.label,label:s.label,value:s.label},null,8,["label","value"]))),128))]),_:2},1040,["modelValue"]),t?(l(),i("div",qe,q(t),1)):g("",!0)]),_:1})])]),e("div",Ve,[Ae,e("div",Ce,[n(b(y),{label:"Deskripsi",name:"description",rules:"required|max:2000"},{default:f(({field:a,errorMessage:t})=>[e("textarea",x({id:"deskripsi"},a,{type:"text",class:"form-control custom-scroll",placeholder:"Masukkan deskripsi tentang barang"}),null,16),t?(l(),i("div",Fe,q(t),1)):g("",!0)]),_:1})])]),e("div",je,[Ue,e("div",Ie,[n(b(y),{label:"Minimum kuantiti",name:"min_qty",rules:"required|min:1|max:11"},{default:f(({field:a,errorMessage:t})=>[e("input",x({id:"min_qty"},a,{type:"number",class:"form-control",placeholder:"Masukkan jumlah minimum kuantity"}),null,16),t?(l(),i("div",$e,q(t),1)):g("",!0)]),_:1})])]),e("div",Ne,[Te,e("div",Be,[n(b(y),{label:"Nama barang",name:"min_unit",rules:"required|min:1|max:11"},{default:f(({field:a,errorMessage:t})=>[e("input",x({id:"min_unit"},a,{class:"form-control",placeholder:"Masukkan minimum unit"}),null,16),t?(l(),i("div",De,q(t),1)):g("",!0)]),_:1})])]),e("div",Oe,[Ee,e("div",He,[n(b(y),{label:"Nilai TKDN",name:"tkdn",rules:"required|numeric"},{default:f(({field:a,errorMessage:t})=>[e("input",x({id:"tkdn"},a,{class:"form-control",placeholder:"Masukkan nilai TKDN"}),null,16),t?(l(),i("div",Pe,q(t),1)):g("",!0)]),_:1})])]),e("div",Se,[Me,e("div",Re,[n(b(y),{label:"Harga",name:"price",rules:"required|min:1|max:200"},{default:f(({field:a,errorMessage:t})=>[e("input",x({id:"price"},a,{type:"number",class:"form-control",placeholder:"Masukkan harga"}),null,16),t?(l(),i("div",Ke,q(t),1)):g("",!0)]),_:1})])]),e("div",Le,[ze,e("div",Ge,[n(b(y),{label:"Kondisi",name:"condition",rules:"required"},{default:f(({field:a,errorMessage:t})=>[n(d,x({modelValue:m.value,"onUpdate:modelValue":h[2]||(h[2]=s=>m.value=s),options:v.value,"close-on-select":!0,"clear-on-select":!1,placeholder:"Pilih kondisi"},a,{label:"text","track-by":"text"}),null,16,["modelValue","options"]),t?(l(),i("div",Je,q(t),1)):g("",!0)]),_:1})])]),e("div",Qe,[We,e("div",Xe,[I.value?(l(),i("div",Ye,[(l(!0),i(z,null,G(o.value.images,(a,t)=>{var s;return l(),i("div",{key:t},[e("img",{src:(s=o.value)==null?void 0:s.images[t],alt:a.product_name,class:"image-preview"},null,8,Ze),e("a",{href:"javascript:void(0)",onClick:()=>Y(t)},[n(B,{icon:["fas","trash-alt"]})],8,et)])}),128))])):(l(),E(b(y),{key:1,label:"Gambar",name:"pict",rules:"required"},{default:f(({field:a,errorMessage:t})=>[n(de,x(a,{"error-message":t}),null,16,["error-message"])]),_:1}))])]),e("div",tt,[e("div",at,[e("button",lt,[n(B,{icon:["fas","save"],class:"mr-1"}),te(" Simpan ")]),e("button",{type:"reset",class:"btn btn-light",onClick:_}," Batal ",8,ot)])])]),_:2},1536)])]),_:1},8,["id","visible","title"])}}};export{it as _};
