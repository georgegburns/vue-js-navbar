import { createRouter, createWebHistory } from 'vue-router'
import Reports from "@/views/Reports.vue"
import Home from "@/views/Home.vue"
import Hall from "@/views/Hall.vue"
import Settings from "@/views/Settings.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: "Home",
      component: Home,
    },
    {
      path:"/Reports",
      name: "Reports",
      component: Reports,
    },
    {
      path:"/Settings",
      name: "Settings",
      component: Settings,
    },
    {
      path:"/HallOfFame",
      name: "Hall",
      component: Hall,
    },
  ]
})

export default router
