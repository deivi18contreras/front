<template>
    <q-layout view="lHh Lpr lFf" class="bg-dark text-white">

        <!-- PERFIL DRAWER -->
        <Perfil ref="perfilRef" />
        <notificaciones ref="notifRef" />

        <!-- HEADER -->
        <q-header elevated class="bg-dark text-white">
            <q-toolbar>

                <q-toolbar-title class="text-primary text-weight-bold">
                    <q-icon name="auto_awesome" class="q-mr-sm" />
                    Astra AI
                </q-toolbar-title>

                <q-space />

                <q-input dense outlined v-model="search" placeholder="Buscar..." class="q-mr-md" color="primary" dark>
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>

                <q-btn flat round icon="settings" />
                
                <!-- NOTIFICACIONES -->
                <q-btn flat round icon="notifications" class="icon-btn" @click="notifRef.openDrawer()" />

                <!-- AVATAR -->
                <q-avatar size="40px" class="q-ml-md cursor-pointer" @click="perfilRef.openDrawer()">
                    <img :src="user.avatar" />
                </q-avatar>


            </q-toolbar>
        </q-header>

        <!-- CONTENIDO -->
        <q-page-container>
            <q-page padding>

                <div class="q-mb-xl">
                    <div class="text-h4 text-weight-bold">
                        Welcome,
                        <span class="text-primary">{{ user.nombre }}</span>
                    </div>
                    <div class="text-subtitle1 text-grey-5">
                        Your cosmic vibration today is
                        <span class="text-primary text-weight-bold">
                            {{ user.numero }}
                        </span>
                    </div>
                </div>

                <!-- CARD PRINCIPAL -->
                <q-card class="bg-grey-10 text-white q-mb-xl">
                    <q-img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" height="250px">
                        <div class="absolute-bottom bg-black bg-opacity-60 q-pa-md">
                            <div class="text-overline text-primary">
                                Daily Forecast
                            </div>
                            <div class="text-h6">
                                Today's Celestial Path
                            </div>
                        </div>
                    </q-img>

                    <q-card-section>
                        Mars aligns with your core number,
                        signaling a period of intense creative manifestation.
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn color="primary" label="Full Analysis" icon-right="arrow_forward" />
                    </q-card-actions>
                </q-card>

                <!-- GRID -->
                <div class="row q-col-gutter-md">
                    <div v-for="item in exploraciones" :key="item.titulo" class="col-12 col-sm-6 col-md-3">
                        <q-card class="bg-grey-9 text-white hover-card">
                            <q-img :src="item.img" height="120px" />

                            <q-card-section>
                                <div class="text-weight-bold">
                                    {{ item.titulo }}
                                </div>
                                <div class="text-caption text-grey-5">
                                    {{ item.fecha }}
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>

            </q-page>
        </q-page-container>

        <q-footer class="bg-dark text-center q-pa-md text-grey-6">
            © 2024 Astra AI Numerology
        </q-footer>

    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Perfil from '../components/perfil.vue'
import Notificaciones from '../components/notificaciones.vue'

const perfilRef = ref(null)
const notifRef = ref(null)
const search = ref('')

const user = ref({
    nombre: 'Elias',
    numero: 9,
    avatar: 'https://i.pravatar.cc/150?img=12'
})

const exploraciones = ref([
    {
        titulo: 'Soul Urge Analysis',
        fecha: '2 days ago',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    },
    {
        titulo: 'Compatibility Sync',
        fecha: '5 days ago',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'
    },
    {
        titulo: 'Life Path Mapping',
        fecha: '1 week ago',
        img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031'
    },
    {
        titulo: 'Destiny Matrix',
        fecha: '2 weeks ago',
        img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'
    }
])
</script>

<style>
.hover-card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.hover-card:hover {
    transform: translateY(-6px);
}
</style>