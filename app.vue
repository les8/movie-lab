<template>
  <NuxtLayout>
    <Transition name="fade" mode="out-in">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
