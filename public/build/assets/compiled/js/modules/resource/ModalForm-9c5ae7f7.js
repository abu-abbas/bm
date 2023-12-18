import{e as q,c as K,K as O,m as o,L as r,Q as e,x as i,F as z,B as Q,E as f,q as L,C as w,n as J,o as Y,G as p,u as _,U as y,H as Z}from"../../vendor/vue-utils-cea615f1.js";import{F as x,e as ee}from"../../vendor/vue-plugins-utils-b3bb03cf.js";import{b as P,d as G,g as te,e as S}from"../../vendor/id-959b107e.js";import{_ as ae}from"./CropperImage-47525332.js";const se={class:"uploader-image-wrapper"},oe={for:"file-input",class:"border"},le=["accept"],ne=["src"],ie=["onClick"],re={key:0,class:"fs-nano text-danger"},ce={__name:"UploadingImage",props:{accept:{type:Array,required:!1,default:()=>["image/gif","image/jpg","image/jpeg","image/png","image/tiff"]},maxSize:{type:Number,required:!1,default:5},modelValue:{type:[Array,null],required:!0,default:null},urlObject:{type:[Array,null],required:!1,default:null},errorMessage:{type:[String,null],required:!1,default:null}},emits:["update:modelValue","update:urlObject","cropping"],setup(C,{emit:V}){const A=C,B=window.URL||window.webkitURL,v=q([]),a=K(()=>A.accept.join(",")),E=l=>{if(!l.target.files.length)return;Array.from(l.target.files).forEach(c=>{const h={visible:!0,input:B.createObjectURL(c),output:null,name:c.name,mime:c.type,file:null};v.value.push(h)}),J(()=>l.target.value="")},b=({image:l})=>{const m=v.value[v.value.length-1];m.output=B.createObjectURL(l),m.file=new File([l],m.name,{type:m.mime}),$()},U=l=>{v.value.splice(l,1),$()},$=()=>{const l=v.value.map(c=>c.file),m=v.value.map(c=>c.output);V("update:modelValue",l),V("update:urlObject",m),V("cropping",{files:l,urlObjects:m})};return(l,m)=>{const c=O("FontAwesomeIcon");return o(),r("div",se,[e("label",oe,[i(c,{icon:["far","image"]}),e("input",{id:"file-input",type:"file",name:"upload",multiple:"",accept:a.value,onChange:E},null,40,le)]),(o(!0),r(z,null,Q(v.value,(h,N)=>(o(),r("div",{key:N,class:"preview-wrapper"},[h.output?(o(),r("img",{key:0,src:h.output,class:"image-preview",alt:"Output after crop and resize"},null,8,ne)):f("",!0),e("a",{href:"javascript:void(0)",onClick:I=>U(N)},[i(c,{icon:["fas","trash-alt"]})],8,ie),h.visible?(o(),L(ae,{key:1,visible:h.visible,"onUpdate:visible":I=>h.visible=I,"image-url":h.input,onAfterCropping:b},null,8,["visible","onUpdate:visible","image-url"])):f("",!0)]))),128)),C.errorMessage?(o(),r("div",re,w(C.errorMessage),1)):f("",!0)])}}};const ue={class:"px-3 pb-0 mb-0"},de={class:"form-group row"},me=e("label",{for:"tenant",class:"col-sm-3 col-form-label"}," Tenan ",-1),pe={class:"col-sm-9"},_e={key:0,class:"form-text text-danger fs-nano"},fe={class:"form-group row"},ve=e("label",{for:"name",class:"col-sm-3 col-form-label"}," Nama Barang ",-1),he={class:"col-sm-9"},be={key:0,class:"form-text text-danger fs-nano"},ge={class:"form-group row"},ke=e("label",{for:"deskripsi",class:"col-sm-3 col-form-label"}," Deskripsi ",-1),ye={class:"col-sm-9"},xe={key:0,class:"form-text text-danger fs-nano"},we={class:"form-group row"},qe=e("label",{for:"min_qty",class:"col-sm-3 col-form-label"}," Minimum Kuantiti ",-1),Fe={class:"col-sm-9"},Ve={key:0,class:"form-text text-danger fs-nano"},Ae={class:"form-group row"},je=e("label",{for:"min_unit",class:"col-sm-3 col-form-label"}," Minimum Unit ",-1),Ce={class:"col-sm-9"},Ue={key:0,class:"form-text text-danger fs-nano"},$e={class:"form-group row"},Ie=e("label",{for:"tkdn",class:"col-sm-3 col-form-label"}," Nilai TKDN ",-1),Te={class:"col-sm-9"},Be={key:0,class:"form-text text-danger fs-nano"},Ne={class:"form-group row"},De=e("label",{for:"price",class:"col-sm-3 col-form-label"}," Harga ",-1),He={class:"col-sm-9"},Oe={key:0,class:"form-text text-danger fs-nano"},Ee={class:"form-group row"},Me=e("label",{for:"condition",class:"col-sm-3 col-form-label"}," Kondisi ",-1),Re={class:"col-sm-9"},Se={key:0,class:"form-text text-danger fs-nano"},Ke={class:"form-group row"},Le=e("label",{class:"col-sm-3 col-form-label"}," Gambar ",-1),Pe={class:"col-sm-9"},Ge={key:0,class:"preview-wrapper"},ze=["src","alt"],Qe=["onClick"],Je={class:"form-group row"},We={class:"col-sm-9 offset-sm-3"},Xe={type:"submit",class:"btn btn-primary mr-2"},Ye=["onClick"],st={__name:"ModalForm",props:{visible:{type:Boolean,required:!0,default:!1},initData:{type:[Object,null],required:!1,default:()=>{}},isEdit:{type:Boolean,required:!0,default:!1}},emits:["update:visible","submit"],setup(C,{emit:V}){const A=C;Y(()=>{h()});const B=Math.random().toString(36).substring(2,9),v=K(()=>A.visible),a=K(()=>A.initData),E=q(null),b=q(null),U=q(!1),$=q([]),l=q(null),m=q([{text:"Baru",value:"0"},{text:"Bekas",value:"1"}]),c=q(null),h=async()=>{try{const u=(await(await P.get(G("backend.tenant.get",{})).then(k=>k)).data.data).map(k=>({text:k.name,value:k.id}));$.value=u,u.length>0&&(l.value=u[0].value)}catch(d){console.error("Error fetching data from the API:",d)}},N=()=>J(()=>{a.value&&(console.log(a.value),c.value={value:a.value.condition,text:a.value.condition==0?"Baru":"Bekas"},l.value={value:a.value.tenant_id,text:a.value.tenant_name},b.value.setFieldValue("name",a.value.product_name),b.value.setFieldValue("description",a.value.description),b.value.setFieldValue("min_qty",a.value.minimum_qty),b.value.setFieldValue("min_unit",a.value.minimum_unit),b.value.setFieldValue("price",a.value.price),b.value.setFieldValue("tkdn",a.value.tkdn_value),U.value=!0)}),I=()=>V("update:visible",!1),W=d=>{d>=0&&d<a.value.images.length&&(a.value.images.splice(d,1),a.value.images.length===0&&(U.value=!1))},X=(d,{resetForm:g})=>{var t;const u=A.isEdit,k=u?`Apakah Anda yakan untuk mengubah data ${(t=a.value)==null?void 0:t.name} ?`:`Apakah Anda yakin untuk menambahkan barang ${d.name} ?`,M=u?"put":"post",T=`backend.product.${u?"edit":"store"}`;let s=!1;u&&Object.keys(d).forEach(n=>{d[n]!=a.value[n]&&(s=!0)}),!(u&&!s)&&te({title:`${u?"Ubah":"Tambah"} barang`,text:k,icon:"question"},()=>{var n;return P.post(G(T),{...d,_method:M,slug:u?(n=a.value)==null?void 0:n.slug:null},{headers:{"Content-Type":"multipart/form-data"}}).then(F=>F).catch(F=>{let D=F.response.status,j=F.response.data.message;if([409,417,500].includes(D)){S.showValidationMessage(`${j}`);return}if(D=="422"){const H=F.response.data.errors;j=Object.keys(H).map(R=>Array.isArray(H[R])?H[R].join(", "):H[R]).join(", "),S.showValidationMessage(`${j}`);return}})}).then(({value:n,isConfirmed:F,isDismissed:D})=>{var j;if(D)return!1;F&&n.data.status=="success"&&(S.fire({title:"Tambah barang",text:n.data.message,icon:"success"}),g(),V("submit",(j=n.data)==null?void 0:j.data),I())})};return(d,g)=>{const u=O("vue-multiselect"),k=O("FontAwesomeIcon"),M=O("b-modal");return o(),L(M,{id:_(B),visible:v.value,"onUpdate:visible":g[2]||(g[2]=T=>v.value=T),title:`${A.isEdit?"Ubah":"Tambah"} Barang`,"hide-footer":"",onShown:N,onHide:I},{default:p(({hide:T})=>[e("div",ue,[i(_(ee),{ref_key:"formRef",ref:b,onSubmit:X},{default:p(()=>[e("div",de,[me,e("div",pe,[i(_(x),{label:"Nama tenant",name:"tenant",rules:"required"},{default:p(({field:s,errorMessage:t})=>[i(u,y({modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=n=>l.value=n),options:$.value,"close-on-select":!0,"clear-on-select":!1,placeholder:"Pilih nama tenan"},s,{label:"text","track-by":"text"}),null,16,["modelValue","options"]),t?(o(),r("div",_e,w(t),1)):f("",!0)]),_:1})])]),e("div",fe,[ve,e("div",he,[i(_(x),{label:"Nama barang",name:"name",rules:"required|min:3|max:200"},{default:p(({field:s,errorMessage:t})=>[e("input",y({id:"name",ref_key:"nameInput",ref:E},s,{type:"text",class:"form-control",placeholder:"Masukkan nama barang"}),null,16),t?(o(),r("div",be,w(t),1)):f("",!0)]),_:1})])]),e("div",ge,[ke,e("div",ye,[i(_(x),{label:"Deskripsi",name:"description",rules:"required|max:2000"},{default:p(({field:s,errorMessage:t})=>[e("textarea",y({id:"deskripsi"},s,{type:"text",class:"form-control custom-scroll",placeholder:"Masukkan deskripsi tentang barang"}),null,16),t?(o(),r("div",xe,w(t),1)):f("",!0)]),_:1})])]),e("div",we,[qe,e("div",Fe,[i(_(x),{label:"Minimum kuantiti",name:"min_qty",rules:"required|min:1|max:11"},{default:p(({field:s,errorMessage:t})=>[e("input",y({id:"min_qty"},s,{type:"number",class:"form-control",placeholder:"Masukkan jumlah minimum kuantity"}),null,16),t?(o(),r("div",Ve,w(t),1)):f("",!0)]),_:1})])]),e("div",Ae,[je,e("div",Ce,[i(_(x),{label:"Nama barang",name:"min_unit",rules:"required|min:1|max:11"},{default:p(({field:s,errorMessage:t})=>[e("input",y({id:"min_unit"},s,{class:"form-control",placeholder:"Masukkan minimum unit"}),null,16),t?(o(),r("div",Ue,w(t),1)):f("",!0)]),_:1})])]),e("div",$e,[Ie,e("div",Te,[i(_(x),{label:"Nilai TKDN",name:"tkdn",rules:"required|min:3|max:5"},{default:p(({field:s,errorMessage:t})=>[e("input",y({id:"tkdn"},s,{class:"form-control",placeholder:"Masukkan nilai TKDN"}),null,16),t?(o(),r("div",Be,w(t),1)):f("",!0)]),_:1})])]),e("div",Ne,[De,e("div",He,[i(_(x),{label:"Harga",name:"price",rules:"required|min:1|max:200"},{default:p(({field:s,errorMessage:t})=>[e("input",y({id:"price"},s,{type:"number",class:"form-control",placeholder:"Masukkan harga"}),null,16),t?(o(),r("div",Oe,w(t),1)):f("",!0)]),_:1})])]),e("div",Ee,[Me,e("div",Re,[i(_(x),{label:"Kondisi",name:"condition",rules:"required"},{default:p(({field:s,errorMessage:t})=>[i(u,y({modelValue:c.value,"onUpdate:modelValue":g[1]||(g[1]=n=>c.value=n),options:m.value,"close-on-select":!0,"clear-on-select":!1,placeholder:"Pilih kondisi"},s,{label:"text","track-by":"text"}),null,16,["modelValue","options"]),t?(o(),r("div",Se,w(t),1)):f("",!0)]),_:1})])]),e("div",Ke,[Le,e("div",Pe,[U.value?(o(),r("div",Ge,[(o(!0),r(z,null,Q(a.value.images,(s,t)=>{var n;return o(),r("div",{key:t},[e("img",{src:(n=a.value)==null?void 0:n.images[t],alt:s.product_name,class:"image-preview"},null,8,ze),e("a",{href:"javascript:void(0)",onClick:()=>W(t)},[i(k,{icon:["fas","trash-alt"]})],8,Qe)])}),128))])):(o(),L(_(x),{key:1,label:"Gambar",name:"pict",rules:"required"},{default:p(({field:s,errorMessage:t})=>[i(ce,y(s,{"error-message":t}),null,16,["error-message"])]),_:1}))])]),e("div",Je,[e("div",We,[e("button",Xe,[i(k,{icon:["fas","save"],class:"mr-1"}),Z(" Simpan ")]),e("button",{type:"reset",class:"btn btn-light",onClick:T}," Batal ",8,Ye)])])]),_:2},1536)])]),_:1},8,["id","visible","title"])}}};export{st as _};