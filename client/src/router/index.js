import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Customers',
      name: 'showAllCm',
      component: () => import('../components/ShowAllCustomer.vue')
    },
    {
      path: '/Customer/:CMcode',
      name: 'showCmByCMcode',
      component: () => import('../components/ShowCustomerByCMcode.vue')
    },
    {
      path: '/Customer/create',
      name: 'CreateCustomer',
      component: () => import('../components/CreateCustomer.vue')
    },
    {
      path: '/Customer/edit/:CMcode',
      name: 'editCustomer',
      component: () => import('../components/EditCustomer.vue')
    },
    {
      path: '/Customer/muliple',
      name: 'Mq',
      component: () => import('../components/MultipleQ.vue')
    }
  ]
})

export default router
