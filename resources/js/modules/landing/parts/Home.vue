<script setup>
import { ref, watch } from 'vue';
import { _settings } from '@/js/utils/common'
import { _http, _route } from '@/js/utils/common.js'
import moment from 'moment'

import '@theme/appland/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@theme/appland/assets/vendor/glightbox/js/glightbox.min.js'
import '@theme/appland/assets/vendor/swiper/swiper-bundle.min.js'
import '@theme/appland/assets/vendor/php-email-form/validate.js'
import '@theme/appland/assets/js/main.js'

const showSidebar = ref(false);
const localEvent = ref(null);
const trueMobile = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const checkIsMobile = () => {
  showSidebar.value == true ? showSidebar.value = window.innerWidth <= 768 : showSidebar.value = false
  trueMobile.value = window.innerWidth <= 768
};

const fetchEvent = () => {
  _http.get(
    _route(
      'backend.landing.event.get',
      {
        fetch_first: true,
      }
    )
  )
  .then(res => {
    localEvent.value = res.data
    console.log(localEvent.value.data);
  })
}

watch(() => window.innerWidth, () => {
  checkIsMobile();
});

checkIsMobile();
fetchEvent();
</script>

<template>
  <div class="body-wrapper">
    <header id="header" class="fixed-top  header-transparent">
      <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
          <h1><a href="index.html">Bussiness Matching</a></h1>
        </div>

        <nav id="navbar" class="navbar navku">
          <ul>
            <li v-if="_settings.user" class="dropdown"><a href="#"><span>{{ _settings.user.name }}</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="javascript:void(0)" onclick="doLogout.apply(this, arguments)">Logout</a></li>
              </ul>
            </li>
            <li v-else>
              <a class="getstarted scrollto" href="/login">Login</a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle" @click="toggleSidebar"></i>
          <aside :class="{ 'active': showSidebar }" class="sidebar">
            <div v-if="_settings.user">
              <div class="profile-container" style="text-align: center;">
                <img alt="image" src="@theme/stisla/assets/img/avatar/avatar-1.png" class="img-fluid rounded-circle" style="max-width: 30%; display: block; margin: 0 auto;">
                <div style="margin-top: 3%;">
                  {{ _settings.user.name }}
                </div>
              </div>
              <a class="getstarted scrollto-mobile-logout" style="color: white;" href="javascript:void(0)" onclick="doLogout.apply(this, arguments)">Logout</a>
            </div>
            <div v-else>
              <a class="getstarted scrollto-mobile" href="/login">Login</a>
            </div>
          </aside>
        </nav>
      </div>
    </header>
    <section id="hero" class="d-flex align-items-center">

      <div class="container">
        <div class="row">
          <div
            class="col-lg-8 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up">
            <div>
              <h1>{{ localEvent?.data?.event_name }}</h1>
              <h2>{{ localEvent?.data?.event_header }}</h2>
              <h6 style="margin-bottom: 3%;">{{ localEvent?.data?.event_subheader }}</h6>
              <a class="download-btn" :style="trueMobile ? 'width:min-content' : 'width:max-content'"><i class="bx bx-calendar"></i> {{ moment(localEvent?.data?.start_at).format('D MMMM YYYY') }}</a>
              <span style="margin-right: 1%; margin-left: 1%;"> sampai </span>
              <a class="download-btn" :style="trueMobile ? 'width:min-content' : 'width:max-content'"><i class="bx bx-calendar-check"></i> {{ moment(localEvent?.data?.finish_at).format('D MMMM YYYY') }}</a>
              <h6 style="margin-top: 5%;"><i class="bx bx-location-plus"></i>{{ localEvent?.data?.location }}</h6>
            </div>
          </div>
          <div class="col-lg-4 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
            <img src="shop.png" class="img-fluid" style="height:min-content" alt="">
          </div>
        </div>
      </div>

    </section>

    <main id="main">

    </main>

    <footer id="footer">
      <div class="container py-4">
        <div class="credits">
          Copyright &copy; 2023
          <div class="bullet"></div>
          <span>
            Crafting with <b-icon icon="heart" scale="1"></b-icon>
            By <a href="#">Momoy Sumomoy</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import '@theme/appland/assets/css/style.css';
@import '@theme/appland/assets/vendor/bootstrap/css/bootstrap.min.css';
@import '@theme/appland/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@theme/appland/assets/vendor/boxicons/css/boxicons.min.css';
@import '@theme/appland/assets/vendor/glightbox/css/glightbox.min.css';
@import '@theme/appland/assets/vendor/swiper/swiper-bundle.min.css';

.navku {
  left: 0px !important;
  right: 0px !important;
}

a.getstarted {
  text-decoration: none;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: white;
  color: white;
  position: fixed;
  top: 0;
  left: -250px;
  transition: left 0.3s ease-in-out;
}

.sidebar.active {
  left: 0;
}

.getstarted.scrollto-mobile {
  margin-left: 5% !important;
  margin-right: 5% !important;
  margin-top: 13%;
  margin-bottom: 5%;
}
.getstarted.scrollto-mobile-logout {
  background-color: red;
  margin-left: 5% !important;
  margin-right: 5% !important;
  margin-top: 5%;
  margin-bottom: 5%;
  transition: background-color 0.3s ease;
}

.getstarted.scrollto-mobile-logout:hover {
  background-color: rgb(200, 2, 2);
}

.getstarted.scrollto-mobile-logout:active {
  background-color: rgb(200, 2, 2) !important;
}

.getstarted.scrollto-mobile-logout:visited  {
  background-color: rgb(200, 2, 2) !important;
}

.profile-container {
  margin-top: 5%;
  margin-bottom: 5%;
  text-decoration: none;
}
</style>