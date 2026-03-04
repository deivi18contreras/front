<template>
  <q-drawer
    v-model="drawer"
    side="right"
    overlay
    bordered
    width="400"
    class="bg-surface text-white"
  >

    <!-- HEADER PERFIL -->
    <div class="q-pa-xl text-center relative">

      <div class="profile-avatar-wrapper q-mb-md">
        <q-avatar size="120px" class="profile-avatar">
          <img :src="user.avatar" />
        </q-avatar>

        <q-icon
          name="verified"
          color="secondary"
          size="20px"
          class="verified-icon"
        />
      </div>

      <div class="text-h5 text-weight-bold">
        {{ user.nombre }}
      </div>

      <div class="text-caption text-grey-5">
        Cosmic Explorer since 2023
      </div>

    </div>

    <!-- STATS -->
    <div class="row q-col-gutter-md q-px-lg q-mb-lg">
      <div class="col-6">
        <q-card class="stat-card text-center">
          <div class="text-caption text-grey-5">Total Readings</div>
          <div class="text-h5 text-weight-bold">42</div>
        </q-card>
      </div>

      <div class="col-6">
        <q-card class="stat-card text-center">
          <div class="text-caption text-grey-5">Life Path</div>
          <div class="text-h5 text-weight-bold">7</div>
        </q-card>
      </div>
    </div>

    <!-- LISTA -->
    <div class="q-px-lg q-mt-md">

      <div class="text-subtitle1 text-weight-bold q-mb-md">
        Daily Readings
      </div>

      <q-list bordered separator dark>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="stars" color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cosmic Alignment</q-item-label>
            <q-item-label caption>
              Today's energy forecast
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chevron_right" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="nightlight" color="secondary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Lunar Influence</q-item-label>
            <q-item-label caption>
              Emotional current flow
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chevron_right" />
          </q-item-section>
        </q-item>

      </q-list>
    </div>

    <!-- LOGOUT -->
    <div class="q-pa-lg absolute-bottom">
      <q-btn
        class="full-width nebula-red"
        label="Log Out"
        icon="logout"
        unelevated
      />
    </div>

  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

defineExpose({
  openDrawer: () => drawer.value = true
})

const user = ref({
  nombre: 'Elias Thorne',
  avatar: 'https://i.pravatar.cc/300?img=12'
})
</script>

<style scoped>
.bg-surface {
  background: #1d1429;
}

.profile-avatar {
  border: 3px solid #8c2bee;
  padding: 4px;
  background: linear-gradient(135deg, #8c2bee, #3b82f6);
}

.profile-avatar-wrapper {
  position: relative;
  display: inline-block;
}

.verified-icon {
  position: absolute;
  bottom: 0;
  right: 10px;
  background: #3b82f6;
  border-radius: 50%;
}

.stat-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(140,43,238,0.3);
  padding: 16px;
}

.nebula-red {
  background: linear-gradient(135deg, #ef4444, #8c2bee);
  color: white;
}
</style>