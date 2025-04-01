<template>
  <div>
    <!-- Preloader -->
    <transition name="fade">
      <Preloader v-if="isPageLoading" />
    </transition>

    <!-- Page Content Transition -->
    <NuxtLayout>
      <NuxtPage :transition="pageTransition" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useNuxtApp } from '#app'
import Preloader from '~/components/Preloader.vue'

const route = useRoute()
const isPageLoading = ref(true)
const nuxtApp = useNuxtApp()

watch(() => route.fullPath, (newPath) => {
  console.log('🔁 ROUTE CHANGED TO:', newPath)
})

// 👇 Page transition config
const pageTransition = {
  name: 'page',
  mode: 'out-in'
}

// ✅ Initial page load
onMounted(() => {
  isPageLoading.value = true
  setTimeout(() => {
    isPageLoading.value = false
    document.body.classList.remove('is-loading')
    document.body.classList.add('is-loaded')
  }, 1000)
})

// ✅ Preloader for navigation
nuxtApp.hook('page:start', () => {
  isPageLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  console.log('✅ Nuxt finished page render')
  setTimeout(() => {
    isPageLoading.value = false
  }, 600)
})
</script>

<style>
/* 🔄 Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 🌀 Preloader fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
