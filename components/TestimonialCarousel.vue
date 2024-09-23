<template>
    <div class="tc" data-scroll data-scroll-section>
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
                            <p>Such A very Good location
                              Very Good Landscaping In kudasan area
                              Premium Landscaping Work From High profesonal Landscaping Designer
                              Project by Experience Developer since last 25years of work in Gandhinagar City
                            </p>
                            <span>- Mukund Makwana -</span>
                            <span> 5/5 stars </span>
                          </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="tc-card">
                            <p>Best location & premium project in kudasan, Gandhinagar.</p>
                            <span>- Jigar Raval -</span>
                            <span> 5/5 stars </span>

                          </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="tc-card">
                            <p>Great project in kudasan.</p>
                            <span>- Patel Suhas -</span>
                            <span> 5/5 stars </span>

                          </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="tc-card">
                            <p>Its Grand luxurious project in kudasan Area.
                              Different type of amenities And luxurious 4 bhk & 3 bhk & shops
                            </p>
                            <span>- Krupa -</span>
                            <span> 5/5 stars </span>

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