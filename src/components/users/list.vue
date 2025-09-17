<script setup>
  import testStore from '@/stores/user.js'
  import UserItem from '@/components/users/item.vue'
  const store = testStore()
</script>

<template>
  <div class="flex flex-col w-full p-2 gap-2">

    <div class="bg-slate-100 p-2 rounded flex items-center gap-2 w-fit">
      <i class="pi pi-question-circle !text-xl" />
      <span>Для указания нескольких меток для одной пары логин \ пароль используйте разделитель ";"</span>
    </div>

    <div class="flex items-center gap-2 mb-2">
      <div class="flex-1 text-center"><span>Метки</span></div>  
      <div class="flex-1 text-center"><span>Тип записи</span></div>  
      <div class="flex-1 text-center"><span class="flex-1">Логин</span></div>  
      <div class="flex-1 text-center"><span class="flex-1">Пароль</span></div>  
    </div>

    <template v-for="item of store.userData" :key="item.id">
      <UserItem :id="item.id"/>
    </template>  

  </div>
</template>