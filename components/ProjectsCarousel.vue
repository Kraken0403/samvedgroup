<template>
    <div class="pc" data-scroll-section>
        <div class="container-wide">
            <div class="pc-wrapper">
                <div class="pc-head">
                    <h2>Check out<br/>Our Projects</h2>
                    <Button buttonText="All Projects"/>
                </div>
                <div class="pc-carousel">
                    <swiper
                    :slides-per-view="isMobile ? 1 : isTablet ? 3 : 4"
                    :space-between="15"
                    :autoplay="true"
                    
                    >
                        <swiper-slide >
                            <a href="#" class="pc-card ">
                                <img src="../assets/images/amph.jpg" alt="">
                                <h2>The Grasslands</h2>
                                <div class="tags">
                                    <div class="tag">Residential</div>
                                    <div class="tag">Commercial</div>
                                    <div class="tag">4 & 3BHK</div>
                                    <!-- <div class="tag">12,500 sq. yd.</div> -->
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide >
                            <a href="#" class="pc-card ">
                               
                                <img src="../assets/images/dreams.jpg" alt="">
                                <h2>Samved Dreams</h2>
                                <div class="tags">
                                    <div class="tag">Residential</div>
                                    <div class="tag">Commercial</div>
                                    <div class="tag">2 & 3BHK</div>

                                    <!-- <div class="tag">Residential</div> -->
                                    <!-- <div class="tag">11,569 sq. yd</div> -->
                                </div>
                                
                            </a>
                        </swiper-slide>
                        <swiper-slide >
                            <a href="#" class="pc-card">
                                
                                <img src="../assets/images/valley.jpg" alt="">
                                <h2>Samved Green Valley</h2>
                                <div class="tags">
                                    <div class="tag">Residential</div>
                                    <div class="tag">Commercial</div>
                                    <div class="tag">2 & 3BHK</div>
                                    <!-- <div class="tag">11,162 sq. yd</div> -->
                                </div>
                              
                            </a>
                        </swiper-slide>
                        <swiper-slide >
                            <a href="#" class="pc-card">
                                
                                <img src="../assets/images/re-res.jpg" alt="">
                                <h2>Radhe Infinity Residential</h2>
                                <div class="tags">
                                    <div class="tag">Residential</div>
                                    <div class="tag">2 & 3BHK</div>
                                    <!-- <div class="tag">16,825 sq. yd.</div> -->
                                </div>
                              
                            </a>
                        </swiper-slide>
                        <swiper-slide >
                            <a href="#" class="pc-card ">
                                
                                <img src="../assets/images/re-comm.jpg" alt="">
                                <h2>Radhe Infinity Commercial</h2>
                                <div class="tags">
                                    <div class="tag">Commercial</div>
                                    <!-- <div class="tag">16,825 sq. yd.</div> -->
                                </div>
                              
                            </a>
                        </swiper-slide>
                        <!-- <swiper-slide>
                            <a href="#" class="pc-card">
                                
                                <img src="../assets/images/urbania.jpg" alt="">
                                <h2>The Urbania</h2>
                                <div class="tags">
                                    <div class="tag">Commercial</div>
                                    <div class="tag">IT Hub</div>
                                </div>
                              
                            </a>
                        </swiper-slide>
                    -->

                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import { ref, computed, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isMobile = ref(false);
    const isTablet = ref(false);

    const checkScreenSize = () => {
      isMobile.value = window.matchMedia('(max-width: 768px)').matches;
      isTablet.value = window.matchMedia('(max-width: 1200px)').matches;
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize);
        });

    return {
      isMobile,
      isTablet,
    };
  },
};
</script>

<style lang="scss" src="./ProjectsCarousel.scss" scoped>

</style>