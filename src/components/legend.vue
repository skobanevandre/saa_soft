<script setup>
  import { ref } from 'vue'
  const githubLink = ref('https://github.com/skobanevandre/saa_soft')
</script>

<template>
  <fieldset class="flex flex-col p-2 border rounded">
    <legend>Задача и стэк</legend>
    <span class="font-semibold">Необходимо реализовать форму управления учетными записями.</span>
    <span class="mt-2">Использованный стэк:</span>
    <ul class="ml-2">
      <li>Vue 3</li>
      <li>Tailwind CSS</li>
      <li>PrimeVue UI components</li>
    </ul>
    <span>
      Ссылка на GitHub:
      <a class="hover:underline" :href="githubLink">
        {{ githubLink }}
      </a>
    </span>
  </fieldset>
</template>