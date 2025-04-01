<template>
    <div class="projects">
      <div class="container-wide">
        <project-filter @filterProjects="handleFilter" />
  
        <div class="projects-grid">
          <div v-for="project in filteredProjects" :key="project.id" class="project-card">
            <a :href="project.link">
            <div class="project-card-image-wrapper" >
              <img :src="project.image" data-scroll data-scroll-speed="-1" alt="Project Image" class="project-card-image">
            </div>
            <h3 class="project-card-title">{{ project.title }}</h3>
            <div class="tags">
              <p v-if="project.config" class="tag">
                {{ project.config }}
              </p>
              <p class="tag">
                {{ project.type }}
              </p>
            </div>
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
  import valley from '../assets/images/valley.jpg'
  import reres from '../assets/images/re-res.jpg'
  import recomm from '../assets/images/re-comm.jpg'
//  import sampleThree from '../assets/images/sample2.png'
  const projects = [
    { id: 1, type: 'residential', title: 'The Grasslands', image: grasslands, link:"./project/thegrasslands", config: '4 & 3 BHK Homes & Showrooms' },
    { id: 2, type: 'residential', title: 'Radhe Infinity Residential', image: reres, link:"./project/radheinfinityresidential", config: '2 & 3 BHK'  },
    { id: 3, type: 'commercial', title: 'Radhe Infinity Commercial', image: recomm, link:"./project/radheinfinitycommercial" },
    { id: 4, type: 'residential', title: 'Samved Dreams', image: dreams, link:"./project/samveddreams", config: '2 & 3 BHK' },
    { id: 5, type: 'residential', title: 'Samved Green Valley', image: valley, link:"./project/greenvalley", config: '2 & 3 BHK'  },
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
  