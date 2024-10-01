<template>
    <div data-scroll-section>
      <div class="gallery-main">
        <div class="container-wide">
          <div class="gallery-content" v-if="galleryData && galleryData.length">
            <div class="gl-row">
              <div
                class="gl-col gl-col-33"
                v-for="(img, index) in galleryData"
                :key="index"
              >
                <div class="gl-card">
                  <a :href="img.image.url" class="gallery-item" data-gallery="gallery">
                    <img :src="img.image.url" :alt="img.image.alt || `Image ${index + 1}`" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useAsyncData, createError } from 'nuxt/app';
  const { client } = usePrismic();
  
  const galleryData = ref([]);
  
  const { data, pending, error } = await useAsyncData('gallery', async () => {
    const document = await client.getSingle('gallery');
  
    if (document) {
      return document.data.slices[0].primary.gallery_image;
    } else {
      throw createError({ statusCode: 404, message: 'Gallery Not Found' });
    }
  });
  
  if (data.value) {
    galleryData.value = data.value;
  }
  
  const initLightbox = async () => {
    if (process.client) {
      try {
        const GLightbox = (await import('glightbox')).default;
        await import('glightbox/dist/css/glightbox.min.css');
  
        const lightbox = GLightbox({
          selector: '.gallery-item',
          loop: true,
          closeButton: true,
          touchNavigation: true,
          zoomable: true,
          openEffect: 'fade',
          closeEffect: 'fade',
          slideEffect: 'slide',
          descPosition: 'none', // Disable description (captions)
        });
      } catch (err) {
        console.error('Error initializing GLightbox:', err);
      }
    }
  };
  
  onMounted(() => {
    if (galleryData.value.length) {
      initLightbox();
    }
  });
  </script>
  

<style src="./GalleryContent.scss" lang="scss" scoped>

</style>