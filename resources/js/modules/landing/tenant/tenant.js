import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useTenantStore } from '@/js/stores/settings/tenant-store.js'

export function useTenant(slug) {
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
      .finally(() => setTimeout(() => loading.value = false, 500))
  }

  onMounted(() => fetchTenant())

  return {
    data,
    found,
    loading
  }
}
