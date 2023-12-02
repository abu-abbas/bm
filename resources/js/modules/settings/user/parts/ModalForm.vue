<script setup>
import { ref, computed, nextTick } from 'vue'
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
const usernameInput = ref(null)
const formRef = ref(null)

// method
const onHandleShown = () => nextTick(() => {
  usernameInput.value.focus()

  if (localData.value) {
    formRef.value.setFieldValue('username', localData.value.username)
    formRef.value.setFieldValue('name', localData.value.name)
    formRef.value.setFieldValue('password', localData.value.password)
  }
})
const onHandleHide = () => emits('update:visible', false)

const handleSubmit = (values, { resetForm }) => {
  console.log(values);
  const isEdit = props.isEdit
  const msgText = isEdit
    ? `Apakah Anda yakan untuk mengubah data ${ localData.value?.username } ?`
    : `Apakah Anda yakin untuk menambahkan ${values.username} sebagai pengguna?`
  const method = isEdit ? 'put' : 'post'
  const url = `backend.user.${ isEdit ? 'edit' : 'store' }`
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
      title: `${ isEdit ? 'Ubah' : 'Tambah' } pengguna`,
      text: msgText,
      icon: 'question',
    },
    () => _http.post(
      _route(url),
      { ...values, '_method': method, slug: isEdit ? localData.value?.username : null },
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
          title: 'Tambah pengguna',
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
    :title="`${ props.isEdit ? 'Ubah' : 'Tambah' } Pengguna`"
    hide-footer
    @shown="onHandleShown"
    @hide="onHandleHide"
  >
    <template #default="{ hide }">
      <div class="px-3 pb-0 mb-0">
        <VeeForm ref="formRef" @submit="handleSubmit">
          <div class="form-group row">
            <label for="nama" class="col-sm-3 col-form-label">
              Username
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Username Pengguna"
                name="username"
                rules="required|min:3|max:200"
              >
                <input
                  id="username"
                  ref="usernameInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan username pengguna"
                  :readonly=isEdit
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="nama" class="col-sm-3 col-form-label">
              Nama
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Nama pengguna"
                name="name"
                rules="required|min:3|max:200"
              >
                <input
                  id="nama"
                  ref="nameInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan nama pengguna"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="nama" class="col-sm-3 col-form-label">
              Password
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Password Pengguna"
                name="password"
                :rules="isEdit ? [] : 'required|min:6'"
              >
                <input
                  id="password"
                  ref="passwordInput"
                  v-bind="field"
                  type="password"
                  class="form-control"
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
