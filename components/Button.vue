<template>
    <div class="custom-button">
        <a :href="link" ref="buttonLink" :style="{ color: linkColor }">
            <span class="circle" :style="{ backgroundColor: linkColor }"></span>
            <span class="text">{{ buttonText }}</span>
            <!-- <span class="line"></span> -->
        </a>
    </div>
</template>

<script>
   export default {
    props: {
        buttonText: {
            type: String,
            default: 'Know More'
        },
        linkColor: {
            type: String,
            default: '#111111'
        },
        link: {
            type: String,
            required: true
        }
    },
    
    // onMounted() {
    //     const element = this.$refs.buttonLink;
    //     element.style.setProperty('--after-color', this.linkColor)
    // }
};
</script>

<style lang="scss" src="./Button.scss" scoped>
    
</style>
