<template>
  <q-drawer
    v-model="drawer"
    side="right"
    overlay
    width="420"
    class="glass-panel text-white"
  >
    <!-- HEADER -->
    <div class="notif-header">
      <div class="row items-center q-gutter-sm">
        <q-icon name="notifications_active" color="primary" size="28px" />
        <div class="text-h6 text-weight-bold">
          Cosmic Alerts
        </div>
      </div>

      <q-btn
        flat
        round
        dense
        icon="close"
        color="grey-5"
        @click="drawer = false"
      />
    </div>

    <!-- FILTROS -->
    <div class="notif-filters">
      <q-btn unelevated label="ALL" color="primary" size="sm" rounded />
      <q-btn flat label="UNREAD" color="grey-5" size="sm" rounded />
      <q-btn flat label="ARCHIVED" color="grey-5" size="sm" rounded />
    </div>

    <!-- LISTA -->
    <div class="notif-content">

      <!-- CARD 1 -->
      <div class="notif-card">
        <div class="row justify-between items-start">

          <div class="row items-center q-gutter-sm">
            <div class="icon-box blue">
              <q-icon name="auto_stories" />
            </div>

            <div>
              <div class="notif-tag text-blue">
                New Alignment
              </div>
              <div class="notif-title">
                Your reading is ready
              </div>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <div class="text-caption text-grey-5">
              2m ago
            </div>
            <div class="glow-dot"></div>
          </div>
        </div>

        <div class="notif-text">
          The AI has finished calculating your personalized cosmic alignment.
        </div>

        <div class="row q-gutter-sm q-mt-sm">
          <q-btn
            size="sm"
            color="primary"
            label="View Reading"
            unelevated
          />
          <q-btn
            size="sm"
            flat
            label="Dismiss"
            color="grey-4"
          />
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="notif-card">
        <div class="row justify-between items-start">

          <div class="row items-center q-gutter-sm">
            <div class="icon-box primary">
              <q-icon name="system_update" />
            </div>

            <div>
              <div class="notif-tag text-primary">
                Updates
              </div>
              <div class="notif-title">
                System Update available
              </div>
            </div>
          </div>

          <div class="text-caption text-grey-5">
            1h ago
          </div>
        </div>

        <div class="notif-text">
          Aetheris v2.4 brings improved celestial pattern matching.
        </div>

        <div class="update-box">
          <q-icon name="star_rate" size="40px" />
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="notif-card opacity-80">
        <div class="row justify-between items-start">

          <div class="row items-center q-gutter-sm">
            <div class="icon-box grey">
              <q-icon name="forum" />
            </div>

            <div>
              <div class="notif-tag text-grey-5">
                Community
              </div>
              <div class="notif-title">
                New comment on your post
              </div>
            </div>
          </div>

          <div class="text-caption text-grey-5">
            3h ago
          </div>
        </div>

        <div class="notif-text italic">
          "This alignment really resonated with my current life path journey..."
        </div>
      </div>

    </div>

    <!-- FOOTER -->
    <div class="notif-footer">
      <q-btn
        outline
        color="primary"
        icon="settings"
        label="Notification Preferences"
        class="full-width"
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
</script>

<style scoped>

.glass-panel {
  background: rgba(25, 16, 34, 0.92);
  backdrop-filter: blur(14px);
  border-left: 1px solid rgba(255,255,255,0.08);
}

.notif-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.notif-filters {
  padding: 15px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.notif-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.notif-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 15px;
  border-radius: 14px;
  margin-bottom: 15px;
  transition: 0.3s;
}

.notif-card:hover {
  box-shadow: 0 0 20px rgba(140,43,238,0.15);
}

.notif-title {
  font-weight: 600;
}

.notif-tag {
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.notif-text {
  font-size: 13px;
  color: #cfcfcf;
  margin-top: 8px;
}

.icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box.blue {
  background: rgba(76,201,240,0.1);
  border: 1px solid rgba(76,201,240,0.2);
  color: #4cc9f0;
}

.icon-box.primary {
  background: rgba(140,43,238,0.1);
  border: 1px solid rgba(140,43,238,0.2);
  color: #8c2bee;
}

.icon-box.grey {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #ccc;
}

.glow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4cc9f0;
  box-shadow: 0 0 8px #4cc9f0;
}

.update-box {
  height: 90px;
  border-radius: 12px;
  margin-top: 10px;
  background: linear-gradient(to right, #191022, #302839);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
}

.notif-footer {
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.05);
  background: rgba(255,255,255,0.03);
}

</style>