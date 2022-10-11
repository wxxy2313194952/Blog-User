// 所有的api统一进行管理

import requests from "./request";

// 登录接口
// export const reqCategoryList = () => requests({ url: '/my/login', method: 'get' })



// 获取文章接口
export const reqGetArticle = (id) => requests({
  url: `/api/article/get/${id}`,
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

// 获取一级分类列表接口
export const reqGetCatesFirst = () => requests({
  url: `/api/article/getcatesfirst`,
  method: 'get'
});

// 获取二级分类列表接口
export const reqGetCatesSecond = () => requests({
  url: `/api/article/getcatessecond`,
  method: 'get'
});

// 发表文章接口
export const reqPostArticleAdd = (data) => requests({
  url: `/my/article/add`,
  method: 'post',
  data
});

// 右侧博客信息接口
export const reqGetRrghtInfo = () => requests({
  url: '/api/right/getinfo',
  method: 'get'
})

// 获取动态列表接口
export const reqGetDailyList = (value) => requests({
  url: '/api/daily/getdailylist',
  params: value,
  method: 'get'
})

// 获取动态总条数接口
export const reqGetDailyNum = () => requests({
  url: '/api/daily/getdailynum',
  method: 'get'
})

// 获取全局组件Left标签云列表接口
export const reqGetLableList = () => requests({
  url: '/api/left/getlablelist',
  method: 'get'
})

// 获取留言板接口
export const reqGetLeaveList = (value) => requests({
  url: '/api/leave/getcommentlist',
  params: value,
  method: 'get'
})

// 获取留言总条数接口
export const reqGetLeaveNum = () => requests({
  url: '/api/leave/getcommentnum',
  method: 'get'
})

// 获取更新日志列表接口
export const reqGetVerList = () => requests({
  url: '/api/verlist',
  method: 'get'
})