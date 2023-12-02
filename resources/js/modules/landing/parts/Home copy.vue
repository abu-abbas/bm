<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { _settings } from '@/js/utils/common'
// const redirectTo = (page) => window.location = page

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
</script>

<template>
  <div class="container home-wrapper mt-5">

    <!-- Hero Section -->
    <header class="hero mb-2">
      <div class="hero-content">
        <h1>Welcome to Business Matching</h1>
        <p>Your Gateway to Finding Business Partners</p>
        <b-button variant="primary" href="#signup">Get Started</b-button>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="section mb-5">
      <div class="container text-center">
        <div class='row'>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <b-img src="http://bm.test/About.png" fluid-grow alt="Responsive image"></b-img>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h1 class="text-left">Business Matching</h1>
            <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum eos non excepturi maiores, cumque reiciendis perferendis dolorum amet quaerat officiis voluptas vel veniam voluptate quas asperiores nam illum. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse voluptate voluptas. Iusto sit iste incidunt dignissimos quo eum velit, maxime, officia quasi labore enim odio odit cumque eligendi magnam!</p>
          </div>
        </div>
        <!-- <p>Learn more about our platform and how we can help you connect with the right business partners.</p> -->
        <!-- Add more content here -->
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section mb-5">
      <div class="container">
        <h2 class="text-center">Our Services</h2>
        <p class="text-center">Discover the services we offer to make business matching easier for you.</p>
        <div class="row">
          <div class="col-md-4">
            <b-card>
              <div class="service-item text-center">
                <b-icon class='mb-2' icon="star" scale="3"></b-icon>
                <!-- Ganti dengan kelas ikon Font Awesome yang sesuai -->
                <h3>Search</h3>
                <p>Efficiently search for potential business partners.</p>
              </div>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card>
              <div class="service-item text-center">
                <b-icon class='mb-2' icon="check" scale="3"></b-icon>
                <!-- Ganti dengan kelas ikon Font Awesome yang sesuai -->
                <h3>Matchmaking</h3>
                <p>Our platform facilitates successful business matchmaking.</p>
              </div>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card>
              <div class="service-item text-center">
                <b-icon class='mb-2' icon="briefcase" scale="3"></b-icon>
                <!-- Ganti dengan kelas ikon Font Awesome yang sesuai -->
                <h3>Connect</h3>
                <p>Connect with potential partners and expand your network.</p>
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section mb-3">
      <div class="container">
        <h2 class="text-center">Contact Us</h2>
        <p class="text-center">If you have any questions or need assistance, feel free to reach out to us.</p>
        <b-row>
          <b-col md="6">
            <b-card title="Contact Form" class="contact-card">
              <b-form @submit="submitForm">
                <b-form-group label="Name:" label-for="name">
                  <b-form-input id="name" required></b-form-input>
                </b-form-group>

                <b-form-group label="Email:" label-for="email">
                  <b-form-input id="email" type="email" required></b-form-input>
                </b-form-group>

                <b-form-group label="Message:" label-for="message">
                  <b-form-textarea id="message" required></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card title="Contact Information" class="contact-card">
              <address>
                <p><strong>Business Matching Inc.</strong></p>
                <p>123 Business Street</p>
                <p>City, Country</p>
                <p>Email: info@businessmatching.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </address>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p>&copy; 2023 Business Matching Inc. All rights reserved.</p>
          </div>
          <div class="col-md-6">
            <div class="social-icons">
              <b-icon icon="facebook" scale="1"></b-icon> <!-- Ganti "facebook" dengan nama ikon yang sesuai -->
              <b-icon icon="twitter" scale="1"></b-icon>
              <b-icon icon="linkedin" scale="1"></b-icon>
              <b-icon icon="instagram" scale="1"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('https://static.vecteezy.com/system/resources/previews/014/024/940/non_2x/businessman-matching-pieces-of-puzzle-for-arrow-lamp-and-bridge-puzzle-business-puzzle-piece-set-concept-colored-flat-graphic-illustration-isolated-vector.jpg');
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  position: relative;
  /* Menambahkan posisi relatif pada elemen .hero */
}

/* Tambahkan lapisan semitransparan */
.hero::before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  /* Warna latar belakang semitransparan */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* Memastikan lapisan berada di bawah teks */
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.social-icons {
  font-size: 24px;

  b-icon {
    color: #fff;
    margin: 0 10px;
  }
}

/* Add your custom CSS styles here */
</style>