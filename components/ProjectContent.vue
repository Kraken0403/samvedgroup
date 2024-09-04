<template>
    <div v-if="data" class="pc" :style="{ backgroundColor: data.slices[0].primary.color }" data-scroll-section >
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
                                <p>{{ data.slices[1].primary.intro_para_one }}
                                </p>
                                <p>{{ data.slices[1].primary.intro_para_two }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pc-images-one">
                    <div class="pc-image-one w-70">
                        <img :src="data.slices[1].primary.portrait_image_one.url" alt="">
                    </div>
                    <swiper
                    :slides-per-view="2"
                    :space-between="15"
                    navigation
                    :pagination="{ clickable: true }"
                    >
                        <swiper-slide v-for="(img, index) in data.slices[1].primary.project_images" :key="index">
                            <img :src="img.project_image.url" :alt="'Image ' + index" />
                        </swiper-slide>

                    </swiper>
                    
                </div>

                
                <div class="pca-video-wrapper">
                    <div class="pca-video" data-scroll>
                        <video controls :src="data.slices[1].primary.video_link?.url"></video>
                    </div>
                    <div class="pca-map">
                        <h2>The Vision for {{ data.slices[0].primary.project_title }}</h2>
                        <p>
                            {{ data.slices[1].primary.project_vision[0]?.text }}
                        </p>
                        <div class="pca-map-buttons">
                            <Button link="https://www.google.com" buttonText="Visit Us" linkColor="#111111"/>
                            <Button link="https://google.com" buttonText="Download Brochure" linkColor="#111111"/>
                        </div>
                    </div>
                </div>
                

                <div class="pc-amenities">
                    <h2>The Features</h2>
                    <div class="pca-wrapper"> 
                        <div class="pca-item" v-for="(feat, index) in data.slices[1].primary.features" :key="index">
                            <h6>{{ feat.feature_title }}</h6>
                            <p>{{ feat.feature_detail }}</p>
                        </div>

                    </div>
                </div>
                

                <div class="book-now">
                    <h1>Book Now</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

onMounted(() => {
    console.log('ProjectContent data:', props.data);
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

<style lang="scss" src="./ProjectContent.scss" scoped>

</style>