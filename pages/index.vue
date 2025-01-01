<template>
  <main class="movies">
    <ul class="movies__list"></ul>
  </main>
</template>

<script lang="ts" setup>
interface Movie {
  description: string
  duration: string
  genre: string
  id: number
  name: string
  poster: string
  rating: number
}

const movies = ref<Movie[]>([]);
const getMovies = async (): Promise<void> => {
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
