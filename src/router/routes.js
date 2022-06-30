// 引入路由组件
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Home from '@/pages/Home'
import Regist from '@/pages/Regist'
import Edit from '@/pages/Edit'
import Article from '@/pages/Article'
import Archives from '@/pages/Archives'
import Update from '@/pages/Update'
import LeaveMessage from '@/pages/LeaveMessage'
import Daily from '@/pages/Daily'
import MyArticle from '@/pages/MyArticle'

export default[
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      isShow: true
    },
  },
  {
    path: '/daily',
    component: Daily,
    name: 'daily',
    meta: {
      isShow: true
    },
  },
  {
    path: '/myarticle',
    component: MyArticle,
    name: 'myarticle',
    meta: {
      isShow: true
    },
  },
  {
    path: '/leavemessage',
    component: LeaveMessage,
    name: 'leavemessage',
    meta: {
      isShow: true
    },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      isShow: false
    },
  },
  {
    path: '/search/:keywords?',
    component: Search,
    name: 'search',
    meta: {
      isShow: true
    },
  },
  {
    path: '/regist',
    component: Regist,
    name: 'regist',
    meta: {
      isShow: false
    },
  },
  {
    path: '/edit',
    component: Edit,
    name: 'edit',
    meta: {
      isShow: false
    },
  },
  {
    path: '/article/:id',
    component: Article,
    name: 'article',
    meta: {
      isShow: true
    },
  },
  {
    path: '/archives',
    component: Archives,
    name: 'archives',
    meta: {
      isShow: true
    },
  },
  {
    path: '/update',
    component: Update,
    name: 'update',
    meta: {
      isShow: true
    },
  },
  {
    path: '/',
    redirect: '/home'
  }
]