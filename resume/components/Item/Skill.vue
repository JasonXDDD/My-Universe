<template>
  <div>
    <h2 class="title">Skills</h2>

    <div class="flex flex-col gap-4">
      <div v-for="(skill, skillid) in skills" :key="`skill-${skillid}`">
        <h3 class="text-xl font-bold mb-2" :class="`text-${skill.color}-700`">
          {{ skill.name }}
        </h3>
        <div class="flex items-center gap-2 flex-wrap">
          <div
            v-for="(item, itemid) in skill.items"
            :key="`skill-item-${skillid}-${itemid}`"
            :class="`bg-${skill.color}-100`"
            class="px-2 rounded-lg font-mono text-slate-700"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = ref([
  {
    name: 'Frontend Frameworks',
    color: 'orange',
    items: [
      'Vue Nuxt.js (v2,v3)',
      'React Next.js',
      'Angular (v8+)',
      'Tailwind CSS (v2)',
      'Bootstrap CSS 5',
    ],
  },
  {
    name: 'Backend Frameworks',
    color: 'amber',
    items: ['Koa', 'Express', 'Nitro', 'MySQL', 'FireStore'],
  },
  {
    name: 'Cloud Services',
    color: 'teal',
    items: ['AWS', 'GCP', 'Firebase', 'Vercel', 'Cloudinary'],
  },
  {
    name: 'Web Topics',
    color: 'blue',
    items: [
      'SEO',
      'Web Vitals',
      'SPA',
      'PWA',
      'Web Notification',
      'Web Socket',
      '3D Animation',
      'Web Game',
      'Data Visualization',
    ],
  },
  { name: 'App', color: 'cyan', items: ['React Native', 'iOS Swift'] },
  {
    name: 'Others',
    color: 'purple',
    items: [
      'DevOps',
      'Develop Work Flow',
      'Auto Testing',
      'AI/ML',
      'Git',
      'Git Flow',
    ],
  },
])
</script>

<style lang="sass" scoped>
.init
  @apply bg-orange-100 text-orange-900 text-orange-700
  @apply bg-amber-100 text-amber-900 text-amber-700
  @apply bg-teal-100 text-teal-900 text-teal-700
  @apply bg-blue-100 text-blue-900 text-blue-700
  @apply bg-cyan-100 text-cyan-900 text-cyan-700
  @apply bg-purple-100 text-purple-900 text-purple-700
</style>