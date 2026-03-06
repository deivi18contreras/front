<template>
  <div class="mystic-wrapper">
    <div class="content-container">
      
      <h1 class="mystic-title">Gestión de Almas (Usuarios)</h1>

      <div class="search-bar">
        <input 
          type="text" 
          v-model="emailBuscar" 
          placeholder="Buscar usuario por email..." 
          class="mystic-input"
        />
        <button @click="userEmail" class="mystic-btn">
          Buscar
        </button>
      </div>

      <div class="table-container">
        <table class="mystic-table">
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
              <td class="dates">{{ user.fechanacimiento }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span v-if="user.estado === 1" class="status-badge active">Activo</span>
                <span v-else class="status-badge inactive">Inactivo</span>
              </td>
              <td>
                <button 
                  v-if="user.estado === 0" 
                  @click="activarUser(user._id)"
                  class="action-btn"
                >
                  Activar
                </button>

                <button 
                  v-if="user.estado === 1" 
                  @click="desactivarUser(user._id)"
                  class="action-btn outline"
                >
                  Desactivar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
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


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Montserrat:wght@300;400;500&display=swap');

/* CONTENEDOR PRINCIPAL - Ocupa todo el viewport */
.mystic-wrapper {
  background-color: transparent; /* Hereda el fondo de tu Layout principal si lo deseas, o usa #0b0c10 */
  width: 90vw;
  height: 100%;
  min-height: 80vh; /* Se asegura de tomar buen espacio vertical */
  padding: 20px;
  color: #e0e0e0;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.content-container {
  width: 100%;
  max-width: 100%; /* Ocupa todo el ancho */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenedor crezca */
}

/* TÍTULO */
.mystic-title {
  font-family: 'Cinzel', serif;
  color: #C6A75E;
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 20px;
  letter-spacing: 3px;
  text-shadow: 0 4px 15px rgba(198, 167, 94, 0.2);
}

/* BÚSQUEDA */
.search-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  justify-content: flex-end;
  width: 100%;
}

.mystic-input {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(198, 167, 94, 0.3);
  border-radius: 8px;
  padding: 12px 20px;
  color: #C6A75E;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  width: 300px;
  transition: all 0.3s ease;
  outline: none;
}

.mystic-input:focus {
  border-color: #C6A75E;
  box-shadow: 0 0 10px rgba(198, 167, 94, 0.2);
}

.mystic-input::placeholder {
  color: rgba(198, 167, 94, 0.5);
}

.mystic-btn {
  background: linear-gradient(135deg, #d4b56a, #C6A75E);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 13px;
  white-space: nowrap;
}

.mystic-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(198, 167, 94, 0.4);
}

/* CONTENEDOR DE LA TABLA - Scroll horizontal para móviles */
.table-container {
  background-color: rgba(18, 19, 24, 0.8); /* Ligeramente translúcido */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(198, 167, 94, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  overflow-x: auto; /* Magia para hacerla responsiva */
  width: 100%;
  flex-grow: 1; /* La tabla empuja hacia abajo para llenar espacio */
}

/* TABLA */
.mystic-table {
  width: 100%;
  min-width: 800px; /* Fuerza un ancho mínimo para que no se apriete en móviles */
  border-collapse: collapse;
  text-align: left;
}

.mystic-table th {
  background-color: rgba(8, 9, 11, 0.9);
  color: #C6A75E;
  padding: 18px 20px;
  font-family: 'Cinzel', serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  border-bottom: 1px solid rgba(198, 167, 94, 0.3);
  white-space: nowrap;
}

.mystic-table td {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(198, 167, 94, 0.08);
  font-size: 14px;
  color: #cfcfcf;
  vertical-align: middle;
}

.mystic-table .dates {
  font-family: monospace;
  color: #a0a0a0;
  font-size: 13px;
  letter-spacing: 0.5px;
}

/* EFECTO HOVER EN FILAS */
.mystic-table tbody tr {
  transition: background-color 0.3s ease;
}

.mystic-table tbody tr:hover {
  background-color: rgba(198, 167, 94, 0.08);
}

/* ETIQUETAS DE ESTADO */
.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}

.status-badge.active {
  background-color: rgba(198, 167, 94, 0.15);
  color: #C6A75E;
  border: 1px solid rgba(198, 167, 94, 0.4);
}

.status-badge.inactive {
  background-color: rgba(255, 255, 255, 0.05);
  color: #7a7a7a;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* BOTONES DE ACCIÓN */
.actions-cell {
  white-space: nowrap; /* Evita que los botones se rompan en dos líneas */
}

.action-btn {
  background-color: #C6A75E;
  color: #000;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background-color: #d4b56a;
  box-shadow: 0 0 12px rgba(198, 167, 94, 0.5);
  transform: translateY(-1px);
}

.action-btn.outline {
  background-color: transparent;
  color: #C6A75E;
  border: 1px solid #C6A75E;
}

.action-btn.outline:hover {
  background-color: rgba(198, 167, 94, 0.15);
  box-shadow: inset 0 0 10px rgba(198, 167, 94, 0.2);
}

/* ================== RESPONSIVE DESIGN ================== */
@media (max-width: 768px) {
  .mystic-wrapper {
    padding: 10px;
  }

  .mystic-title {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 15px;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .mystic-input {
    width: 100%;
    box-sizing: border-box;
  }

  .mystic-btn {
    width: 100%;
  }

  .mystic-table td, .mystic-table th {
    padding: 12px 15px;
    font-size: 13px;
  }
}
</style>