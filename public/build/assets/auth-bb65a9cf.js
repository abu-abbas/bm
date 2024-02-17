import{fa as H,fb as J,fh as Q,fd as W,hl as X,fe as Y,fk as m,hm as Z,hn as A,ho as z,hp as D,fl as ee,r as C,o as _,c as g,fn as o,fP as b,u as t,hq as $,fo as e,ft as x,fN as B,fs as v,g0 as se,_ as ae,fS as G,hr as te,fu as ne,fU as oe,fq as le,a as re,f_ as ie,eT as u,f3 as ce,ff as de,fg as ue}from"./vee-validate-i18n.esm-a7fc52c1.js";import{uM as fe,B as pe,nB as me,ac as _e,e as he,fj as be}from"./index-3576e1db.js";const ge=["id"],ve={class:"form-group"},ke=["for"],we=["id"],xe={class:"form-group"},ye=["for"],$e=["id"],Be={class:"form-group"},Ce=e("label",{for:"captcha",class:"control-label"},"Captcha",-1),Fe={class:"d-flex alig-items-center"},Ie={class:"d-flex flex-column"},Le={class:"d-flex flex-column"},qe=["id"],Pe={class:"form-group"},Se={key:0},Te={key:1},K={__name:"Form",props:{usernameField:{type:String,required:!1,default:"username"},usernameLabel:{type:String,required:!1,default:"Username"},isUserEtpp:{type:Boolean,required:!1,default:!1}},setup(F,{expose:y}){const a=F;H({generateMessage:J({id:Q})}),W("required",X),Y("id");const r=Math.random().toString(36).substring(2,9),i=m(null),k=m(null),f=m(!1),c=m({src:null,hash:null,loading:!1}),I=m(null),L=()=>setTimeout(()=>k.value.focus(),250),w=Z.debounce(async()=>{if(c.value.loading)return;c.value.loading=!0;const{status:d,data:s}=await A.get(z("backend.captcha.generate"));if(d!=200){D.fire({title:"Captcha Bermasalah",text:d,icon:"error"});return}const{img:h,val:p}=s;c.value.src=h,c.value.hash=p,c.value.loading=!1},850),O=d=>{f.value||(f.value=!0,A.post(z("auth.login"),{[a.usernameField]:d[a.usernameField],password:d.password,captcha:d.captcha,user_etpp:a.isUserEtpp,intended:I.value}).then(s=>{s.status=="202"&&setTimeout(()=>window.location=s.data.redirect,500)}).catch(s=>{var h,p,l,n,q,P,S,T,E,j,N,U,V,R,M;if(s.response.status=="422"&&((p=(h=s.response)==null?void 0:h.data)!=null&&p.errors)){i.value.setFieldError(a.usernameField,(q=(n=(l=s.response)==null?void 0:l.data)==null?void 0:n.errors[a.usernameField])==null?void 0:q.join(", ")),i.value.setFieldError("password",(E=(T=(S=(P=s.response)==null?void 0:P.data)==null?void 0:S.errors)==null?void 0:T.password)==null?void 0:E.join(", ")),i.value.setFieldError("captcha",(V=(U=(N=(j=s.response)==null?void 0:j.data)==null?void 0:N.errors)==null?void 0:U.captcha)==null?void 0:V.join(", "));return}D.fire({title:"Login Bermasalah",text:((M=(R=s.response)==null?void 0:R.data)==null?void 0:M.message)||s.response.statusText,icon:"error"})}).finally(()=>setTimeout(()=>f.value=!1,850)))};return ee(()=>{const d=new URLSearchParams(window.location.search),s=Object.fromEntries(d.entries());I.value=s==null?void 0:s.intended,w(),L()}),y({loadCaptcha:w,setFocus:L}),(d,s)=>{const h=C("b-img"),p=C("b-icon");return _(),g("div",{id:t(r),key:t(r),class:"form-login-wrapper"},[o(t(te),{ref_key:"formRef",ref:i,onSubmit:O},{default:b(()=>[o(t($),{label:a.usernameLabel,name:a.usernameField,rules:"required"},{default:b(({field:l,errorMessage:n})=>[e("div",ve,[e("label",{for:`${a.usernameField}-${t(r)}`},x(a.usernameLabel),9,ke),e("input",B({id:`${a.usernameField}-${t(r)}`,ref_key:"focusInput",ref:k},l,{class:"form-control",tabindex:"1"}),null,16,we),e("small",{class:v({"invalid-feedback":!0,"d-block":n})},x(n),3)])]),_:1},8,["label","name"]),o(t($),{label:"Password",name:"password",rules:"required"},{default:b(({field:l,errorMessage:n})=>[e("div",xe,[e("label",{for:`password-${t(r)}`,class:"control-label"},"Password",8,ye),e("input",B({id:`password-${t(r)}`},l,{type:"password",class:"form-control",name:"password",tabindex:"2"}),null,16,$e),e("small",{class:v({"invalid-feedback":!0,"d-block":n})},x(n),3)])]),_:1}),e("div",Be,[Ce,e("div",Fe,[e("div",Ie,[o(h,{id:`captcha-img-${t(r)}`,ref:"captcha-img",blank:!c.value.src||c.value.loading,src:c.value.src,"blank-color":"#f2f2f2",width:"130px",height:"42px",alt:"Loading...",class:"mr-3 rounded"},null,8,["id","blank","src"]),e("a",{href:"javascript:void(0)",class:v({"fs-sm mt-1":!0,disabled:c.value.loading}),onClick:s[0]||(s[0]=se((...l)=>t(w)&&t(w)(...l),["prevent"]))}," Muat ulang captcha ",2)]),e("div",Le,[o(t($),{label:"Captcha",name:"captcha",rules:t(ae).validateCaptcha?"required":""},{default:b(({field:l,errorMessage:n})=>[e("input",B({id:`captcha-${t(r)}`},l,{class:"form-control",name:"captcha",tabindex:"3"}),null,16,qe),e("small",{class:v({"invalid-feedback":!0,"d-block":n})},x(n),3)]),_:1},8,["rules"])])])]),e("div",Pe,[e("button",{type:"submit",class:v({"btn btn-primary btn-lg btn-block rounded-pill":!0,disabled:f.value}),tabindex:"4"},[f.value?(_(),g("span",Se,[o(p,{icon:"circle-fill",animation:"throb",class:"mr-1"}),G(" proses login... ")])):(_(),g("span",Te,[o(p,{icon:"check2-circle",class:"mr-1"}),G(" Login ")]))],2)])]),_:1},512)],8,ge)}}};const Ee={class:"auth-wrapper"},je={class:"container"},Ne={class:"row"},Ue={class:"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},Ve=e("div",{class:"login-brand"},null,-1),Re={class:"card card-primary"},Me={class:"card-header d-flex"},Ae=e("span",null,"Login",-1),ze={class:"card-body"},De=e("hr",{class:"divider sign-in"},null,-1),Ge={__name:"Index",setup(F){const y=m(null),a=m(!1);return(r,i)=>{const k=C("b-icon");return _(),g("div",Ee,[e("div",je,[e("div",Ne,[e("div",Ue,[Ve,e("div",Re,[e("div",Me,[e("h4",null,[o(oe,{name:"slide-up"},{default:b(()=>[a.value?(_(),g("a",{key:0,href:"javascript:void(0)",onClick:i[0]||(i[0]=f=>a.value=!1)},[o(k,{icon:"arrow-left",class:"mr-2"})])):ne("",!0)]),_:1}),Ae])]),e("div",ze,[o(ie,{name:"slide-fade"},{default:b(()=>[a.value?(_(),re(K,{key:1,"username-field":"username","username-label":"NRK","is-user-etpp":""})):(_(),g(le,{key:0},[e("button",{class:"btn btn-default btn-social-icon btn-lg btn-block rounded-pill text-dark",onClick:i[1]||(i[1]=f=>a.value=!0)}," Login dengan akun e-TPP "),De,o(K,{ref_key:"nativeLogin",ref:y,"username-field":"username","username-label":"Username"},null,512)],64))]),_:1})])])])])])])}}};u.use(fe);u.use(ce);u.component("BIcon",pe);u.component("BIconLink45deg",me);u.component("BIconArrowLeft",_e);u.component("BIconCircleFill",he);u.component("BIconCheck2Circle",be);de(u);const Ke=ue(Ge);Ke.mount("#app");
