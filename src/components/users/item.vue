<script setup >
  import { ref, computed, watch, onMounted } from 'vue'
  import PrimeInputText from 'primevue/inputtext'
  import PrimeSelect from 'primevue/select'
  import PrimePassword from 'primevue/password'

  import testStore from '@/stores/user.js'
  const store = testStore()  
  const storedPass = ref( '' )

  const props = defineProps( { 
    id: { type: Number, default: 0 },
  } )

  const recordTypes = ref( [
    { name: 'Локальная', value: 'LOCAL' },
    { name: 'LDAP', value: 'LDAP' },
  ] )

  const errorFields = ref( { login: false, pass: false, recordType: false } )
  const userData = ref( { login: '', pass: '', recordType: '', labels: [] } )
  
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
    store.deleteItem( props.id )
  }

  const validate = () => {
    errorFields.value.login = false
    errorFields.value.pass = false
    errorFields.value.recordType = false

    if ( !userData.value.login ) errorFields.value.login = true
    if ( !userData.value.recordType ) errorFields.value.recordType = true

    if ( userData.value.recordType !== 'LDAP' && !userData.value.pass ) errorFields.value.pass = true

    if ( !Object.values( errorFields.value ).some( el => el === true ) ) {
      store.setItem( userData.value )
    }
  }

  onMounted( () => {
    const index = store.userData.findIndex( el => el.id === props.id )
    userData.value = JSON.parse( JSON.stringify( store.userData[ index ] ) )
  } )
  
</script>


<template>
  <div class="flex justify-center border rounded p-2 gap-2">
    <div class="flex-1">
      <PrimeInputText 
        v-model="com_labels" 
        class="w-full" 
        maxlength="50"
        @blur="validate()"
      />
    </div>

    <div class="flex-1">
      <PrimeSelect 
        v-model="userData.recordType" 
        :options="recordTypes" 
        class="w-full" 
        option-label="name"
        option-value="value"
        @change="validate()"
        @blur="validate()"
        :invalid="errorFields.recordType"
      />
    </div>

    <div class="flex-2 flex gap-2" >
      
      <div class="flex-1">
        <PrimeInputText 
          v-model="userData.login" 
          maxlength="100" 
          fluid 
          :invalid="errorFields.login"
          @blur="validate()"
        />
      </div>

      <div 
        v-if="userData.recordType !== 'LDAP'"
        :class="userData.recordType !== 'LDAP' ? 'flex-1' : 'flex-2'"
      >
        <PrimePassword 
          v-model="storedPass" 
          maxlength="100" 
          :feedback="false" 
          toggleMask 
          fluid 
          :invalid="errorFields.pass"
          @blur="validate()"
        />
      </div>
    </div>  

    <div class="flex items-center cursor-pointer" @click="deleteItem()">
      <i class="pi pi-trash !text-2xl text-slate-600" />
    </div>

  </div>
</template>