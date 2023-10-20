<script setup>
import { computed, ref } from 'vue'
import { _route } from '@/js/utils/common.js'
// import FilePdf from '@/12345.pdf'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false
  }
})
const emits = defineEmits(['update:visible'])

const iframeRef = ref(null)
const localVisible = computed(() => props.visible)
const onHandleHide = () => emits('update:visible', false)
</script>

<template>
  <b-modal
    v-model:visible="localVisible"
    title="iframe modal"
    body-class="p-0 m-0"
    content-class="iframe-on-modal"
    header-class="iframe-on-modal"
    size="lg"
    hide-footer
    @hide="onHandleHide"
  >
    <iframe
      ref="iframeRef"
      :src="`${_route('backend.tenant.qrcode', { slug: 'pt-gamma-persada-solusindo' })}#zoom=50`"
      class="custom-iframe"
      seamless="seamless"
      scrolling="no"
    >
    </iframe>
  </b-modal>
</template>

<style lang="scss">
iframe {
  &.custom-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
}

.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: rgb(243, 244, 245);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border-radius: 2px;
  }
}

.modal-header {
  &.iframe-on-modal {
    display: none !important;
  }
}

.modal-content {
  &.iframe-on-modal {
    box-shadow: none !important;
    height: calc(100vh * .85);
    overflow: hidden;
  }
}
</style>
