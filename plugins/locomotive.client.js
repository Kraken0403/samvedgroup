// plugins/locomotive.client.js

import { defineNuxtPlugin } from '#app';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  let locomotiveScroll;

  nuxtApp.hook('app:mounted', () => {
    const scrollEl = document.querySelector('[data-scroll-container]');

    if (!scrollEl) {
      console.error('No scroll container found');
      return;
    }

    locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    locomotiveScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
    ScrollTrigger.refresh();

    // Provide the locomotive instance to be used anywhere in the app
    nuxtApp.provide('locomotiveScroll', locomotiveScroll);
  });

  nuxtApp.hook('page:finish', () => {
    if (locomotiveScroll) {
      locomotiveScroll.update(); // Update on page transition
    }
  });
});
