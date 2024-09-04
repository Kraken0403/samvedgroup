<template>
    <div id="header" data-scroll-section>
        <div class="container-wide">
            <div class="row">
                <div class="col-20 d-flex">
                    <div class="logo">
                        <a href="/">
                            <img :src="logoImage" alt="">
                        </a>
                    </div>
                </div>

                <div class="col-60 d-flex">
                    <div class="menu">
                        
                    </div>
                </div>

                <div class="col-20 d-flex audio-ham">
                    <div class="audio-wrapper">
                        <div class="audio-controls">
                            <button @click="toggleMute" class="mute-unmute link">
                                <icon :name="isMuted ? 'mdi:volume-off' : 'mdi:volume-high'" />
                            </button>
                        </div>
                    </div>
                    <div class="hamburger-icon link" @click="toggleOverlay">
                        <div class="ham-span" :style="{ backgroundColor: hamburgerColor }" id="navLine1"></div>
                        <div class="ham-span" :style="{ backgroundColor: hamburgerColor }" id="navLine3"></div>
                    </div>
                </div>
            </div>
            <div class="overlay-bg" @click="toggleOverlay"></div>
            <div class="overlay-menu" ref="overlayMenu">
                <div class="menu-items">
                    <div class="menu-item">
                        <a href="./">Home</a>
                    </div>
                    <div class="menu-item">
                        <a href="./projects">Projects</a>
                    </div>
                    <div class="menu-item">
                        <a href="./about">About Us</a>
                    </div>
                    <div class="menu-item">
                        <a href="./contact">Contact Us</a>
                    </div>
                    <div class="menu-item">
                        <a href="./gallery">Gallery</a>
                    </div>
                    <div class="menu-item">
                        <a href="./channel-partner">Channel Partner</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import logoWhite from '../assets/images/logo-white.png';

export default {
    props: {
        logoImage: {
            type: String,
            default: logoWhite
        },
        hamburgerColor: {
            type: String,
            default: '#f5f5f5'
        }
    },
    setup() {
        const overlayMenu = ref(null);
        let isMenuOpen = false;

        const toggleOverlay = () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                gsap.to("#navLine1", { y: 4, duration: 0.3 });
                gsap.to("#navLine2", { opacity: 0, duration: 0.3 });
                gsap.to("#navLine3", { y: -4, duration: 0.3 });
                gsap.to(overlayMenu.value, {
                    right: 0,
                    duration: 0.5,
                    ease: "power3.inOut",
                });
                gsap.to(".overlay-bg", { opacity: 1, duration: 0.3, delay: 0.4, onComplete: function() {
                    document.querySelector('.overlay-bg').style.pointerEvents = "auto";
                }});
            } else {
                gsap.to("#navLine1", { rotation: 0, y: 0, duration: 0.3 });
                gsap.to("#navLine2", { opacity: 1, duration: 0.3 });
                gsap.to("#navLine3", { rotation: 0, y: 0, duration: 0.3 });
                gsap.to(overlayMenu.value, {
                    right: '-100%',
                    duration: 0.5,
                    ease: "power3.inOut",
                });
                gsap.to(".overlay-bg", { opacity: 0, duration: 0.3, delay: 0.2, onComplete: function() {
                    document.querySelector('.overlay-bg').style.pointerEvents = "none";
                }});
            }
        };

        const audio = ref(null);
        const isPlaying = ref(false);
        const isMuted = ref(false);

        const togglePlayPause = () => {
            if (isPlaying.value) {
                audio.value.pause();
            } else {
                audio.value.play();
            }
            isPlaying.value = !isPlaying.value;
        };

        const toggleMute = () => {
            audio.value.muted = !audio.value.muted;
            isMuted.value = audio.value.muted;
        };

        onMounted(() => {
            audio.value = new Audio('/audio.mp3');
            audio.value.loop = true;
            audio.value.play();
            isPlaying.value = true;
        });

        onUnmounted(() => {
            if (audio.value) {
                audio.value.pause();
            }
        });

        return {
            overlayMenu,
            toggleOverlay,
            togglePlayPause,
            toggleMute,
            isPlaying,
            isMuted
        };
    }
};
</script>

<style lang="scss" src="./Header.scss" scoped>

</style>