<template>
  <main class="movies">
    <ul class="movies__list"></ul>
  </main>
</template>

<script lang="ts" setup>
const movies = ref(null);
const getMovies = async () => {
  try {
    movies.value = await $fetch('api/data', {
      method: 'GET',
    });
  } catch (e) {
    console.error(e);
  }
};

getMovies();
</script>

<style lang="scss" scoped>
.movies {
  margin: 0 auto;
  padding: 32px 48px;
}
</style>
