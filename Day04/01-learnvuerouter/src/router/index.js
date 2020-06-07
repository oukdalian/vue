// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    // 重定向
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    // 针对个别路由的前置守卫有两种配置方式
    // 方式1：在route配置beforeEnter
    // 方式2：在组件内配置beforeRouteEnter
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter");
      next()
    },
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件的关系
  routes,
  // 默认是hash模式，那样url里带有#
  mode: 'history',
  linkActiveClass: 'active'
})

// 下面配置的前置守卫和后置钩子都是全局的，也可以针对当个route配置

// 前置守卫guard
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  // console.log(to);
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子
router.afterEach((to, from) => {
  console.log("afterEach");
})

// 3.将router对象传入到vue实例中(在main.js中传入)
// 别的模块使用必须先导出
export default router
