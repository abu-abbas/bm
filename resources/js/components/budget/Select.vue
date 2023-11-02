<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  options: {
    type: [Array, null],
    required: true,
    default: () => []
  },
  selected: {
    type: [Object, null],
    required: false,
    default: () => {}
  },
  multiselectOptions: {
    type: [Object, null],
    required: false,
    default: () => {
      return {
        trackBy: 'key',
        label: 'value',
        selectLabel: '',
        selectedLabel: '',
        deselectLabel: '',
        placeholder: '',
      }
    }
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  }
})
const emits = defineEmits(['select', 'remove', 'update:selected'])
const componentId = Math.random().toString(36).substring(2, 9)
const localOptions = computed(() => props.options)
const isLoading = computed(() => props.loading)
const localSelected = ref(props.selected || null)
const onHandleSelectOrRemove = (selectedOption, id, event) => emits(event, selectedOption, id)

const removeSelected = () => {
  localSelected.value = null
  emits('update:selected', null)
}

watch(
  () => localSelected.value,
  (n) => emits('update:selected', n)
)

defineExpose({ removeSelected })
</script>

<template>
  <vue-multiselect
    :id="componentId"
    v-model="localSelected"
    v-bind="multiselectOptions"
    :options="localOptions"
    :disabled="isLoading"
    :loading="isLoading"
    class="dropdown-custom"
    @select="(selectedOption, id) => onHandleSelectOrRemove(selectedOption, id, 'select')"
    @remove="(selectedOption, id) => onHandleSelectOrRemove(selectedOption, id, 'remove')"
  >
    <template #noResult>Data tidak ditemukan</template>
    <template #noOptions>Tidak ada data</template>

    <template
      v-for="slot in Object.keys($slots)"
      #[slot]="scopeSlot"
    >
      <slot
        v-if="scopeSlot"
        :name="slot"
        v-bind="scopeSlot"
        :disabled="isLoading"
      >
      </slot>
    </template>
  </vue-multiselect>
</template>

<style lang="scss">
$baseFontSize: .825rem;
.multiselect {
  &.dropdown-custom {
    &.multiselect--active {
      .multiselect__tags {
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }

      .multiselect__select {
        &::before {
          top: 75%;
        }
      }
    }
    .multiselect__placeholder {
      padding-top: 8px;
      font-size: $baseFontSize;
      margin-left: 5px;
    }

    .multiselect__tags {
      min-height: 38px;
      border-color: #f1ebfa;
      background: #f7f2ff;

      .multiselect__input,
      .multiselect__single {
        font-size: $baseFontSize;
        background: #f7f2ff;
        margin-top: 6px;
      }

      .multiselect__spinner {
        background: #f7f2ff;
      }
    }

    .multiselect__select {
      &::before {
        top: 70%;
      }
    }

    .multiselect__content-wrapper {
      background: #f7f2ff;
      margin-top: .325rem;
      border-top: 1px solid #e8e8e8;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;

      // fit width option
      .multiselect__content {
        width: 100%;

        .multiselect__option {
          white-space: normal;
        }
      }

      .multiselect__option {
        font-size: $baseFontSize;
        &.multiselect__option--highlight,
        &.multiselect__option--selected {
          color: unset;
        }

        &.multiselect__option--selected {
          background: var(--light);
        }
      }


      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #cacaca;
        border-radius: 5px;
      }
    }
  }
}
</style>
