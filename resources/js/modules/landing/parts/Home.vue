<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { _settings } from '@/js/utils/common'
const redirectTo = (page) => window.location = page

const btnLogout = ref(null)
const onHandleLogout = function () {
  window.doLogout.apply(this, arguments)
}

onMounted(() => {
  if (btnLogout.value)
    btnLogout.value.addEventListener('click', onHandleLogout)
})

onBeforeUnmount(() => {
  if (btnLogout.value)
    btnLogout.value.removeEventListener('click', onHandleLogout)
})
</script>

<template>
  <div class="container home-wrapper mt-5">
    <div class="row">
      <div class="col-12">
        Ini adalah halaman utama
      </div>
      <div class="col-12 mt-3">
        <button
          v-if="!_settings.user"
          class="btn btn-primary"
          @click="redirectTo('/login')"
        >
          Login
        </button>
        <div v-else class="d-flex">
          <button
            class="btn btn-primary"
            @click="redirectTo('/admin')"
          >
            Halaman Admin
          </button>
          <button
            ref="btnLogout"
            class="btn btn-danger ml-3"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
