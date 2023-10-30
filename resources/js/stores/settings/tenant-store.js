import { defineStore } from 'pinia'
import { _http, _route } from '@/js/utils/common'

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
    fetchTenantByUrl(url) {
      return new Promise((resolve, reject) => {
        _http.get(_route('backend.tenant.landing.get', { columns: 'url', search: url, fetch_first: true }))
          .then(res => {
            if (res.status == 200) {
              const data = res.data.data

              this.setItemByUrl(url, data)
              resolve(data)
            }
          })
          .catch(error => reject(error))
      })
    },
    setItemByUrl(url, payload) {
      this.items[url] = payload
    },
  }
})
