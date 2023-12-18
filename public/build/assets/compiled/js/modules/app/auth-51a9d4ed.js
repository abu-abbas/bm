import{i as O,a as Q,b as A,d as z,e as G,_ as W,c as J}from"../../vendor/id-959b107e.js";import{e as f,o as X,K as F,m as _,L as v,x as n,G as b,u as t,Q as e,C as w,U as $,S as g,y as Y,H as K,E as Z,T as ee,F as se,q as ae,W as te,V as u,P as oe}from"../../vendor/vue-utils-cea615f1.js";import{c as ne,l as le,d as re,b as ie,s as ce,F as C,e as de}from"../../vendor/vue-plugins-utils-b3bb03cf.js";import{I as ue,M as pe,b as me,c as fe,d as _e,e as he,f as be}from"../../vendor/bootstrap-vue-utils-bd0dfab6.js";import"../../vendor/common-utils-e0afba66.js";import"../../vendor/bootstrap-utils-9ffca17a.js";import"../../vendor/jquery-utils-4b2e19e3.js";import"../../vendor/images-utils-205332c6.js";const ve=["id"],ge={class:"form-group"},ke=["for"],xe=["id"],we={class:"form-group"},ye=["for"],$e=["id"],Ce={class:"form-group"},Fe=e("label",{for:"captcha",class:"control-label"},"Captcha",-1),Ie={class:"d-flex alig-items-center"},Be={class:"d-flex flex-column"},Le={class:"d-flex flex-column"},Pe=["id"],qe={class:"form-group"},Ee={key:0},Se={key:1},D={__name:"Form",props:{usernameField:{type:String,required:!1,default:"username"},usernameLabel:{type:String,required:!1,default:"Username"},isUserEtpp:{type:Boolean,required:!1,default:!1}},setup(I,{expose:y}){const a=I;ne({generateMessage:le({id:O})}),re("required",ie),ce("id");const r=Math.random().toString(36).substring(2,9),i=f(null),k=f(null),p=f(!1),c=f({src:null,hash:null,loading:!1}),B=f(null),L=()=>setTimeout(()=>k.value.focus(),250),x=Q.debounce(async()=>{if(c.value.loading)return;c.value.loading=!0;const{status:d,data:s}=await A.get(z("backend.captcha.generate"));if(d!=200){G.fire({title:"Captcha Bermasalah",text:d,icon:"error"});return}const{img:h,val:m}=s;c.value.src=h,c.value.hash=m,c.value.loading=!1},850),H=d=>{p.value||(p.value=!0,A.post(z("auth.login"),{[a.usernameField]:d[a.usernameField],password:d.password,captcha:d.captcha,user_etpp:a.isUserEtpp,intended:B.value}).then(s=>{s.status=="202"&&setTimeout(()=>window.location=s.data.redirect,500)}).catch(s=>{var h,m,l,o,P,q,E,S,T,V,j,U,N,R,M;if(s.response.status=="422"&&((m=(h=s.response)==null?void 0:h.data)!=null&&m.errors)){i.value.setFieldError(a.usernameField,(P=(o=(l=s.response)==null?void 0:l.data)==null?void 0:o.errors[a.usernameField])==null?void 0:P.join(", ")),i.value.setFieldError("password",(T=(S=(E=(q=s.response)==null?void 0:q.data)==null?void 0:E.errors)==null?void 0:S.password)==null?void 0:T.join(", ")),i.value.setFieldError("captcha",(N=(U=(j=(V=s.response)==null?void 0:V.data)==null?void 0:j.errors)==null?void 0:U.captcha)==null?void 0:N.join(", "));return}G.fire({title:"Login Bermasalah",text:((M=(R=s.response)==null?void 0:R.data)==null?void 0:M.message)||s.response.statusText,icon:"error"})}).finally(()=>setTimeout(()=>p.value=!1,850)))};return X(()=>{const d=new URLSearchParams(window.location.search),s=Object.fromEntries(d.entries());B.value=s==null?void 0:s.intended,x(),L()}),y({loadCaptcha:x,setFocus:L}),(d,s)=>{const h=F("b-img"),m=F("b-icon");return _(),v("div",{id:t(r),key:t(r),class:"form-login-wrapper"},[n(t(de),{ref_key:"formRef",ref:i,onSubmit:H},{default:b(()=>[n(t(C),{label:a.usernameLabel,name:a.usernameField,rules:"required"},{default:b(({field:l,errorMessage:o})=>[e("div",ge,[e("label",{for:`${a.usernameField}-${t(r)}`},w(a.usernameLabel),9,ke),e("input",$({id:`${a.usernameField}-${t(r)}`,ref_key:"focusInput",ref:k},l,{class:"form-control",tabindex:"1"}),null,16,xe),e("small",{class:g({"invalid-feedback":!0,"d-block":o})},w(o),3)])]),_:1},8,["label","name"]),n(t(C),{label:"Password",name:"password",rules:"required"},{default:b(({field:l,errorMessage:o})=>[e("div",we,[e("label",{for:`password-${t(r)}`,class:"control-label"},"Password",8,ye),e("input",$({id:`password-${t(r)}`},l,{type:"password",class:"form-control",name:"password",tabindex:"2"}),null,16,$e),e("small",{class:g({"invalid-feedback":!0,"d-block":o})},w(o),3)])]),_:1}),e("div",Ce,[Fe,e("div",Ie,[e("div",Be,[n(h,{id:`captcha-img-${t(r)}`,ref:"captcha-img",blank:!c.value.src||c.value.loading,src:c.value.src,"blank-color":"#f2f2f2",width:"130px",height:"42px",alt:"Loading...",class:"mr-3 rounded"},null,8,["id","blank","src"]),e("a",{href:"javascript:void(0)",class:g({"fs-sm mt-1":!0,disabled:c.value.loading}),onClick:s[0]||(s[0]=Y((...l)=>t(x)&&t(x)(...l),["prevent"]))}," Muat ulang captcha ",2)]),e("div",Le,[n(t(C),{label:"Captcha",name:"captcha",rules:t(W).validateCaptcha?"required":""},{default:b(({field:l,errorMessage:o})=>[e("input",$({id:`captcha-${t(r)}`},l,{class:"form-control",name:"captcha",tabindex:"3"}),null,16,Pe),e("small",{class:g({"invalid-feedback":!0,"d-block":o})},w(o),3)]),_:1},8,["rules"])])])]),e("div",qe,[e("button",{type:"submit",class:g({"btn btn-primary btn-lg btn-block rounded-pill":!0,disabled:p.value}),tabindex:"4"},[p.value?(_(),v("span",Ee,[n(m,{icon:"circle-fill",animation:"throb",class:"mr-1"}),K(" proses login... ")])):(_(),v("span",Se,[n(m,{icon:"check2-circle",class:"mr-1"}),K(" Login ")]))],2)])]),_:1},512)],8,ve)}}};const Te={class:"auth-wrapper"},Ve={class:"container"},je={class:"row"},Ue={class:"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},Ne=e("div",{class:"login-brand"},null,-1),Re={class:"card card-primary"},Me={class:"card-header d-flex"},Ae=e("span",null,"Login",-1),ze={class:"card-body"},Ge=e("hr",{class:"divider sign-in"},null,-1),Ke={__name:"Index",setup(I){const y=f(null),a=f(!1);return(r,i)=>{const k=F("b-icon");return _(),v("div",Te,[e("div",Ve,[e("div",je,[e("div",Ue,[Ne,e("div",Re,[e("div",Me,[e("h4",null,[n(ee,{name:"slide-up"},{default:b(()=>[a.value?(_(),v("a",{key:0,href:"javascript:void(0)",onClick:i[0]||(i[0]=p=>a.value=!1)},[n(k,{icon:"arrow-left",class:"mr-2"})])):Z("",!0)]),_:1}),Ae])]),e("div",ze,[n(te,{name:"slide-fade"},{default:b(()=>[a.value?(_(),ae(D,{key:1,"username-field":"username","username-label":"NRK","is-user-etpp":""})):(_(),v(se,{key:0},[e("button",{class:"btn btn-default btn-social-icon btn-lg btn-block rounded-pill text-dark",onClick:i[1]||(i[1]=p=>a.value=!0)}," Login dengan akun e-TPP "),Ge,n(D,{ref_key:"nativeLogin",ref:y,"username-field":"username","username-label":"Username"},null,512)],64))]),_:1})])])])])])])}}};u.use(ue);u.use(pe);u.component("BIcon",me);u.component("BIconLink45deg",fe);u.component("BIconArrowLeft",_e);u.component("BIconCircleFill",he);u.component("BIconCheck2Circle",be);J(u);const De=oe(Ke);De.mount("#app");