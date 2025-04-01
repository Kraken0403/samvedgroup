<template>
  <div data-scroll-section>
    <div class="gallery-main">
      <div class="container-wide">
        <div class="gallery-content" v-if="!pending && galleryData.length">
          <div class="grid-layout">
            <div
              class="grid-item"
              v-for="(img, index) in galleryData"
              :key="index"
            >
              <a
                v-if="img.image?.url"
                :href="img.image.url"
                class="gallery-item"
                data-gallery="gallery"
              >
                <img
                  :src="img.image.url"
                  :alt="img.image.alt || `Image ${index + 1}`"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useAsyncData, createError } from 'nuxt/app'
const { client } = usePrismic()

const galleryData = ref([])

const { data, pending } = await useAsyncData('gallery', async () => {
  const document = await client.getSingle('gallery')
  if (document) {
    return document.data.slices[0].primary.gallery_image
  } else {
    throw createError({ statusCode: 404, message: 'Gallery Not Found' })
  }
})

if (data.value) {
  galleryData.value = data.value
}

const initLightbox = async () => {
  if (process.client) {
    try {
      const GLightbox = (await import('glightbox')).default
      await import('glightbox/dist/css/glightbox.min.css')

      GLightbox({
        selector: '.gallery-item',
        loop: true,
        closeButton: true,
        touchNavigation: true,
        zoomable: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        slideEffect: 'slide',
        descPosition: 'none'
      })
    } catch (err) {
      console.error('Error initializing GLightbox:', err)
    }
  }
}

onMounted(async () => {
  if (galleryData.value.length) {
    await nextTick()
    initLightbox()
  }
})
</script>

<style scoped lang="scss" src="./GalleryContent.scss"></style>
