<template>
  <!-- 右侧 -->
  <div class="in-right">
    <!-- 点赞评论展示 -->
    <div class="like">
      <!-- 上 -->
      <div class="like-top">
        <div class="like-top-icon">
          <a href="javascript:;"><i class="iconfont icon-icon"></i></a>
        </div>
        <div class="like-top-icon">
          <a href="javascript:;"><i class="iconfont icon-pinglun"></i></a>
        </div>
        <div class="like-top-icon">
          <a href="javascript:;"><i class="iconfont icon-huixingzhen"></i></a>
        </div>
      </div>
      <!-- 下 -->
      <div class="like-bottom">
        <!-- 文字描述 -->
        <div class="like-title"><span>热门文章</span></div>
        <!-- 展示区 -->
        <ul class="like-cont">
          <li class="like-cont-item">
            <div class="cont-item-img"><a href="javascript:;"><img src="./images/pic.png" /></a></div>
            <div class="cont-item-p">
              <div class="pa">
                <a href="javascript:;"><span>测试标题</span></a>
              </div>
              <div class="pb">
                <i class="iconfont icon-liulan1"></i><span>&nbsp;1234</span>
              </div>
            </div>
          </li>
          <li class="like-cont-item">
            <div class="cont-item-img"><a href="javascript:;"><img src="./images/pic.png" /></a></div>
            <div class="cont-item-p">
              <div class="pa">
                <a href="javascript:;"><span>测试标题</span></a>
              </div>
              <div class="pb">
                <i class="iconfont icon-liulan1"></i><span>&nbsp;1234</span>
              </div>
            </div>
          </li>
          <li class="like-cont-item">
            <div class="cont-item-img"><a href="javascript:;"><img src="./images/pic.png" /></a></div>
            <div class="cont-item-p">
              <div class="pa">
                <a href="javascript:;"><span>测试标题</span></a>
              </div>
              <div class="pb">
                <i class="iconfont icon-liulan1"></i><span>&nbsp;1234</span>
              </div>
            </div>
          </li>
          <li class="like-cont-item">
            <div class="cont-item-img"><a href=""><img src="./images/pic.png" /></a></div>
            <div class="cont-item-p">
              <div class="pa">
                <a href=""><span>测试标题</span></a>
              </div>
              <div class="pb">
                <i class="iconfont icon-liulan1"></i><span>&nbsp;1234</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 博客信息 -->
    <div class="label">
      <div class="label-title">
        <span>博客信息</span>
      </div>
      <div class="label-item">
        <div class="item-key">
          <i class="iconfont icon-jiangli2"></i>
          <span>&nbsp;&nbsp;文章数目</span>
        </div>
        <div class="item-value">
          <span>{{ info.articleNum }}</span>
        </div>
      </div>
      <div class="label-item">
        <div class="item-key">
          <i class="iconfont icon-pinglun1"></i>
          <span>&nbsp;&nbsp;评论数目</span>
        </div>
        <div class="item-value">
          <span>{{ info.message }}</span>
        </div>
      </div>
      <div class="label-item">
        <div class="item-key">
          <i class="iconfont icon-riqi"></i>
          <span>&nbsp;&nbsp;运行天数</span>
        </div>
        <div class="item-value">
          <span>{{ info.day }}天</span>
        </div>
      </div>
      <div class="label-item">
        <div class="item-key">
          <i class="iconfont icon-dianboxindiantu"></i>
          <span>&nbsp;&nbsp;最后更新</span>
        </div>
        <div class="item-value">
          <span>{{ info.lastUpdate }}</span>
        </div>
      </div>
      <div class="label-item">
        <div class="item-key">
          <i class="iconfont icon-jurassic_user"></i>
          <span>&nbsp;&nbsp;访问总量</span>
        </div>
        <div class="item-value">
          <span>{{ info.sum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetRrghtInfo } from "@/api/index";
export default {
  name: "Right",
  data() {
    return {
      info: {},
    };
  },
  async mounted() {
    let result = await reqGetRrghtInfo();
    if (result.code == 200) {
      this.info = result.data;
    }
  },
};
</script>

<style scoped>
/* *****************右侧********************* */
.in-right {
  width: 230px;
  /* height: 700px; */
  /* background-color: #FF99CC; */
  flex-shrink: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 99;
}
/* 点赞信息 */
.like {
  width: 100%;
  /* border: 1px solid #b0f; */
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 7px;
}
.like:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
.like-top {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
}
.like-top-icon {
  /* width: 40px; */
  margin: auto 20px;
}
.like-top-icon a:hover {
  text-decoration: none;
}
.like-top-icon a i {
  font-size: 22px;
}

.like-title {
  /* height: 50px;
  line-height: 50px; */
  font-size: 22px;
  padding-left: 18px;
  margin-bottom: 10px;
}
.like-cont {
  margin-bottom: 10px;
}
.like-cont-item {
  display: flex;
  height: 60px;
  padding: 5px 15px;
}
.like-cont-item .cont-item-img {
  height: 40px;
  width: 40px;
  margin: auto 0px;
  margin-right: 12px;
  border-radius: 7px;
  border: 3px solid rgb(241, 243, 244);
}
.like-cont-item .cont-item-img img {
  height: 100%;
  width: 100%;
  border-radius: 7px;
}
.cont-item-p .pa a:hover {
  text-decoration: none;
}
.cont-item-p .pb a:hover {
  text-decoration: none;
}
.cont-item-p .pa {
  height: 20px;
  margin-top: 10px;
}
.cont-item-p .pb {
  height: 20px;
}

/* 博客信息 */
.label {
  /* height: 300px; */
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.label:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
.label-title {
  margin: 20px;
  margin-bottom: 15px;
  font-size: 20px;
}
.label-item {
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.item-key {
  margin: auto 14px;
  height: 20px;
}
.item-value {
  margin: auto 14px;
  height: 20px;
  border-radius: 10px;
  padding: 0px 5px;
  color: #fff;
}
.label > .label-item:nth-child(2) .item-value {
  background-color: rgb(239, 185, 184);
}
.label > .label-item:nth-child(3) .item-value {
  background-color: rgb(97, 212, 138);
}
.label > .label-item:nth-child(4) .item-value {
  background-color: rgb(254, 193, 152);
}
.label > .label-item:nth-child(5) .item-value {
  background-color: rgb(93, 191, 231);
}
.label > .label-item:nth-child(6) .item-value {
  background-color: rgb(242, 50, 50);
}
</style>