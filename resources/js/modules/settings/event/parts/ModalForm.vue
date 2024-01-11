<script setup>
import { ref, computed, nextTick } from 'vue'
import { Field, Form as VeeForm } from 'vee-validate'
import { _http, _route, _alert, _confirm } from '@/js/utils/common'
import Datepicker from 'vue3-datepicker';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  initData: {
    type: [Object, null],
    required: false,
    default: () => {},
  },
  isEdit: {
    type: Boolean,
    required: true,
    default: false,
  }
})

const emits = defineEmits(['update:visible', 'submit'])

// declaration
const componentId = Math.random().toString(36).substring(2, 9)
const localVisible = computed(() => props.visible)
const localData = computed(() => props.initData)
const nameEventInput = ref(null)
const formRef = ref(null)
const selectedDateStart = ref(null);
const selectedDateFinish = ref(null);


//Method
const onHandleShown = () => nextTick(() => {
  nameEventInput.value.focus()

  if (localData.value) {
    formRef.value.setFieldValue('event_name', localData.value.event_name)
    formRef.value.setFieldValue('event_header', localData.value.event_header)
    formRef.value.setFieldValue('event_subheader', localData.value.event_subheader)
    formRef.value.setFieldValue('location', localData.value.location)
    formRef.value.setFieldValue('start_at', localData.value.start_at)
    formRef.value.setFieldValue('finish_at', localData.value.finish_at)
  }
})
const onHandleHide = () => emits('update:visible', false)

const handleSubmit = (values, { resetForm }) => {
  console.log((values));
  const isEdit = props.isEdit
  const msgText = isEdit
    ? `Apakah Anda yakan untuk mengubah data event ${ localData.value?.event_name } ?`
    : `Apakah Anda yakin untuk menambahkan event ${values.event_name}?`
  const method = isEdit ? 'put' : 'post'
  const url = `backend.event.${ isEdit ? 'edit' : 'store' }`
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
      title: `${ isEdit ? 'Ubah' : 'Tambah' } event`,
      text: msgText,
      icon: 'question',
    },
    () => _http.post(
      _route(url),
      { ...values, '_method': method, slug: isEdit ? localData.value?.id : null },
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
      // do nothing
      if (isDismissed) return false

      // show response
      if (isConfirmed && value.data.status == 'success') {
        _alert.fire({
          title: `${isEdit ? 'Ubah' : 'Tambah'} Event`,
          text: value.data.message,
          icon: 'success'
        })

        resetForm()
        emits('submit', value.data?.data)
        onHandleHide()
      }
    })
}
</script>

<template>
  <b-modal
    :id="componentId"
    v-model:visible="localVisible"
    :title="`${ props.isEdit ? 'Ubah' : 'Tambah' } Event`"
    hide-footer
    @shown="onHandleShown"
    @hide="onHandleHide"
  >
    <template #default="{ hide }">
      <div class="px-3 pb-0 mb-0">
        <VeeForm ref="formRef" @submit="handleSubmit">
          <div class="form-group row">
            <label for="event_name" class="col-sm-3 col-form-label">
              Nama Event
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Nama Event"
                name="event_name"
                rules="required|min:3|max:200"
              >
                <input
                  id="event_name"
                  ref="nameEventInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan nama event"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="event_header" class="col-sm-3 col-form-label">
              Header Event
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Header event"
                name="event_header"
                rules="required|min:3|max:200"
              >
                <input
                  id="event_header"
                  ref="headerInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan header event"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="event_subheader" class="col-sm-3 col-form-label">
              Subheader Event
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Header event"
                name="event_subheader"
                rules="required|min:3|max:200"
              >
                <input
                  id="event_subheader"
                  ref="subHeaderInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan subheader event"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="start_at" class="col-sm-3 col-form-label">
              Tanggal Mulai
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Tanggal  Mulai"
                name="start_at"
                rules="required|min:3|max:200"
              >
                <Datepicker
                  v-bind="field"
                  id="start_at"
                  ref="startInput"
                  v-model="selectedDateStart"
                  class="form-control"
                  placeholder="Pilih Tanggal"
                  :readonly=isEdit
                />
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="finish_at" class="col-sm-3 col-form-label">
              Tanggal Selesai
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Tanggal Selesai"
                name="finish_at"
                rules="required|min:3|max:200"
              >
                <Datepicker
                  v-bind="field"
                  id="finish_at"
                  ref="finishInput"
                  v-model="selectedDateFinish"
                  class="form-control"
                  placeholder="Pilih Tanggal"
                  :readonly=isEdit
                />
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="location" class="col-sm-3 col-form-label">
              Lokasi
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Lokasi"
                name="location"
                rules="required|min:3|max:200"
              >
                <input
                  id="location"
                  ref="locationInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Lokasi Event"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-primary mr-2">
                <FontAwesomeIcon :icon="['fas', 'save']" class="mr-1"/>
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

  > a {
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
