import{_ as i,fl as b,o as e,c as a,fo as s,u as _,fq as u,fr as h,ft as l,a as f,fP as v,fn as k,fu as $}from"./vee-validate-i18n.esm-0c3fc239.js";import{f as y}from"./formatter-8fa69f9f.js";import{_ as w}from"./Index-d7e946d4.js";import{f as z,u as x}from"./useFlickity-a32f731b.js";import{I as r}from"./pr-10-0fe06595.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./jquery-a55fea94.js";const p="/build/assets/pattern-1-reduce-70eebf1a.jpg",S={class:"kalles-digital__slide-banner kalles-section nt_section type_slideshow type_carousel"},C={class:"nt_full se_height_adapt nt_first"},j={class:"oh pr nt_img_txt bg-transparent"},B={class:"js_full_ht4 img_slider_block dek_img_slide"},N=["data-bgset"],I={class:"js_full_ht4 img_slider_block mb_img_slide"},M=["data-bgset"],V={class:"caption-wrap caption-w-1 pe_none z_100 tl_md tc"},q={class:"pa_txts caption"},D={class:"left_right"},E={class:"kalles-digital__slide-banner__title slt4_h4 mg__0 lh__1 f_body"},F=s("div",{class:"kalles-digital__slide-banner__br-01 slt4_space"},null,-1),L={class:"kalles-digital__slide-banner__sup-title slt4_h3 lh__1 mg__0"},P={class:"slt4_html"},T=s("div",{class:"kalles-digital__slide-banner__br-02 slt4_space"},null,-1),K=s("a",{class:"kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false",href:"#"}," Eksplorasi sekarang ",-1),A=s("a",{href:"#",class:"pa t__0 l__0 b__0 r__0 pe_none"},null,-1),G={__name:"MainSlide",setup(g){var t;const o=x(),c=((t=i)==null?void 0:t.events)||[];return b(()=>o.initialize()),(d,us)=>(e(),a("div",S,[s("div",C,[s("div",{ref:n=>_(z).ref=n,class:"fade_flick_1 slideshow row no-gutters equal_nt nt_slider js_carousel prev_next_0 btn_owl_1 dot_owl_2 dot_color_1 btn_vi_2"},[(e(!0),a(u,null,h(_(c),(n,m)=>(e(),a("div",{key:m,class:"kalles-digital__slide-banner__layout-01 col-12 slideshow__slide"},[s("div",j,[s("div",B,[s("div",{class:"bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0","data-bgset":_(p)},null,8,N)]),s("div",I,[s("div",{class:"bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0","data-bgset":_(p)},null,8,M)]),s("div",V,[s("div",q,[s("div",D,[s("h4",E,l(n.event_header),1),F,s("h3",L,l(n.event_name),1),s("div",P,[s("h3",null,l(n.event_subheader),1)]),T,K])])]),A])]))),128))],512)])]))}},H={class:"home-wrapper"},J={class:"kalles-section nt_section type_tab type_tab_collection tp_se_cdt"},O={class:"kalles-digital__rounded-tab container"},Q=s("div",{class:"wrap_title des_title_1"},[s("h3",{class:"section-title tc pr flex fl_center al_center fs__24 title_1"},[s("span",{class:"mr__10 ml__10"},"Produk Terbaru")]),s("span",{class:"dn tt_divider"},[s("span"),s("i",{class:"dn clprfalse title_1 la-gem"}),s("span")]),s("span",{class:"section-subtitle db tc sub-title"})],-1),R={class:"tab_se_wrap"},U={class:"tab_se_content"},W={class:"products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30 justify-content-start"},X={class:"product-inner pr"},Y={class:"product-image pr oh"},Z={class:"tc nt_labels pa pe_none cw"},ss={class:"onsale nt_label"},ts=["onClick"],_s=["data-bgset"],es={class:"hover_img pa pe_none t__0 l__0 r__0 b__0 op__0"},as=["data-bgset"],ls={class:"product-info mt__15"},ns={class:"product-title pr fs__14 mg__0 fwm"},os=["onClick"],is={class:"price dib mb__5"},cs={class:"money text-danger"},ds={key:0,class:"row mt-5"},rs=s("div",{class:"col-12 text-center"},[s("a",{class:"kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false",href:"#"}," Lihat lebih banyak ")],-1),ps=[rs],$s={__name:"Index",setup(g){return(o,c)=>(e(),f(w,null,{default:v(()=>[s("div",H,[k(G),s("div",J,[s("div",O,[Q,s("div",R,[s("div",U,[s("div",W,[(e(!0),a(u,null,h(_(i).products,t=>(e(),a("div",{key:t.slug,class:"col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"},[s("div",X,[s("div",Y,[s("span",Z,[s("span",ss,[s("span",null,"TKDN "+l(t.tkdn_value)+"%",1)])]),s("a",{class:"db pointer",onClick:d=>o.$router.push({name:"tenant.product",params:{tenantSlug:t.tenant_slug,productSlug:t.slug}})},[s("div",{class:"pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100","data-bgset":t.images[0]||_(r)},null,8,_s)],8,ts),s("div",es,[s("div",{class:"pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100","data-bgset":t.images[0]||_(r)},null,8,as)])]),s("div",ls,[s("h3",ns,[s("a",{class:"cd chp pointer",onClick:d=>o.$router.push({name:"tenant.product",params:{tenantSlug:t.tenant_slug,productSlug:t.slug}})},l(t.product_name),9,os)]),s("span",is,[s("span",cs,l(_(y)(t.price)),1)])])])]))),128))]),_(i).products.length<_(i).product_count?(e(),a("div",ds,ps)):$("",!0)])])])])])]),_:1}))}};export{$s as default};