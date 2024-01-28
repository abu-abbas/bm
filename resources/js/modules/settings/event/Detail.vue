<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toRef, ref, watchEffect } from 'vue'
import { _http, _route, _alert, _confirm } from '@/js/utils/common.js'
import { useEventStore } from '@/js/stores/settings/event-store.js'
import ModalForm from '@/js/modules/settings/event/parts/ModalFormLinkTenant.vue'
import Spinner from '@/js/components/Spinner.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})

const refTable = ref(null)
const router = useRouter()
const localEvent = ref(null)
const localTenantEvent = ref(null)
const getSlug = toRef(props, 'slug')
const eventStore = useEventStore()
const { getSelectedByUrl } = storeToRefs(eventStore)
const modalVisible = ref(false)
const initData = ref({})
const tenantEvent = ref ({})
const eventId = ref ({})
const table = ref({
  busy: false,
  fields: [
    {
      key: 'action',
      label: 'Aksi',
      class: 'text-center',
      sortable: false,
      thStyle: { width: '35px' }
    },
    {
      key: 'rownum',
      label: 'No',
      thStyle: { width: '35px', textAlign: 'center' }
    },
    {
      key: 'name',
      label: 'Nama Tenant',
      thStyle: { textAlign: 'center' }
    },
  ],
  search: {
    filter: null,
    columns: ['event_name', 'event_header', 'event_subheader', 'location', 'start_at', 'finish_at']
  },
  meta: {
    page: 1,
    from: 1,
    limit: 15,
    total: 0,
  }
})
const loadProvider = _.debounce((ctx, callback) => {
  table.value.busy = true
  _http.get(
    _route(
      'backend.pivot.get',
      {
        search: table.value.search.filter,
        columns: table.value.search.columns.join(','),
        page: ctx.currentPage,
        limit: ctx.perPage,
        id: props.slug
      }
    )
  )
    .then(res => {
      table.value.meta.from = res.data?.meta.from
      table.value.meta.page = res.data?.meta.current_page
      table.value.meta.limit = res.data?.meta.per_page
      table.value.meta.total = res.data?.meta.total

      callback(res.data?.data)
    })
    .catch(() => callback([]))
    .finally(() => setTimeout(() => table.value.busy = false, 500))
}, 500)

