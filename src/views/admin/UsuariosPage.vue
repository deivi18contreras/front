<template>
  <div>
    <h1>Users</h1>

    <table border="1" cellpadding="10">
    <thead>
  <tr>
    <th>Nombre</th>
    <th>Fecha Nacimiento</th>
    <th>Email</th>
    <th>Estado</th>
    <th>Acciones</th>
  </tr>
</thead>

<tbody>
  <tr v-for="user in usuarios" :key="user._id">
    <td>{{ user.nombre }}</td>
    <td>{{ user.fechanacimiento }}</td>
    <td>{{ user.email }}</td>
    <td>
      <span v-if="user.estado === 1">Activo</span>
      <span v-else>Inactivo</span>
    </td>
    <td>
      <button 
        v-if="user.estado === 0" 
        @click="activarUser(user._id)"
      >
        Activar
      </button>

      <button 
        v-if="user.estado === 1" 
        @click="desactivarUser(user._id)"
      >
        Desactivar
      </button>
    </td>
  </tr>
</tbody>
    </table>

  </div>

  <input 
  type="text" 
  v-model="emailBuscar" 
  placeholder="Buscar por email" 
/>

<button @click="userEmail">
  Buscar
</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getData, putData} from '../../services/services'

let usuarios = ref([])
let emailBuscar = ref("")
let usuarioEmail = ref([])

let usuarioActivado = ref("")

async function listUsers(){
  try {
    let res = await getData("usuario")
    usuarios.value = res    
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  listUsers()
})

// async function userEmail() {
//   try {
//     let res = await getData(`usuario/email${emailBuscar.value}`)
//     usuarioEmail.value = res
//     console.log(usuarioEmail.value)
//   } catch (error) {
//     console.log(error)
//   }
// }

// onMounted(() => {
//   userEmail()
// })
async function activarUser(id) {
  try {
    await putData(`usuario/${id}`, { estado: 1 })
    listUsers() // refrescamos la tabla
  } catch (error) {
    console.log(error)
  }
}

async function desactivarUser(id) {
  try {
    await putData(`usuario/${id}`, { estado: 0 })
    listUsers() // refrescamos la tabla
  } catch (error) {
    console.log(error)
  }
}
</script>