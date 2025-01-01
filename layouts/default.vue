<template>
  <div class="layout">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout {
  position: relative;
  height: 100%;
}
</style>
