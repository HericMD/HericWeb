<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

body {
  background-color: rgba(128, 128, 128, 0.5);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
main {
  height: 80%;
}
</style>
