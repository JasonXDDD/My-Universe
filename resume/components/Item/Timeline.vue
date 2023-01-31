<template>
  <div class="">
    <h2 class="text-2xl font-black mb-4">Timeline</h2>

    <div class="border-l-[14px] border-slate-400/50 flex flex-col gap-4 py-4">
      <div
        v-for="item in timelines"
        :key="item.event"
        class="flex items-center gap-2"
      >
        <div class="h-4 w-4 rounded-full bg-sky-500 -ml-4" />
        <span class="text-sky-700 bg-sky-300/50 rounded px-1">
          {{ item.date }}
        </span>
        <p>{{ item.event }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const timelines = ref([
  { date: '2020', event: 'Hello World' },
  { date: '2020', event: 'Hello World' },
  { date: '2020', event: 'Hello World' },
  { date: '2020', event: 'Hello World' },
  { date: '2020', event: 'Hello World' },
])
</script>