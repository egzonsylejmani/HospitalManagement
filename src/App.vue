  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import footer from './components/footer.vue'
</script>

<template>
<Navbar />
  <RouterView />
  <footer />

</template>