<template>
  <div class="waper">
    <!-- 上 -->
    <div class="top">
      <div class="top-list">lime space © 2022</div>
      <div class="top-list font-color">TUTU BLOG</div>
      <!-- <div class="top-list"><span>|</span></div>
      <div class="top-img"><img src="./images/beian.png"></div>
      <div class="top-a"><a href="javascript:;">沪公网安备31011006532436号</a></div> -->
    </div>
    <!-- 下 -->
    <div class="bottom">
      <span>Base on Node + Vue、 Design by WXXY</span>
    </div>
  </div>
</template>
<script>
import "@/iconfont/iconfont.css";
export default {
  name:"Footer"
}
</script>
<style scoped>
/* 外侧容器 */
.waper{
  background-color: rgb(48,49,50);
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: relative;
  z-index: 9999;
}
/* ******************** 上 ************************ */
.top{
  height: 60px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-shrink: 0;
  color: rgb(146,146,146);
  /* margin: 10px 0; */
  margin-top: 15px;
}

.top .top-list{
  margin-left: 8px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 30px;
}
.top .top-a a{
  text-decoration: none;
  margin: auto 4px;
  font-size: 14px;
  line-height: 30px;
  color: rgb(255, 229, 0, .65);
}

.font-color{
  color: rgb(255, 229, 0,.65);
  font-family: Varela Round,Microsoft YaHei,Source Sans Pro,Helvetica Neue,Menlo,Monaco,monospace,Lucida Console,sans-serif,Helvetica,Hiragino Sans GB,Hiragino Sans GB W3,Source Han Sans CN Regular,WenQuanYi Micro Hei,Arial;
}

.top .top-img img{
  height: 19px;
  width: 19px;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 0px;
}

/* ********************* 下 *********************** */
.bottom{
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.bottom span{
  font-size: 14px;
  color: rgb(146,146,146);
  margin-top: -20px;
}
</style>