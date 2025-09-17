<script setup>
  import PrimeButton from 'primevue/button'
  // import UsersList from '@/components/users/list.vue'
  import UsersItem from '@/components/users/item.vue'

</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Учетные записи</h2>
      <PrimeButton label="Добавить" icon="pi pi-plus"/>
    </div>  
    <!-- <UsersList /> -->
    <UsersItem />
  </div>
 
</template>