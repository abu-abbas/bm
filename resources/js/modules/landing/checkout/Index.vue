<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { defineRule, Field, Form as VeeForm } from 'vee-validate'

// helper
import { formatCurrency } from '@/js/utils/formatter.js'
import { _, _http, _route, _settings, _redirectToLogin, _alert, _confirm } from '@/js/utils/common.js'

// component
// import Select from '@components/budget/Select.vue'
import BottomSheet from '@components/BottomSheet.vue'
import ItemFormat from '@modules/landing/checkout/parts/Format.vue'

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
    selisih: budget.value.selected?.balance - nilaiKetertarikan.value || 0
  }
})

const qty = ref(1)
const refVoi = ref(null)
const formRef = ref(null)
const nilaiKetertarikan = ref(0)
const hasTransaction = ref(false)
const showBottomSheet = ref(false)
const budget = ref({
  options: [],
  selected: null,
  loading: false,
  props: {
    trackBy: 'slug',
    label: 'nama_akun',
    placeholder: 'Pilih Anggaran',
    selectLabel: '',
    selectedLabel: '',
    deselectLabel: '',
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

const fetchBudget = _.debounce(function (search = null, force = false) {
  if (!search && !force) return

  budget.value.loading = true
  _http.get(_route('backend.budget.all', { search: search?.toLowerCase() }))
    .then(res => budget.value.options = res.data.data)
    .catch(() => budget.value.options = [])
    .finally(() => budget.value.loading = false)
}, 500)

const onHandleKeyupNilaiKetertarikan = _.debounce((e) => {
  const allowedChar = '0123456789.'
  const cleanInput = `${e.target.value}`.split(',').shift()
  const mapped = [...cleanInput].filter(v => allowedChar.includes(v)).join('')
  e.target.value = mapped

  const current = parseFloat(e.target.value.split('.').join('') || 0)

  nilaiKetertarikan.value = current
  e.target.value = formatCurrency(current)
}, 1000)

defineRule('voi_value', (value, [target]) => {
  if (value == 0) return 'Nilai ketertarikan tidak boleh 0'

  console.log({ target })
  return true
})

// const onHandleAkunSelect = () => setTimeout(() => refVoi.value.focus(), 250)

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
        eventId: _settings?.events[0]?.flag == 'active' ? _settings.events[0].id : null,
        ...formRef.value.getValues(),
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

        router.push({ name: 'landing.transaction' })
      }
    })
}

