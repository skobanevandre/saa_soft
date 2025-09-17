<script setup>
  import VueLayout from '@/layouts/TheLayout.vue'
  import Users from '@/components/users/TheIndex.vue'
  
  import testStore from '@/stores/user.js'
  const store = testStore()  

  const canParse = ( data ) => {
    try {
      JSON.parse( data )
      return true
    } catch {
      return false
    }
  }

  const lsItem = localStorage.getItem( 'saaSoftTestData' )

  if ( canParse( lsItem ) || !Array.isArray( JSON.parse( lsItem ) ) ) { 
    store.userData = JSON.parse( lsItem )
  }  
</script>

<template>
  <VueLayout>
    <Users />
  </VueLayout>
</template>