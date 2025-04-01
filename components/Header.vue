<template>
  <div id="header">
    <div class="container-wide">
      <div class="row">
        <div class="col-40 d-flex">
          <div class="header-1">
            <NuxtLink to="/projects">Projects</NuxtLink>

            <div class="dropdown" ref="aboutDropdown">
              <NuxtLink 
                
                class="has-dropdown"
                @click.prevent="toggleDropdown('about')"
              >
                About Samved
              </NuxtLink>
              <div class="dropdown-menu" v-show="activeDropdown === 'about'">
                <NuxtLink to="/about">About Us</NuxtLink>
                <NuxtLink to="/ourteam">Our Team</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="col-20">
          <div class="header-2">
            <div class="header-logo">
              <NuxtLink to="/">
                <img :src="logoImage" alt="Logo" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-40 d-flex justify-end">
          <div class="header-3">
            <div class="dropdown" ref="partnerDropdown">
              <NuxtLink 
                
                class="has-dropdown"
                @click.prevent="toggleDropdown('partner')"
              >
                Partner with Us
              </NuxtLink>
              <div class="dropdown-menu" v-show="activeDropdown === 'partner'">
                <NuxtLink to="/channel-partner">Channel Partner</NuxtLink>
                <NuxtLink to="/jd">Joint Development</NuxtLink>
                <NuxtLink to="/land">Land</NuxtLink>
              </div>
            </div>

            <div class="dropdown" ref="mediaDropdown">
              <NuxtLink 
                
                class="has-dropdown"
                @click.prevent="toggleDropdown('media')"
              >
                News & Media
              </NuxtLink>
              <div class="dropdown-menu" v-show="activeDropdown === 'media'">
                <NuxtLink to="/gallery">Gallery</NuxtLink>
                <NuxtLink to="/awards">Awards</NuxtLink>
              </div>
            </div>

            <NuxtLink to="/contact">Contact Us</NuxtLink>
          </div>
        </div>
      </div>

      <div class="overlay-bg" @click="toggleOverlay" ref="overlayBg"></div>
      <div class="overlay-menu" ref="overlayMenu">
        <div class="menu-items">
          <div class="menu-item"><NuxtLink to="/">Home</NuxtLink></div>
          <div class="menu-item"><NuxtLink to="/projects">Projects</NuxtLink></div>
          <div class="menu-item"><NuxtLink to="/about">About</NuxtLink></div>
          <div class="menu-item"><NuxtLink to="/channel-partner">Partner with Us</NuxtLink></div>
          <div class="menu-item"><NuxtLink to="/contact">Contact Us</NuxtLink></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import logoWhite from '../assets/images/logo-white.png'

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
    const overlayMenu = ref(null)
    const overlayBg = ref(null)
    const isMenuOpen = ref(false)
    
    const aboutDropdown = ref(null)
    const partnerDropdown = ref(null)
    const mediaDropdown = ref(null)
    const activeDropdown = ref(null)

    const toggleDropdown = (dropdownName) => {
      if (activeDropdown.value === dropdownName) {
        activeDropdown.value = null
      } else {
        activeDropdown.value = dropdownName
      }
    }

    const handleClickOutside = (event) => {
      if (activeDropdown.value) {
        const dropdownElements = {
          about: aboutDropdown.value,
          partner: partnerDropdown.value,
          media: mediaDropdown.value
        }
        
        const currentDropdown = dropdownElements[activeDropdown.value]
        
        if (currentDropdown && !currentDropdown.contains(event.target)) {
          activeDropdown.value = null
        }
      }
    }

    const toggleOverlay = async () => {
      isMenuOpen.value = !isMenuOpen.value
      await nextTick()

      if (!process.client) return

      if (isMenuOpen.value && overlayMenu.value) {
        gsap.to("#navLine1", { y: 4, duration: 0.3 })
        gsap.to("#navLine3", { y: -4, duration: 0.3 })
        gsap.to(overlayMenu.value, {
          right: 0,
          duration: 0.5,
          ease: "power3.inOut"
        })
        gsap.to(overlayBg.value, {
          opacity: 1,
          duration: 0.3,
          delay: 0.4,
          onComplete: () => {
            overlayBg.value.style.pointerEvents = "auto"
          }
        })
      } else {
        gsap.to("#navLine1", { y: 0, duration: 0.3 })
        gsap.to("#navLine3", { y: 0, duration: 0.3 })
        gsap.to(overlayMenu.value, {
          right: '-100%',
          duration: 0.5,
          ease: "power3.inOut"
        })
        gsap.to(overlayBg.value, {
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
          onComplete: () => {
            overlayBg.value.style.pointerEvents = "none"
          }
        })
      }
    }

    onMounted(() => {
      if (overlayBg.value) {
        overlayBg.value.style.pointerEvents = "none"
      }
      document.addEventListener('click', handleClickOutside)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      overlayMenu,
      overlayBg,
      toggleOverlay,
      aboutDropdown,
      partnerDropdown,
      mediaDropdown,
      activeDropdown,
      toggleDropdown
    }
  }
}
</script>


<style lang="scss" src="./Header.scss" scoped>

</style>
