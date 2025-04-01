<template>
  <div class="preloader">
    <div class="preloader-content">
      <h2>Logo</h2>
    </div>
  </div>
</template>

<script setup>
// No logic needed here – controlled via props in app.vue
</script>

<style scoped>
/* Optional styling */
.preloader {
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 1500;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
