<template>
    <section class="team-section" >
      <div class="container-wide">
        <div class="team-wrapper">
          <div
            class="team-row"
            v-for="(member, index) in team"
            :key="index"
            :class="{ reverse: index % 2 !== 0 }"
          >
            <!-- Image -->
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
            </div>
  
            <!-- Content -->
            <div class="team-content">
              <h3>{{ member.name }}<br /><span class="designation">{{ member.role }}</span></h3>
              <p class="bio">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import prakashbhai from '@/assets/images/prakashbhai2.jpg'
  import jigneshbhai from '@/assets/images/jigneshbhai.jpg'
  import rachitbhai from '@/assets/images/rachitbhai2.png'
  import zeelbhai from '@/assets/images/zeelbhai.jpg'
  
  const team = [
    {
      name: 'Mr. Prakashbhai Patel',
      role: 'Chairman',
      image: prakashbhai,
      description:
        'A visionary leader and a pioneer in the real estate sector, Mr. Prakashbhai Patel has been the driving force behind our legacy of trust, quality, and innovation. His experience and foresight continue to shape our journey.'
    },
    {
      name: 'Mr. Jigneshbhai Patel',
      role: 'Chairman',
      image: jigneshbhai,
      description:
        'Mr. Jigneshbhai Patel brings with him a wealth of experience in planning and execution. His leadership has helped establish a standard of excellence across our projects and team culture.'
    },
    {
      name: 'Mr. Rachit Patel',
      role: 'Director',
      image: rachitbhai,
      description:
        'With a strong sense of modern design and operational expertise, Mr. Rachit Patel oversees multiple verticals in the company. He ensures seamless execution and customer satisfaction.'
    },
    {
      name: 'Mr. Zeel Patel',
      role: 'Director',
      image: zeelbhai,
      description:
        'Focused on innovation and digital transformation, Mr. Zeel Patel is at the forefront of evolving the brand to align with new-age expectations while staying rooted in core values.'
    }
  ]
  </script>

  <style scoped src="./TeamSection.scss"></style>