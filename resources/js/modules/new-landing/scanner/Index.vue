<script setup>
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { _settings } from '@/js/utils/common.js'

import MainLayout from '@components/layout/Index.vue'

const result = ref('')
const error = ref('')
const loading = ref(true)
const paused = ref(false)
const isValid = ref(null)
const router = useRouter()

const device = ref({
  list: [],
  selected: null
})

const barcodeFormats = ref({
  options: {
    aztec: false,
    code_128: false,
    code_39: false,
    code_93: false,
    codabar: false,
    databar: false,
    databar_expanded: false,
    data_matrix: false,
    dx_film_edge: false,
    ean_13: false,
    ean_8: false,
    itf: false,
    maxi_code: false,
    micro_qr_code: false,
    pdf417: false,
    qr_code: true,
    rm_qr_code: false,
    upc_a: false,
    upc_e: false,
    linear_codes: false,
    matrix_codes: false
  },
})

const selectedBarcodeFormats = computed(() => {
  return Object.keys(barcodeFormats.value.options).filter(format => barcodeFormats.value.options[format])
})

const paintOutline = (detectedCodes, ctx) => {
  for (const detectedCode of detectedCodes) {
    const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

    ctx.strokeStyle = 'red'

    ctx.beginPath()
    ctx.moveTo(firstPoint.x, firstPoint.y)
    for (const { x, y } of otherPoints) {
      ctx.lineTo(x, y)
    }
    ctx.lineTo(firstPoint.x, firstPoint.y)
    ctx.closePath()
    ctx.stroke()
  }
}

const paintBoundingBox = (detectedCodes, ctx) => {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height }
    } = detectedCode

    ctx.lineWidth = 2
    ctx.strokeStyle = '#007bff'
    ctx.strokeRect(x, y, width, height)
  }
}

const paintCenterText = (detectedCodes, ctx) => {
  for (const detectedCode of detectedCodes) {
    const { boundingBox, rawValue } = detectedCode

    const centerX = boundingBox.x + boundingBox.width / 2
    const centerY = boundingBox.y + boundingBox.height / 2

    const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width)

    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.textAlign = 'center'

    ctx.lineWidth = 3
    ctx.strokeStyle = '#35495e'
    ctx.strokeText(detectedCode.rawValue, centerX, centerY)

    ctx.fillStyle = '#5cb984'
    ctx.fillText(rawValue, centerX, centerY)
  }
}

const trackFunction = ref({
  options: [
    { text: 'nothing (default)', value: undefined },
    { text: 'outline', value: paintOutline },
    { text: 'centered text', value: paintCenterText },
    { text: 'bounding box', value: paintBoundingBox }
  ],
  selected: null
})

const onHandleError = (err) => {
  error.value = `[${err.name}]: `

  if (err.name === 'NotAllowedError') {
    error.value += 'you need to grant camera access permission'
  } else if (err.name === 'NotFoundError') {
    error.value += 'no camera on this device'
  } else if (err.name === 'NotSupportedError') {
    error.value += 'secure context required (HTTPS, localhost)'
  } else if (err.name === 'NotReadableError') {
    error.value += 'is the camera already in use?'
  } else if (err.name === 'OverconstrainedError') {
    error.value += 'installed cameras are not suitable'
  } else if (err.name === 'StreamApiNotSupportedError') {
    error.value += 'Stream API is not supported in this browser'
  } else if (err.name === 'InsecureContextError') {
    error.value +=
      'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
  } else {
    error.value += err.message
  }
}

const validationPending = computed(() => (isValid.value === undefined || isValid.value === null) && paused.value)
const validationSuccess = computed(() => isValid.value === true)
const validationFailure = computed(() => isValid.value === false)

const onHandleDetect = async ([firstDetectedCode]) => {
  result.value = firstDetectedCode.rawValue
  paused.value = true

  if (result.value) {
    isValid.value = result.value?.startsWith(_settings.home)
    if (isValid.value) {
      const tenantSlug = `${ result.value }`.split('/t/').pop()
      swalToast.fire({ icon: 'success', title: 'Anda akan diarahkan kehalaman Tenant' })
        .then(res => {
          if (res.isDismissed && res.dismiss == 'timer') {
            router.push({ name: 'tenant.home',  params: { slug: tenantSlug } })
          }
        })
    }
  }

  await onTimeout(3000)
  paused.value = false
}

const onTimeout = (ms) => new Promise(resolve => window.setTimeout(resolve, ms))
const onHandleCameraOn = () => loading.value = false
const onHandleSelectedDevices = (label) => {
  const selected = device.value.list.findIndex(d => d.label == label)
  device.value.selected = device.value.list[selected == 0 ? 1 : 0]
}

const swalToast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

onMounted(async () => {
  trackFunction.value.selected = trackFunction.value.options[1]
  device.value.list = (await navigator?.mediaDevices?.enumerateDevices() || []).filter(({ kind }) => kind == 'videoinput')

  if (device.value.list.length > 0) {
    device.value.selected = device.value.list[0]
  }
})
</script>
<template>
  <MainLayout>
    <div class="kalles-section page_section_heading">
      <div class="page-head tc pr oh cat_bg_img page_head_">
        <div class="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0" :data-bgset="MainSlide">
        </div>
        <div class="container pr z_100">
          <h1 class="mb__5 cw">Pindai Qrcode</h1>
        </div>
      </div>
    </div>
    <div class="kalles-section nt_section type_featured_collection tp_se_cdt">
      <div class="kalles-digital__bestselling-section container">
        <div class="text-center px-5">
          <button
            v-if="device.list.length > 1"
            class="btn btn-dark btn-block round_true"
            @click="onHandleSelectedDevices(device.selected?.label)"
          >
            <span class="fs-sm">
              {{ device.selected?.label?.includes('front') ? 'Gunakan kamera belakang' : 'Gunakan kamera depan' }}
            </span>
          </button>
        </div>
        <div class="py-5">
          <qrcode-stream
            v-if="device.selected !== null"
            :constraints="{ deviceId: device.selected?.deviceId }"
            :track="trackFunction.selected"
            :formats="selectedBarcodeFormats"
            :pause="paused"
            @camera-on="onHandleCameraOn"
            @error="onHandleError"
            @detect="onHandleDetect"
          >
            <div
              v-if="loading"
              class="loading-indicator text-center"
            >
              Loading...
            </div>

            <div
              v-if="validationSuccess"
              class="validation-success"
            >
              Qrcode valid
            </div>

            <div
              v-if="validationFailure"
              class="validation-failure"
            >
              Qrcode tidak valid
            </div>

            <div
              v-if="validationPending"
              class="validation-pending"
            >
              proses validasi qrcode...
            </div>
          </qrcode-stream>
          <p
            v-else
            class="error text-center"
          >
            No cameras on this device
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<style>
.error {
  font-weight: bold;
  color: red;
}

.barcode-format-checkbox {
  margin-right: 10px;
  white-space: nowrap;
}

.fs-sm {
  font-size: 0.725rem;
}

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.validation-success {
  color: green;
}

.validation-failure {
  color: red;
}
</style>
