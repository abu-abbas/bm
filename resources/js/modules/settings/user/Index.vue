<script setup>
import { ref } from 'vue'
import { _, _http, _route, _confirm, _alert } from '@/js/utils/common'

import Spinner from '@/js/components/Spinner.vue'
import ModalForm from '@/js/modules/settings/user/parts/ModalForm.vue'
import ModalFormEdit from '@/js/modules/settings/user/parts/ModalForm.vue'

const refTable = ref(null)
const modalVisible = ref(false)
const modalVisibleEdit = ref(false)
const initData = ref({})
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
      key: 'username',
      label: 'Username',
      thStyle: { textAlign: 'center', width: '20%' }
    },
    {
      key: 'name',
      label: 'Nama',
      thStyle: { textAlign: 'center', width: '80%' }
    },
  ],
  search: {
    filter: null,
    columns: ['name', 'short_location', 'description']
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
      'backend.user.get',
      {
        search: table.value.search.filter,
        columns: table.value.search.columns.join(','),
        page: ctx.currentPage,
        limit: ctx.perPage,
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
const onHandleDeleted = item => {
  _confirm(
    {
      title: 'Hapus Pengguna',
      text: `Apakah Anda yakin untuk menghapus data pengguna dengan username. ${ item.username }?`,
      icon: 'question'
    },
    () => _http.post(
      _route('backend.user.drop'),
      {
        '_method': 'delete',
        username: item.username
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
        _alert.fire({ title: `Hapus Pengguna Berhasil`, text: `Pengguna dengan username ${item.username} berhasil dihapus`, 'icon': 'success' })

      // refresh table
      refTable.value.refresh()
    })
}

const onHandleEdit = item => {
  initData.value = item
  modalVisibleEdit.value = true
}
</script>

<template>
  <div class="section-body">
    <h2 class="section-title fs-lg">Daftar Pengguna</h2>
    <p class="section-lead">
      Daftar pengguna terdaftar
    </p>

    <div class="row">
      <div class="col-12">
        <div class="card border-gray-light">
          <div class="card-body">
            <div class="action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between">
              <div class="left-section">
                <button
                  class="btn btn-icon icon-left btn-primary"
                  @click="modalVisible = true"
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
                    class="text-info py-0 px-1 outline-none cursor-pointer"
                    @click="onHandleEdit(item)"
                  >
                    <FontAwesomeIcon :icon="['fas', 'edit']" />
                  </b-button>
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
          </div>
        </div>
      </div>
    </div>

    <ModalForm
      v-model:visible="modalVisible"
      @submit="refTable.refresh()"
    />
    <ModalFormEdit
      v-model:visible="modalVisibleEdit"
      :init-data="initData"
      :is-edit="true"
      @submit="refTable.refresh()"
    />
  </div>
</template>
