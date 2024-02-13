import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { _settings, _http, _route, _alert } from '@/js/utils/common.js'
import { useProductStore } from '@/js/stores/settings/product-store.js'

const productStore = useProductStore()
const { getSelectedByTenantAndUrl } = storeToRefs(productStore)

const useProduct = (tenantSlug, productSlug) => {
  const router = useRouter()
  const product = ref({
    data: null,
    found: false,
    loading: false,
  })

  const fetch = () => {
    product.value.loading = true

    const hasProductFromSetting = _settings.products.find(p => p.slug == productSlug && p.tenant_slug == tenantSlug)
    if (hasProductFromSetting) {
      product.value.loading = false
      product.value.found = true
      product.value.data = hasProductFromSetting
      productStore.setItem(hasProductFromSetting)

      console.log('form setting')
      return
    }

    const hasProductFromStore = getSelectedByTenantAndUrl.value(tenantSlug, productSlug)
    if (hasProductFromStore) {
      product.value.loading = false
      product.value.found = true
      product.value.data = hasProductFromSetting

      console.log('form store')
      return
    }

    _http.get(
      _route(
        'backend.landing.product.getsingelproduct',
        {
          tenant: tenantSlug,
          product: productSlug,
        }
      )
    )
      .then(res => {
        if (!res?.data?.data) throw new('Data tidak ditemukan')

        product.value.found = true
        product.value.data = res.data.data

        productStore.setItem(res.data.data)
        console.log('form db')
      })
      .catch((err) => {
        product.value.found = false
        product.value.data = null

        _alert.fire({
          title: 'Gagal mendapatkan data produk',
          text: err?.message || 'Error tidak diketahui',
          icon: 'error'
        })
      })
      .finally(() => product.value.loading = false)
  }

  const backToTenant = () => {
    router.push({ name: 'tenant.home', params: { slug: tenantSlug } })
  }

  onMounted(() => fetch())

  return {
    product,
    backToTenant
  }
}

export {
  useProduct,
}
