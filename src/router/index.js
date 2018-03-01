import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      component: resolve => require(['../views/index.vue'], resolve),
      children:[
        {
          path: '/',
          component: resolve => require(['../views/recommend/recommend.vue'], resolve)
        },
        {
          path: '/recommend',
          component: resolve => require(['../views/recommend/recommend.vue'], resolve),
        },
        {
          path: '/rank',
          component: resolve => require(['../views/rank/rank.vue'], resolve)
        },
        {
          path: '/search',
          component: resolve => require(['../views/search/search.vue'], resolve)
        },
        {
          path: '/singer',
          component: resolve => require(['../views/singer/singer.vue'], resolve)
        },
      ]
    },
    {
      path: '/knowledge',
      component: resolve => require(['../views/knowledge/knowledge.vue'], resolve)
    },
    {
      path: '/demandlist',
      component: resolve => require(['../views/demandlist/demandlist.vue'], resolve)
    },
    {
      path: '/theauthor',
      component: resolve => require(['../views/theauthor/theauthor.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../components/login.vue'], resolve)
    }

  ]
})
