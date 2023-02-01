<template>
  <div>
    <h2 class="title">Summary</h2>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-xl font-bold text-teal-200">Career</h3>
        <div
          class="border-l-4 border-teal-300 pl-2"
          v-for="(item, itemid) in careers"
          :key="`career-${itemid}`"
        >
          <div class="time career">{{ item.time }}</div>
          <p class="font-bold text-white">{{ item.title }}</p>
          <span> {{ item.en }}</span>
          <p>{{ item.remark }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-xl font-bold text-sky-200">Education</h3>
        <div
          class="border-l-4 border-sky-300 pl-2"
          v-for="(item, itemid) in educations"
          :key="`education-${itemid}`"
        >
          <div class="time education">{{ item.time }}</div>
          <p class="font-bold text-white">{{ item.title }}</p>
          <span> {{ item.en }}</span>
          <p>{{ item.remark }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const educations = ref([
  {
    time: '2018-2020',
    title: '國立台北教育大學 數位科技學系 玩具與遊戲設計研究所 碩士',
    en: 'National Taipei University of Education Department of Digital Technology Design of Toy and Game Design Master',
    remark: '',
  },
  {
    time: '2014-2018',
    title: '淡江大學 資訊工程學系 學士 (3.6/4 GPA)',
    en: 'Tamkang University of Computer Science and Information Engineering Bachelor',
    remark: '',
  },
])

const careers = ref([
  {
    time: '2020.04-Now',
    title: '麗臺科技 大數據部門 高級工程師',
    en: 'Leadtek Bigdata BU Engineer',
    remark: '',
  },
  {
    time: '2017.05-2019.08',
    title: 'MyProguide 網路工程師',
    en: 'MyProguide Web Developer',
    remark: '',
  },
])
</script>

<style lang="sass" scoped>
.time
  @apply w-fit font-mono text-sm px-1 rounded-lg
  &.education
    @apply bg-sky-200 text-sky-900
  &.career
    @apply bg-teal-200 text-teal-900
</style>