import{Y as i}from"./vue-multiselect.esm-0a551888.js";import{hn as o,ho as c,_ as m}from"./vee-validate-i18n.esm-a7fc52c1.js";const f=i("tenant-store",{state:()=>({items:{}}),getters:{getSelectedByUrl:t=>e=>t.items[e]||!1},actions:{fetchTenantByUrl(t){return new Promise((e,r)=>{var n;o.get(c("backend.landing.tenant.get",{columns:"url",search:t,event:(n=m.events[0])==null?void 0:n.id,fetch_first:!0})).then(s=>{if(s.status==200){const a=s.data.data;this.setItemByUrl(t,a),e(a)}}).catch(s=>r(s))})},setItemByUrl(t,e){this.items[t]=e}}});export{f as u};
