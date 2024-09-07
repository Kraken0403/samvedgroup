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
                            <p>Choosing Samved Group for our real estate needs was one of the best decisions we've made. Their commitment to quality and attention to detail are unmatched. From the initial consultation to the final handover, the entire process was seamless and professional. The homes are not just beautifully designed but also built with the highest standards of craftsmanship. We couldn't be happier with our new home and the exceptional service provided by Samved Group.</p>
                            <span>- Hardik A -</span>
                          </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="tc-card">
                            <p>Samved Group has truly exceeded our expectations. Their visionary approach to real estate development is evident in every project they undertake. The blend of modern design and practical functionality in their properties is impressive. The team's dedication to customer satisfaction and their ability to deliver on promises is remarkable. We are proud to be part of the Samved community and highly recommend them to anyone looking for quality and innovation in real estate.</p>
                            <span>- Shruti Prajapati -</span>
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