<template>
  <div>
    <NuxtLayout>
      <Preloader v-if="isPageLoading" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import Preloader from '~/components/Preloader.vue';
import MouseFollower from 'mouse-follower';
import { useNuxtApp } from '#app';

const router = useRouter();
const isPageLoading = ref(true);
let cursor;

const initMouseFollower = () => {
  cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
      '-inverse-2': '.custom-button',
      '-pointer': '.link, button, a',
      '-hidden': 'iframe',
      '-inverse': '.dark-bg',
      '-text': '.custom-slider',
    },
    speed: 0.55,
    ease: 'expo.out',
    skewingText: 2,
    skewingIcon: 2,
  });
};

// Function to return a Promise for image loading
const loadImages = () => {
  const images = Array.from(document.images);

  return Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve(); // Already loaded images
        } else {
          img.onload = resolve; // Resolve when image finishes loading
          img.onerror = resolve; // Handle error case
        }
      });
    })
  );
};

onMounted(() => {
  isPageLoading.value = true;

  // Wait for all images and content to load
  loadImages().then(() => {
    setTimeout(() => {
      isPageLoading.value = false; // Hide preloader once images are loaded
      document.body.classList.remove('is-loading');
      document.body.classList.add('is-loaded');
    }, 500); // Optional delay for smooth transition
  });

  MouseFollower.registerGSAP(gsap);
  initMouseFollower();

  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.addEventListener('mousemove', () => {
      cursor.show();
    });
  });

  const sliders = document.querySelectorAll('.swiper');
  sliders.forEach((i) => {
    i.addEventListener('mouseenter', () => {
      cursor.show();
      cursor.setImg('/arrows.png');
    });

    i.addEventListener('mousemove', () => {
      cursor.show();
    });

    i.addEventListener('mousedown', () => {
      cursor.show();
      cursor.setImg('/arrows.png');
    });

    i.addEventListener('mouseleave', () => {
      cursor.removeImg();
    });
  });
});

// Watch route changes to reset the cursor state and reinitialize Locomotive Scroll
watch(
  () => router.currentRoute.value,
  () => {
    cursor.destroy(); // Remove the current cursor instance
    initMouseFollower(); // Reinitialize cursor
  }
);
</script>

<style src="./components/cursor.scss"></style>
