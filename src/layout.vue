<script setup>
  import PrimeDivider from 'primevue/divider'
  import Legend from './components/legend.vue'
</script>

<template>
  <div class="container p-2 mx-auto mt-2">
    <h1 class="font-semibold text-2xl mb-2">Тестовое задание для Vue Frontend Developer</h1>
    <PrimeDivider />
    <slot></slot>
    <!-- <Legend /> -->
  </div>
</template>