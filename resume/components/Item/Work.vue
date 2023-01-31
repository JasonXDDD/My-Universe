<template>
  <div class="flex flex-col">
    <img
      v-if="cover"
      :src="cover"
      alt=""
      class="block rounded-t-2xl flex-none h-[12rem] object-cover"
      style="
        -webkit-mask-image: linear-gradient(black 60%, #00000011);
        mask-image: linear-gradient(black 60%, #00000011);
      "
    />
    <div class="p-4 grow flex flex-col">
      <h2 class="text-2xl font-bold" v-if="title">{{ title }}</h2>
      <p v-if="description" class="whitespace-pre-line">
        {{ description.trim() }}
      </p>

      <p class="mt-auto text-right" v-if="link">
        <a :href="link">前往作品</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const { cover, title, description, link } = defineProps({
  cover: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
})
</script>