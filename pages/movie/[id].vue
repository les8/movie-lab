<template>
  <article v-if="details" class="details">
    <div class="details__main">
      <h1>{{ details.name }}</h1>

      <img
        :src="details.poster"
        :alt="`${details.name} poster`"
        class="details__poster"
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

    <div class="details__info">
      <h1>Description</h1>
      <p>{{ details.description }}</p>

      <h1>Trivia</h1>
      <ul class="details__trivia">
        <li v-for="triv in details.trivia" :key="triv">
          <p>{{ triv }}</p>
        </li>
      </ul>

      <h1>Actors</h1>
      <ul class="details__actors">
        <li v-for="actor in details.actors" :key="actor.imdb_id">
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

<style lang="scss" scoped>
.details {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
  padding: 24px 46px;

  &__main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__poster {
    overflow: hidden;
    border-radius: 8px;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 340px;

    ul li {
      list-style: disc;
    }

    ul {
      padding-left: 23px;
    }
  }

  &__actors {
    li {
      text-decoration: underline;
    }
  }
}
</style>
