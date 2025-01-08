<template>
  <li class="flex items-center gap-1.5 py-0.5 px-1.5 rounded-lg" :style="{backgroundColor: props.color}">
    <NuxtIcon :name="props.icon" class="flex items-center" />
    <span class="first-letter:uppercase">{{ props.name }}</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  icon: string;
  color: string
}>();
</script>

<style scoped>
.nuxt-icon.nuxt-icon--fill * {
  width: 12px;
  height: 12px;
  fill: none !important;
  margin-bottom: 0;
}
</style>
