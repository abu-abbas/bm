import{_ as O,a as R,b as H,c as A,d as J,e as Q}from"../../vendor/compat-config-02944a74.js";import{e as p,o as W,x as C,q as w,m as y,y as r,z as v,u as n,v as e,A as x,B as F,C as g,D as X,E as D,V as f,G as Y}from"../../vendor/vue-utils-19108aca.js";import{c as Z,l as ee,d as ae,s as se,F as $,a as ne,r as te}from"../../vendor/vue-plugins-utils-89496aeb.js";import{I as le,M as ie,B as oe,a as re,b as de,c as ce}from"../../vendor/bootstrap-vue-utils-17abc47e.js";import"../../vendor/common-utils-d99d0b9d.js";import"../../vendor/bootstrap-utils-dce0738e.js";import"../../vendor/jquery-utils-4b2e19e3.js";const ue="id",me={alpha:"{field} hanya boleh mengandung karakter alfabet",alpha_num:"{field} hanya boleh mengandung karakter alfanumerik",alpha_dash:"{field} boleh mengandung karakter alfanumerik, tanda hubung, dan garis bawah",alpha_spaces:"{field} hanya boleh berisi karakter alfabet serta spasi",between:"{field} harus di antara 0:{min} dan 1:{max}",confirmed:"{field} tidak cocok dengan {target}",digits:"{field} harus berupa 0:{length} digit angka",dimensions:"{field} harus berdimensi lebar 0:{width} pixel dan tinggi 1:{height} pixel",email:"{field} harus berupa alamat surel yang benar",not_one_of:"{field} harus berupa nilai yang sah",ext:"{field} harus berupa berkas yang benar",image:"{field} harus berupa gambar",integer:"{field} harus berupa bilangan bulat",length:"Panjang {field} harus tepat 0:{length}",max_value:"Nilai {field} tidak boleh lebih dari 0:{max}",max:"{field} tidak boleh lebih dari 0:{length} karakter",mimes:"Tipe berkas {field} harus benar",min_value:"Nilai {field} tidak boleh kurang dari 0:{min}",min:"{field} minimal mengandung 0:{length} karakter",numeric:"{field} harus berupa angka",one_of:"{field} harus berupa nilai yang sah",regex:"Format {field} salah",required:"{field} harus diisi",required_if:"{field} harus diisi",size:"{field} harus lebih kecil dari 0:{size}KB"},pe={code:ue,messages:me},fe=["id"],he={class:"form-group"},be=["for"],_e=["id"],ge={class:"form-group"},ve=["for"],ke=["id"],xe={class:"form-group"},we=e("label",{for:"captcha",class:"control-label"},"Captcha",-1),ye={class:"d-flex alig-items-center"},Fe={class:"d-flex flex-column"},$e={class:"d-flex flex-column"},Ce=["id"],Be={class:"form-group"},Ie={key:0},Le={key:1},K={__name:"Form",props:{usernameField:{type:String,required:!1,default:"username"},usernameLabel:{type:String,required:!1,default:"Username"},isUserEtpp:{type:Boolean,required:!1,default:!1}},setup(B,{expose:b}){const s=B;Z({generateMessage:ee({id:pe})}),ae("required",te),se("id");const i=Math.random().toString(36).substring(2,9),_=p(null),c=p(null),u=p(!1),t=p({src:null,hash:null,loading:!1}),I=p(null),L=()=>setTimeout(()=>c.value.focus(),250),k=O.debounce(async()=>{if(t.value.loading)return;t.value.loading=!0;const{status:d,data:a}=await R.get(H("backend.captcha.generate"));if(d!=200){A.fire({title:"Captcha Bermasalah",text:d,icon:"error"});return}const{img:h,val:m}=a;t.value.src=h,t.value.hash=m,t.value.loading=!1},850),G=d=>{u.value||(u.value=!0,R.post(H("auth.login"),{[s.usernameField]:d[s.usernameField],password:d.password,captcha:d.captcha,user_etpp:s.isUserEtpp,intended:I.value}).then(a=>{a.status=="202"&&setTimeout(()=>window.location=a.data.redirect,500)}).catch(a=>{var h,m,o,l,P,q,E,T,S,j,z,N,U,V,M;if(console.log({error:a}),a.response.status=="422"&&((m=(h=a.response)==null?void 0:h.data)!=null&&m.errors)){_.value.setFieldError(s.usernameField,(P=(l=(o=a.response)==null?void 0:o.data)==null?void 0:l.errors[s.usernameField])==null?void 0:P.join(", ")),_.value.setFieldError("password",(S=(T=(E=(q=a.response)==null?void 0:q.data)==null?void 0:E.errors)==null?void 0:T.password)==null?void 0:S.join(", ")),_.value.setFieldError("captcha",(U=(N=(z=(j=a.response)==null?void 0:j.data)==null?void 0:z.errors)==null?void 0:N.captcha)==null?void 0:U.join(", "));return}A.fire({title:"Login Bermasalah",text:((M=(V=a.response)==null?void 0:V.data)==null?void 0:M.message)||a.response.statusText,icon:"error"})}).finally(()=>setTimeout(()=>u.value=!1,850)))};return W(()=>{const d=new URLSearchParams(window.location.search),a=Object.fromEntries(d.entries());I.value=a==null?void 0:a.intended,k(),L()}),b({loadCaptcha:k,setFocus:L}),(d,a)=>{const h=C("b-img"),m=C("b-icon");return w(),y("div",{id:n(i),key:n(i),class:"form-login-wrapper"},[r(n(ne),{ref_key:"formRef",ref:_,onSubmit:G},{default:v(()=>[r(n($),{label:s.usernameLabel,name:s.usernameField,rules:"required"},{default:v(({field:o,errorMessage:l})=>[e("div",he,[e("label",{for:`${s.usernameField}-${n(i)}`},x(s.usernameLabel),9,be),e("input",F({id:`${s.usernameField}-${n(i)}`,ref_key:"focusInput",ref:c},o,{class:"form-control",tabindex:"1"}),null,16,_e),e("small",{class:g({"invalid-feedback":!0,"d-block":l})},x(l),3)])]),_:1},8,["label","name"]),r(n($),{label:"Password",name:"password",rules:"required"},{default:v(({field:o,errorMessage:l})=>[e("div",ge,[e("label",{for:`password-${n(i)}`,class:"control-label"},"Password",8,ve),e("input",F({id:`password-${n(i)}`},o,{type:"password",class:"form-control",name:"password",tabindex:"2"}),null,16,ke),e("small",{class:g({"invalid-feedback":!0,"d-block":l})},x(l),3)])]),_:1}),e("div",xe,[we,e("div",ye,[e("div",Fe,[r(h,{id:`captcha-img-${n(i)}`,ref:"captcha-img",blank:!t.value.src||t.value.loading,src:t.value.src,"blank-color":"#f2f2f2",width:"130px",height:"42px",alt:"Loading...",class:"mr-3 rounded"},null,8,["id","blank","src"]),e("a",{href:"javascript:void(0)",class:g({"fs-sm mt-1":!0,disabled:t.value.loading}),onClick:a[0]||(a[0]=X((...o)=>n(k)&&n(k)(...o),["prevent"]))}," Muat ulang captcha ",2)]),e("div",$e,[r(n($),{label:"Captcha",name:"captcha",rules:n(J).validateCaptcha?"required":""},{default:v(({field:o,errorMessage:l})=>[e("input",F({id:`captcha-${n(i)}`},o,{class:"form-control",name:"captcha",tabindex:"3"}),null,16,Ce),e("small",{class:g({"invalid-feedback":!0,"d-block":l})},x(l),3)]),_:1},8,["rules"])])])]),e("div",Be,[e("button",{type:"submit",class:g({"btn btn-primary btn-lg btn-block rounded-pill":!0,disabled:u.value}),tabindex:"4"},[u.value?(w(),y("span",Ie,[r(m,{icon:"circle-fill",animation:"throb",class:"mr-1"}),D(" proses login... ")])):(w(),y("span",Le,[r(m,{icon:"check2-circle",class:"mr-1"}),D(" Login ")]))],2)])]),_:1},512)],8,fe)}}};const Pe={class:"auth-wrapper"},qe={class:"container"},Ee={class:"row"},Te={class:"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},Se=e("div",{class:"login-brand"},null,-1),je={class:"card card-primary"},ze=e("div",{class:"card-header"},[e("h4",null,"Login")],-1),Ne={class:"card-body"},Ue=e("hr",{class:"divider sign-in"},null,-1),Ve={__name:"Index",setup(B){const b=p(null),s=p({show:!1}),i=()=>{s.value.show=!1,b.value.loadCaptcha(),setTimeout(b.value.setFocus,100)};return(_,c)=>{const u=C("b-modal");return w(),y("div",Pe,[e("div",qe,[e("div",Ee,[e("div",Te,[Se,e("div",je,[ze,e("div",Ne,[e("button",{class:"btn btn-default btn-social-icon btn-lg btn-block rounded-pill text-dark",onClick:c[0]||(c[0]=t=>s.value.show=!0)}," Login dengan akun e-TPP "),Ue,r(K,{ref_key:"nativeLogin",ref:b,"username-field":"username","username-label":"Username"},null,512)])])])])]),r(u,{visible:s.value.show,"onUpdate:visible":c[1]||(c[1]=t=>s.value.show=t),size:"sm","hide-footer":"","title-class":"text-primary",title:"Masuk via e-TPP",onHide:i},{default:v(()=>[r(K,{"username-field":"username","username-label":"NRK","is-user-etpp":""})]),_:1},8,["visible"])])}}};f.use(le);f.use(ie);f.component("BIcon",oe);f.component("BIconLink45deg",re);f.component("BIconCircleFill",de);f.component("BIconCheck2Circle",ce);Q(f);const Me=Y(Ve);Me.mount("#app");
