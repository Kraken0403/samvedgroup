<template>
    <div class="ab-hero">
        <div class="container-wide">
            <div class="ab-hero-wrapper">
                <div class="ab-head">
                    <p>{{ caption }}</p>
                    <h2>{{ title }}</h2>
                </div>
                
            </div>
        </div>
        <div class="ab-image">
            <div class="ab-image-wrapper" data-scroll data-scroll-speed="-2">
                <img src="../assets/images/balcony.png" alt="">
            </div>
        </div> 
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    caption: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" src="./AbHero.scss" scoped>

</style>