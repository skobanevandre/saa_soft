import { ref } from 'vue'
import { defineStore } from 'pinia'

export const testStore = defineStore( 'testStore', () => {
  const userData = ref( [] )

  const addItem = ( item ) => { userData.value.push( item ) }

  return { 
    userData,
    addItem 
  }
} )