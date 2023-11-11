import { createRouter, createWebHistory } from 'vue-router'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
      // children:[
      //   {
      //     path:'/section1',
      //     name: section1,
      //     component:()=>import('../views/Section_one.vue')
      //   }
      // ]
    }
    
  ]
})

export default router
