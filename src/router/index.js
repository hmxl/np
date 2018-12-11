import Vue from 'vue'
import Router from 'vue-router'
import FinancePage from '../components/FinancePage'
import DailyPage from '../components/DailyPage'
import OperationNationalPage from '../components/OperationNationalPage'
import OperationProvincialPage from '../components/OperationProvincialPage'
import DevelopmentNationalPage from '../components/DevelopmentNationalPage'
import DevelopmentProvincialPage from '../components/DevelopmentProvincialPage'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        redirect: '/daily'
      },
      {
        path: '/finance',
        name: 'finance',
        component: FinancePage
      },
      {
        path: '/daily',
        name: 'daily',
        component: DailyPage
      },
      {
        path: '/operation-national',
        name: 'operation-national',
        component: OperationNationalPage
      },
      {
        path: '/operation-provincial',
        name: 'operation-provincial',
        component: OperationProvincialPage
      },
      {
        path: '/development-national',
        name: 'development-national',
        component: DevelopmentNationalPage
      },
      {
        path: '/development-provincial',
        name: 'development-provincial',
        component: DevelopmentProvincialPage
      }
  ]
})
