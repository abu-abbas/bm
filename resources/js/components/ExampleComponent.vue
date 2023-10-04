<script setup>
// import { ref } from 'vue'
// import { Modal } from 'bootstrap'

// const modalRef = ref(null)
// const message = ref('Helooo')

// const onHandleModal = () => {
//   const modal = new Modal(modalRef.value)
//   modalRef.value.addEventListener('shown.bs.modal', () => console.log('shown'))
//   setTimeout(() => modal.show(), 250)
// }
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Example Component</div>

        <div class="card-body">
          {{ message }} I'm an example component.

          <!-- <button class="btn btn-primary" @click="onHandleModal">open modal</button> -->
        </div>


        <!-- <div id="myModal" ref="modalRef" class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
