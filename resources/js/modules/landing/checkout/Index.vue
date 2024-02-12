<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, watch, computed } from 'vue'
import { defineRule, Field, Form as VeeForm } from 'vee-validate'

// helper
import { formatCurrency } from '@/js/utils/formatter.js'
import { _, _http, _route, _settings, _redirectToLogin, _alert, _confirm } from '@/js/utils/common.js'

// component
import BottomSheet from '@/js/components/BottomSheet.vue'
import Select from '@/js/components/budget/Select.vue'

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
  product: {
    type: [Object, null],
    required: true,
    default: () => {}
  },
  class: {
    type: [String, Object, Array],
    required: false,
    default: 'btn btn-lg btn-primary'
  }
})

const emits = defineEmits(['update:product'])

const router = useRouter()
const local = computed(() => {
  return {
    tenantSlug: props.tenantSlug,
    productSlug: props.productSlug,
    product: props.product,
  }
})

const showBottomSheet = ref(false)
const formRef = ref(null)
const refRsk = ref(null)
const refAkun = ref(null)
const refVoi = ref(null)
const nilaiKetertarikan = ref(0)
const hasTransaction = ref(false)

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
  },
})

const onHandleClick = () => {
  if (!_settings.user) {
    _redirectToLogin()
    return
  }

  if (local.value?.product?.has_transaction) {
    router.push({ name: 'landing.transaction' })
    return
  }

  showBottomSheet.value = true
}

const fetchBudget = (type = 'kegiatan', value = null, addons = null) => {
  budget.value[type].loading = true
  _http.get(_route('backend.budget.get', { type, value, addons }))
    .then(res => budget.value[type].options = [...res.data.data])
    .catch(() => budget.value[type].options = [])
    .finally(() => budget.value[type].loading = false)
}

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

defineRule('voi_value', (value, [target]) => {
  if (value == 0) return 'Nilai ketertarikan tidak boleh 0'

  if (value <= parseFloat(target?.dpa_rsk))
    return true

  return `Nilai ketertarikan maksimal ${parseFloat(target?.dpa_rsk)?.toLocaleString('id-ID', { style: 'decimal' })}`
})

const onHandleAkunSelect = () => setTimeout(() => refVoi.value.focus(), 250)

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

const onHandleSubmitButton = async () => {
  const { valid } = await formRef.value.validate()

  if (!valid) return

  _confirm(
    {
      title: `Buat ketertarikan`,
      text: `Apakah Anda yakin untuk membuat ketertarikan ini?`,
      icon: 'question',
    },
    () => _http.post(
      _route('backend.transaction.store'),
      {
        product: props.productSlug,
        ...formRef.value.getValues()
      },
    )
      .then(res => res)
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
      if (isConfirmed && value.data.status == 'success') {
        _alert.fire({
          title: 'Tambah ketertarikan',
          text: value.data.message,
          icon: 'success'
        })

        emits('update:product', { ...local.value.product, has_transaction: true })
        hasTransaction.value = true
        showBottomSheet.value = false
      }
    })
}

onMounted(() => {
  fetchBudget()
  hasTransaction.value = local.value?.product?.has_transaction
})
</script>

<template>
  <div class="checkout-wrapper">
    <button
      :class="[ props.class ]"
      @click="onHandleClick"
    >

      <template v-if="local?.product?.has_transaction || hasTransaction">
        Lihat ketertarikan
      </template>
      <template v-else>
        <FontAwesomeIcon :icon="['fas', 'plus']" />
        Ketertarikan
      </template>
    </button>
    <BottomSheet v-model:visible="showBottomSheet">
      <template #fixed-header><h2>Ajukan ketertarikan</h2></template>

      <VeeForm ref="formRef" v-slot="{ errors }">
        <div class="form-group mt-4">
          <label class="form-label text-muted">Kegiatan</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="budget.kegiatan.selected"
            label="Kegiatan"
            name="kegiatan"
            rules="required"
          >
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

            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <div v-if="budget.kegiatan.selected" class="form-group">
          <label class="form-label text-muted">RSK</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="budget.rsk.selected"
            label="RSK"
            name="rsk"
            rules="required"
          >
            <Select
              ref="refRsk"
              v-model:selected="budget.rsk.selected"
              :options="budget.rsk.options"
              :multiselect-options="budget.rsk.props"
              :loading="budget.rsk.loading"
            >
            </Select>
            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <div v-if="budget.rsk.selected" class="form-group">
          <label class="form-label text-muted">Akun</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="budget.akun.selected"
            label="Akun"
            name="akun"
            rules="required"
          >
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
                    <strong class="text-sm fw-500">PAGU Anggaran:
                      {{ formatCurrency(parseFloat(optionProps.option.dpa_rsk || 0)) }}
                    </strong>
                  </div>
                </div>
              </template>

              <template #singleLabel="optionProps">
                <div class="d-flex flex-column">
                  <strong class="text-sm text-muted fw-500">{{ optionProps.option.kode_akun }}</strong>
                  <span>{{ optionProps.option.nama_akun }}</span>
                  <div class="d-flex align-items-center mt-2">
                    <strong class="text-sm fw-500">PAGU Anggaran:
                      {{ formatCurrency(parseFloat(optionProps.option.dpa_rsk || 0)) }}
                    </strong>
                  </div>
                </div>
              </template>
            </Select>
            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <div v-if="budget.akun.selected" class="form-group">
          <label class="form-label text-muted">Nilai Ketertarikan</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="nilaiKetertarikan"
            label="Nilai Ketertarikan"
            name="voi"
            rules="required|voi_value:@akun"
          >
            <input
              ref="refVoi"
              type="text"
              class="form-control text-right custom-form-control font-bold"
              @keyup="onHandleKeyupNilaiKetertarikan"
            >
            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <button
          type="button"
          :class="{
            'btn btn-primary btn-block': true,
            'disabled': errors
          }"
          @click="onHandleSubmitButton"
        >
          Simpan
        </button>
      </VeeForm>
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


