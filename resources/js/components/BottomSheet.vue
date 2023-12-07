<script setup>
// credit source from: https://www.codingnepalweb.com/draggable-bottom-sheet-modal-html-css-javascript/
import { ref, computed, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emits = defineEmits(['update:visible', 'show', 'hide'])

const componentId = Math.random().toString(36).substring(2, 9)
const bottomSheet = ref(null)
const sheetOverlay = ref(null)
const sheetContent = ref(null)
const dragIcon = ref(null)

const isDragging = ref(false)
const startY = ref(null)
const startHeight = ref(null)

const localVisible = computed(() => props.visible)

const updateSheetHeight = (height) => {
  //updates the height of the sheet content
  sheetContent.value.style.height = `${height}vh`

  // Toggles the fullscreen class to bottomSheet if the height is equal to 100
  bottomSheet.value.classList.toggle('fullscreen', height === 100)
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
  bottomSheet.value.classList.remove('show')
  document.body.style.overflowY = 'auto'

  emits('update:visible', false)
  emits('hide')
}

const showBottomSheet = () => {
  bottomSheet.value.classList.add('show')
  document.body.style.overflowY = 'hidden'

  updateSheetHeight(50)

  emits('update:visible', true)
  emits('show')
}

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
  isDragging.value = true
  startY.value = e.pageY || e.touches?.[0].pageY
  startHeight.value = parseInt(sheetContent.value.style.height)
  bottomSheet.value.classList.add('dragging')
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
  if (!isDragging.value) return

  const delta = startY.value - (e.pageY || e.touches?.[0].pageY)
  const newHeight = startHeight.value + delta / window.innerHeight * 100

  updateSheetHeight(newHeight)
}

// Determines whether to hide, set to fullscreen, or set to default
// height based on the current height of the sheet content
const dragStop = () => {
  isDragging.value = false
  bottomSheet.value.classList.remove('dragging')

  const sheetHeight = parseInt(sheetContent.value.style.height)
  sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50)
}

watch(
  () => localVisible.value,
  (newVisible) => newVisible ? showBottomSheet() : hideBottomSheet()
)
</script>

<template>
  <div
    :id="componentId"
    ref="bottomSheet"
    class="bottom-sheet"
  >
    <div
      ref="sheetOverlay"
      class="sheet-overlay"
      @click="hideBottomSheet"
    >
    </div>

    <div
      ref="sheetContent"
      class="content"
    >
      <div class="header">
        <div
          ref="dragIcon"
          class="drag-icon"
          @mousedown="dragStart"
          @mousemove="dragging"
          @mouseup="dragStop"
          @touchstart="dragStart"
          @touchmove="dragging"
          @touchend="dragStop"
        >
          <span></span>
        </div>
        <div class="static-title">
          <slot name="fixed-header">
            <h2>Fixed Header</h2>
          </slot>
        </div>
      </div>
      <div class="body">
        <slot name="header">
          <!-- <h2>Bottom Sheet Modal</h2> -->
        </slot>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.1s linear;

  .sheet-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background: #000;
  }

  .content {
    width: 100%;
    position: relative;
    background: #fff;
    max-height: 100vh;
    height: 50vh;
    max-width: 1150px;
    padding: 25px 30px;
    transform: translateY(100%);
    border-radius: 12px 12px 0 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
    transition: 0.3s ease;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .drag-icon {
      cursor: grab;
      user-select: none;
      padding: 15px;
      margin-top: -15px;

      span {
        height: 4px;
        width: 40px;
        display: block;
        background: #C7D0E1;
        border-radius: 50px;
      }
    }

    .static-title {
      display: flex;
      width: 100%;

      h2 {
        font-size: 1.275rem;
      }
    }

  }

  .body {
    height: 100%;
    overflow-y: auto;
    padding: 15px 0 40px;
    scrollbar-width: none;

    h2 {
      font-size: 1.275rem;
    }

    p {
      margin-top: 20px;
      font-size: .875rem;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &.show {
    opacity: 1;
    pointer-events: auto;
    z-index: 1040;

    .content {
      transform: translateY(0%);
    }
  }

  &.dragging {
    .content {
      transition: none;
    }
  }

  &.fullscreen {
    .content {
      border-radius: 0;
      overflow-y: hidden;
    }
  }
}
</style>
