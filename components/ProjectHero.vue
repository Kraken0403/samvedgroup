<template>
    <div v-if="data" :style="{ backgroundColor: data.slices[0].primary.color }" class="ph" data-scroll-section>
        <div class="ph-wrapper">
            <div class="ph-image">
                <img :src="data.slices[0].primary.project_hero_image.url" alt="">
                <div class="img-overlay"></div>
            </div>
            <div class="ph-content">
                <div class="container-wide">
                    <div class="ph-head">
                        <p>{{ data.slices[0].primary.caption }}</p>
                        <h2>{{ data.slices[0].primary.project_title }}</h2>
                    </div>

                <div class="ph-main">
                    <div class="ph-info">
                        <p>Project Info</p>
                        <hr>
                        <div class="ph-info-row">
                                <!-- Loop through project tags to create columns -->
                            <div class="ph-info-col" v-for="(tag, index) in data.slices[0].primary.project_tags" :key="index">
                                <h5>{{ tag.title }}</h5>
                                <h6>{{ tag.tag }}</h6>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

// Define props to accept data
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// Log the data when the component is mounted

</script>

<style lang="scss" src="./ProjectHero.scss" scoped>

</style>