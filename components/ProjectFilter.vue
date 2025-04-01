<template>
    <div class="projects-filter">
      <div class="projects-hero">
        <p>Discover the legacy of Samved Group, crafting exceptional residential and commercial spaces for over 25 years. From nurturing the aspirations of first-time homebuyers to pioneering accessible luxury, we now redefine opulent living and working with our landmark projects like Samved Dreams and The Grasslands. At Samved Group, we believe every dream deserves a foundation of quality and sophistication. As a distinguished real estate developer, we are committed to building thoughtfully designed, sustainable, and future-forward environments that embody true luxury. Explore the possibilities and find the perfect space for your aspirations with Samved Group.</p>
      </div>
      <div class="projects-buttons">
        <button :class="{ active: selectedFilter === 'all' }" @click="filterAll">All </button>
        <button :class="{ active: selectedFilter === 'residential' }" @click="filterResidential">Residential</button>
        <button :class="{ active: selectedFilter === 'commercial' }" @click="filterCommercial">Commercial</button>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFilter: 'all', // Set default filter to 'all'
      };
    },
    methods: {
      filterAll() {
        this.selectedFilter = 'all';
        this.$emit('filterProjects', 'all');
      },
      filterResidential() {
        this.selectedFilter = 'residential';
        this.$emit('filterProjects', 'residential');
      },
      filterCommercial() {
        this.selectedFilter = 'commercial';
        this.$emit('filterProjects', 'commercial');
      },
    },
  };
  </script>
  
  <style lang="scss" scoped src="./ProjectFilter.scss">
  </style>
  