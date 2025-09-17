import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore( 'testStore', () => {
  const userItem = ref( {
    login: '',
    pass: '',
    recordType: '',
    labels: [],
  } )

  const userData = ref( [] )

  const addEmptyItem = () => { 
    userData.value.push( JSON.parse( JSON.stringify( { ...userItem.value, id: userData.value.length } ) ) ) 
  }
  
  const deleteItem = ( itemId ) => { 
    const index = userData.value.findIndex( el => el.id === itemId )
    userData.value.splice( index, 1 ) 
  }

  const setItem = ( item ) => {
    const index = userData.value.findIndex( el => el.id === item.id )
    userData.value[ index ] = item
    localStorage.setItem( 'saaSoftTestData', JSON.stringify( userData.value ) )
  }

  return { 
    userData,
    addEmptyItem,
    setItem,
    deleteItem,
  }
} ) 