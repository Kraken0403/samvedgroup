<template>
  <div data-scroll-container>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';

const nuxtApp = useNuxtApp();
const router = useRouter();

let cursor;

const initLocomotiveScroll = () => {
  if (nuxtApp.$locomotiveScroll) {
    nuxtApp.$locomotiveScroll.update(); // Update if already initialized
  } else {
    console.error('Locomotive Scroll instance not found');
  }
};

const reinitializeLocomotiveScroll = () => {
  if (nuxtApp.$locomotiveScroll) {
    nuxtApp.$locomotiveScroll.destroy(); // Destroy existing instance
    setTimeout(() => {
      nuxtApp.$locomotiveScroll.init(); // Reinitialize
    }, 100); // Short delay to ensure the reinitialization happens smoothly
  }
};

const resetCursorState = () => {
  if (cursor) {
    cursor.remove(); // Remove the current cursor instance
    setTimeout(() => {
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
    }, 50); // Delay to ensure the cursor instance is properly reset
  }
};

onMounted(() => {
  // Initialize Locomotive Scroll and the custom cursor when the page loads
  initLocomotiveScroll();

  MouseFollower.registerGSAP(gsap);
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

  const divs = document.querySelectorAll('div');
  if (divs.length) {
    divs.forEach(div => {
      div.addEventListener('mousemove', () => {
        cursor.show();
      });
    });
  }

  const sliders = document.querySelectorAll('.swiper');
  if (sliders.length) {
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
  } else {
    console.warn("No elements found with class 'custom-slider'");
  }
});

// Watch route changes to reinitialize Locomotive Scroll and reset cursor
watch(
  () => router.currentRoute.value,
  () => {
    // Reinitialize Locomotive Scroll and reset cursor state on route change
    setTimeout(() => {
      reinitializeLocomotiveScroll(); // Reinitialize Locomotive Scroll
      resetCursorState(); // Reset the cursor state
    }, 500); // Delay to ensure the page content is updated
  }
);
</script>

<style src="./components/cursor.scss"></style>
