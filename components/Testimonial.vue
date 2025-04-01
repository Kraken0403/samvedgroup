<template>
    <div class="testimonial">
      <div class="container-wide">
        <div class="testimonial-wrapper">
          <div class="testimonial-image-wrapper">
            <div class="testimonial-big-image">
              <div>
                <img src="../assets/images/garden.jpg" alt="">
              </div>
            </div>
  
            <div class="testimonial-small-image">
              <Swiper
                :modules="modules"
                navigation
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                loop
              >
                <SwiperSlide v-for="n in 4" :key="n">
                  <video autoplay muted loop controls>
                    <source :src="`../assets/videos/${n}.mp4`" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Autoplay],
      };
    },
  };
  </script>
  
  <style lang="scss" src="./Testimonial.scss" scoped></style>
  