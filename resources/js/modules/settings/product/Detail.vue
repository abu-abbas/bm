<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toRef, ref, watchEffect } from 'vue'
import { _http, _route, _alert } from '@/js/utils/common.js'
import { useProductStore } from '@/js/stores/settings/product-store.js'

import IframeModal from '@/js/components/IframeModal.vue'
import ModalForm from '@/js/modules/settings/product/parts/ModalForm.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})

const router = useRouter()
const localProduct = ref(null)
const getSlug = toRef(props, 'slug')
const productStore = useProductStore()
const { getSelectedByUrl } = storeToRefs(productStore)
const modalVisible = ref(false)
const iframeVisible = ref(false)
const initData = ref({})

const backToMain = () => router.push({ name: 'settings.product' })
const fetchProduct = () => {
  const hasSelectedData = getSelectedByUrl.value(getSlug.value)
  if (!hasSelectedData) {
    _http.get(
      _route(
        'backend.product.get',
        {
          search: getSlug.value,
          columns: 'url',
          fetch_first: true,
        }
      )
    )
      .then(res => productStore.setItemByUrl(getSlug.value, res.data?.data))
      .catch(error => {
        _alert.fire({
          title: 'Terjadi Kesalahan',
          text: error?.response?.data?.message || 'Data product tidak ditemukan',
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          confirmButtonText : 'Kembali'
        })
          .then(({ isConfirmed, dismiss }) => {
            if (isConfirmed || dismiss == 'timer')
              backToMain()
          })
      })
      .finally(() => unwatch())
  }

  
  localProduct.value = getSelectedByUrl.value(getSlug.value)
  console.log(localProduct.value);
}

const onHandleEdit = () => {
  initData.value = localProduct.value
  modalVisible.value = true
}

const onHandleSubmit = (value) => {
  productStore.setItemByUrl(getSlug.value, value)
  fetchProduct()
}

// const onHandleQrcode = () => {
//   iframeVisible.value = true
// }

const unwatch = watchEffect(
  () => {
    if (!localProduct.value)
      fetchProduct()
  }
)
</script>

<template>
  <div class="section-body">
    <h2 class="section-title fs-lg">
      {{ localProduct?.product_name }}
    </h2>
    <p class="section-lead">{{ localProduct?.short_location }}</p>

    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-start flex-wrap flex-sm-nowrap">
          <div v-for="(image, index) in localProduct.images" :key="index" class="mr-3">
            <img
              :src="localProduct?.images[index]"
              :alt="`Logo ${localProduct.product_name}`"
              width="150"
              height="150"
              style="object-fit: cover;"
            >
          </div>
          <div class="flex-1 ml-0 ml-sm-3">{{ localProduct.description }}</div>
        </div>

        <div class="action d-flex align-items-center mt-3">
          <a
            href="javascript:void(0)"
            rel="noopener noreferrer"
            class="btn btn-info btn-icon mr-2"
            @click="onHandleEdit"
          >
            <FontAwesomeIcon
              :icon="['fas', 'edit']"
              class="mr-1"
            />
            Ubah
          </a>
          <!-- <a
            href="javascript:void(0)"
            rel="noopener noreferrer"
            class="btn btn-primary btn-icon"
            @click="onHandleQrcode"
          >
            <FontAwesomeIcon
              :icon="['fas', 'qrcode']"
              class="mr-1"
            />
            Tampilkan Qrcode
          </a> -->
        </div>
      </div>
    </div>

    <ModalForm
      v-model:visible="modalVisible"
      :init-data="initData"
      is-edit
      @submit="onHandleSubmit"
    />

    <IframeModal
      v-model:visible="iframeVisible"
      :slug="getSlug"
    />
  </div>
</template>
