<template>
  <div class="waper">
    <!-- 上层 -->
    <div class="top">
      <div class="top-left"></div>
      <div class="top-center">
        <!-- 文字 -->
        <!-- <div class="keywords">
          <span>whatever is worth doing is worth doing well. </span>
        </div> -->
      </div>
      <div class="top-right">
        <!-- 图标 -->
        <ul class="icon">
          <li><a href="javascript:;"><i class="iconfont icon-QQ"></i></a></li>
          <li><a href="javascript:;"><i class="iconfont icon-weixin"></i></a></li>
          <li><a href="javascript:;"><i class="iconfont icon-github-fill"></i></a></li>
          <li><a href="javascript:;"><i class="iconfont icon-xinlangweibo"></i></a></li>
        </ul>
      </div>
    </div>
    <!-- 中间 -->
    <div class="center">
      <div class="cen-list">lime space © 2022</div>
      <div class="cen-list font-color">TUTU BLOG</div>
      <div class="cen-list"><span>|</span></div>
      <div class="cen-img"><img src="./images/beian.png"></div>
      <div class="cen-a"><a href="javascript:;">沪公网安备31011002002436号</a></div>
    </div>
    <!-- 下层 -->
    <div class="bottom">
      <div class="bot-li"><a target="blank" href="https://github.com/expressjs/express">
        <div class="front">server</div><div class="after a1">express</div>
      </a></div>
      <div class="bot-li"><a target="blank" href="https://element.eleme.cn/#/zh-CN">
        <div class="front">UI</div><div class="after a2">Element-UI</div>
      </a></div>
      <div class="bot-li"><a target="blank" href="https://www.mysql.com/">
        <div class="front">database</div><div class="after a3">MySQL</div>
      </a></div>
      <div class="bot-li"><a target="blank" href="https://cn.vuejs.org/">
        <div class="front">vue</div><div class="after a4">vuejs</div>
      </a></div>
    </div>
  </div>
</template>
<script>
import "@/iconfont/iconfont.css";
export default {

}
</script>
<style scoped>
/* 外侧容器 */
.waper{
  background-color: rgb(48,49,50);
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}


/* ******************** 上 ************************ */
.top{
  height: 150px;
  display: flex;
  justify-content: center;
  border-bottom: rgb(146,146,146) 1px solid;
  margin-bottom: 10px;
}
.top-left{
  height: 130px;
  width: 360px;
  margin: 10px auto;
}
.top-center{
  height: 130px;
  width: 400px;
  margin: 10px auto;
  border-left: 1px solid rgb(146,146,146);
  border-right: 1px solid rgb(146,146,146);
}
/* .top-center .keywords span{
  font-size: 16px;
  font-family: PingFang SC;
  padding-left: 10px;
  color: rgb(146,146,146);
} */
.top-right{
  height: 130px;
  width: 360px;
  margin: 10px auto;
}
.top-right .icon{
  display: flex;
  justify-content: center;
  align-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
}
.icon .iconfont:hover{
  color: rgb(102,102,102);
}

.top .top-right .icon li a{
  text-decoration: none;
  margin: auto 10px;
}
.top .top-right .icon li a i{
  font-size: 50px;
}
/* ********************* 中 *********************** */
.center{
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  color: rgb(146,146,146);
}

.center .cen-list{
  margin-left: 8px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 30px;
}
.center .cen-a a{
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

.center .cen-img img{
  height: 19px;
  width: 19px;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 0px;
}

/* ********************* 下 *********************** */
.bottom{
  height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  flex-shrink: 0;
}

.bottom .bot-li{
  margin: auto 8px;
  font-size: 13px;
  background-color: #fff;
  height: 25px;
  border-radius: 10px;
}
.bottom .bot-li a{
  text-decoration: none;
}
.bottom .bot-li .front{
  background-color: rgb(91,91,91);
  padding-left: 5px;
  padding-right: 5px;
  color: #fff;
  display: inline-block;
  line-height: 25px;
  border-radius: 5px 0px 0px 5px;
}
.bottom .bot-li .after{
  padding-left: 5px;
  padding-right: 5px;
  color: #fff;
  display: inline-block;
  line-height: 25px;
  border-radius: 0px 5px 5px 0px;
}
.bottom .bot-li .a1{
  background-color: rgb(241,125,62);
}
.bottom .bot-li .a2{
  background-color: rgb(64,158,255);
}
.bottom .bot-li .a3{
  background-color: rgb(8, 229, 23);
}
.bottom .bot-li .a4{
  background-color: rgb(24, 24, 24);
}



</style>