import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: () => import('../views/Acerca.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import('../views/Proyectos.vue')
  },
  {
    path: '/proyectos/:id',
    name: 'DetalleProyectos',
    component: () => import('../views/DetalleProyectos.vue')
  },
  {
    path: '/chez-diana',
    name: 'ChezDiana',
    component: () => import('../views/ChezDiana.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'DetallePosts',
    component: () => import('../views/DetallePosts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
