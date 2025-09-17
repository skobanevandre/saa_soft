<script setup >
  import { ref, computed, watch } from 'vue'
  import PrimeInputText from 'primevue/inputtext'
  import PrimeSelect from 'primevue/select'
  import PrimePassword from 'primevue/password'

  const props = defineProps( { id: { type: Number, default: 0 } } )
  const emit = defineEmits( [ 'delete' ] )

  const storedPass = ref( '' )

  const recordTypes = ref( [
    { name: 'Локальная', value: 'LOCAL' },
    { name: 'LDAP', value: 'LDAP' },
  ] )

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

  watch ( 
    () => [ userData.value.recordType, storedPass.value ],
    () => { 
      if ( userData.value.recordType === 'LDAP' ) {
        userData.value.pass = null
      } else {
        userData.value.pass = storedPass.value
      }
    }
  )

  const deleteItem = () => {
    emit( 'delete', props.id )
  }

  watch ( 
    () => [ userData.value.recordType, userData.value.login, userData.value.pass, userData.value.labels ] ,
    () => { console.log( userData.value ) } 
  )

</script>


<template>
  <div class="flex justify-center border rounded p-2 gap-2">
    <div class="flex-1">
      <PrimeInputText v-model="com_labels" class="w-full" maxlength="50"/>
    </div>

    <div class="flex-1">
      <PrimeSelect 
        v-model="userData.recordType" 
        :options="recordTypes" 
        class="w-full" 
        option-label="name"
        option-value="value"
      />
    </div>

    <div class="flex-2 flex gap-2" >
      
      <div class="flex-1">
        <PrimeInputText v-model="userData.login" maxlength="100" fluid/>
      </div>

      <div 
        v-if="userData.recordType !== 'LDAP'"
        :class="userData.recordType !== 'LDAP' ? 'flex-1' : 'flex-2'"
      >
        <PrimePassword v-model="storedPass" maxlength="100" :feedback="false" toggleMask fluid />
      </div>
    </div>  

    <div class="flex items-center cursor-pointer" @click="deleteItem()">
      <i class="pi pi-trash !text-2xl text-slate-600" />
    </div>

  </div>
</template>