<template>
  <ul class="flex items-center gap-2">
    <MTagsItem
      v-for="(tag, name) in tags"
      :key="name"
      :name="tag.name"
      :icon="tag.icon"
      :color="tag.color"
    />
  </ul>
</template>

<script setup lang="ts">
import MTagsItem from './MTagsItem.vue';

const props = defineProps<{
  rating: number;
  genre: string;
  duration: string;
}>();

const ratingStyle = computed(() => {
  let style = 'rgba(112, 43, 254, 1)'

  if (props.rating < 4) {
    style = 'rgba(232, 26, 12, 1)';
  } else if (props.rating >= 7) {
    style= 'rgba(3, 156, 85, 1)';
  }

  return style;
});

const setDuration = computed(() => {
  const durationArr = props.duration.split(':');

  if (durationArr[1].length < 2) {
    durationArr[1] = '0' + durationArr[1];
    return durationArr.join(':');
  } else return props.duration;
});

const tags = reactive({
  rating: {
    name: Number(props.rating).toFixed(2),
    icon: 'star',
    color: ratingStyle.value
  },
  genre: {
    name: props.genre,
    icon: 'film',
    color: 'rgba(44, 129, 251, 1)'
  },
  duration: {
    name: setDuration.value,
    icon: 'clock',
    color: 'rgba(112, 43, 254, 1)'
  },
});
</script>
