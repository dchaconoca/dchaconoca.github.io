import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Acerca from '../views/Acerca.vue'
import Proyectos from '../views/Proyectos.vue'
import DetalleProyectos from '../views/DetalleProyectos.vue'
import ChezDiana from '../views/ChezDiana.vue'
import Blog from '../views/Blog.vue'
import DetallePosts from '../views/DetallePosts.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: Acerca
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos
  },
  {
    path: '/proyectos/:id',
    name: 'DetalleProyectos',
    component: DetalleProyectos
  },
  {
    path: '/chez-diana',
    name: 'ChezDiana',
    component: ChezDiana
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'DetallePosts',
    component: DetallePosts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
