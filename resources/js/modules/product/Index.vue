<template>
  <section class="landing-wrapper">
    <router-view :key="$route.fullPath"></router-view>
  </section>
</template>
