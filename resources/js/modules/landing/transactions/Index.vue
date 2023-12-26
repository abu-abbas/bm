<script setup>
import { ref, onMounted } from 'vue'
import { formatCurrency } from '@/js/utils/formatter.js'
import { _http, _route, _settings } from '@/js/utils/common.js'

import Spinner from '@/js/components/Spinner.vue'

const loading = ref(false)
const transactions = ref([])

const fetchTransaction = () => {
  if (loading.value) return

  loading.value = true
  _http.get(_route('backend.transaction.list'))
    .then(res => transactions.value = [...res?.data?.data || []])
    .catch(error => console.log({ error }))
    .finally(() => loading.value = false)
}

onMounted(() => fetchTransaction())
</script>

<template>
  <div class="root-wrapper transaction-wrapper">
    <div class="page-wrapper">
      <header class="fixed-header">
        <div
          @click="$router.go(-1)"
          class="button-wrapper"
        >
          <div class="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
          </div>
        </div>
        <div class="align-self-center">
          <div class="searchbar">
            <div class="searchbar__icon">
              <FontAwesomeIcon :icon="['fas', 'search']" />
            </div>
            <input
              type="search"
              class="searchbar__input"
              placeholder="Cari ketertarikan">
          </div>
        </div>
        <div class="single-header-action-wrapper">
          <template v-if="!_settings.user">
            <a
              class="d-flex justify-content-center align-items-center text__header fs-icon-size"
              @click="_redirectToLogin"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" />
            </a>
          </template>
          <template v-else>
            <a
              class="d-flex justify-content-center align-items-center text__header fs-icon-size"
              href="javascript:void(0)"
              onclick="doLogout.apply(this, arguments)"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" />
            </a>
          </template>

        </div>
      </header>
      <div class="spacing-wrapper"></div>
      <div class="user-information">
        <div class="info__wrapper">
          <div class="d-flex w-100 align-items-center m-2">
            <span v-if="!_settings.user">Anda belum login.</span>
            <span v-else>Halo, {{ _settings.user.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <Spinner v-if="loading" class="pt-5" />
    <div v-else class="content-wrapper pt-2">
      <div
        v-for="(trx, idx) in transactions"
        :key="idx"
        class="card-order"
      >
        <div class="header">
          <div class="d-flex justify-content-between align-items-center">
            <div class="flex-grow-1">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
                <div class="title ml-2">
                  <div class="d-flex flex-column">
                    <div class="fs-nano ">Tgl. Transaksi</div>
                    <strong class="fs-sm mt-1">{{ trx.trx_date.fmt_short }}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column value-of-interest text-right">
              <div class="fs-nano">Nilai Ketertarikan</div>
              <strong class="fs-sm mt-1">{{ formatCurrency(trx.nilai_ketertarikan || 0) }}</strong>
            </div>
          </div>
        </div>

        <div class="body mt-3">
          <div class="product-wrapper">
            <div class="d-flex">
              <img
                :src="trx?.product?.images[0]"
                alt="..."
                class="img-thumbnail image-product"
              >
              <div class="flex-grow-1 ml-2">
                <div class="d-flex flex-column">
                  <strong class="fs-sm product-name">{{ trx?.product?.product_name }}</strong>
                  <strong class="fs-sm">{{ formatCurrency(trx?.product?.price || 0) }}</strong>
                  <div class="fs-nano product-desc">{{ trx?.product?.description }}</div>
                  <strong class="fs-sm mt-2">{{ trx?.product?.tenant_name }}</strong>
                </div>
              </div>
            </div>
            <div class="soft-divider"></div>
            <div class="d-flex justify-content-between align-items-center">
              <strong class="fs-nano">Detail Akun</strong>
              <h6><span class="fs-nano badge badge-primary">{{ trx?.akun?.sumber_dana }}</span></h6>
            </div>
            <div class="d-flex flex-column mt-1">
              <div class="fs-nano">{{ trx?.akun?.kode_akun }} - {{ trx?.akun?.nama_akun }}</div>
              <div class="fs-nano mt-1">PAGU Anggaran: <strong>{{ formatCurrency(trx?.akun?.dpa_rsk || 0) }}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/js/modules/landing/mobile-view.scss';

.card-order {
  --color-shadow: 0 1px 4px 0 rgba(141,150,170,0.4);
  display: block;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 #d6dfeb;
  padding: 12px;
  margin: 12px 16px;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.2, 0.64, 0.21, 1);

  .header {
    position: relative;
  }

  .body {
    .image-product {
      width: 72px;
      height: 72px;
    }

    .product-name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .product-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.soft-divider {
  margin-bottom: .725rem;
  &::before {
    display: block;
    content: '';
    height: 1rem;
    width: 100%;
    border-bottom: 1px solid #ececec;
  }
}
</style>
