<template>
  <q-page class="mystic-page stardust-bg">
    <header class="mystic-header">
      <q-btn flat round icon="chevron_left" color="grey-5" />
      <h1 class="header-title">PREDICCIONES</h1>
      <q-btn flat round class="notification-btn" icon="notifications" />
    </header>

    <div class="q-px-md q-pt-lg space-y-8">
      <section>
        <div class="hero-container">
          <div class="hero-glow"></div>
          <q-card flat class="glass-card hero-card">
            <div class="hero-icon-bg">
              <q-icon name="brightness_high" size="120px" />
            </div>
            <div class="forecast-badge">
              <q-icon name="wb_sunny" size="14px" />
              <span>DAILY FORECAST</span>
            </div>
            <h2 class="text-h5 text-weight-bold q-mb-sm">Sintonía con el Universo</h2>
            <p class="text-description">
              Hoy, los números indican una fuerte conexión con tu intuición. Es el momento perfecto para tomar decisiones que habías estado postergando. La energía del 7 te guía hacia la verdad interior.
            </p>
          </q-card>
        </div>
      </section>

      <section>
        <div class="row items-center justify-between q-mb-md">
          <h2 class="section-title">Tránsitos Planetarios</h2>
          <q-icon name="rocket_launch" color="primary" size="xs" />
        </div>
        
        <div class="planetary-scroll hide-scrollbar">
          <div v-for="planet in planets" :key="planet.name" class="planet-card glass-card">
            <div class="planet-icon-container" :style="`border-color: ${planet.color}44; background: ${planet.color}11`">
              <q-icon :name="planet.icon" :style="`color: ${planet.color}`" size="sm" />
            </div>
            <div class="text-center">
              <p class="planet-label">{{ planet.name }}</p>
              <p class="planet-status">{{ planet.status }}</p>
            </div>
            <q-linear-progress :value="planet.progress" :style="`color: ${planet.color}`" class="q-mt-xs" />
          </div>
        </div>
      </section>

      <section class="q-gutter-y-md">
        <h2 class="section-title">Perspectivas</h2>
        
        <div class="outlook-card glass-card border-left-primary">
          <div class="outlook-icon-box bg-primary-10">
            <q-icon name="calendar_month" color="primary" size="md" />
          </div>
          <div class="q-ml-md">
            <div class="row items-center q-gutter-x-sm q-mb-xs">
              <h3 class="outlook-title">Monthly Outlook</h3>
              <span class="outlook-badge bg-primary-20 text-primary">FEBRERO</span>
            </div>
            <p class="outlook-desc">Un mes de consolidación financiera y expansión en relaciones profesionales. Tus números maestros están activos.</p>
          </div>
        </div>

        <div class="outlook-card glass-card border-left-purple">
          <div class="outlook-icon-box bg-purple-10">
            <q-icon name="cycle" color="purple-4" size="md" />
          </div>
          <div class="q-ml-md">
            <div class="row items-center q-gutter-x-sm q-mb-xs">
              <h3 class="outlook-title">Yearly Vibration</h3>
              <span class="outlook-badge bg-purple-20 text-purple-4">2024</span>
            </div>
            <p class="outlook-desc">Vibración anual 8: El año de la cosecha. Recibirás recompensas por el trabajo duro de los últimos tres años.</p>
          </div>
        </div>
      </section>

      <section class="q-pb-xl">
        <div class="premium-banner">
          <p class="premium-label">CONTENIDO EXCLUSIVO</p>
          <p class="premium-text">Desbloquea predicciones personalizadas para cada área de tu vida (Amor, Dinero, Salud).</p>
          <q-btn unelevated color="primary" text-color="black" label="MEJORAR A PREMIUM" class="premium-btn" />
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
const planets = [
  { name: 'MARTE', status: 'En Leo', icon: 'brightness_low', color: '#fb923c', progress: 0.75 },
  { name: 'LUNA', status: 'Creciente', icon: 'mode_night', color: '#60a5fa', progress: 0.5 },
  { name: 'SOL', status: 'En Acuario', icon: 'wb_sunny', color: '#f4d125', progress: 1 },
  { name: 'VENUS', status: 'En Piscis', icon: 'star', color: '#c084fc', progress: 0.25 }
]
</script>

<style scoped>
/* CONFIGURACIÓN DE COLORES Y FONDO */
.mystic-page {
  background-color: #1a1625;
  color: #f1f5f9;
  min-height: 100vh;
}

.stardust-bg {
  background-image: radial-gradient(circle at 2px 2px, rgba(244, 209, 37, 0.08) 1px, transparent 0);
  background-size: 32px 32px;
}

/* HEADER */
.mystic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(26, 22, 37, 0.8);
  backdrop-filter: blur(10px);
}

.header-title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #f4d125;
  margin: 0;
}

.notification-btn {
  background: rgba(244, 209, 37, 0.1);
  color: #f4d125;
}

/* GLASS CARD BASE */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(244, 209, 37, 0.1);
  border-radius: 1rem;
}

/* HERO SECTION */
.hero-container {
  position: relative;
}

.hero-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(to bottom right, rgba(244, 209, 37, 0.2), rgba(147, 51, 234, 0.2));
  border-radius: 1.25rem;
  filter: blur(8px);
  opacity: 0.4;
}

.hero-card {
  padding: 1.5rem;
  overflow: hidden;
}

.hero-icon-bg {
  position: absolute;
  top: -20px;
  right: -20px;
  opacity: 0.1;
  color: #f4d125;
}

.forecast-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: rgba(244, 209, 37, 0.8);
  margin-bottom: 1rem;
}

.text-description {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.875rem;
}

/* PLANETARY SCROLL */
.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.planetary-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.planet-card {
  flex: 0 0 120px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.planet-icon-container {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planet-label {
  font-size: 10px;
  font-weight: 700;
  color: #94a3b8;
  margin: 0;
}

.planet-status {
  font-size: 12px;
  font-weight: 500;
  margin: 0;
}

/* OUTLOOK CARDS */
.outlook-card {
  display: flex;
  padding: 1.25rem;
  align-items: flex-start;
}

.border-left-primary { border-left: 4px solid #f4d125; }
.border-left-purple { border-left: 4px solid #a855f7; }

.outlook-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bg-primary-10 { background: rgba(244, 209, 37, 0.1); }
.bg-purple-10 { background: rgba(168, 85, 247, 0.1); }

.outlook-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
}

.outlook-badge {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
}

.bg-primary-20 { background: rgba(244, 209, 37, 0.2); }
.bg-purple-20 { background: rgba(168, 85, 247, 0.2); }

.outlook-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  margin: 0.25rem 0 0 0;
}

/* PREMIUM BANNER */
.premium-banner {
  background: linear-gradient(to bottom right, rgba(45, 27, 77, 0.5), #1a1625);
  border: 1px solid rgba(244, 209, 37, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}

.premium-label {
  font-size: 10px;
  font-weight: 800;
  color: #f4d125;
  letter-spacing: 0.2em;
  margin-bottom: 0.5rem;
}

.premium-text {
  font-size: 0.875rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.premium-btn {
  width: 100%;
  border-radius: 0.75rem;
  font-weight: 700;
  padding: 0.75rem;
}

/* UTILS */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>