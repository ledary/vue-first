import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoOne from '@/components/DemoOne'
import DemoTwo from '@/components/DemoTwo'
import DemoTird from '@/components/DemoTird'
import DemoFour from '@/components/DemoFour'
import DemoFive from '@/components/DemoFive'
import DemoSix from '@/components/DemoSix'
import DemoEight from '@/components/DemoEight'
import DemoSeven from '@/components/DemoSeven'
import GlobalChild from '@/components/GlobalChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/demoone',
      name:'DemoOne',
      component:DemoOne
    },
    {
      path:'/demotwo',
      name:'DemoTwo',
      component:DemoTwo
    },
    {
      path:'/demotird',
      name:'DemoTird',
      component:DemoTird
    },
    {
      path:'/demofour',
      name:'DemoFour',
      component:DemoFour
    },
    {
      path:'/demofive',
      name:'DemoFive',
      component:DemoFive
    },
    {
      path:'/demosix',
      name:'DemoSix',
      component:DemoSix
    },
    {
      path:'/demoeight',
      name:'DemoEight',
      component:DemoEight
    },
    {
      path:'/demoseven',
      name:'DemoSeven',
      component:DemoSeven
    },
    {
      path:'/globalchild',
      name:'GlobalChild',
      component:GlobalChild
    }

    
    


    
  ]
})
