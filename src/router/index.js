import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Details from '@/components/Details'
import Order from '@/components/Order'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/order',
      name: 'Order',
      component: Order 
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery 
    }
  ],
  mode: 'history'
})
