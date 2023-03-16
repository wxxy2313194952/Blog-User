// 所有的api统一进行管理
import requests from "./request";
import Access from "@/utils/getAccessInfo"
import { getCity } from "@/utils/city.js"

// *************************************************
export const accessLeave = data => requests({
  url: `/api/access/setaccess`,
  method: 'post',
  data: {
    platform_type: Access.getPlatformType(),
    os_name: Access.getOSName(),
    browser: Access.getBrowserName(),
    OSVersion: Access.getOSVersion(),
    BrowserVersion: Access.getBrowserVersion(),
    city: getCity(),
    show_type: data.message,
    user_behavior: data.user_behavior,
    user_menu: data.user_menu
  }
});
// *************************************************

// 获取文章接口
export const reqGetArticle = (id) => requests({
  url: `/api/article/getarticle/${id}`,
  method: 'get'
});

// 获取文章列表接口
export const reqGetArticleList = (value) => requests({
  url: `/api/article/getarticlelist`,
  params: value,
  method: 'get'
});

// 获取文章总数接口
export const reqGetArticleNum = () => requests({
  url: `/api/article/getarticlenum`,
  method: 'get'
});

// 获取文章分类列表接口
export const reqGetArticleClass = () => requests({
  url: `/api/article/getarticleclass`,
  method: 'get'
});

// 展示评论列表
export const reqGetReviewList = value => requests({
  url: `/api/review/getreviewlist/${value}`,
  method: 'get'
});

// 游客评论文章接口
export const reqLeaveReview = data => requests({
  url: `/api/review/leavereview`,
  method: 'post',
  data
});

// 右侧热门文章接口
export const reqGetHotArticle = () => requests({
  url: '/api/right/gethotarticle',
  method: 'get'
})

// 右侧博客信息接口
export const reqGetRightInfo = () => requests({
  url: '/api/right/getinfo',
  method: 'get'
})

// 获取全局组件Left标签云列表接口
export const reqGetLableList = () => requests({
  url: '/api/left/getlablelist',
  method: 'get'
})

// 获取留言接口
export const reqGetMessageList = (params) => requests({
  url: '/api/message/getmessagelist',
  params,
  method: 'get'
})

// 获取留言总条数接口
export const reqGetMessageNum = () => requests({
  url: '/api/message/getmessagenum',
  method: 'get'
})

// 获取留言总条数接口
export const reqaddMessage = data => requests({
  url: '/api/message/add',
  method: 'post',
  data
})

// 获取时间轴列表
export const reqGetTimeList = () => requests({
  url: '/api/time/gettimelist',
  method: 'get'
})

// 获取前七天访问量 折线图
export const reqGetLineCharts = day => requests({
  url: '/api/echarts/getlinecharts',
  method: 'get',
  params: { day }
})

// 获取前七天访问量 折线图IP
export const reqGetLineChartsIP = day => requests({
  url: '/api/echarts/getlinechartsip',
  method: 'get',
  params: { day }
})

// 获取前n天日期
export const reqGetLastweek = day => requests({
  url: '/api/echarts/getlastweek',
  method: 'get',
  params: { day }
})

// 饼图统计 用户行为
export const reqGetPieBehavior = day => requests({
  url: '/api/echarts/getpiebehavior',
  method: 'get',
  params: {day}
})

// 饼图统计 用户菜单点击
export const reqGetPieMenu = day => requests({
  url: '/api/echarts/getpiemenu',
  method: 'get',
  params: {day}
})

// 总数据统计
export const reqGetUserData = () => requests({
  url: '/api/echarts/getuserdata',
  method: 'get'
})

// 首页
export const reqGetArtMain = () => requests({
  url: '/api/home/getartmain',
  method: 'get'
})

// 首页
export const reqGetArtOther = () => requests({
  url: '/api/home/getartother',
  method: 'get'
})

 