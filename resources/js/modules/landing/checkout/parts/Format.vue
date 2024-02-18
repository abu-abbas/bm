<script setup>
import { formatCurrency } from '@/js/utils/formatter.js'
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  onlyAccount: {
    type: Boolean,
    required: false,
    default: false
  },
})
</script>

<template>
  <div class="d-flex flex-column">
    <div :class="{ 'program mb-2': true, 'd-none': true }">
      <strong class="text-sm text-muted">Program:</strong>
      <div>{{ props.item?.nama_program }}</div>
    </div>
    <div :class="{ 'kegiatan mb-1': true, 'd-none': props.onlyAccount }">
      <strong class="text-sm text-muted">Kegiatan:</strong>
      <div>{{ props.item?.nama_kegiatan }}</div>
    </div>
    <div :class="{ 'subkegiatan mb-1': true, 'd-none': props.onlyAccount }">
      <strong class="text-sm text-muted">Subkegiatan:</strong>
      <div>{{ props.item?.nama_subkegiatan }}</div>
    </div>
    <div :class="{ 'rsk mb-1': true }">
      <strong class="text-sm text-muted">PASK:</strong>
      <div>{{ props.item?.no_rsk }} - {{ props.item?.nama_rsk }}</div>
    </div>
    <div :class="{ 'akun mb-1': true }">
      <strong class="text-sm text-muted">Akun:</strong>
      <div class="fw-bolder">{{ props.item?.kode_akun }}</div>
      <div>{{ props.item?.nama_akun }}</div>
    </div>
    <div :class="{ 'anggaran mb-1': true }">
      <strong class="text-sm text-muted">Nilai Anggaran:</strong>
      <div class="text-info fw-bolder">{{ formatCurrency(props.item?.dpa_rsk) }}</div>
    </div>
    <div class="used">
      <strong class="text-sm text-muted">Penggunaan untuk ketertarikan:</strong>
      <div class="text-danger fw-bolder">{{ formatCurrency(props.item?.has_transaction) }}</div>
    </div>
  </div>
</template>
