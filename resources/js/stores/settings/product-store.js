import { defineStore } from 'pinia'

export const useProductStore = defineStore('product-store', {
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
    },
  }
})
