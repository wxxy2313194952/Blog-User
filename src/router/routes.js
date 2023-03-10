// 引入路由组件
const Home = () => import('@/pages/Home')
const Analytics = () => import('@/pages/Analytics')
const Article = () => import('@/pages/Article')
const Archives = () => import('@/pages/Archives')
const LeaveMessage = () => import('@/pages/LeaveMessage')
const MyArticle = () => import('@/pages/MyArticle')

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
    path: '/analytics',
    component: Analytics,
    name: 'analytics',
    meta: {
      isShow: true
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
    path: '/',
    redirect: '/home'
  },
  
]