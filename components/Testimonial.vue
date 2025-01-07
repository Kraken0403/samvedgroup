<template>
    <div class="testimonial" data-scroll data-scroll-section>
        <div class="container-wide">
            <div class="testimonial-wrapper">
                <div class="testimonial-image-wrapper">
                    <div class="testimonial-big-image">
                        <div data-scroll data-scroll-speed="-2.2">
                            <img src="../assets/images/garden.jpg" alt="">
                        </div>
                    </div>

                    <div class="testimonial-small-image">
                        <swiper
                            :modules="modules"
                            navigation
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop
                        >
                            <swiper-slide>
                                <video autoplay muted loop controls>
                                    <source src="../assets/videos/1.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </swiper-slide>
                            <swiper-slide>
                                <video autoplay muted loop controls>
                                    <source src="../assets/videos/2.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </swiper-slide>
                            <swiper-slide>
                                <video autoplay muted loop controls>
                                    <source src="../assets/videos/3.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </swiper-slide>
                            <swiper-slide>
                                <video autoplay muted loop controls>
                                    <source src="../assets/videos/4.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </swiper-slide>
                        </swiper>
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



<style lang="scss" src="./Testimonial.scss" scoped>

</style>