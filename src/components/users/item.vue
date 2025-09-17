<script setup >
  import { ref, computed  } from 'vue'
  import PrimeInputText from 'primevue/inputtext'
  import PrimeSelect from 'primevue/select'

  const userData = ref( {
    login: '',
    pass: '',
    recordType: '',
    labels: []
  } )
  
  const com_labels = computed( {
    get: () => { 
      const dataArray = []
      userData.value.labels.map( el => dataArray.push( el.text ) )
      const result = dataArray.join( '; ' )
      return result
    },
    set: ( val ) => {
      const dataArray = val.split( ';' )
      userData.value.labels = []
      dataArray.map( el => userData.value.labels.push( { text: el.trim() } ) )
    }
  } )
</script>


<template>
  <div class="flex justify-center border rounded p-2 gap-2">
    <div class="border flex-1">
      <PrimeInputText v-model="com_labels" class="w-full" />
    </div>

    <div class="border flex-1">
      <PrimeSelect class="w-full" />
    </div>

    <div class="border flex-1">
      <PrimeInputText class="w-full" />
    </div>

    <div class="border flex-1">
      <PrimeInputText class="w-full" />
    </div>

    <div class="border flex items-center">
      <i class="pi pi-trash !text-2xl text-slate-600" />
    </div>

  </div>
</template>