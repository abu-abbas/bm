<script setup>
import { ref, computed, nextTick } from 'vue'
import CropperImage from '@/js/components/CropperImage.vue'

const props = defineProps({
  accept: {
    type: Array,
    required: false,
    default: () => [
      'image/gif',
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/tiff',
      'image/webp',
    ],
  },
  maxSize: {
    type: Number,
    required: false,
    default: 5
  },
  modelValue: {
    type: [File, null],
    required: true,
    default: null
  },
  urlObject: {
    type: [String, null],
    required: false,
    default: null
  },
  errorMessage: {
    type: [String, null],
    required: false,
    default: null
  }
})
const emits = defineEmits(['update:modelValue', 'update:urlObject', 'cropping'])

const componentId = Math.random().toString(36).substring(2, 9)
const identity = `uploader-image-${componentId}`
const URL = window.URL || window.webkitURL

const cropper = ref({
  visible: false,
  input: null,
  output: null,
  name: null,
  mime: null,
  file: null
})
const localAccept = computed(() => props.accept.join(','))
const onHandleChange = (e) => {
  if (!e.target.files.length) return

  const newFile = e.target.files[0]
  cropper.value.input = URL.createObjectURL(newFile)
  cropper.value.visible = true
  cropper.value.name = newFile.name
  cropper.value.mime = newFile.type

  nextTick(() => e.target.value = '')
}

const onHandleCropping = ({ image }) => {
  cropper.value.output = URL.createObjectURL(image)
  cropper.value.file = new File([image], cropper.value.name,{ type: cropper.value.mime })
  doEmits()
}

const onHandleRemoveImage = () => {
  cropper.value.input = null
  cropper.value.output = null
  cropper.value.file = null
  doEmits()
}

const doEmits = () => {
  emits('update:modelValue', cropper.value.file)
  emits('update:urlObject', cropper.value.output)
  emits('cropping', { file: cropper.value.file, urlObject: cropper.value.output })
}
</script>

<template>
  <div
    :key="componentId"
    class="uploader-image-wrapper"
  >
    <label
      v-if="!cropper.output"
      :for="identity"
      class="border"
    >
      <FontAwesomeIcon :icon="['far', 'image']"/>
      <input
        :id="identity"
        type="file"
        name="upload"
        :accept="localAccept"
        @change="onHandleChange"
      >
    </label>

    <div
      v-else
      class="preview-wrapper"
    >
      <img
        :src="cropper.output"
        class="image-preview"
        alt="Output after crop and resize"
      >
      <a href="javascript:void(0)" @click="onHandleRemoveImage">
        <FontAwesomeIcon :icon="['fas', 'trash-alt']"/>
      </a>
    </div>

    <CropperImage
      v-model:visible="cropper.visible"
      :image-url="cropper.input"
      @after-cropping="onHandleCropping"
    />

    <div v-if="props.errorMessage" class="fs-nano text-danger">
      {{ props.errorMessage }}
    </div>
  </div>
</template>

<style lang="scss">
.uploader-image-wrapper {
  label {
    cursor: pointer;
    padding: 1.725rem 2rem;
    border-radius: 5px;

    > svg {
      transform: scale(2);
      opacity: .325;
    }

    > input {
      &[type="file"] {
        display: none;
      }
    }

    &:hover {
      > svg {
        opacity: .825;
      }
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
}
</style>
