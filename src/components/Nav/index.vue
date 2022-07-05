<template>
  <!-- 外侧容器 -->
  <div class="top-bar">
    <!-- 左侧 -->
    <ul class="top-left">
      <!-- logo -->
      <li class="logo"><router-link to="/home"><img src="@/assets/images/mylogo.png" /></router-link></li>
      <li>
        <router-link to="/home"><i class="iconfont icon-shouye"></i> 首页</router-link>
      </li>
      <li><router-link to="/myarticle">文章</router-link></li>
      <li><router-link to="/daily">动态</router-link></li>
      <li><router-link to="/update">更新日志</router-link></li>
      <li><router-link to="/leavemessage">留言板</router-link></li>
      <li><router-link to="/archives">时间轴</router-link></li>
    </ul>
    <!-- 中间 搜索框 -->
    <div class="search">
      <input type="text" v-model="keywords" />
      <div class="iconSearch"><router-link class="iconSearch-a" to="/search"><i class="iconfont icon-chazhao"></i></router-link></div>
    </div>
    <!-- 右侧 -->
    <div class="top-right">
      <!-- 头像 或 登录 -->
      <div class="pice">
        <img src="@/assets/images/mypice.jpg" />
      </div>
      <div><a href="javascript:;">后台管理</a></div>
      <div class="right-end"><router-link to="/analytics">访客统计</router-link></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      keywords:'',
    }
  },
  methods:{
    goSearch(){
      let location = {name:'search',params:{ keywords: this.keywords || undefined}}
      this.$router.push(location)
    },
    goHome(){
      this.$router.push({name:'home'})
    }
  }
};
</script>
<style scoped>
/* 外侧容器 */
.top-bar{
  width: 100vw;
  height: 75px;
  display: flex;
  /* border-bottom: 1px #666 solid; */
  font: 16px "PingFang SC";
  justify-content: space-between;
  align-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0px;
  background-color: #fff;
  z-index: 9999;
}

/************************* 左侧 **************************/
.top-left{
  display: flex;
  flex: auto;
  line-height: 75px;
  flex-shrink: 0;
}
.top-left .logo{
  margin: auto 0px;
  margin-left: 15px;
}
.top-left li{
  margin-left: 10px;
  margin-right: 10px;
}
.top-left li a{
  text-decoration: none;
}

/*************************** 中间 ************************/
.search{
  display: flex;
  flex: auto;
  margin: auto 5px;
  flex-shrink: 0;
}
.search input{
  height: 38px;
  width: 300px;
  border-radius: 8px;
}
.search .iconSearch{
  margin: auto 4px;
}

.search .iconSearch i{  
  font-size: 24px;
}

/************************* 右侧 **************************/
.top-right{
  display: flex;
  flex: auto;
  line-height: 75px;
  flex-shrink: 0;
}
.top-right div{
  margin-left: 10px;
  margin-right: 10px;
}
.top-right div a{
  text-decoration: none;
}
/* 设置logo大小 **************************************************/
.top-left .logo{
  height: 60px;
  width: 200px;
}
.top-left img{
  width: 100%;
  height: 100%;
}

/* 设置头像大小 */
.top-right .pice{
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: auto 3px;
}
.top-right img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>