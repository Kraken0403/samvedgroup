<template>
    <div class="projects-filter">
      <div class="projects-hero">
        <h2>Our projects</h2>
      </div>
      <div class="projects-buttons">
        <button :class="{ active: selectedFilter === 'all' }" @click="filterAll">All</button>
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
  