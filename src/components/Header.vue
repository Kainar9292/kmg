<template>
  <ALayoutHeader class="page-header"> {{ title }} </ALayoutHeader>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
