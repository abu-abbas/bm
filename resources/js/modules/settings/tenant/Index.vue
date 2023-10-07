<script setup>
import { ref } from 'vue'
import ModalAdd from '@/js/modules/settings/tenant/parts/ModalAdd.vue'

const form = ref({
  show: false
})
const items = [
  { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { age: 38, first_name: 'Jami', last_name: 'Carney' }
]
</script>

<template>
  <div class="section-header">
    <h1>Pengaturan Tenant</h1>
  </div>

  <div class="section-body">
    <h2 class="section-title fs-lg">Daftar Tenant</h2>
    <p class="section-lead">
      Daftar tenant yang akan ditampilkan pada halaman depan
    </p>

    <div class="row">
      <div class="col-12">
        <div class="card border-gray-light">
          <div class="card-body">
            <div class="action-wrapper d-flex mb-3 flex-wrap align-items-center justify-content-between">
              <div class="left-section">
                <button
                  class="btn btn-icon icon-left btn-primary"
                  @click="form.show = true"
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
                    type="text"
                    class="form-control"
                    placeholder="Pencarian"
                  >
                </div>
              </div>
            </div>

            <b-table
              table-class="custom-bordered dataTable"
              :items="items"
              hover
              striped
              responsive
            >
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <ModalAdd v-model:visible="form.show" />
  </div>
</template>
