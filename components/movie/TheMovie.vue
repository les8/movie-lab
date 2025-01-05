<template>
  <article class="movie">
    <NuxtLink :to="`movie/${props.movie.id}`">
      <div class="movie__card">
        <img
          :src="props.movie.poster"
          :alt="`${props.movie.name} poster`"
          class="movie__poster"
          height="172"
          loading="lazy"
        />

        <div class="movie__info">
          <h2>{{ props.movie.name }}</h2>

          <p>{{ props.movie.description }}</p>
        </div>

        <MTags
          :rating="props.movie.rating"
          :genre="props.movie.genre"
          :duration="props.movie.duration"
        />
      </div>

      <div class="movie__background" />
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

<style lang="scss" scoped>
.movie {
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(112, 43, 254, 1);
    border-radius: 8px;
  }

  &__card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 306px;
    min-width: 0;
    padding: 12px;
    background: rgba(41, 45, 50, 1);
    border-radius: 8px;
    z-index: 1;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-8px, -8px);
    }
  }

  &__poster {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    object-fit: cover;
  }

  &__info {
    h2 {
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
