<template>
  <div class="grid place-items-center">
    <div class="text-center flex flex-col gap-2">
      <h2 class="title">{{ title }}</h2>
      <span class="font-bold text-5xl font-mono text-white">{{ to }}</span>
      <span>{{ remark }}</span>
    </div>
  </div>
</template>

<script setup>
const { title, from, to, remark } = defineProps({
  title: {
    type: String,
    default: '',
  },
  from: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  remark: {
    type: String,
    default: '',
  },
})
</script>