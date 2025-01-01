<template>
  <div></div>
</template>

<script setup>
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

<style lang="scss" scoped></style>
