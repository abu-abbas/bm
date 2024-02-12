import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTenantStore } from '@/js/stores/settings/tenant-store.js'

export function useTenant(slug) {
  const router = useRouter()
  const tenantStore = useTenantStore()
  const { getSelectedByUrl } = storeToRefs(tenantStore)

  const data = ref(null)
  const found = ref(false)
  const loading = ref(false)

  const fetchTenant = () => {
    if (loading.value) return

    loading.value = true
    const hasSelectedData = getSelectedByUrl.value(slug)
    if (hasSelectedData) {
      data.value = hasSelectedData
      found.value = true
      loading.value = false
      return
    }

    tenantStore.fetchTenantByUrl(slug)
      .then(() => {
        data.value = getSelectedByUrl.value(slug)
        found.value = true
      })
      .catch(() => found.value = false)
      .finally(() => setTimeout(() => loading.value = false, 100))
  }

  const onHandleSelectedProduct = (productSlug) => {
    router.push({ name: 'tenant.product', params: { tenantSlug: slug, productSlug } })
  }

  onMounted(() => fetchTenant())

  return {
    data,
    found,
    loading,
    onHandleSelectedProduct
  }
}
