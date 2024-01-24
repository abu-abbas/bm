<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toRef, ref, watchEffect } from 'vue'
import { _http, _route, _alert } from '@/js/utils/common.js'
import { useEventStore } from '@/js/stores/settings/event-store.js'
import ModalForm from '@/js/modules/settings/event/parts/ModalFormLinkTenant.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})

const fetchDataTenantInEventFromAPI = async (localEvent) => {
  try {
    const response = await _http.get(
      _route(
        'backend.pivot.get', {
        id: localEvent.id
      }
      )
    )
      .then(res => res);
    const data = await response.data.data;
    const result = data.map(obj => parseInt(obj.id));
    localTenantEvent.value = Object.values(result)
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
};

const router = useRouter()
const localEvent = ref(null)
const localTenantEvent = ref(null)
const getSlug = toRef(props, 'slug')
const eventStore = useEventStore()
const { getSelectedByUrl } = storeToRefs(eventStore)
const modalVisible = ref(false)
const initData = ref({})
const tenantEvent = ref ({})

const backToMain = () => router.push({ name: 'settings.event' })
const fetchEvent = () => {
  const hasSelectedData = getSelectedByUrl.value(getSlug.value)
  if (!hasSelectedData) {
    _http.get(
      _route(
        'backend.event.get',
        {
          search: getSlug.value,
          columns: 'url',
          fetch_first: true,
        }
        )
        )
        .then(res => eventStore.setItemByUrl(getSlug.value, res.data?.data))
        .catch(error => {
          _alert.fire({
            title: 'Terjadi Kesalahan',
          text: error?.response?.data?.message || 'Data event tidak ditemukan',
          icon: 'error',
          timer: 5000,
          timerProgressBar: true,
          confirmButtonText: 'Kembali'
        })
        .then(({ isConfirmed, dismiss }) => {
          if (isConfirmed || dismiss == 'timer')
          backToMain()
      })
      })
      .finally(() => {
        unwatch()
        fetchDataTenantInEventFromAPI(localEvent.value);
      })
    }
    
    
    localEvent.value = getSelectedByUrl.value(getSlug.value)
  }
  
  const onHandleAdd = () => {
    tenantEvent.value = localTenantEvent.value
    modalVisible.value = true
  }
  
  const onHandleSubmit = (value) => {
    eventStore.setItemByUrl(getSlug.value, value)
    fetchEvent()
  }
  
  const unwatch = watchEffect(
    () => {
      if (!localEvent.value) {
        fetchEvent()
      }
    }
    )
  </script>

<template>
  <div class="section-body">
    <h2 class="section-title fs-lg">
      {{ localEvent?.event_header }}
    </h2>
    <p class="section-lead">{{ localEvent?.short_location }}</p>
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-start flex-wrap flex-sm-nowrap">
          <div class="flex-1 ml-0 ml-sm-3">{{ localEvent?.event_subheader }}</div>
        </div>
      </div>
    </div>
    
    <div class="action d-flex align-items-center mt-3">
      <a href="javascript:void(0)" rel="noopener noreferrer" class="btn btn-info btn-icon mr-2" @click="onHandleAdd">
        <FontAwesomeIcon :icon="['fas', 'plus']" class="mr-1" />
        Tambah Peserta Event
      </a>
    </div>

    <ModalForm v-model:visible="modalVisible" :init-data="initData" :tenant-event="tenantEvent" :is-edit="false" @submit="onHandleSubmit" />
  </div>
</template>
