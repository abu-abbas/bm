<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swal from 'sweetalert2';
const btnLogout = ref(null)

const onHandleLogout = function () {
  window.doLogout.apply(this, arguments)
}

onMounted(() => {
  if (btnLogout.value)
    btnLogout.value.addEventListener('click', onHandleLogout)
})

onBeforeUnmount(() => {
  if (btnLogout.value)
    btnLogout.value.removeEventListener('click', onHandleLogout)
})

const showSwal = () => {
  Swal.fire({
    title: 'Maaf,',
    text: 'Saat ini fitur yang dituju masih dalam pengembangan.',
    icon: 'info',
    confirmButtonText: 'Baik',
  });
};
</script>

<template>
  <div class="nav-wrap">
    <nav class="navbar navbar-expand-lg navbar-light navku">
      <a class="navbar-brand" href="#">Bussiness Matching</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-white"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Tenant</a>
          </li>
          <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link text-white dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <div class="container-fluid p-0">
    <div class="row justify-content-center align-items-center waverow mx-0">
      <div class="col-lg-5 col-md-12 col-xs-12 col-12">
        <div class="text-white">
          <h2>Bussiness Matching</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit facere, eaque reprehenderit commodi nulla ad dolor nisi doloribus corporis distinctio sequi! Iure tenetur atque numquam commodi vitae tempore quos saepe.</p>
        </div>
      </div>
      <div class="col-lg-5">
        <b-img id="img" src="http://bm.test/shop.png" fluid alt="Responsive image"></b-img>
      </div>
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,256L60,250.7C120,245,240,235,360,208C480,181,600,139,720,144C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>

    <div class="row justify-content-center align-items-center mx-0 bg-white mt-3 ml-5 mr-5">
      <div class="col-12 mb-3">
        <h2 class="font-weight-bold text-dark text-center title">What you gain by joining us</h2>
      </div>
      <div class="col-lg-4 col-md-12 col-xs-12 col-12 mt-2">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-xs-2 col-2 iconImage">
            <b-img src="http://bm.test/icon/search.png" fluid class="align-items-center" style="width: 50px; height: 50px;"></b-img>
          </div>
          <div class="col-lg-10 col-md-10 col-xs-10 col-10">
            <h4 class="text-dark">Search</h4>
            <p>Efficiently search for potential business partners.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-xs-12 col-12 mt-2">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-xs-2 col-2 iconImage">
            <b-img src="http://bm.test/icon/puzzle.png" fluid class="align-items-center" style="width: 50px; height: 50px;"></b-img>
          </div>
          <div class="col-lg-10 col-md-10 col-xs-10 col-10">
            <h4 class="text-dark">Matchmaking</h4>
            <p>Our platform facilitates successful business matchmaking.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-xs-12 col-12 mt-2">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-xs-2 col-2 iconImage">
            <b-img src="http://bm.test/icon/handshake.png" fluid class="align-items-center" style="width: 50px; height: 50px;"></b-img>
          </div>
          <div class="col-lg-10 col-md-10 col-xs-10 col-10">
            <h4 class="text-dark">Connect</h4>
            <p>Connect with potential partners and expand your network.</p>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary mt-4 btn-lg btn-join" @click="showSwal">Join Us</button>
    </div>
    <div class="container mt-5 my-5">
      <div class="row justify-content-center align-items-center mx-0 bg-white mt-3">
        <div class="col-12 mb-3">
          <h2 class="font-weight-bold text-dark text-center title">Our Vendor</h2>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://thumb.viva.co.id/media/frontend/thumbs3/2017/01/04/586c7a2428fe8-logo-asus_665_374.jpg" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://image1ws.indotrading.com/s3/webp/co25648/companylogo/logo_gps.jpg" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://www.softorb.co.id/wp-content/uploads/2022/10/Priview-Web.jpg" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://www.cisangkan.co.id/assets/images/partners/cisangkan.png" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://gravcode.com/wp-content/uploads/2019/08/Logomark-1-1024x1024.png" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://zonaebt.com/wp-content/uploads/2021/11/zonaebt-9-1024x394.jpg" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://ihma.org/wp-content/uploads/2020/11/PURA-GROUP.jpg" fluid class="align-items-center"></b-img>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 col-12 mt-2">
          <b-img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r5fgevdavh3vzmlurlx8" fluid class="align-items-center"></b-img>
        </div>
        <button type="button" class="btn btn-primary mt-4 btn-lg btn-join" @click="showSwal">More Vendor</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .waverow{
    position: relative;
    width: 100%;
    height: 70vh;
    background: linear-gradient(45deg, #0D5CFE,#43AFFF);
  }

  #img{
    position: relative;
    max-width: 50%;
    z-index: 10;
  }

  #img:hover{
    transform: scale(1.02);
  }

  .wave{
    position: absolute;
    bottom: -1px;
    left: 0px;
  }



  .row {
    position: relative; /* Tambahkan ini untuk mengatur stacking context */
  }


  .iconImage{
    display: flex;
    justify-content: end;
    padding: 0px;
  }

  .navku{
    left: 0px !important;
    right: 0px !important;
  }


  .title::before{
    content: '';
    background: #43AFFF;
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(50px);
  }
  .title::after{
    content: '';
    background: #43AFFF;
    height: 10px;
    width: 50px;
    margin-left: auto;
    mrgin-right: auto;
    display: block;
    transform: translateY(5px);
  }

  .btn-join{
    border: none;
    border-radius: 20px;
    background: linear-gradient(45deg, #0D5CFE,#43AFFF);
  }

</style>
