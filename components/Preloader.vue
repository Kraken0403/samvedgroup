<template>
    <div class="preloader" v-if="isLoading">
      <div class="loader">Loading...</div> <!-- Replace with any animation or custom design -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isLoading = ref(true);
  
  onMounted(() => {
    // Simulate a loading process and hide preloader after everything is ready
    const hideLoader = () => {
      setTimeout(() => {
        isLoading.value = false;
      }, 200); // Add delay to ensure components like Locomotive Scroll and MouseFollower are initialized
    };
  
    hideLoader();
  });
  
  onBeforeUnmount(() => {
    isLoading.value = false; // Ensure preloader hides when the component is unmounted
  });
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: 9999;
  }
  
  .loader {
    color: #fff;
    font-size: 1.5rem;
  }
  </style>
  