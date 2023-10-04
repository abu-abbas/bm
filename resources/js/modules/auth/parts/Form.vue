<script setup>
import { ref, onMounted } from 'vue'
import { required, email } from '@vee-validate/rules'
import id from '@vee-validate/i18n/dist/locale/id.json'
import { localize, setLocale } from '@vee-validate/i18n'
import { _, _http, _route, _alert, _settings } from '@/js/utils/common'
import { Field, Form as VeeForm, defineRule, configure } from 'vee-validate'

configure({ generateMessage: localize({ id }) })
defineRule('required', required)
defineRule('email', email)
setLocale('id')

const props = defineProps({
  usernameField: {
    type: String,
    required: false,
    default: 'username'
  },
  usernameLabel: {
    type: String,
    required: false,
    default: 'Username'
  },
  isUserEtpp: {
    type: Boolean,
    required: false,
    default: false
  }
})
const componentId = Math.random().toString(36).substring(2, 9)
const formRef = ref(null)
const focusInput = ref(null)
const loading = ref(false)
const captcha = ref({
  src: null,
  hash: null,
  loading: false
})

const setFocus = () => setTimeout(() => focusInput.value.focus(), 250)
const loadCaptcha = _.debounce(async () => {
  if (captcha.value.loading) return

  captcha.value.loading = true
  const { status, data } = await _http.get(_route('backend.captcha.generate'))
  if (status != 200) {
    _alert.fire({
      title: 'Captcha Bermasalah',
      text: status,
      icon: 'error'
    })
    return
  }

  const { img, val } = data
  captcha.value.src = img
  captcha.value.hash = val
  captcha.value.loading = false
}, 850)

const onSubmit = (values) => {
  if (loading.value) return

  loading.value = true
  _http.post(
    _route('auth.login'),
    {
      [props.usernameField]: values[props.usernameField],
      password: values.password,
      captcha: values.captcha,
      user_etpp: props.isUserEtpp,
    }
  )
    .then(res => {
      if (res.status == '202')
        setTimeout(() => window.location = res.data.redirect, 500)
    })
    .catch(error => {
      if (error.response.status == '422' && error.response?.data?.errors) {
        formRef.value.setFieldError(props.usernameField, error.response?.data?.errors[props.usernameField].join(', '))
        formRef.value.setFieldError('password', error.response?.data?.errors?.password?.join(', '))
        formRef.value.setFieldError('captcha', error.response?.data?.errors?.captcha?.join(', '))
        return
      }

      _alert.fire({
        title: 'Login Bermasalah',
        text: error.response?.data?.message || error.response.statusText,
        icon: 'error'
      })
    })
    .finally(() => setTimeout(() => loading.value = false, 850))
}

onMounted(() => {
  loadCaptcha()
  setFocus()
})

defineExpose({ loadCaptcha, setFocus })
</script>

<template>
  <div
    :id="componentId"
    :key="componentId"
    class="form-login-wrapper"
  >
    <VeeForm ref="formRef" @submit="onSubmit">
      <Field
        v-slot="{ field, errorMessage }"
        :label="props.usernameLabel"
        :name="props.usernameField"
        :rules="props.usernameField == 'email' ? 'required|email' : 'required'"
      >
        <div class="form-group">
          <label for="email">{{ props.usernameLabel }}</label>
          <input :id="props.usernameField" ref="focusInput" v-bind="field" class="form-control" tabindex="1">
          <small :class="{ 'invalid-feedback': true, 'd-block': errorMessage }">
            {{ errorMessage }}
          </small>
        </div>
      </Field>

      <Field
        v-slot="{ field, errorMessage }"
        label="Password"
        name="password"
        rules="required"
      >
        <div class="form-group">
          <label for="password" class="control-label">Password</label>
          <input id="password" v-bind="field" type="password" class="form-control" name="password" tabindex="2">
          <small :class="{ 'invalid-feedback': true, 'd-block': errorMessage }">
            {{ errorMessage }}
          </small>
        </div>
      </Field>

      <div class="form-group">
        <label for="captcha" class="control-label">Captcha</label>
        <div class="d-flex alig-items-center">
          <div class="d-flex flex-column">
            <b-img
              id="captcha-img"
              ref="captcha-img"
              :blank="!captcha.src || captcha.loading"
              :src="captcha.src"
              blank-color="#f2f2f2"
              width="130px"
              height="42px"
              alt="Loading..."
              class="mr-3 rounded"
            />
            <a
              href="javascript:void(0)"
              :class="{ 'fs-sm mt-1': true, 'disabled': captcha.loading }"
              @click.prevent="loadCaptcha"
            >
              Muat ulang captcha
            </a>
          </div>

          <div class="d-flex flex-column">
            <Field
              v-slot="{ field, errorMessage }"
              label="Captcha"
              name="captcha"
              :rules="_settings.validateCaptcha ? 'required' : ''"
            >
              <input id="captcha" v-bind="field" class="form-control" name="captcha" tabindex="3">
              <small :class="{ 'invalid-feedback': true, 'd-block': errorMessage }">
                {{ errorMessage }}
              </small>
            </Field>
          </div>
        </div>
      </div>

      <div class="form-group">
        <button
          type="submit"
          :class="{
            'btn btn-primary btn-lg btn-block rounded-pill': true,
            'disabled': loading
          }"
          tabindex="4"
        >
          <span v-if="loading">
            <b-icon icon="circle-fill" animation="throb" class="mr-1"></b-icon>
            proses login...
          </span>
          <span v-else>
            <b-icon icon="check2-circle" class="mr-1"></b-icon>
            Login
          </span>
        </button>
      </div>
    </VeeForm>
  </div>
</template>
