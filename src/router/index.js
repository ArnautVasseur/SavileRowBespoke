import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/Menu.vue'
import MonTissuView from '../views/MonTissu.vue'
import MaCoupeView from "../views/MaCoupe.vue"
import MesInfosVue from '../views/MesInfos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/menu', name: 'menu', component: MenuView },
    { path: '/tissu', name: 'tissu', component: MonTissuView },
    { path: '/coupe', name: 'coupe', component: MaCoupeView },
    { path: '/infos', name: 'infos', component: MesInfosVue },
  ]
})

export default router
