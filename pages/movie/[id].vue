<template>
  <article
    v-if="details"
    class="flex flex-wrap gap-16 py-6 max-w-screen-2xl w-full mx-auto px-12"
  >
    <div class="flex flex-col gap-6">
      <h1>{{ details.name }}</h1>

      <img
        :src="details.poster"
        :alt="`${details.name} poster`"
        class="rounded-lg object-cover overflow-hidden"
        width="240"
        height="320"
        loading="lazy"
      />

      <MTags
        :rating="details.rating"
        :genre="details.genre"
        :duration="details.duration"
      />
    </div>

    <div class="flex flex-col gap-4 max-w-xs">
      <h1>Description</h1>
      <p>{{ details.description }}</p>

      <h1>Trivia</h1>
      <ul class="list-disc pl-4">
        <li v-for="triv in details.trivia" :key="triv" class="list-disc">
          <p>{{ triv }}</p>
        </li>
      </ul>

      <h1>Actors</h1>
      <ul class="list-disc pl-4">
        <li v-for="actor in details.actors" :key="actor.imdb_id" class="list-disc underline decoration-white">
          <NuxtLink :to="`/actors/${actor.imdb_id}`">
            <p>{{ actor.name }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts" setup>
import MTags from '~/components/m-kit/MTags.vue';

interface Actor {
  imdb_id: string;
  name: string;
}

interface Details {
  actors: Actor[];
  description: string;
  duration: string;
  genre: string;
  id: number;
  name: string;
  poster: string;
  rating: number;
  trivia: string[];
}

const { data: details, error } = await useAsyncData<Details>(
  'movieDetails',
  () =>
    $fetch<Details>(`/api/detail`, {
      method: 'GET',
    })
);

if (error.value) {
  console.error(error.value);
}
</script>