const backToMain = () => router.push({ name: 'settings.event' })
const fetchEvent = async () => {
  const hasSelectedData = getSelectedByUrl.value(getSlug.value)
  if (!hasSelectedData) {
    await _http.get(
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
        eventId.value = localEvent.value.id
      })
    }
    
    
    localEvent.value = getSelectedByUrl.value(getSlug.value)
  }
  
  const onHandleAdd = () => {
    tenantEvent.value = localTenantEvent.value ?? localEvent.value
    eventId.value = localTenantEvent.value?.id ?? localEvent.value?.id
    modalVisible.value = true
  }
  
  const onHandleSubmit = (value) => {
    eventStore.setItemByUrl(getSlug.value, value)
    refTable.value.refresh()
  }

  const onHandleDeleted = item => {
  _confirm(
    {
      title: 'Hapus Tenant',
      text: `Apakah Anda yakin untuk menghapus tenant . ${item.name} pada event ${localEvent.value?.event_header}?`,
      icon: 'question'
    },
    () => _http.post(
      _route('backend.pivot.drop'),
      {
        '_method': 'delete',
        id: localTenantEvent.value?.id ?? localEvent.value?.id, /* ID EVENT */
        tenant_id: item.id
      }
    )
      .then(result => result)
      .catch(error => {
        let code = error.response.status
        let message = error.response.data.message

        if ([409, 417, 500].includes(code)) {
          _alert.showValidationMessage(`${message}`)
          return
        }

        if (code == '422') {
          const errors = error.response.data.errors
          message = Object.keys(errors).map(key => {
            return Array.isArray(errors[key])
              ? errors[key].join(', ')
              : errors[key]
          }).join(', ')

          _alert.showValidationMessage(`${message}`)
          return
        }
      })
  )
    .then(({ value, isConfirmed, isDismissed }) => {
      // do nothing
      if (isDismissed) return false

      // show response
      if (isConfirmed && value)
        _alert.fire({ title: `Hapus Tenant Berhasil`, text: `Tenant ${item.name} berhasil dihapus`, 'icon': 'success' })

      // refresh table
      refTable.value.refresh()
    })
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
    <p class="section-lead">{{ localEvent?.location }}</p>
    <p class="section-lead">{{ localEvent?.event_subheader }}</p>

    <el-tabs type="border-card">
      <el-tab-pane label="Peserta Event">
        <div class="action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between">
          <div class="left-section">
            <button
              class="btn btn-icon icon-left btn-primary"
              @click="onHandleAdd"
            >
              <FontAwesomeIcon :icon="['fas', 'plus']" />
              Tambah
            </button>
          </div>
          <div class="right-section mt-2 mt-md-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <FontAwesomeIcon :icon="['fas', 'search']" />
                </div>
              </div>
              <input
                v-model="table.search.filter"
                type="text"
                class="form-control"
                placeholder="Pencarian"
              >
            </div>
          </div>
        </div>

        <b-table
          ref="refTable"
          table-class="custom-bordered dataTable"
          :fields="table.fields"
          :items="loadProvider"
          :filter="table.search.filter"
          :current-page="table.meta.page"
          :per-page="table.meta.limit"
          :busy="table.busy"
          show-empty
          hover
          striped
          responsive
        >
          <template #table-busy>
            <Spinner></Spinner>
          </template>
          <template #empty>
            <div class="text-center">
              <FontAwesomeIcon :icon="['fas', 'exclamation-circle']" class="mr-2" />
              <span>Belum ada data</span>
            </div>
          </template>
          <template #emptyfiltered>
            <div class="text-center">
              <FontAwesomeIcon :icon="['fas', 'exclamation-circle']" class="mr-2" />
              <span>Data tidak ditemukan</span>
            </div>
          </template>
          <template #cell(action)="{ item }">
            <div class="d-flex align-items-baseline justify-content-center">
              <b-button
                variant="link"
                class="text-danger py-0 px-1 outline-none cursor-pointer"
                @click="onHandleDeleted(item)"
              >
                <FontAwesomeIcon :icon="['fas', 'trash-alt']" />
              </b-button>
            </div>
          </template>
          <template #cell(rownum)="{ index }">
            <div class="text-right">{{ index + 1 }}</div>
          </template>
          <template #cell(name)="{ item }">
            <div class="d-flex flex-column">
              {{ item.name }}
              <span class="fs-sm text-muted">{{ item.short_location }}</span>
            </div>
          </template>
          <template #cell(logo)="{ value, item }">
            <span v-if="!value.thumb" ></span>
            <img v-else :src="value.thumb" :alt="item.name" class="image-on-table" >
          </template>
        </b-table>

        <div class="footer-wrapper">
          <div class="d-flex justify-content-between align-items-center">
            <b-dropdown
              variant="light"
              class="mr-2 form-control-height-sm perpage"
              :text="table.meta.limit.toString()"
            >
              <b-dropdown-item
                v-for="item in [5, 10, 15, 25, 50, 100]"
                :key="item"
                link-class="btn"
                @click.prevent="table.meta.limit = item"
              >
                {{ item }}
              </b-dropdown-item>
            </b-dropdown>
            <b-pagination
              v-model:value="table.meta.page"
              :total-rows="table.meta.total"
              :per-page="table.meta.limit"
              aria-controls="group-table"
              first-class="hidden-md-down"
              last-class="hidden-md-down"
              class="pagination mb-0"
              @change="value => table.meta.page = value"
            ></b-pagination>
          </div>
        </div>

        <ModalForm v-model:visible="modalVisible" :init-data="initData" :tenant-event="tenantEvent" :event-id="eventId" :is-edit="false" @submit="onHandleSubmit" />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
