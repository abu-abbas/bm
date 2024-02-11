<script setup>
const props = defineProps({
  images: Object,
});

</script>
<template>
  <div class="col-md-6 col-12 pr product-images img_action_zoom pr_sticky_img kalles_product_thumnb_slide">
    <div class="row theiaStickySidebar">
      <div class="col-12 col-lg col_thumb">
        <div class="p-thumb p-thumb_ppr images sp-pr-gallery equal_nt nt_contain ratio_imgtrue position_8 nt_slider pr_carousel" data-flickity='{"initialIndex": ".media_id_1","fade":true,"draggable":">1","cellAlign": "center","wrapAround": true,"autoPlay": false,"prevNextButtons":true,"adaptiveHeight": true,"imagesLoaded": false, "lazyLoad": 0,"dragThreshold" : 6,"pageDots": false,"rightToLeft": false }'>
          <div v-for="(img,index) in props.images" :key="index" :class="'img_ptw p_ptw p-item sp-pr-gallery__img w__100 nt_bg_lz lazyload padding-top__127_66 media_id_'+index" :data-mdid="index" data-height="1440" data-width="1128" data-ratio="0.7833333333333333" data-mdtype="image" :data-src="img" :data-bgset="img" data-cap="Cream women pants - shoot 1"></div>
        </div>
      </div>
      <div class="col-12 col-lg-auto col_nav nav_medium t4_show">
        <div class="p-nav ratio_imgtrue row equal_nt nt_cover position_8 nt_slider pr_carousel" data-flickityjs='{"initialIndex": ".media_id_001","cellSelector": ".n-item:not(.is_varhide)","cellAlign": "left","asNavFor": ".p-thumb","wrapAround": true,"draggable": ">1","autoPlay": 0,"prevNextButtons": 0,"percentPosition": 1,"imagesLoaded": 0,"pageDots": 0,"groupCells": 3,"rightToLeft": false,"contain":  1,"freeScroll": 0}'></div>
      </div>
      <div class="dt_img_zoom pa t__0 r__0 dib"></div>
    </div>
  </div>
</template>
