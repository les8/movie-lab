<template>
  <div></div>
</template>

<script lang="js" setup>
const { data: details, error } = await useAsyncData(
  'movieDetails',
  () => $fetch(`/api/detail`, {
    method: 'GET'
  })
);

if (error.value) {
  console.error(error.value);
}
</script>

<style lang="scss" scoped></style>
