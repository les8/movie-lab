<template>
  <ul class="m-tags">
    <li :style="ratingStyle">
      <NuxtIcon name="star" class="m-tags__icon" /><span
        class="m-tags__tag-name"
        >{{ props.rating }}</span
      >
    </li>

    <li class="m-tags__genre">
      <NuxtIcon name="film" class="m-tags__icon" /><span
        class="m-tags__tag-name"
        >{{ props.genre }}</span
      >
    </li>

    <li class="m-tags__clock">
      <NuxtIcon name="clock" class="m-tags__icon" /><span
        class="m-tags__tag-name"
        >{{ props.duration }}</span
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  rating: number;
  genre: string;
  duration: string;
}>();

const ratingStyle = computed(() => {
  const style = {
    background: 'rgba(112, 43, 254, 1)',
  };

  if (props.rating < 4) {
    style.background = 'rgba(232, 26, 12, 1)';
  } else if (props.rating >= 7) {
    style.background = 'rgba(3, 156, 85, 1)';
  }

  return style;
});
</script>

<style lang="scss" scoped>
.m-tags {
  display: flex;
  align-items: center;
  gap: 8px;

  li {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 6px;
    border-radius: 8px;
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  &__tag-name {
    height: 13px;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    line-height: 12.89px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  &__genre {
    background: rgba(44, 129, 251, 1);
  }

  &__clock {
    background: rgba(112, 43, 254, 1);
  }
}

.nuxt-icon.nuxt-icon--fill * {
  width: 8px;
  height: 8px;
  fill: none !important;
  margin-bottom: 0;
}
</style>
