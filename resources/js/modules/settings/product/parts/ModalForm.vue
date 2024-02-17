<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { Field, Form as VeeForm } from 'vee-validate'
import { _http, _route, _alert, _confirm } from '@/js/utils/common'

import ImageUploader from '@/js/components/UploadingImage.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  initData: {
    type: [Object, null],
    required: false,
    default: () => {},
  },
  isEdit: {
    type: Boolean,
    required: true,
    default: false,
  }
})
onMounted(() => {
  fetchDataFromAPI();
  fetchDataCategoriesFromAPI();
});

const emits = defineEmits(['update:visible', 'submit'])

// declaration
const componentId = Math.random().toString(36).substring(2, 9)
const localVisible = computed(() => props.visible)
const localData = computed(() => props.initData)
const nameInput = ref(null)
const formRef = ref(null)
const showPreviewImage = ref(false)
const optionsTenant = ref([]);
const optionsCategory = ref([]);
const selectedTenant = ref(null);
const selectedCategory = ref([])

const fetchDataFromAPI = async () => {
  try {
    const response = await _http.get(_route('backend.tenant.get')).then(res => res)
    const data = await response.data.data;
    // Create an array of options with the 'text' property
    const optionData = data.map(item => ({
      text: item.name, // Replace 'name' with the actual property name you want to use
      value: item.id, // Replace 'value' with the actual property name you want to use
    }));

    optionsTenant.value = optionData;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
};

const fetchDataCategoriesFromAPI = async () => {
  try {
    const response = await _http.get(
      _route(
        'backend.category.get',{}
        )
        )
    .then(res => res);
    const data = await response.data.data;
    const optionData = data.map(item => ({
      label: item.name,
      value: item.url,
    }));

    optionsCategory.value = optionData;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  }
};

const onHandleShown = () => nextTick(() => {
  if (localData.value) {
    // console.log(localData.value);
    // selectedCondition.value = {value: localData.value.condition, text: localData.value.condition == 0 ? 'Baru' : 'Bekas'}
    selectedTenant.value = {value: localData.value.tenant_id, text: localData.value.tenant_name}
    selectedCategory.value = localData.value?.categories
    formRef.value.setFieldValue('name', localData.value.product_name)
    formRef.value.setFieldValue('description', localData.value.description)
    formRef.value.setFieldValue('min_qty', localData.value.minimum_qty)
    formRef.value.setFieldValue('min_unit', localData.value.minimum_unit)
    formRef.value.setFieldValue('price', localData.value.price)
    formRef.value.setFieldValue('tkdn', localData.value.tkdn_value)
    formRef.value.setFieldValue('ecatalogue', localData.value.ecatalogue)
    showPreviewImage.value = true
  }
})
const onHandleHide = () => emits('update:visible', false)
const onHandleRemoveImage = (index) => {
  if (index >= 0 && index < localData.value.images.length) {
    localData.value.images.splice(index, 1);

    // Jika ingin menyembunyikan gambar saat semua gambar dihapus
    if (localData.value.images.length === 0) {
      showPreviewImage.value = false;
    }
  }
}

const handleSubmit = (values, { resetForm }) => {
  const isEdit = props.isEdit
  const msgText = isEdit
    ? `Apakah Anda yakan untuk mengubah data ${values.name} ?`
    : `Apakah Anda yakin untuk menambahkan barang ${values.name} ?`
  const method = isEdit ? 'put' : 'post'
  const url = `backend.product.${ isEdit ? 'edit' : 'store' }`
  let hasChange = false

  if (isEdit) {
    Object.keys(values).forEach(k => {
      if (values[k] != localData.value[k])
        hasChange = true
    })
  }

  if (isEdit && !hasChange) return

  _confirm(
    {
      title: `${ isEdit ? 'Ubah' : 'Tambah' } barang`,
      text: msgText,
      icon: 'question',
    },
    () => _http.post(
      _route(url),
      { ...values, '_method': method, slug: isEdit ? localData.value?.slug : null },
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
      .then(res => res)
      .catch(error => {
        let code = error.response.status
        let message = error.response.data.message

        if ([409, 417, 500].includes(code)) {
          _alert.showValidationMessage(`${message}`)
          return
        }

        if (code == '422') {
          const errors = error.response.data.errors
          message = Object.keys(errors).map(key => {
            return Array.isArray(errors[key])
              ? errors[key].join(', ')
              : errors[key]
          }).join(', ')

          _alert.showValidationMessage(`${message}`)
          return
        }
      })
  )
    .then(({ value, isConfirmed, isDismissed }) => {
      // do nothing
      if (isDismissed) return false

      // show response
      if (isConfirmed && value.data.status == 'success') {
        _alert.fire({
          title: 'Tambah barang',
          text: value.data.message,
          icon: 'success'
        })

        resetForm()
        fetchDataCategoriesFromAPI()
        selectedCategory.value = []
        // selectedCondition.value = []
        selectedTenant.value = []
        emits('submit', value.data?.data)
        onHandleHide()
      }
    })
}
</script>

<template>
  <b-modal
    :id="componentId"
    v-model:visible="localVisible"
    :title="`${ props.isEdit ? 'Ubah' : 'Tambah' } Barang`"
    hide-footer
    @shown="onHandleShown"
    @hide="onHandleHide"
  >
    <template #default="{ hide }">
      <div class="px-3 pb-0 mb-0">
        <VeeForm ref="formRef" @submit="handleSubmit">
          <div class="form-group row">
            <label for="tenant" class="col-sm-3 col-form-label">
              Tenant
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                v-model="selectedTenant"
                label="Nama tenant"
                name="tenant"
                rules="required"
              >
                <vue-multiselect
                  v-model="selectedTenant"
                  :options="optionsTenant"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Pilih nama tenant"
                  v-bind="field"
                  label="text"
                  track-by="text">
                </vue-multiselect>
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label">
              Nama Barang
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Nama barang"
                name="name"
                rules="required|min:3|max:200"
              >
                <input
                  id="name"
                  ref="nameInput"
                  v-bind="field"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan nama barang"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="category" class="col-sm-3 col-form-label">
              Kategori
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                v-model="selectedCategory"
                label="Kategori barang"
                name="category"
                rules="required|min:3|max:200"
              >
                <el-select
                  v-bind="field"
                  v-model="selectedCategory"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  :reserve-keyword="false"
                  placeholder="Pilih atau ketik kategori"
                >
                  <el-option
                    v-for="item in optionsCategory"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
                  />
                </el-select>
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>
          <div class="form-group row">
            <label for="deskripsi" class="col-sm-3 col-form-label">
              Deskripsi
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Deskripsi"
                name="description"
                rules="required|max:2000"
              >
                <textarea
                  id="deskripsi"
                  v-bind="field"
                  type="text"
                  class="form-control custom-scroll"
                  placeholder="Masukkan deskripsi tentang barang"
                ></textarea>
                <div
                  v-if="errorMessage"
                  class="form-text text-danger fs-nano"
                >
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="min_qty" class="col-sm-3 col-form-label">
              Minimum Kuantiti
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Minimum kuantiti"
                name="min_qty"
                rules="required|min:1|max:11"
              >
                <input
                  id="min_qty"
                  v-bind="field"
                  type="number"
                  class="form-control"
                  placeholder="Masukkan jumlah minimum kuantity"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="min_unit" class="col-sm-3 col-form-label">
              Satuan
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Nama barang"
                name="min_unit"
                rules="required|min:1|max:11"
              >
                <input
                  id="min_unit"
                  v-bind="field"
                  class="form-control"
                  placeholder="Masukkan minimum unit"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="tkdn" class="col-sm-3 col-form-label">
              Nilai TKDN
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Nilai TKDN"
                name="tkdn"
                rules="required"
              >
                <input
                  id="tkdn"
                  v-bind="field"
                  class="form-control"
                  placeholder="Masukkan nilai TKDN"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="price" class="col-sm-3 col-form-label">
              Harga
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Harga"
                name="price"
                rules="required|min:1|max:200"
              >
                <input
                  id="price"
                  v-bind="field"
                  type="number"
                  class="form-control"
                  placeholder="Masukkan harga"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label for="ecatalogue" class="col-sm-3 col-form-label">
              Link e-Katalog
            </label>
            <div class="col-sm-9">
              <Field
                v-slot="{ field, errorMessage }"
                label="Link e-Katalog"
                name="ecatalogue"
              >
                <input
                  id="ecatalogue"
                  v-bind="field"
                  class="form-control"
                  placeholder="Masukkan link e-katalog"
                >
                <div v-if="errorMessage" class="form-text text-danger fs-nano">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3 col-form-label">
              Gambar
            </label>
            <div class="col-sm-9">
              <div v-if="showPreviewImage" class="preview-wrapper">
                <div v-for="(image, index) in localData.images" :key="index">
                  <img
                    :src="localData?.images[index]"
                    :alt="image.product_name"
                    class="image-preview"
                  >
                  <a href="javascript:void(0)" @click="() => onHandleRemoveImage(index)">
                    <FontAwesomeIcon :icon="['fas', 'trash-alt']"/>
                  </a>
                </div>
              </div>

              <Field
                v-else
                v-slot="{ field, errorMessage }"
                label="Gambar"
                name="pict"
                rules="required"
              >
                <ImageUploader
                  v-bind="field"
                  :error-message="errorMessage"
                />
              </Field>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-primary mr-2">
                <FontAwesomeIcon :icon="['fas', 'save']" class="mr-1"/>
                Simpan
              </button>
              <button type="reset" class="btn btn-light" @click="hide">
                Batal
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
    </template>
  </b-modal>
</template>

<style lang="scss">
textarea {
  &.form-control {
    min-height: 100px;
  }
}

.preview-wrapper {
  position: relative;
  width: 80px;
  padding: 4px;
  border: 1px solid #e4e6fc;
  border-radius: 5px;

  img {
    &.image-preview {
      width: 100%;
      height: 100%;
    }
  }

  > a {
    position: absolute;
    background-color: rgba($color: #fff, $alpha: .625);
    padding: 5px 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .2;
    transition: ease-in-out;

    svg {
      color: var(--danger);
    }

    &:hover {
      opacity: .875;
    }
  }
}
</style>
