<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { Field, Form as VeeForm } from 'vee-validate'
import { _http, _route, _alert, _confirm } from '@/js/utils/common'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  initData: {
    type: [Object, null],
    required: false,
    default: () => { },
  },
  tenantEvent: {
    type: [Object, null],
    required: false,
    default: () => { },
  },
  isEdit: {
    type: Boolean,
    required: true,
    default: false,
  }
})

onMounted(() => {
  fetchDataTenantFromAPI();
});

const emits = defineEmits(['update:visible', 'submit'])

const componentId = Math.random().toString(36).substring(2, 9)
const localVisible = computed(() => props.visible)
const localData = computed(() => props.initData)
const localTenantEvent = computed(() => props.tenantEvent)
const formRef = ref(null)
const optionsTenant = ref([]);
const selectedTenant = ref([]);

const fetchDataTenantFromAPI = async () => {
  try {
    const response = await _http.get(
      _route(
        'backend.tenant.get', {}
      )
    )
      .then(res => res);
    const data = await response.data.data;
    
    const optionData = data.map(item => ({
      text: item.name, 
      value: item.id, 
    }));

    optionsTenant.value = optionData; 
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
};

const onHandleShown = () => nextTick(() => {
  selectedTenant.value = optionsTenant.value.filter(option => localTenantEvent.value.includes(option.value));
})
const onHandleHide = () => emits('update:visible', false)

const handleSubmit = (values, { resetForm }) => {
  const isEdit = props.isEdit
  const msgText = `Apakah Anda yakan untuk menyimpan data tenant yang berpartisipasi ?`
  const method = isEdit ? 'put' : 'post'
  const url = `backend.pivot.${isEdit ? 'edit' : 'store'}`
  let hasChange = false

  if (isEdit) {
    Object.keys(values).forEach(k => {
      if (values[k] != localData.value[k])
        hasChange = true
    })
  }

  if (isEdit && !hasChange) return
  _confirm(
    {
      title: `${isEdit ? 'Ubah' : 'Tambah'} tenant`,
      text: msgText,
      icon: 'question',
    },
    () => _http.post(
      _route(url),
      { ...values, '_method': method, id: localData.value?.id },
      { headers: { 'Content-Type': 'multipart/form-data' } }
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
      
      if (isDismissed) return false

      
      if (isConfirmed && value.data.status == 'success') {
        _alert.fire({
          title: 'Tambah tenant',
          text: value.data.message,
          icon: 'success'
        })

        resetForm()
        onHandleHide()
      }
    })
}
</script>

<template>
  <b-modal :id="componentId" v-model:visible="localVisible" title="Peserta Event" hide-footer @shown="onHandleShown" @hide="onHandleHide">
    <template #default="{ hide }">
      <div class="px-3 pb-0 mb-0">
        <VeeForm ref="formRef" @submit="handleSubmit">
          <div class="form-group row">
            <label for="nama" class="col-sm-3 col-form-label">
              Tenant
            </label>
            <div class="col-sm-9">
              <Field v-slot="{ field, errorMessage }" label="Nama tenant" name="tenant" rules="required">
                <vue-multiselect v-model="selectedTenant" :options="optionsTenant" placeholder="Pilih nama tenant" :multiple="true" :close-on-select="false" :allow-empty="false" :clear-on-select="false" v-bind="field" label="text" track-by="value">
                </vue-multiselect>
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-primary mr-2">
                <FontAwesomeIcon :icon="['fas', 'save']" class="mr-1" />
                Simpan
              </button>
              <button type="reset" class="btn btn-light" @click="hide">
                Batal
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
    </template>
  </b-modal>
</template>

<style lang="scss">
textarea {
  &.form-control {
    min-height: 100px;
  }
}

.preview-wrapper {
  position: relative;
  width: 80px;
  padding: 4px;
  border: 1px solid #e4e6fc;
  border-radius: 5px;

  img {
    &.image-preview {
      width: 100%;
      height: 100%;
    }
  }

  >a {
    position: absolute;
    background-color: rgba($color: #fff, $alpha: .625);
    padding: 5px 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .2;
    transition: ease-in-out;

    svg {
      color: var(--danger);
    }

    &:hover {
      opacity: .875;
    }
  }
}
</style>
