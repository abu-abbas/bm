<script setup>
import { toRef } from 'vue'
const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  }
})

const localSlug = toRef(props, 'slug')
</script>

<template>
  <div class="page-wrapper" :key="localSlug">
    <div class="header-main-wrapper">
      <div class="header-top-info">
        tes
      </div>
    </div>
    <!-- <nav ref="navbarTop" class="navbar navbar-expand-lg navbar-light bg-light fixed-top no-sidebar">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav> -->
    <div class="container mt-5">
      ini adalah halaman tenant an. {{ localSlug }}

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequuntur perspiciatis iste libero, sapiente vero, reiciendis, atque in officiis earum dolorum. Sapiente ipsam officiis quasi nostrum facilis similique ad?</p>
    </div>

  </div>
</template>

<style lang="scss">
body {
  background-color: #ffffff;

  .page-wrapper {
    width: 100%;
    margin-top: 151px;

    .header-main-wrapper {
      flex-direction: column;
      width: 100%;
      min-width: 1024px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      background-color: #ffffff;
      z-index: 999;
      position: fixed;
      top: 0px;
      right: 0px;
      left: 0px;
      border-bottom: 1px solid #f0f3f7;
      transition: transform 280ms ease 0s;
      height: 121px;

      .header-top-info {
        width: 100%;
        display: flex;
        height: 32px;
        z-index: 3;
        background-color: var(--NN50, #F0F3F7);
        padding: 0px 32px;
        position: fixed;
        -webkit-box-pack: justify;
        justify-content: space-between;
        left: 0px;
        right: 0px;
      }
    }
    // .navbar {
    //   &.no-sidebar {
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //   }

    //   &.fixed-top {
    //     position: fixed;
    //     transform: translateY(0px);
    //     transition: cubic-bezier(0.075, 0.82, 0.165, 1) .8s;
    //   }
    // }
  }
}

</style>
