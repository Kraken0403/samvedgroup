<template>
    <div v-if="data" class="pc">
      <div class="container-wide">
        <div class="pc-wrapper">
          <div class="pc-intro">
            <div class="row">
              <div class="col-50">
                <div class="pc-head">
                  <h2>{{ data.slices[0].primary.project_title }}</h2>
                </div>
              </div>
              <div class="col-50">
                <div class="pc-content">
                  <p>{{ data.slices[1].primary.intro_para_one }}</p>
                  <p>{{ data.slices[1].primary.intro_para_two }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="pc-images-one">
            <div class="pc-image-one w-70">
              <img :src="data.slices[1].primary.portrait_image_one.url" alt="">
            </div>
            <Swiper :slides-per-view="2" :space-between="15" navigation :pagination="{ clickable: true }">
              <SwiperSlide v-for="(img, index) in data.slices[1].primary.project_images" :key="index">
                <img :src="img.project_image.url" :alt="'Image ' + index" />
              </SwiperSlide>
            </Swiper>
          </div>
  
          <div class="pca-video-wrapper">
            <div class="pca-video">
              <!-- <video controls :src="data.slices[1].primary.video_link?.url"></video> -->
              <img src="" alt="">
            </div>
            <div class="pca-map">
              <h2>The Vision for {{ data.slices[0].primary.project_title }}</h2>
              <p>{{ data.slices[1].primary.project_vision[0]?.text }}</p>
              <div class="pca-map-buttons">
                <Button :link="data.slices[1].primary.google_map.url" buttonText="Visit Us" linkColor="#111111" />
                <Button :link="data.slices[1].primary.brochure.url" buttonText="Download Brochure" linkColor="#111111" />
              </div>
            </div>
          </div>

          <div class="pc-map" v-html="data.slices[2].primary.iframecode[0]?.text"></div>

  
          <div class="pc-amenities">
            <h2>The Features</h2>
            <div class="pca-wrapper">
              <div class="pca-item" v-for="(feat, index) in data.slices[1].primary.features" :key="index">
                <h6>{{ feat.feature_title }}</h6>
                <p>{{ feat.feature_detail }}</p>
              </div>
            </div>
          </div>
  
          <!-- <div class="book-now">
            <NuxtLink :to="{ path: '/book-project', query: { projectTitle: encodeURIComponent(data.slices[0].primary.project_title) } }">
              <h1>Book Now</h1>
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination } from 'swiper/modules';
  
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
  
  // Swiper configuration
  const swiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  </script>
  
  <style lang="scss" src="./ProjectContent.scss">
  /* Modal styles */
  </style>
  