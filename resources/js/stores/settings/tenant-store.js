import { defineStore } from 'pinia'

export const useTenantStore = defineStore('tenant-store', {
  state: () => {
    return {
      items: {}
    }
  },

  getters: {
    getSelectedByUrl: state => url => state.items[url] || false
  },

  actions: {
    setItemByUrl(url, payload) {
      this.items[url] = payload
    }
  }
})
