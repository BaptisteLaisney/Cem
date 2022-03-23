import { createRouter, createWebHistory } from 'vue-router'
const routes = [

  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/Programmation',
    name: 'Programmation',

    component: () => import( '../views/Programmation.vue')
  },
  {
    path: '/Village',
    name: 'Le village culturel',

    component: () => import('../views/Village.vue')
  },
  {
    path: '/Nous',
    name: 'Nous',
    component: () => import('../views/Nous.vue')
  },
  {
    path: '/Infos',
    name: 'Infos pratiques',
    component: () => import('../views/Infos.vue')
  },
  {
    path: '/Partenaires',
    name: 'Partenaires',
    component: () => import('../views/Partenaires.vue')
  },
  {
    path: '/Billetterie',
    name: 'Billetterie',
    component: () => import('../views/Billetterie.vue')
  },
  {
    path: '/Presse',
    name: 'Espace Presse',
    component: () => import('../views/Presse.vue')
  },
  {
    path: '/Mentions',
    name: 'Espace Légales',
    component: () => import('../views/Mentions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
