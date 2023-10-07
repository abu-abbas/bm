<script setup>
import { ref, computed, nextTick } from 'vue'
import ImageUploader from '@/js/components/UploadingImage.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  }
})

const emits = defineEmits(['update:visible'])

// declaration
const componentId = Math.random().toString(36).substring(2, 9)
const localVisible = computed(() => props.visible)
const nameInput = ref(null)

// method
const onHandleShown = () => nextTick(() => nameInput.value.focus())
const onHandleHide = () => emits('update:visible', false)
</script>

<template>
  <b-modal
    :id="componentId"
    v-model:visible="localVisible"
    title="Tambah Tenant"
    hide-footer
    @shown="onHandleShown"
    @hide="onHandleHide"
  >
    <template #default>
      <div class="px-3">
        <div class="form-group row">
          <label for="nama" class="col-sm-3 col-form-label">
            Nama
          </label>
          <div class="col-sm-9">
            <input id="nama" ref="nameInput" type="text" class="form-control" placeholder="Masukkan nama tenant">
          </div>
        </div>

        <div class="form-group row">
          <label for="lokasi" class="col-sm-3 col-form-label">
            Lokasi Singkat
          </label>
          <div class="col-sm-9">
            <input id="lokasi" type="text" class="form-control" placeholder="Masukkan lokasi singkat tenant">
            <span class="form-text text-muted fs-nano">Contoh: Jakarta Pusat</span>
          </div>
        </div>

        <div class="form-group row">
          <label for="deskripsi" class="col-sm-3 col-form-label">
            Deskripsi
          </label>
          <div class="col-sm-9">
            <textarea
              id="deskripsi"
              type="text"
              class="form-control"
              placeholder="Masukkan deskripsi tentang tenant"
            ></textarea>
            <!-- <span class="form-text text-muted fs-nano">Contoh: Jakarta Pusat</span> -->
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-3 col-form-label">
            Logo
          </label>
          <div class="col-sm-9">
            <ImageUploader />
          </div>
        </div>
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
</style>
