<template>
  <q-page class="admin-page">

    <!-- HEADER -->
    <div class="top-header">

      <div class="header-row">
        <div class="title">Portal</div>

        <div class="actions">
          <q-btn round flat icon="notifications" />
          <q-avatar size="38px">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANvVnTSnvzzLkpT6Wom5BAZ8s8qtj2dl2Z4zZPWlIIKh6gc64vqTmqpTQ6zDO42evyChWepxfhsq3YH1-_bc9LFG14RI6nBSf0psRI2x5xObBoc-05X8a7WiYLFqxh6lbfFFSgNA-sUsQaCccepC1qRPWDkdihz26v2M7p3RQX2xHY_W6QO2yPCeqp6VDRkmjq9BZbCN2zhnUxDak0V9fkZ1B51XM9ViufRI3GhYZlOiXBykkd4POoEUxLB-VWGhvlhsvnjFDiZuI" />
          </q-avatar>
        </div>
      </div>

      <!-- SEARCH -->
      <q-input
        filled
        dark
        dense
        placeholder="Search users or readings..."
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- NAV -->
      <div class="nav-tabs">
        <q-btn flat icon="dashboard" class="active-tab" />
        <q-btn flat icon="people"  @click="irUsuarios()" />
        <q-btn flat icon="payments" @click="irPagos()"/>
        <q-btn flat icon="auto_awesome" @click="irDashboard()"/>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="content">

     <router-view />

    </div>

    <!-- BOTTOM BAR -->
    <div class="bottom-bar">
      <div class="home-indicator"></div>
    </div>

  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter()


const users = [
  { name: "Elena", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUTQDppHpJaPvCwQ0imSRTZgKegeVld8_QfeTtnHn1TQIN1RWUW2pK9t7m9Gb7zSfnnta_gAcQboWxGg4BrM5TX9Mkl9smOwOWioJfiuc-sklvKP4F9rt3Pzdx88scC_dqLf8NFc3an4iBKon6995EjxSg1IvcLn__TC28ttroARnXq2A8S2Z--MUHVbVfNclMdBoa0zdqbb2ADCqZqvmdT10SZexqPVYMG38JvSzeroK5aEwI1UOQLtSKG8Lj-HodAd8k0Z3wXOA" },
  { name: "Marcus", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoEfCRXs28qY0580HvFRU6qBhm8eEtNl3eQNkzLiB60PV43tBqfExCvoW8ajL-lBj22NHKS_LJDOzYL7bZJFU6PhF9HojjRuvHUHxy_vXHL7V0ztACiASZ7hrOKUWjHwDxdoJI-JRekSwO34_90uyRkO_mcp3A6b4T3rb3IPxnNxBoY49y3_CzTYv0tR0id-vVew7n8UOeFjQ69HdrmcThbmBpEAoY9lxy5nUTFedm0hQnT2WouJAvKaJH_PDYPie4w9Zerbe_DaE" }
]

const payments = [
  { title: "Premium Chart", desc: "24 Oct • #TRX-992", amount: "$49.00" },
  { title: "Yearly Forecast", desc: "24 Oct • #TRX-988", amount: "$129.00" }
]

 

function irDashboard() {
  router.push("/admin")
}

function irUsuarios() {
  router.push("/admin/usuarios")
}

function irPagos() {
  router.push("/admin/pagos")
}
</script>

<style scoped>

.admin-page {
  background: radial-gradient(circle at top right, #6A1B9A, #4A148C, #2A0855);
  min-height: 100vh;
  color: white;
}

/* HEADER */

.top-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(18px);
  background: rgba(0,0,0,0.35);
  padding: 20px;
  z-index: 10;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  font-size: 22px;
  color: var(--q-primary);
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 10px;
}

.nav-tabs {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.active-tab {
  color: var(--q-primary);
}

/* CONTENT */

.content {
  padding: 20px;
  padding-bottom: 90px;
  width: 500px;
  height: 500px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--q-primary);
}

.users-row {
  display: flex;
  gap: 14px;
  overflow-x: auto;
}

.user-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-user {
  border: 2px dashed var(--q-primary);
  color: var(--q-primary);
}

/* CARDS */

.glass-card {
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(18px);
  border-radius: 18px;
  margin-bottom: 15px;
}

.payment-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(0,255,150,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.reading-card {
  display: flex;
  padding: 15px;
  gap: 15px;
}

.number-circle {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(242,208,13,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--q-primary);
}

.reading-content {
  flex: 1;
}

.reading-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

/* BOTTOM BAR */

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-indicator {
  width: 120px;
  height: 4px;
  background: rgba(255,255,255,0.3);
  border-radius: 10px;
}

</style>