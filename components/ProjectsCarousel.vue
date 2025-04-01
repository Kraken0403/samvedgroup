<template>
    <div class="pc">
      <div class="container-wide">
        <div class="pc-wrapper">
          <div class="pc-head">
            <h2>Check out<br />Our Projects</h2>
            <Button buttonText="All Projects" link="/projects" />
          </div>
          <div class="pc-carousel">
            <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
            :slides-per-view="isMobile ? 1 : isTablet ? 3 : 4"
            :space-between="15"
            :loop="true"
            :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
            }"
            >
              <SwiperSlide>
                <a href="./project/thegrasslands" class="pc-card">
                  <img src="../assets/images/amph.jpg" alt="" />
                  <h2>The Grasslands</h2>
                  <div class="tags">
                    <div class="tag">4 & 3 BHK</div>
                    <div class="tag">Residential</div>
                    <div class="tag">Commercial</div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="./project/radheinfinityresidential" class="pc-card">
                  <img src="../assets/images/re-res.jpg" alt="" />
                  <h2>Radhe Infinity Residential</h2>
                  <div class="tags">
                    <div class="tag">2 & 3 BHK</div>
                    <div class="tag">Residential</div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="./project/radheinfinitycommercial" class="pc-card">
                  <img src="../assets/images/re-comm.jpg" alt="" />
                  <h2>Radhe Infinity Commercial</h2>
                  <div class="tags">
                    <div class="tag">Commercial</div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="./project/samveddreams" class="pc-card">
                  <img src="../assets/images/dreams.jpg" alt="" />
                  <h2>Samved Dreams</h2>
                  <div class="tags">
                    <div class="tag">2 & 3 BHK</div>
                    <div class="tag">Residential</div>
                    <div class="tag">Commercial</div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="./project/greenvalley" class="pc-card">
                  <img src="../assets/images/valley.jpg" alt="" />
                  <h2>Samved Green Valley</h2>
                  <div class="tags">
                    <div class="tag">2 & 3 BHK</div>
                    <div class="tag">Residential</div>
                    <div class="tag">Commercial</div>
                  </div>
                </a>
              </SwiperSlide>
               <!-- Swiper navigation arrows -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Navigation, EffectCreative } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const isMobile = ref(false)
      const isTablet = ref(false)
  
      const checkScreenSize = () => {
        if (process.client) {
          isMobile.value = window.matchMedia('(max-width: 768px)').matches
          isTablet.value = window.matchMedia('(max-width: 1200px)').matches
        }
      }
  
      onMounted(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
      })
  
      onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize)
      })
  
      const modules = [Autoplay, Navigation, EffectCreative]
  
      return {
        isMobile,
        isTablet,
        modules
      }
    }
  }
  </script>
  
  
  <style lang="scss" src="./ProjectsCarousel.scss" scoped>
    .swiper-button-prev,
    .swiper-button-next {
    color: #000; /* Customize the arrow colors */
    }
  </style>
  