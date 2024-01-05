<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toRef, ref, watchEffect } from 'vue'
import { _http, _route, _alert } from '@/js/utils/common.js'
import { useTenantStore } from '@/js/stores/settings/tenant-store.js'

import IframeModal from '@/js/components/IframeModal.vue'
import ModalForm from '@/js/modules/settings/tenant/parts/ModalForm.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})

const router = useRouter()
const localTenant = ref(null)
const getSlug = toRef(props, 'slug')
const tenantStore = useTenantStore()
const { getSelectedByUrl } = storeToRefs(tenantStore)
const modalVisible = ref(false)
const iframeVisible = ref(false)
const initData = ref({})

const backToMain = () => router.push({ name: 'settings.tenant' })
const fetchTenant = () => {
  const hasSelectedData = getSelectedByUrl.value(getSlug.value)
  if (!hasSelectedData) {
    _http.get(
      _route(
        'backend.tenant.get',
        {
          search: getSlug.value,
          columns: 'url',
          fetch_first: true,
        }
      )
    )
      .then(res => tenantStore.setItemByUrl(getSlug.value, res.data?.data))
      .catch(error => {
        _alert.fire({
          title: 'Terjadi Kesalahan',
          text: error?.response?.data?.message || 'Data tenant tidak ditemukan',
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

  localTenant.value = getSelectedByUrl.value(getSlug.value)
}

const onHandleEdit = () => {
  initData.value = localTenant.value
  modalVisible.value = true
}

const onHandleSubmit = (value) => {
  tenantStore.setItemByUrl(getSlug.value, value)
  fetchTenant()
}

const onHandleQrcode = () => {
  iframeVisible.value = true
}

const unwatch = watchEffect(
  () => {
    if (!localTenant.value)
      fetchTenant()
  }
)
</script>

<template>
  <div class="section-body">
    <h2 class="section-title fs-lg">
      {{ localTenant?.name }}
    </h2>
    <p class="section-lead">{{ localTenant?.short_location }}</p>

    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-start flex-wrap flex-sm-nowrap">
          <img :src="localTenant?.logo?.thumb" :alt="`Logo ${ localTenant?.name }`">
          <div class="flex-1 ml-0 ml-sm-3">{{ localTenant?.description }}</div>
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
          <a
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
          </a>
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
