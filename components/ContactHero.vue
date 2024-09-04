<template>
    <div class="contact-hero" data-scroll-section>
        <div class="container-wide">
            <div class="ch-title">
                <h1>{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" src="./ContactHero.scss" scoped>

</style>