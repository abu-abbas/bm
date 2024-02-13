import { defineStore } from 'pinia'

export const useProductStore = defineStore('product-store', {
  state: () => {
    return {
      items: []
    }
  },

  getters: {
    getSelectedByTenantAndUrl: state => (tenantSlug, url) => state.items.find(i => i.slug == url && i.tenant_slug == tenantSlug)
  },

  actions: {
    setItem(payload) {
      const idx = this.items.findIndex(i => i.slug == payload.slug)
      if (idx === -1) {
        this.items.push(payload)
      } else {
        this.items[idx] = payload
      }
    },
  }
})
