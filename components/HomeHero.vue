<template>
    <div class="home-hero" data-scroll-section>
        <div class="hero-slider" data-scroll data-scroll-speed="-3.9">
          <div class="hero-slider-text">
            <h1>
              <span class="first-word">Creating </span>

              <div class="words">
                <span>Excellence</span>
              </div>
          </h1>
          </div>
          <div class="container-wide">
            <div class="hero-icons">
              <Icon name="uil:instagram" style="color: white" />
              <Icon name="uil:facebook" style="color: white" />
              <Icon name="uil:linkedin" style="color: white" />
            </div>
          </div>
          
            <swiper
                :slides-per-view="1"
                :space-between="0"
                :autoplay="true"
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                    >
                    <swiper-slide>
                        <div class="hero-card">
                            <img src="../assets/images/balcony.png" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="hero-card">
                            <img src="../assets/images/balcony.png" alt="">
                            
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="hero-card">
                            <img src="../assets/images/balcony.png" alt="">

                        </div>
                    </swiper-slide>
                </swiper>
        </div>
    </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Scrollbar, A11y } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import gsap from 'gsap';
  import { onMounted } from 'vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      onMounted(() => {
        const textArray = ["Legacy", "Comfort", "Excellence"];
        const replacingText = document.querySelector('.words span');
        let currentIndex = 0;

        const changeText = () => {
          gsap.to(replacingText, {
            y: '-100%',
            duration: 0.8,
            ease: 'power4.inOut',
            
            onComplete: () => {
              currentIndex = (currentIndex + 1) % textArray.length;
              replacingText.textContent = textArray[currentIndex];
              gsap.fromTo(replacingText, 
                { y: '100%'}, 
                { y: '0%', duration: 0.8, ease: 'power4.inOut'  });
            }
          });
        };

        const loopTextChange = () => {
          changeText();
          gsap.delayedCall(4, loopTextChange); // Adjust delay as needed
        };

        loopTextChange();
      });

      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination, Scrollbar, A11y],
      };
    },
  };
</script>



<style lang="scss" src="./HomeHero.scss" scoped>

</style>