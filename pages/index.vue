<template>
  <main class="my-0 mx-auto py-8 px-12 max-w-screen-2xl">
    <ul
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
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
