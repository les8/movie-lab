<template>
  <article class="relative">
    <NuxtLink :to="`/movie/${props.movie.id}`">
      <div
        class="relative flex flex-col gap-3 min-w-0 h-80 p-3 bg-slate-700 rounded-lg z-10 transition-transform duration-200 ease-in-out hover:-translate-x-2 hover:-translate-y-2"
      >
        <img
          :src="props.movie.poster"
          :alt="`${props.movie.name} poster`"
          class="w-full overflow-hidden rounded-lg object-cover h-39"
          height="156"
          loading="lazy"
        />

        <div class="flex flex-col gap-1">
          <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.movie.name }}</h2>

          <p class="line-clamp-2 overflow-hidden text-ellipsis h-12s">{{ props.movie.description }}</p>
        </div>

        <MTags
          :rating="props.movie.rating"
          :genre="props.movie.genre"
          :duration="props.movie.duration"
        />
      </div>

      <div
        class="absolute top-0 left-0 w-full h-full rounded-lg bg-indigo-600"
      />
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { type Movie } from '~/pages/index.vue';
import MTags from '../m-kit/MTags.vue';

const props = defineProps<{
  movie: Movie;
}>();
</script>

<style>
.h-39 {
  height: 156px;
}
</style>
