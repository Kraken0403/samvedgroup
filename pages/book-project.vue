<template>
    <div >
      <Header logoImage="/logo.png" hamburgerColor="#111111" />
      <ContactHero title="Book Now" />
  
      <!-- Booking Form Section -->
      <div class="container-narrow" data-scroll-section>
        <div class="booking-form-container">
            <h2>Book Your Spot for {{ projectTitle }}</h2>
            <form @submit.prevent="submitBookingForm">
            <input type="hidden" name="subject" :value="`Booking Request for ${projectTitle}`" />
            <input type="text" v-model="form.name" placeholder="Name" required />
            <input type="email" v-model="form.email" placeholder="Email" required />
            <input type="tel" v-model="form.phone" placeholder="Phone Number" required />
            <button type="submit">Submit</button>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Get route object
  const route = useRoute();
  
  // Extract projectTitle from route query parameters
  const projectTitle = computed(() => route.query.projectTitle || '');
  
  // Form data
  const form = ref({
    name: '',
    email: '',
    phone: '',
  });
  
  // Submit function
  const submitBookingForm = async () => {
    try {
      const formData = new FormData();
      formData.append('access_key', 'd269f5b0-7525-4d86-b3be-8f1d7d5ecb08');
      formData.append('subject', `Booking Request for ${projectTitle.value}`);
    //   form.append('title', projectTitle.value);
      formData.append('name', form.value.name);
      formData.append('email', form.value.email);
      formData.append('phone', form.value.phone);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Booking request submitted successfully!');
        form.value.name = '';
        form.value.email = '';
        form.value.phone = '';
      } else {
        alert('There was an error submitting your booking request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking form:', error);
      alert('Something went wrong!');
    }
  };
  </script>
  
  <style src="../components/BookProject.scss" lang="scss" scoped>
  
  </style>
  