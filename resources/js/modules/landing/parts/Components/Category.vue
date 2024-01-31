<script setup>

import {ref} from 'vue'

const category = ref([
  {
    id: 1,
    title: 'Hospital Equipment',
    route : '/',
    image: 'assets/images/home-medical/cat-01.jpg'
  },
  {
    id: 2,
    title: 'Blood Pressure',
    route: '/',
    image: 'assets/images/home-medical/cat-02.jpg'
  },
  {
    id: 3,
    title: 'Medical Accessories',
    route: '/',
    image: 'assets/images/home-medical/cat-03.jpg'
  },
  {
    id: 4,
    title: 'Personal',
    route: '/',
    image: 'assets/images/home-medical/cat-04.jpg'
  },
  {
    id: 5,
    title: 'Independent Living',
    route: '/',
    image: 'assets/images/home-medical/cat-05.jpg'
  },
  {
    id: 6,
    title: 'Pharmacy',
    route: '/',
    image: 'assets/images/home-medical/cat-06.jpg'
  }
])
</script>

<template>
  <div class="kalles-section nt_section type_carousel type_collection_list mt-5">
    <div class="kalles-medical__category-block container">
      <div class="row al_center fl_center title_10">
        <div class="col-auto col-md"><h3 class="dib tc section-title fs__24">Shop by categories</h3></div>
        <div class="col-auto"><a href="#"></a></div>
      </div>
      <div class="mt__30 nt_cats_holder row fl_center equal_nt hoverz_true ratio1_1 cat_space_20 cat_design_5 nt_slider js_carousel prev_next_3 btn_owl_1 dot_owl_2 dot_color_3 btn_vi_2" data-flickity='{"imagesLoaded": false, "adaptiveHeight": true, "contain": true, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": false,"percentPosition": true,"pageDots": true, "autoPlay" : false, "pauseAutoPlayOnHover" : true, "rightToLeft": false }'>
        <div v-for="item in category" :key="item.id" class="cat_grid_item cat_space_item cat_grid_item_1 col-lg-2 col-md-3 col-12">
          <div class="cat_grid_item__content pr oh">
            <a :href="item.route" class="db cat_grid_item__link">
              <div class="cat_grid_item__overlay item__position nt_bg_lz lazyload center" :data-bgset="item.image"></div>
            </a>
            <div class="cat_grid_item__wrapper pe_none">
              <div class="cat_grid_item__title">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
