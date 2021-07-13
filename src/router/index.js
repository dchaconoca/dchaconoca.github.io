import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Acerca from '../views/Acerca.vue'
import Proyectos from '../views/Proyectos.vue'
import CV from '../views/CV.vue'
import ChezDiana from '../views/ChezDiana.vue'
import Blog from '../views/Blog.vue'
import PanelInfo from '@/components/PanelInfo.vue'
import Vacio from '@/components/Vacio.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    components: { 
      default: Vacio,
      inicio: Inicio
    },
  },
  {
    path: '/acerca',
    name: 'Acerca',
    components: { 
      default: Acerca,
      panel: PanelInfo
    },
    props: {
      panel: true
    }
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
