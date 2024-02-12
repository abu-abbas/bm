<script setup>
import $ from 'jquery'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  position: {
    type: Number,
    required: false,
    default: 100
  }
})

const scrollPos = ref(0)
const doWatchScrollY = () => scrollPos.value = window.scrollY
const onHandleOnClick = () => $('html, body').animate({ scrollTop: 0 }, 800)

onMounted(() => { document.addEventListener('scroll', doWatchScrollY) })
onBeforeUnmount(() => { document.removeEventListener('scroll', doWatchScrollY) })
</script>
<template>
  <a
    v-show="scrollPos > props.position"
    id="nt_backtop"
    class="pf br__50 z__100 des_bt1 bkt_show"
    href="#"
    @click="onHandleOnClick"
  >
    <span class="tc br__50 db cw"><i class="pr pegk pe-7s-angle-up"></i></span>
  </a>
</template>
