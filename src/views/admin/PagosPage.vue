<template>
  <div>
    <h1>Pagos</h1>

    <br><br>

    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>Monto</th>
          <th>Tipo</th>
          <th>Fecha de Pago</th>
          <th>Fecha de Cancelación</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="pago in pagos" :key="pago._id">
          <td>${{ pago.monto }}</td>
          <td>{{ pago.tipo }}</td>
          <td>{{ formatearFecha(pago.fecha) }}</td>
          <td>{{ calcularCancelacion(pago.fecha) }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../../services/services'

let pagos = ref([])
let emailBuscar = ref("")

// 📌 Listar pagos
async function listPagos(){
  try {
    let res = await getData("pagos")
    pagos.value = res 
    
    console.log(res);
    
  } catch (error) {
    console.log(error)
  }
}

// 📌 Buscar por email (opcional)
async function userEmail(){
  try {
    let res = await getData(`pagos?email=${emailBuscar.value}`)
    pagos.value = res
 
  } catch (error) {
    console.log(error)
  }
}
 
function formatearFecha(fecha){
  const date = new Date(fecha)
  return date.toLocaleDateString()
}
 
function calcularCancelacion(fecha){
  const date = new Date(fecha)
  date.setMonth(date.getMonth() + 1)
  return date.toLocaleDateString()
}

onMounted(() => {
  listPagos()
})
</script>