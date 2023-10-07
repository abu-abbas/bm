<script setup>
import { computed } from 'vue'

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
})

const componentId = Math.random().toString(36).substring(2, 9)
const identity = `uploader-image-${componentId}`

const localAccept = computed(() => props.accept.join(','))
const onHandleChange = (e) => {
  if (!e.target.files.length) return


}
</script>

<template>
  <div
    :key="componentId"
    class="uploader-image-wrapper"
  >
    <label :for="identity" class="border">
      <FontAwesomeIcon :icon="['far', 'image']"/>
      <input
        :id="identity"
        type="file"
        name="upload"
        :accept="localAccept"
        @change="onHandleChange"
      >
    </label>
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
}
</style>
