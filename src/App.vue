<template>
  <div id="app" class="page">
    <div class="page-background">
      <img src="./assets/img/network.jpg" class="page-image"
            srcset="./assets/img/network.jpg 2500w, ./assets/img/network_1900.jpg 1900w, ./assets/img/network_1200.jpg 1200w, ./assets/img/network_768.jpg 768w, ./assets/img/network_300.jpg 300w">
    </div>

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mt-2">
        <div class="inner">
          <router-link :to="{ name: 'Home'}" class="masthead-brand"><img alt="autoverse" class="logo" src="./assets/img/autoverse.svg"></router-link>
          <nav class="nav nav-masthead justify-content-center">
            <router-link :to="{ name: 'Home'}" class="nav-link">services</router-link>
            <router-link :to="{ name: 'Projects'}" class="nav-link">projects</router-link>
          </nav>
        </div>
      </header>

      <main role="main" class="inner mb-auto mt-auto">
        <transition name="fade" mode="out-in" :duration="300">
          <router-view/>
        </transition>
      </main>

      <footer class="mastfoot d-flex flex-row justify-content-between">
        <div class="social">
          <a href="https://gitlab.com/autoverse" target="_blank"><i class="fa fa-gitlab"></i></a>
          <a href="https://github.com/autoverse" target="_blank"><i class="fa fa-github"></i></a>
        </div>
        <div class="contact">
          <i class="fa fa-envelope"></i>
          <img src="./assets/img/email.svg" alt="contact">
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import '../node_modules/fork-awesome/css/fork-awesome.min.css';
@import './assets/scss/app.scss';
</style>
