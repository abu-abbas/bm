<script setup>
import { toRef } from 'vue'
import { _settings, _redirectToLogin } from '@/js/utils/common.js'

import Checkout from '@/js/modules/landing/checkout/Index.vue'

const props = defineProps({
  item: {
    type: [Object, null],
    required: true,
    default: null
  },
})


const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return formatter.format(amount);
}

</script>

<template>
  <div class="col-md-6 col-12 product-infors pr_sticky_su">
    <div class="theiaStickySidebar">
      <div class="kalles-section-pr_summary kalles-section summary entry-summary mt__30">
        <h1 class="product_title entry-title fs__16">{{ props.item.product_name }}</h1>
        <div class="flex wrap fl_between al_center price-review">
          <p id="price_ppr" class="price_range">{{ formatCurrency(props.item.price) }}</p>
        </div>
        <div class="pr_short_des">
          <p class="mg__0" style="white-space: pre-line;">{{ props.item.description }}</p>
        </div>
        <div class="btn-atc atc-slide btn_des_1 btn_txt_3">
          <div id="callBackVariant_ppr">
            <div class="nt_cart_form variations_form variations_form_ppr">
              <div class="variations_button in_flex column w__100 buy_qv_false">
                <div class="flex wrap">
                  <button v-if="!_settings.user" @click="_redirectToLogin()" data-time="6000" data-ani="shake" class="single_add_to_cart_button button truncate w__100 mt__20 order-4 d-inline-block animated">
                    <span class="txt_add "><FontAwesomeIcon :icon="['fas', 'plus']" /> Ketertarikan</span>
                  </button>
                  <Checkout
                    v-else
                    :tenant-slug="props.item.tenant_slug"
                    :product-slug="props.item.slug"
                    class="mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="trust_seal_ppr" class="pr_trust_seal tl_md tc">
          <img class="img_tr_s1 lazyload w__100 max-width__330px" src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202244%20285%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E" alt="" data-srcset="assets/images/single-product/trust_img2.png"/>
        </div>
        <div class="product_meta">
          <span class="posted_in"><span class="cb">Categories:</span> <a href="shop-filter-options.html" class="cg">All</a>, <a href="shop-filter-options.html" class="cg">Best seller</a>, <a href="shop-filter-options.html" class="cg">Bottom</a>, <a href="shop-filter-options.html" class="cg">Dress</a>, <a href="shop-filter-options.html" class="cg">New Arrival</a>, <a href="shop-filter-options.html" class="cg">Women</a></span>
          <span class="tagged_as"><span class="cb">Tags:</span> <a href="shop-filter-options.html" class="cg">Color Black</a>, <a href="shop-filter-options.html" class="cg">Color Grey</a>, <a href="shop-filter-options.html" class="cg">Color Pink</a>, <a href="shop-filter-options.html" class="cg">Price $7-$50</a>, <a href="shop-filter-options.html" class="cg">Size L</a>, <a href="shop-filter-options.html" class="cg">Size M</a>, <a href="shop-filter-options.html" class="cg">Size S</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
