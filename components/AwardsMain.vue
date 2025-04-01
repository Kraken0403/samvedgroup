<template>
    <div class="awards-main" >
      <p class="awards-desc">Over the past several decades, Samved Group has earned a reputation as a distinguished real estate developer in Ahmedabad, consistently delivering thoughtfully designed and sustainable projects that prioritize quality and cultivate thriving communities.</p>
      <div class="container-wide">
        <div class="awards-list">
          <div class="award-item" v-for="(award, index) in awards" :key="index">
            <div class="award-year">{{ award.year }}</div>
            <div class="award-content">
              <p class="award-text">{{ award.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const awards = [
    { year: '2024', text: 'Awarded for excellence in architectural design by the Gujarat Realty Forum.' },
    { year: '2023', text: 'Recognized as Best Emerging Developer at the Ahmedabad Real Estate Awards.' },
    { year: '2022', text: 'Received certification for sustainable green building practices.' },
    { year: '2021', text: 'Honored with “Customer Trust Award” by Realty Circle.' },
    { year: '2020', text: 'Ranked among Top 10 Urban Developers in Gujarat.' },
    { year: '2019', text: 'Nominated for Best Mixed-Use Project by BuildCon Awards.' }
  ]
  </script>
  
  <style src="./AwardsMain.scss" scoped></style>
  