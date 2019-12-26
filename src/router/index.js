import Vue from 'vue'
import vueRouter from 'vue-router'

const zonghe = () => import('../me/zonghe/zonghe')
const gonggao = () => import('../me/gonggao/gonggao')
const saishi = () => import('../me/saishi/saishi')
const gonglue = () => import('../me/gonglue/gonglue')
const shequ = () => import('../me/shequ/shequ')

Vue.use(vueRouter)

const routes = [
  {
    path: '',
    redirect: '/zonghe'
  },
  {
    path: '/zonghe',
    component: zonghe
  },
  {
    path: '/gonggao',
    component: gonggao
  },
  {
    path: '/saishi',
    component: saishi
  },
  {
    path: '/gonglue',
    component: gonglue
  },
  {
    path: '/shequ',
    component: shequ
  }
]
const router = new vueRouter({
  mode: 'history',
  routes,
 
})

export default router