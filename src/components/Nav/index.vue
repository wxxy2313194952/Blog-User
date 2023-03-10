<template>
  <!-- 外侧容器 -->
  <div class="top-bar">
    <!-- 内侧 -->
    <div class="top-in">
      <!-- logo -->
      <div class="logo">
        <router-link to="/home"
          ><img src="@/assets/images/mylogo.png"
        /></router-link>
      </div>
      <!-- 右侧 -->
      <ul class="top-right">
        <li :class="navActive == 1 ? 'currentboActive' : 'currentbo'">
          <router-link to="/home" :class="navActive == 1 ? 'currentcoActive' : 'currentco'"
            ><i class="iconfont icon-shouye"></i> 首页</router-link
          >
        </li>
        <li :class="navActive == 2 ? 'currentboActive' : 'currentbo'">
          <router-link to="/myarticle" :class="navActive == 2 ? 'currentcoActive' : 'currentco'"
            ><i class="iconfont icon-biaodanyemian"></i> 文章</router-link
          >
        </li>
        <li :class="navActive == 3 ? 'currentboActive' : 'currentbo'">
          <router-link to="/leavemessage" :class="navActive == 3 ? 'currentcoActive' : 'currentco'"
            ><i class="iconfont icon-a-kaoshilianxigangbi"></i>
            留言</router-link
          >
        </li>
        <li :class="navActive == 4 ? 'currentboActive' : 'currentbo'">
          <router-link to="/archives" :class="navActive == 4 ? 'currentcoActive' : 'currentco'"
            ><i class="iconfont icon-riqi"></i> 时间轴</router-link
          >
        </li>
        <li :class="navActive == 5 ? 'currentboActive' : 'currentbo'">
          <router-link to="/analytics" :class="navActive == 5 ? 'currentcoActive' : 'currentco'"
            ><i class="iconfont icon-liulan1"></i> 访客统计</router-link
          >
        </li>
        <li>
          <a @click="send" style="color:#000;" :href="host" target="_blank">
          <i class="iconfont icon-daohang"></i> 开放式后台</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { HostAdmin } from "@/utils/Host";
import { mapState } from "vuex";
import { accessLeave } from '@/api'
export default {
  name: "Nav",
  data() {
    return {
      host:HostAdmin
    }
  },
  computed: {
    ...mapState({
      navActive: (state) => state.nav.navActive,
    }),
  },
  methods: {
    send(){
      accessLeave({
        message: '访问后台管理(用户端)',
        user_behavior: 108,
        user_menu: 105
      }).catch(e => {})
    }
  },
};
</script>
<style scoped>
/* 外侧容器 */
.top-bar {
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  font: 16px "PingFang SC";
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0px;
  background-color: #fff;
  z-index: 9999;
}

/************************* 左侧 **************************/
.top-in {
  display: flex;
  /* justify-content: center; */
  /* line-height: 7px; */
  flex-shrink: 0;
}
.top-in .logo {
  margin: auto 0px;
  margin-left: 15px;
  margin-right: 470px;
}

/************************* 右侧 **************************/
.top-right {
  display: flex;
  justify-content: center;
  flex: auto;
  line-height: 75px;
  flex-shrink: 0;
  margin-right: 70px;
}
/* 选中的底部边框 */
.currentboActive {
  border-bottom: #01aaed 3px solid;
}
.currentbo {
  border-bottom: transparent 3px solid;
}
/* 选中的字体颜色 */
.currentcoActive {
  color: #01aaed;
}
.currentco {
  color: #000;
}
.top-right li a {
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 0 25px;
}
/************************ 设置logo大小 ***************************/
.top-in .logo {
  height: 60px;
  width: 200px;
}
.top-in img {
  width: 100%;
  height: 100%;
}
</style>