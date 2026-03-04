import { createRouter, createWebHashHistory } from "vue-router"

const routes = [

 
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../views/loginUsers.vue") },
      { path: "crear-user", component: () => import("../views/crearUser.vue") },
      { path: "seccionUser", component: () => import("../views/user/seccionUser.vue") },
      { path: "seccionAdmin", component: () => import("../views/admin/seccionAdmin.vue") }
    ]
  },

 
  {
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/admin/AdminDashboard.vue")
      },
      {
        path: "usuarios",
        component: () => import("../views/admin/UsuariosPage.vue")
      },
      {
        path: "pagos",
        component: () => import("../views/admin/PagosPage.vue")
      }
    ]
  }

]

export default createRouter({
  history: createWebHashHistory(),
  routes
})