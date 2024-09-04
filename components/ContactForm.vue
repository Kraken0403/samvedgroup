<template>
    <div class="contact-form" data-scroll-section>
        <div class="container-wide">
            <div class="cf-wrapper">
                <div class="cf-details">
                    <div class="cf-detail-card">
                        <h2>Our Address</h2>
                        <p>
                            SAMVED INFRA, Shop No 10, 1st Floor, City Light Complex, T B Road, Vijapur, Vajapur, Mahesana, Gujarat, 382875
                        </p>
                    </div>
                    <div class="cf-detail-card">
                        <h2>Contact Details</h2>
                        <p>
                            salessamvedgroup@gmail.com<br/>
                            +91-9909223336<br/>
                            +91-9512447776
                        </p>
                        
                    </div>
                    <div class="cf-detail-card">
                        <h2>Our Socials</h2>
                        <div class="social-icons">
                            <Icon name="uil:instagram"  />
                            <Icon name="uil:facebook" />
                            <Icon name="uil:linkedin"  />
                        </div>
                    </div>
                </div>
                <div class="cf-form">
                    <form action="">
                        
                        <div class="form-group">
                            <h2>Fill up the form</h2>
                            <input type="text" name="name" placeholder="name">
                            <input type="email" name="email" placeholder="email">
                            <input type="tel" name="num" placeholder="mobile number">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <Button buttonText="submit"/>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Scrollbar, A11y } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

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
        modules: [ Pagination, Scrollbar, A11y],
      };
    },
  };
</script> -->

<style lang="scss" src="./ContactForm.scss" scoped>

</style>