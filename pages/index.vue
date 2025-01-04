<template>
  <main class="movies">
    <ul class="movies__list">
      <TheMovie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </ul>
  </main>
</template>

<script lang="ts" setup>
import TheMovie from '~/components/movie/TheMovie.vue';

export interface Movie {
  description: string;
  duration: string;
  genre: string;
  id: number;
  name: string;
  poster: string;
  rating: number;
}

interface Result {
  items: Movie[];
}

const movies = ref<Movie[]>([]);
const getMovies = async (): Promise<void> => {
  try {
    const result = await $fetch<Result>('api/data', {
      method: 'GET',
    });

    movies.value = result.items;
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
  max-width: 1440px;

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
