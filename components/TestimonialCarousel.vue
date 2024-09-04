<template>
    <div class="tc" data-scroll-section>
        <div class="container-wide">
            <div class="tc-wrapper">
                <div class="tc-head">
                    <h2>What our Clients Say</h2>
                </div>

                <div class="tc-content">
                    <swiper
                    :slides-per-view="1"
                    :space-between="0"
                    :autoplay="true"
                    :pagination="true"
                    >

                    <swiper-slide>
                        <div class="tc-card">
                            <p>Our vision is to be at the forefront of  innovation,  shaping a world where every structure is a work of art, every space is  an experience, and every project counts. Join us on this journey as we  embark on an exciting adventure to make dreams a reality. Together, we  will build, craft, and dream of a better, more beautiful future for all.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="tc-card">
                            <p>Our vision is to be at the forefront of  innovation,  shaping a world where every structure is a work of art, every space is  an experience, and every project counts. Join us on this journey as we  embark on an exciting adventure to make dreams a reality. Together, we  will build, craft, and dream of a better, more beautiful future for all.</p>
                        </div>
                    </swiper-slide>
                        
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, A11y } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [ Pagination, A11y, Pagination],
      };
    },
  };
</script>

<style lang="scss" src="./TestimonialCarousel.scss" scoped>

</style>