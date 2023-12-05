<template>
  <div class="uploader-image-wrapper">
    <label for="file-input" class="border">
      <FontAwesomeIcon :icon="['far', 'image']"/>
      <input
        id="file-input"
        type="file"
        name="upload"
        multiple
        :accept="localAccept"
        @change="onHandleChange"
      />
    </label>

    <div v-for="(file, index) in files" :key="index" class="preview-wrapper">
      <img
        v-if="file.output"
        :src="file.output"
        class="image-preview"
        alt="Output after crop and resize"
      />
      <a href="javascript:void(0)" @click="onHandleRemoveImage(index)">
        <FontAwesomeIcon :icon="['fas', 'trash-alt']"/>
      </a>

      <CropperImage
        v-if="file.visible"
        v-model:visible="file.visible"
        :image-url="file.input"
        @after-cropping="onHandleCropping"
      />
    </div>

    <div v-if="errorMessage" class="fs-nano text-danger">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import CropperImage from '@/js/components/CropperImage.vue'
// Import FontAwesomeIcon as needed

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
      // 'image/webp',
    ],
  },
  maxSize: {
    type: Number,
    required: false,
    default: 5
  },
  modelValue: {
    type: [Array, null],
    required: true,
    default: null
  },
  urlObject: {
    type: [Array, null],
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

const URL = window.URL || window.webkitURL

const files = ref([])

const localAccept = computed(() => props.accept.join(','))

const onHandleChange = (e) => {
  if (!e.target.files.length) return

  const selectedFiles = Array.from(e.target.files)

  selectedFiles.forEach((file) => {
    const cropperInstance = {
      visible: true,
      input: URL.createObjectURL(file),
      output: null,
      name: file.name,
      mime: file.type,
      file: null
    }

    files.value.push(cropperInstance)
  })

  nextTick(() => e.target.value = '')
}

const onHandleCropping = ({ image }) => {
  const lastAddedFile = files.value[files.value.length - 1]

  lastAddedFile.output = URL.createObjectURL(image)
  lastAddedFile.file = new File([image], lastAddedFile.name, { type: lastAddedFile.mime })

  doEmits()
}

const onHandleRemoveImage = (index) => {
  files.value.splice(index, 1)
  doEmits()
}

const doEmits = () => {
  const filesToUpdate = files.value.map(file => file.file)
  const urlObjectsToUpdate = files.value.map(file => file.output)

  emits('update:modelValue', filesToUpdate)
  emits('update:urlObject', urlObjectsToUpdate)
  emits('cropping', { files: filesToUpdate, urlObjects: urlObjectsToUpdate })
}
</script>

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
