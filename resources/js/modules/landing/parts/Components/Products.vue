<script setup>
    import { ref } from 'vue';

    const barangList = ref([
        { namaBarang: 'Laptop', harga: 5890000 },
        { namaBarang: 'Kipas Angin', harga: 7890000 },
        { namaBarang: 'Printer', harga: 2890000 },
        { namaBarang: 'TV Tabung', harga: 1890000 },
        { namaBarang: 'TV LCD', harga: 5890000 },
        { namaBarang: 'Alat Sulap', harga: 7890000 },
        { namaBarang: 'Alat Masak', harga: 2890000 },
        { namaBarang: 'Kardus Bekas', harga: 6890000 },
    ])

    const rupiah = (harga) => {
        return harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
    };
</script>
<template>
  <div class="kalles-section nt_section type_featured_collection tp_se_cdt">
    <div class="kalles-electronic__best-seller container">
      <div class="wrap_title des_title_2">
        <h3 class="section-title tc pr flex fl_center al_center fs__24 title_2">
          <span class="mr__10 ml__10">PRODUCT</span>
        </h3>
        <span class="dn tt_divider"><span></span><i class="dn clprfalse title_2 la-gem"></i><span></span></span><span
          class="section-subtitle db tc sub-title">Product Event Hari Ini</span>
      </div>
      <div
        class="products nt_products_holder row fl_center row_pr_2 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30">
        <div v-for="(barang, index) in barangList" :key="index" class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__2 tc">
          <div class="product-inner pr">
            <div class="product-image pr oh lazyload">

              <a class="db" href="product-detail-layout-01.html">
                <div
                  class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                  data-bgset="assets/images/home-electronic/pr-03.jpg"></div>
              </a>
              <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                <div
                  class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                  data-bgset="assets/images/home-electronic/pr-04.jpg"></div>
              </div>
              <div class="nt_add_w ts__03 pa">
                <a href="#" class="wishlistadd cb chp ttip_nt tooltip_right">
                  <span class="tt_txt">Add to Wishlist</span><i class="facl facl-heart-o"></i>
                </a>
              </div>
              <div class="hover_button op__0 tc pa flex column ts__03">
                <a class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left" href="#">
                  <span class="tt_txt">Quick view</span><i class="iccl iccl-eye"></i><span>Lihat</span>
                </a>
                <!-- <a href="#" class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                  <span class="tt_txt">Add to cart</span><i class="iccl iccl-cart"></i><span>Add to cart</span>
                </a> -->
              </div>
            </div>
            <div class="product-info mt__15">
              <h3 class="product-title pr fs__14 mg__0 fwm">
                <a class="cd chp" href="product-detail-layout-01.html">{{ barang.namaBarang }}</a>
              </h3>
              <span class="price dib mb__5">{{rupiah(barang.harga)}} </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="products-footer tc mt__40">
        <a class="se_cat_lm pr nt_cat_lm button button_dark br_rd_false btn_icon_false" href="#">Load More</a>
      </div> -->
    </div>
  </div>
</template>