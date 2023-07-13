import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '',
      component: () => import('./layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          component: () => import('./views/main'),
          meta: {
            rule: '',
            title: ''
          }
        },
        {
          path: '/all-news',
          component: () => import('./views/AllNews'),
          meta: {
            rule: '',
            title: ''
          }
        },
        {
          path: '/en',
          component: () => import('./views/en-main'),
          meta: {
            rule: '',
            title: ''
          }
        },
        {
          path: '/offers',
          component: () => import('./views/Offers'),
          meta: {
            rule: '',
            title: ''
          }
        },
        {
          path: '/account',
          component: () => import('./views/Account'),
          meta: {
            rule: '',
            title: ''
          }
        },
        {
          path: '/success',
          component: () => import('./views/Success'),
          meta: {
            rule: '',
            title: 'Task Order Successful'
          }
        },
        {
          path: '/linktr',
          component: () => import('./views/Linktr'),
          meta: {
            rule: '',
            title: ''
          }
        }
      ]
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   next();
// })


export default router;