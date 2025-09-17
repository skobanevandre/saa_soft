<script setup>
  import PrimeButton from 'primevue/button'
  import UsersList from '@/components/users/TheList.vue'

  import testStore from '@/stores/user.js'
  const store = testStore()
  
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Учетные записи</h2>
      <PrimeButton label="Добавить" icon="pi pi-plus" @click="store.addEmptyItem()"/>
    </div>  
    <UsersList />
  </div>
 
</template>