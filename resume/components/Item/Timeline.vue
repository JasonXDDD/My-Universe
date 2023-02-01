<template>
  <div class="">
    <h2 class="title">Timeline</h2>

    <div class="border-l-[14px] border-slate-600/50 flex flex-col gap-4 py-4">
      <div
        v-for="item in timelines"
        :key="item.event"
        class="flex items-center gap-2"
      >
        <div class="h-4 w-4 rounded-full bg-sky-500 -ml-4" />
        <span class="text-sm font-mono rounded-lg px-1" :class="item.color">
          {{ item.date }}
        </span>
        <p>{{ item.event }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const timelines = ref([
  {
    color: 'text-purple-900 bg-purple-200',
    date: '2022.08',
    event: '通過 經濟部人才能力鑑定 機器學習工程師',
  },
  {
    color: 'text-purple-900 bg-purple-200',
    date: '2021.05',
    event: 'BottleNeko 成立',
  },
  {
    color: 'text-purple-900 bg-purple-200',
    date: '2021.04',
    event: 'Leadtek 內部首次舉辦 技術分享會',
  },
  {
    color: 'text-indigo-900 bg-indigo-200',
    date: '2020.07',
    event: '研究所畢業，並取得 "北教大玩遊所" 碩士學位',
  },
  {
    color: 'text-indigo-900 bg-indigo-200',
    date: '2020.04',
    event: 'Leadtek 入職',
  },
  {
    color: 'text-sky-900 bg-sky-200',
    date: '2019.10',
    event: 'Apple 中華區 移動應用創新賽 一等獎、最佳展演獎',
  },
  {
    color: 'text-sky-900 bg-sky-200',
    date: '2019.08',
    event: 'Apple 台灣區 移動應用創新賽 特獎',
  },
  {
    color: 'text-sky-900 bg-sky-200',
    date: '2019.08',
    event: 'MyProGuide 離職',
  },
  {
    color: 'text-blue-900 bg-blue-200',
    date: '2018.10',
    event: '創辦 EXD X NTUE 前端聚',
  },
  {
    color: 'text-blue-900 bg-blue-200',
    date: '2018.06',
    event: '大學畢業，取得 "淡江資工" 學士學位',
  },
  {
    color: 'text-teal-900 bg-teal-200',
    date: '2017.08',
    event: '大三，創辦 資工系計算中心',
  },
  {
    color: 'text-teal-900 bg-teal-200',
    date: '2017.05',
    event: '大三，進入 MyProGuide 擔任網路工程師',
  },
  {
    color: 'text-amber-900 bg-amber-200',
    date: '2016.09',
    event: '大二，創辦 EXD 前端聚',
  },
  {
    color: 'text-amber-900 bg-amber-200',
    date: '2016.04',
    event: '大二，開始帶團隊做 Freelancer',
  },
  {
    color: 'text-orange-900 bg-orange-200',
    date: '2015.09',
    event: '大一，進入前端領域與學習',
  },
])
</script>