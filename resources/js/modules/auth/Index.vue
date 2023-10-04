<script setup>
import { ref } from 'vue'
import FormLogin from './parts/Form.vue'

const nativeLogin = ref(null)
const modalEtpp = ref({
  show: false
})

const onHandleHide = () => {
  modalEtpp.value.show = false
  nativeLogin.value.loadCaptcha()
  setTimeout(nativeLogin.value.setFocus, 100)
}
</script>

<template>
  <div class="auth-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div class="login-brand">
            <!-- <img src="@theme/stisla/assets/img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle"> -->
          </div>
          <div class="card card-primary">
            <div class="card-header"><h4>Login</h4></div>
            <div class="card-body">
              <button
                class="btn btn-default btn-social-icon btn-lg btn-block rounded-pill text-dark"
                @click="modalEtpp.show = true"
              >
                Login dengan akun e-TPP
              </button>
              <hr class="divider sign-in">
              <FormLogin
                ref="nativeLogin"
                username-field="email"
                username-label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model:visible="modalEtpp.show"
      size="sm"
      hide-footer
      title-class="text-primary"
      title="Masuk via e-TPP"
      @hide="onHandleHide"
    >
      <FormLogin
        username-field="nrk"
        username-label="NRK"
        is-user-etpp
      />
    </b-modal>
  </div>
</template>

<style lang="scss">
.btn {
  &.btn-default {
    background-color: #fdfdff;
    border: 1px solid #e4e6fc;
    color: var(--gray-dark) !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      border-color: #d4d6eb !important;
      background-color: #f0f0f3;
      color: var(--gray-dark);
    }
  }
}

hr {
  &.divider {
    height: 1px;
    margin: 30px 0;
    padding: 0;
    overflow: visible;
    border: none;
    background-color: #e7e7e9;
    color: #6e6d7a;
    text-align: center;

    &.sign-in {
      &::after {
        content: "atau dengan email";
        display: inline-block;
        position: relative;
        top: -10px;
        padding: 0 16px;
        background: #fff;
      }
    }
  }
}
</style>
