<template>
    <div class="projects" data-scroll-section>
      <div class="container-wide">
        <project-filter @filterProjects="handleFilter" />
  
        <div class="projects-grid">
          <div v-for="project in filteredProjects" :key="project.id" class="project-card">
            <a :href="project.link">
            <div class="project-card-image-wrapper" >
              <img :src="project.image" data-scroll data-scroll-speed="-1" alt="Project Image" class="project-card-image">
            </div>
            <h3 class="project-card-title">{{ project.title }}</h3>
          </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProjectFilter from './ProjectFilter.vue';
 import grasslands from '../assets/images/balcony.png'
 import dreams from '../assets/images/dreams.jpg'
 import urbania from '../assets/images/urbania.jpg'
 import valley from '../assets/images/valley.jpg'
 import reres from '../assets/images/re-res.jpg'
 import recomm from '../assets/images/re-comm.jpg'
//  import sampleThree from '../assets/images/sample2.png'
  const projects = [
    { id: 1, type: 'residential', title: 'The Grasslands', image: grasslands, link:"./project/thegrasslands" },
    { id: 2, type: 'residential', title: 'Samved Dreams', image: dreams, link:"./project/samveddreams" },
    { id: 3, type: 'residential', title: 'Samved Green Valley', image: valley, link:"./project/greenvalley" },
    { id: 4, type: 'residential', title: 'Radhe Infinity Residential', image: reres, link:"./project/radheinfinityresidential" },
    { id: 5, type: 'commercial', title: 'Radhe Infiniti Commercial', image: recomm, link:"./project/radheinfinitycommercial"},
    // { id: 6, type: 'commercial', title: 'The Urbania', image: urbania, link:"./project/urbania" }
    // ... more projects
  ];
  
  const filteredProjects = ref(projects); // Initialize filteredProjects with all projects
  
  const handleFilter = (filter) => {
    if (filter === 'all') {
      filteredProjects.value = projects;
    } else {
      filteredProjects.value = projects.filter(project => project.type === filter);
    }
  };
  </script>
  
  <style lang="scss" scoped src="./ProjectsMain.scss">
  </style>
  