onMounted(() => {
  fetchBudget(null, true)
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
      <template #fixed-content>
        <div class="media mb-2">
          <img class="image-wrapper mr-3" :src="local?.product?.images[0]" :alt="local?.product?.name">
          <div class="media-body">
            <strong class="fs-sm product-name">{{ local?.product?.product_name }}</strong>
            <strong class="fs-sm">{{ formatCurrency(local?.product?.price || 0) }}</strong>
            <div class="fs-nano product-desc">{{ local?.product?.description }}</div>
            <strong class="fs-sm mt-2">{{ local?.product?.tenant_name }}</strong>
          </div>
        </div>
      </template>

      <VeeForm ref="formRef" v-slot="{ errors }">
        <div class="form-group">
          <label class="form-label text-muted">Anggaran</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="budget.selected"
            label="Anggaran"
            name="anggaran"
            rules="required"
          >
            <vue-multiselect
              v-model="budget.selected"
              v-bind="budget.props"
              track-by="slug"
              select-label=""
              selected-label=""
              deselect-label=""
              label="nama_akun"
              open-direction="bottom"
              class="dropdown-custom"
              placeholder="Pilih Anggaran"
              :internal-search="false"
              :clear-on-select="false"
              :hide-selected="false"
              :max-height="500"
              :option-height="250"
              :options="budget.options"
              :loading="budget.loading"
              @search-change="fetchBudget"
            >
              <template #noResult>Data tidak ditemukan</template>
              <template #noOptions>Tidak ada data</template>

              <template #option="optionProps">
                <ItemFormat :item="optionProps.option" />
              </template>

              <template #singleLabel="optionProps">
                <ItemFormat :item="optionProps.option" only-account />
              </template>
            </vue-multiselect>

            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <div v-if="budget.selected" class="form-group">
          <label class="form-label text-muted">Kuantitas</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="qty"
            label="Kuantitas"
            name="qty"
            rules="required|min_value:1"
          >
            <div class="input-group">
              <div class="input-group-prepend" @click="qty--">
                <span class="input-group-text">-</span>
              </div>
              <input
                v-model="qty"
                type="text"
                class="form-control text-right custom-form-control font-bold"
              >
              <div class="input-group-append" @click="qty++">
                <span class="input-group-text">+</span>
              </div>
            </div>

            <div
              v-if="errorMessage"
              class="text-danger fs-sm mt-2"
            >
              {{ errorMessage }}
            </div>
          </Field>
        </div>

        <div v-if="budget.selected" class="form-group">
          <label class="form-label text-muted">Nilai Penawaran</label>
          <div class="form-control custom-form-control text-right font-bold input-readonly text-muted">
            {{ formatCurrency(qty * local.product?.price) }}
          </div>
        </div>

        <div v-if="budget.selected" class="form-group">
          <label class="form-label text-muted">Nilai Ketertarikan</label>
          <Field
            v-slot="{ errorMessage }"
            v-model="nilaiKetertarikan"
            label="Nilai Ketertarikan"
            name="voi"
            rules="required"
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
          <div v-if="nilaiKetertarikan" class="fs-sm text-muted mt-1 text-right">
            Selisih Nilai Anggaran {{ formatCurrency(local?.selisih) }}
          </div>
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
      <div class="space-helper"></div>
    </BottomSheet>
  </div>
</template>

<style lang="scss">
$baseFontSize: .825rem;

.multiselect {
  &.dropdown-custom {
    &.multiselect--active {
      .multiselect__tags {
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }

      .multiselect__select {
        &::before {
          top: 75%;
        }
      }
    }

    .multiselect__placeholder {
      padding-top: 8px;
      font-size: $baseFontSize;
      margin-left: 5px;
    }

    .multiselect__tags {
      min-height: 38px;
      border-color: #f1ebfa;
      background: #f7f2ff;

      .multiselect__input,
      .multiselect__single {
        font-size: $baseFontSize;
        background: #f7f2ff;
        margin-top: 6px;
        border: 0;
      }

      .multiselect__input {
        height: fit-content;
      }

      .multiselect__spinner {
        background: #f7f2ff;
      }
    }

    .multiselect__select {
      &::before {
        top: 70%;
      }
    }

    .multiselect__content-wrapper {
      background: #fff;
      margin-top: .325rem;
      border-top: 1px solid #e8e8e8;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;

      // fit width option
      .multiselect__content {
        width: 100%;

        .multiselect__element {
          &:nth-child(odd) {
            background: #f7f2ff;
          }

          &:nth-child(even) {
            background: #f1e9fd;
          }

          .multiselect__option {
            white-space: normal;
          }
        }
      }

      .multiselect__option {
        font-size: $baseFontSize;

        &.multiselect__option--highlight,
        &.multiselect__option--selected {
          color: unset;
        }

        &.multiselect__option--selected {
          background: var(--light);
        }
      }


      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #cacaca;
        border-radius: 5px;
      }
    }
  }
}

.input-group {
  input {
    &.custom-form-control {
      border-radius: 0 !important;
    }
  }
}

.custom-form-control {
  border-color: #f1ebfa;
  background: #f7f2ff;
  border-radius: 5px !important;

  &:focus {
    border-color: none !important;
  }
}

.font-bold {
  font-weight: 700 !important;
  color: var(--dark);
}

.input-readonly {
  font-size: 13px;
  outline: 0;
  padding: 10 15px;
  height: 40px;
  line-height: 18px;
  transition: border-color .5s;
  box-shadow: none;
}

.fs-sm {
  font-size: .725rem;
}

.image-wrapper {
  width: 72px;
  height: 72px;
}

.product-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.product-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.space-helper {
  height: 200px;
}
</style>

