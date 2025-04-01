<template>
    <div class="ph2">
        <div class="ph2-wrapper">
            <div class="ph2-img-wrapper">
                <img src="../assets/images/22.jpg" alt="">
            </div>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>
<script setup>
import { defineProps, onMounted } from 'vue';

// Define props to accept data
const props = defineProps({
    title: {
        type: Object,
        required: true
    }
});

// Log the data when the component is mounted

</script>
<style scoped src="./ProjectHeroTwo.scss"></style>