<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
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

