<template>
  <div class="">
    <h2 class="title">GitHub Contributions</h2>
    <div class="calendar !min-h-0 !border-0" />
  </div>
</template>

<script setup>
onMounted(() => {
  window.GitHubCalendar('.calendar', 'jasonxddd', {
    summary_text: 'A',
    responsive: true,
  })
})
</script>

<style lang="sass">
.Box-header, .color-fg-muted
  display: none

.graph-before-activity-overview
  border: none
</style>