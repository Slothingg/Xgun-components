import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import("@/pages/instructions.vue")
    },
    {
      path: '/media',
      name: 'media',
      component: ()=>import("@/pages/media.vue")
    },
    {
      path: '/bullet',
      name: 'bullet',
      component: ()=>import("@/pages/bullet.vue")
    }
  ]
})
