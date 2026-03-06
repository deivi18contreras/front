<template>
  <q-page padding class="mystic-bg text-white">
    <div class="q-pb-lg text-center">
      <h1 class="text-h3 text-amber-5 mystic-title q-ma-none">Registro de Pagos</h1>
      <p class="text-deep-purple-3 q-mt-sm">Control financiero y energía monetaria 💸</p>
    </div>

    <div class="row q-mb-lg justify-center">
      <div class="col-12 col-md-6 col-lg-4">
        <q-input
          v-model="emailBuscar"
          dark
          outlined
          color="amber"
          label="Buscar por Email"
          class="mystic-input"
          @keyup.enter="userEmail"
        >
          <template v-slot:append>
            <q-btn round dense flat icon="search" color="amber" @click="userEmail" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-lg-10">
        <q-table
          :rows="pagos"
          :columns="columns"
          row-key="_id"
          dark
          flat
          bordered
          class="mystic-table"
          card-class="bg-transparent"
        >
          <template v-slot:body-cell-monto="props">
            <q-td :props="props" class="text-amber text-weight-bold text-h6">
              ${{ props.row.monto }}
            </q-td>
          </template>
          
          <template v-slot:body-cell-fecha="props">
            <q-td :props="props">
              {{ formatearFecha(props.row.fecha) }}
            </q-td>
          </template>

          <template v-slot:body-cell-cancelacion="props">
            <q-td :props="props" class="text-deep-purple-3 text-weight-medium">
              {{ calcularCancelacion(props.row.fecha) }}
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
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
    console.log(pagos.value);
    
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


<style scoped>
/* 🌌 Fondo místico general */
.mystic-bg {
  background: radial-gradient(circle at top center, #2e1065 0%, #0f172a 100%);
  min-height: 100vh;
  min-width: 100vw;
}

/* ✨ Título con brillo dorado */
.mystic-title {
  font-family: 'Cinzel', serif; /* O la fuente que uses en tu proyecto */
  text-shadow: 0 0 15px rgba(245, 158, 11, 0.5);
  letter-spacing: 2px;
}

/* 🔮 Input de búsqueda con estilo cristalino */
.mystic-input {
  background: rgba(88, 28, 135, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

/* 📜 Tabla con bordes brillantes y fondo translúcido */
.mystic-table {
  background: rgba(15, 23, 42, 0.6) !important;
  border: 1px solid rgba(139, 92, 246, 0.4);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}

/* Personalización de la cabecera de la tabla */
:deep(.q-table th) {
  font-size: 1.1em;
  color: #c4b5fd; /* Color violeta claro */
  border-bottom: 2px solid rgba(245, 158, 11, 0.3) !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Filas al hacer hover */
:deep(.q-table tbody tr:hover) {
  background: rgba(139, 92, 246, 0.1) !important;
}
</style>