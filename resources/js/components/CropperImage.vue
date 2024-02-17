<script setup>
import { ref, computed } from 'vue'
import Compressor from 'compressorjs'
import VueCropper from 'vue-cropperjs'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  imageUrl: {
    type: [String, null],
    required: true,
    default: null
  },
  aspecRatio: {
    type: Number,
    required: false,
    default: () => 16 / 9
  },
  autoCropArea: {
    type: Number,
    required: false,
    default: 0.5
  },
})
const emits = defineEmits(['update:visible', 'after-cropping'])
const componentId = Math.random().toString(36).substring(2, 9)

const cropTarget = ref(null)
const localVisible = computed(() => props.visible)

const onHandleShown = () => {}
const onHandleHide = () => emits('update:visible', false)

const compress = (image) => {
  if (!image) return
  new Compressor(image, { success: onSuccess })
}

const onSuccess = (image) => {
  emits('after-cropping', { image })
  emits('update:visible', false)
}

const onHandleCrop = () => {
  cropTarget.value.disable()
  cropTarget.value.getCroppedCanvas().toBlob(res => compress(res))
}

</script>

<template>
  <b-modal
    :id="componentId"
    v-model:visible="localVisible"
    hide-header
    hide-footer
    no-close-on-esc
    no-close-on-backdrop
    @shown="onHandleShown"
    @hide="onHandleHide"
  >
    <template #default>
      <div class="pt-3">
        <VueCropper
          ref="cropTarget"
          class="img-fluid"
          :src="props.imageUrl"
          :aspect-ratio="props.aspecRatio"
          :auto-crop-area="props.autoCropArea"
        >
        </VueCropper>
      </div>

      <div class="mt-4 w-100 text-right">
        <button
          class="btn btn-primary"
          @click="onHandleCrop"
        >
          <FontAwesomeIcon :icon="['fas', 'crop-simple']" class="mr-1"/>
          Crop Image
        </button>
      </div>
    </template>

  </b-modal>

</template>
