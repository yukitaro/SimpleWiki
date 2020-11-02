import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WikiHome from '@/components/WikiHome'
import WikiInput from '@/components/WikiInput'
import AllWikiEntries from '@/components/AllWikiEntries'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/WikiHome',
      name: 'WikiHome',
      component: WikiHome
    },
    {
      path: '/WikiInputForm',
      name: 'WikiInput',
      component: WikiInput
    },
    {
      path: '/AllEntries',
      name: 'AllWikiEntries',
      component: AllWikiEntries
    }
  ]
})