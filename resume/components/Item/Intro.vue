<template>
  <div class="flex gap-2">
    <div class="grow flex flex-col gap-2">
      <h2 class="text-2xl font-black mb-4">Intro</h2>
      <p>我是劉冠林，你可以叫我 罐罐 / Lawry / JasonXDDD</p>

      <div v-for="item in infos" :key="item.type">
        <p class="text-lg font-bold" :class="item.class">{{ item.type }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="bg-red-200 rounded-2xl flex-none w-80 h-80" />
  </div>
</template>

<script setup>
const infos = ref([
  {
    type: '求新技術、自我想法的工程師',
    class: 'text-orange-700',
    description:
      '接觸過各種主流框架、雲服務、及工具，並且自己開發過幾個產品運營',
  },
  {
    type: '尊重專業、團隊合作的團隊長',
    class: 'text-emerald-700',
    description: '曾經做過新創帶團隊、也組過團隊接 Freelancer',
  },
  {
    type: '很怕麻煩、追求乾淨的技術人',
    class: 'text-amber-700',
    description:
      '有臭味出來時會盡力避免且優化，也曾經獨自建立整個部門的 DevOps 過',
  },
  {
    type: '熱愛貢獻、積極分享的開源人',
    class: 'text-cyan-700',
    description: '舉辦過部門內部的讀書會、技術分享、也曾在學校當過講師',
  },
])
</script>