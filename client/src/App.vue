<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navB from './views/Navbar.vue'

</script>

<template>
    <h1 class="lb">CRUD</h1>
    <navB class="nav"/>


  <RouterView />
</template>

<style scoped>
  .nav{
    margin: 20px 20px;
  }
  .lb{
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
