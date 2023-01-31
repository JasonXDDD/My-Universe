<template>
  <section class="rounded-2xl grid grid-cols-4 gap-4">
    <ItemIntro class="bg-slate-200 rounded-2xl col-span-4 p-4" />
    <ItemTimeline class="bg-slate-200 rounded-2xl col-span-2 p-4" />
    <ItemSkill class="bg-slate-200 rounded-2xl col-span-2 p-4" />
    <ItemGitHub class="bg-slate-200 rounded-2xl col-span-4 p-4" />

    <div class="col-span-4 flex items-center justify-center h-4 my-4">
      <h2 class="text-2xl font-black mb-4">Works</h2>
    </div>

    <ItemWork
      v-for="({ cover, title, description, link, size }, workid) in works"
      :key="`work-${workid}`"
      :cover="cover"
      :title="title"
      :description="description"
      :link="link"
      :class="size"
      class="bg-slate-200 rounded-2xl h-full"
    />
  </section>
</template>

<script setup>
const works = ref([
  {
    // cover: '/images/myproguide.png',
    title: 'MyProGuide',
    description: `
技術負責人 2017-05 - 2019-08
一家作為導遊訓練及派遣的新創公司，主要負責所有系統及平台建置，包括電商網站、ERP、導遊平台... 等等。
`,
    link: 'https://www.myproguide.com',
    size: 'col-span-4',
  },
  {
    cover: '/images/myproguide-tour.png',
    title: '旅遊電商平台',
    description: `
提供旅客購買行程以及導遊上架的平台。
使用 Vue Nuxt 建置在 AWS EC2 上，重點技術：金流、SEO、PWA。
`,
    link: 'https://tour.myproguide.com',
    size: '',
  },
  {
    cover: '/images/myproguide-dashboard.png',
    title: '管理後台',
    description: `
提供所有使用者身份進行訂單管理、網站設定的後台。
使用 Angular 8 建置在 AWS EC2 上，重點技術：金流、訂單狀態、資料視覺化。
`,
    size: '',
  },
  {
    cover: '/images/myproguide.png',
    title: '導遊社群及部落格',
    description: `
導遊的社群平台，讓旅客在上面填寫評價、以及撰寫部落格文章。
使用 Angular 8, WrodPress 建置在 AWS EC2 上，重點技術：SEO、SPA。
`,
    link: 'https://www.myproguide.com/guide/list',
    size: '',
  },
  {
    cover: '/images/myproguide-customize.png',
    title: '旅客客製行程平台',
    description: `
專為高級旅客架設的客製旅遊，可以根據自己喜好設計旅遊，並讓導遊們可以進行搶標報價。
使用 Angular 8 建置在 AWS EC2 上，重點技術：訂單流程、搶標系統、SEO、SPA。
    `,
    link: 'https://customize.myproguide.com',
    size: '',
  },
  {
    title: '麗臺科技大數據 Leadtek Bigdata',
    description: `
高級工程師 2020-10 - Now
為公部門提供大數據分析及 AI 預測服務，以及完成兩個產品開發。主要負責大部分案子的前端網站工程，期間為部門建立許多內部 DevOps, 開發流程以及技術迭代，並實踐在產品開發中。
  `,
    link: 'https://bigdata.leadtek.com',
    size: 'col-span-4',
  },
  {
    cover: '/images/leadtek.png',
    title: '大數據解決方案',
    description: `
為客戶提供資料清洗、分析工具、以及儀表板呈現數據趨勢及統計。
使用 Vue 2 建置，重點技術：資料視覺化、大數據分析、圖表呈現。
    `,
    size: '',
  },
  {
    cover: '/images/schooldw.png',
    title: '教育單位校務系統',
    description: `
為教育單位提供資料清洗與間接各處室資料，學生學習概況、學習分析、AI預測落榜...等。
使用 Vue 2 建置，重點技術：資料視覺化、大數據分析、圖表呈現。
    `,
    size: '',
  },
  {
    cover: '/images/safeexchange.png',
    title: 'SafeExchange',
    description: `
企業私有雲資料儲存系統，透過區塊鏈技術，能夠安全的傳遞資料不受外界入侵竊取。
使用 Vue 2 建置，重點技術：區塊鏈、檔案系統、資料上下載。
    `,
    size: '',
    link: 'https://safeexchange.leadtek.com/index_tw.html',
  },
  {
    cover: '/images/profitpoint.png',
    title: 'Profit Point',
    description: `
健保申報智能輔助系統，能夠簡化醫院申報流程，提高作業效率，降低錯誤與潛在核刪風險，做好最佳健康保險申報風險管理。
使用 Vue 2 建置，重點技術：健保規則、各類型數據分析、大資料檢索。
    `,
    size: '',
    link: 'https://profitpoint.leadtek.com/index_tw.html',
  },
  {
    // cover: '/images/myproguide.png',
    title: '貓罐子 BottleNeko',
    description: `
創辦人 2021-05
一款名為 Weiβ Schwarz (黑白雙翼 WS) TCG 卡牌遊戲的工具網站，提供卡片翻譯、組牌系統、卡片查詢、牌組分享...等工具服務。
原先作為我自己的 Side Project，但於 2022 年使用人數已高達 10 萬人，已然成為該遊戲在台灣內最大的網站。
`,
    link: 'https://bottleneko.app',
    size: 'col-span-4',
  },

  {
    title: '從前從前',
    description: `
創辦人 2019-11
榮獲 Apple 台灣區 APP 移動應用創新賽 特獎
榮獲 Apple 中華區 Mobile APP Innovation Contest 一等獎、Best Demo 獎

一款作為創作故事的 App，能夠讓親子一同互動並且創作屬於自己的故事。
     `,
    link: 'https://once-upon-a-time.jasonxddd.me/',
    size: 'col-span-4',
  },

  {
    cover: '/images/auto-factory.png',
    title: '自動化工廠',
    description: `
Freelancer 2020-03
協助一家工廠進行智慧化轉型，即時接收設備訊號，並呈現數據至網站。
使用 React 建置，重點技術：訊號分析、Web Socket。
     `,
    size: '',
  },

  {
    cover: '/images/taipower.png',
    title: '台電電路報警系統',
    description: `
Freelancer 2020-03
與台大、北教大、台電三方合作的系統網站，透過電路訊號分析以及三角定位計算出故障的電線桿或設施，並且及時通知給各個單位及工人。
使用 Angular 10 建置，重點技術：電路訊號分析、Web Notification、PWA。
     `,
    size: '',
  },
  {
    cover: '/images/diet-calendar.png',
    title: '我的健康日誌',
    description: `
Side Project 2020-03
當時勤奮健身，為了記錄飲食開發出來的網站，但後來就失去意志的 ><
     `,
    size: '',
  },

  {
    cover: '/images/figurestage.png',
    title: 'FigureStage 展示舞台',
    description: `
Side Project 2022-07
自從我有了 3D 列印機之後，我有了搜集模型、手辦的嗜好，於是開發出一個展示網站來好好欣賞。
     `,
    size: '',
    link: 'https://jasonxddd.github.io/figure-stage/',
  },
])
</script>