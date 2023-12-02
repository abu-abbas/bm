<script setup>
import { ref, onMounted, watch } from 'vue'
import { _, _http, _route, _settings, _redirectToLogin } from '@/js/utils/common.js'

import BottomSheet from '@/js/components/BottomSheet.vue'
import Select from '@/js/components/budget/Select.vue';

const props = defineProps({
  tenantSlug: {
    type: [String, null],
    required: true,
    default: null
  },
  productSlug: {
    type: [String, null],
    required: true,
    default: null
  },
})
const showBottomSheet = ref(false)
const onHandleClick = () => {
  if (!_settings.user) {
    _redirectToLogin()
    return
  }

  showBottomSheet.value = true
}
const refRsk = ref(null)
const refAkun = ref(null)
const refVoi = ref(null)
const nilaiKetertarikan = ref(0)

const budget = ref({
  kegiatan: {
    options: [],
    selected: null,
    props: {
      trackBy: 'kode_kegiatan',
      label: 'nama_kegiatan',
      placeholder: 'Pilih kegiatan'
    },
    loading: false,
  },
  rsk: {
    options: [],
    selected: null,
    props: {
      trackBy: 'nama_rsk',
      label: 'nama_rsk',
      placeholder: 'Pilih rsk'
    },
    loading: false,
  },
  akun: {
    options: [],
    selected: null,
    props: {
      trackBy: 'id_rskbas',
      label: 'nama_akun',
      placeholder: 'Pilih akun'
    },
    loading: false,
  }
})

const fetchBudget = (type = 'kegiatan', value = null, addons = null) => {
  budget.value[type].loading = true
  _http.get(_route('backend.budget.get', { type, value, addons }))
    .then(res => budget.value[type].options = [...res.data.data])
    .catch(() => budget.value[type].options = [])
    .finally(() => budget.value[type].loading = false)
}

watch(
  [
    () => budget.value.kegiatan.selected,
    () => budget.value.rsk.selected,
  ],
  (
    [
      newKegiatanSelected,
      newRskSelected,
    ],
    [
      oldKegiatanSelected,
      oldRskSelected,
    ]
  ) => {
    if (newKegiatanSelected && JSON.stringify(oldKegiatanSelected) != JSON.stringify(newKegiatanSelected)) {
      budget.value.rsk.selected = null
      budget.value.akun.selected = null
      refRsk.value?.removeSelected()
      refAkun.value?.removeSelected()

      fetchBudget('rsk', newKegiatanSelected.kode_kegiatan)
    }

    if (newRskSelected && JSON.stringify(newRskSelected) != JSON.stringify(oldRskSelected)) {
      budget.value.akun.selected = null
      refAkun.value?.removeSelected()

      fetchBudget('akun', budget.value.kegiatan.selected.kode_kegiatan, newRskSelected.kode_rsk)
    }
  }
)

const onHandleKeyupNilaiKetertarikan = _.debounce((e) => {
  const allowedChar = '0123456789.'
  const mapped = [...e.target.value].filter(v => allowedChar.includes(v)).join('')
  e.target.value = mapped

  const current = parseFloat(e.target.value.split('.').join('') || 0)
  const dpa_rsk = parseFloat(budget.value.akun.selected.dpa_rsk || 0)

  if (current < 0) {
    nilaiKetertarikan.value = 0
    e.target.value = 0
    return
  }

  if (current > dpa_rsk) {
    nilaiKetertarikan.value = dpa_rsk
    e.target.value = dpa_rsk.toLocaleString('id-ID', { style: 'decimal' })
    return
  }

  nilaiKetertarikan.value = current
  e.target.value = current.toLocaleString('id-ID', { style: 'decimal' })
}, 500)


const onHandleAkunSelect = () => setTimeout(() => refVoi.value.focus(), 250)

onMounted(() => {
  fetchBudget()
  console.log({ props })
})
</script>

<template>
  <div class="checkout-wrapper">
    <button
      class="btn btn-lg btn-primary"
      @click="onHandleClick"
    >
      <FontAwesomeIcon :icon="['fas', 'plus']" />
      Ketertarikan
    </button>
    <BottomSheet v-model:visible="showBottomSheet">
      <template #header><h2>Ajukan ketertarikan</h2></template>

      <div class="form-group mt-4">
        <label class="form-label text-muted">Kegiatan</label>
        <Select
          v-model:selected="budget.kegiatan.selected"
          :options="budget.kegiatan.options"
          :multiselect-options="budget.kegiatan.props"
          :loading="budget.kegiatan.loading"
        >
          <template #option="optionProps">
            <div class="d-flex flex-column">
              <strong class="text-sm text-muted">{{ optionProps.option.kode_kegiatan }}</strong>
              <span>{{ optionProps.option.nama_kegiatan }}</span>
            </div>
          </template>

          <template #singleLabel="optionProps">
            <div class="d-flex flex-column">
              <strong class="text-sm text-muted fw-500">{{ optionProps.option.kode_kegiatan }}</strong>
              <span>{{ optionProps.option.nama_kegiatan }}</span>
            </div>
          </template>
        </Select>
      </div>

      <div v-if="budget.kegiatan.selected" class="form-group">
        <label class="form-label text-muted">RSK</label>
        <Select
          ref="refRsk"
          v-model:selected="budget.rsk.selected"
          :options="budget.rsk.options"
          :multiselect-options="budget.rsk.props"
          :loading="budget.rsk.loading"
        >
        </Select>
      </div>

      <div v-if="budget.rsk.selected" class="form-group">
        <label class="form-label text-muted">Akun</label>
        <Select
          ref="refAkun"
          v-model:selected="budget.akun.selected"
          :options="budget.akun.options"
          :multiselect-options="budget.akun.props"
          :loading="budget.akun.loading"
          @select="onHandleAkunSelect"
        >
          <template #option="optionProps">
            <div class="d-flex flex-column">
              <strong class="text-sm text-muted">{{ optionProps.option.kode_akun }}</strong>
              <span>{{ optionProps.option.nama_akun }}</span>
              <div class="d-flex align-items-center mt-2">
                <strong class="text-sm fw-500">Nilai Anggaran:
                  {{ parseFloat(optionProps.option.dpa_rsk || 0)?.toLocaleString('id-ID', { style: 'decimal' }) }}
                </strong>
              </div>
            </div>
          </template>

          <template #singleLabel="optionProps">
            <div class="d-flex flex-column">
              <strong class="text-sm text-muted fw-500">{{ optionProps.option.kode_akun }}</strong>
              <span>{{ optionProps.option.nama_akun }}</span>
              <div class="d-flex align-items-center mt-2">
                <strong class="text-sm fw-500">Nilai Anggaran:
                  {{ parseFloat(optionProps.option.dpa_rsk || 0)?.toLocaleString('id-ID', { style: 'decimal' }) }}
                </strong>
              </div>
            </div>
          </template>
        </Select>
      </div>

      <div v-if="budget.akun.selected" class="form-group">
        <label class="form-label text-muted">Nilai Ketertarikan</label>
        <input
          ref="refVoi"
          type="text"
          class="form-control text-right custom-form-control font-bold"
          @keyup="onHandleKeyupNilaiKetertarikan"
        >
      </div>

    </BottomSheet>
  </div>
</template>

<style lang="scss">
.custom-form-control {
  border-color: #f1ebfa;
  background: #f7f2ff;
}

.font-bold {
  font-weight: 700 !important;
  color: var(--dark);
}
</style>


