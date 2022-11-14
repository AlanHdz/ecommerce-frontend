<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <h2>Hola Mundo</h2>
  <Navbar/>
  <RouterView />
</template>

<script>
  export default {
    components: {
      Navbar: NavbarVue
    }
  }
</script>

