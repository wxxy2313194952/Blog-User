<template>
  <!-- 最外侧容器 -->
  <div class="outer">
    <!-- 左侧 -->
    <Left class="le"></Left>
    <!-- 中间 -->
    <div class="center">
      <!-- 文章 -->
      <div class="in-center">
        <!-- 头部 -->
        <div class="in-center-tit">
          <div class="tit-h2">
            <h2>{{ article.title }}</h2>
          </div>
          <div class="tit-user">
            <!-- 第一行 文章信息 -->
            <div class="user-up">
              <i class="iconfont icon-chakantiezishijian"></i
              ><span>{{ article.create_time }}</span>
              <i class="iconfont icon-liulan1"></i
              ><span>{{ article.look_count }}</span>
              <i class="iconfont icon-pinglun1"></i
              ><span>{{ article.message_count }}条评论</span>
            </div>
            <!-- 第二行 文章标签 -->
            <div class="user-down">
              <i class="iconfont icon-24gl-tags"></i>
              <span>文章标签:</span>
              <!-- 标签 -->
              <div
                class="user-down-label"
                v-for="(item, index) in article.tags"
                :key="index"
              >
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 文章内容组件 -->
        <div class="in-center-md">
          <v-md-preview
            :text="article.content"
            :default-show-toc="true"
            class="md-preview"
          ></v-md-preview>
        </div>
        <!-- 时间 -->
        <div class="in-center-time">
          <i class="iconfont icon-chakantiezishijian"></i>
          <span>最后修改: {{ article.last_time }}</span>
        </div>
      </div>
      <!-- 评论留言 -->
      <div class="in-mess-live">
        <div class="live-first">
          <div class="avatardiv">
            <select class="avatarSelect" @click="selectAvatar" v-model="avatar">
              <option class="avataroption" value="1">头像1</option>
              <option class="avataroption" value="2">头像2</option>
              <option class="avataroption" value="3">头像3</option>
              <option class="avataroption" value="4">头像4</option>
            </select>
          </div>
          <img :src="touristList[avatar - 1].url" />
          <input
            class="input-name"
            type="text"
            placeholder="昵称（必填）"
            v-model="name"
          />
          <input
            class="input-email"
            type="text"
            placeholder="邮箱（可以不填哦）"
            v-model="email"
          />
          <input
            class="input-web"
            type="text"
            placeholder="网址（可以不填哦）"
            v-model="web"
          />
        </div>
        <div class="live-second">
          <textarea
            class="input-mess"
            placeholder="欢迎评论吖"
            v-model="mess"
          ></textarea>
        </div>
        <div class="live-third">
          <button class="btn" @click="submit">评论</button>
        </div>
      </div>
      <!-- 评论展示 -->
      <div class="in-mess-show" v-show="reviewList.length != 0">
        <div class="mess-show">
          <!-- 循环每一条评论 -->
          <div class="mess-list" v-for="review in reviewList" :key="review.id">
            <!-- 左侧头像 -->
            <div class="mess-ava">
              <img :src="touristList[review.avatar - 1].url" />
            </div>
            <!-- 右侧内容 -->
            <div class="mess-ri">
              <div class="mess-ri-name">
                <span>{{ review.name }}</span
                ><i class="iconfont icon-weizhi"></i
                ><span>{{ review.city }}</span>
              </div>
              <div class="mess-ri-cont">
                <span>{{ review.content }}</span>
              </div>
              <div class="mess-ri-time">
                <div class="time">
                  <span>{{ review.time }}</span>
                </div>
                <div class="back"><span>回复</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";

import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// 显示行号
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
VMdPreview.use(createLineNumbertPlugin());
// 显示快捷复制代码按钮
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
VMdPreview.use(createCopyCodePlugin());

import Prism from "prismjs";
VMdPreview.use(vuepressTheme, {
  Prism,
  codeHighlightExtensionMap: {
    vue: 'html',
  },
});
Vue.use(VMdPreview);
import { reqLeaveReview, reqGetReviewList, accessLeave, reqGetArticle } from "@/api"
import { getCity } from "@/utils/city.js"
import avatarList from "@/utils/avatar.js"
export default {
  data() {
    return {
      name: "",
      email: "",
      web: "",
      mess: "",
      avatar: 1,
      // 评论列表
      reviewList: [],
      touristList: avatarList,
      article: {},
    };
  },
  watch: {
    article() {
      this.showReview();
    },
  },
  async mounted() {
    let result = await reqGetArticle(this.$route.params.id);
    if (result.code == 200) {
      this.article = result.data;
    } else if (result.code == 201) {
      this.$router.push({
        name:'myarticle'
      })
    }
    this.$store.commit("CHANGENAVACT", 2); //切换高亮
    accessLeave({
        message: `访问文章《${this.article.title}》(用户端)`,
        user_behavior: 101,
        user_menu: 500
      }).catch((e) => {});
  },
  methods: {
    // 用户提交评论
    async submit() {
      // 验证必填项是否为空
      if (!this.name || !this.mess) return alert("昵称，内容不能为空");
      // 验证输入元素是否合规
      // if()
      // 整理数据
      const data = {
        content: this.mess,
        article_id: this.article.id,
        title: this.article.title,
        name: this.name,
        email: this.email,
        web: this.web,
        city: getCity(),
        avatar: this.avatar,
      };
      // 提交表单元素
      let result = await reqLeaveReview(data);
      if (result.code == 200) {
        this.showReview();
        this.name = "";
        this.email = "";
        this.web = "";
        this.mess = "";
        accessLeave({
          message: `评论文章《${this.article.title}》(用户端)`,
          user_behavior: 103,
          user_menu: 500
        }).catch(e => {});
      }
    },
    // 展示评论
    async showReview() {
      let result = await reqGetReviewList(this.article.id);
      if (result.code == 200) {
        this.reviewList = result.data;
      }
    },
    //
    selectAvatar(event) {
      this.avatar = event.target.value;
    },
  },
};
</script>

<style scoped>
.le {
  height: 100vh;
  position: sticky;
  top: 105px;
}
/* 外侧 */
.outer {
  width: 100%;
  background-color: rgb(241, 243, 244);
  /* height: 800px; */
  display: flex;
  justify-content: center;
  margin-top: 70px;
  padding-top: 15px;
}

.iconfont {
  font-size: 0.9rem;
}
.center {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
}

/* 右侧 */
.right {
  width: 230px;
  height: 100vh;
  /* background-color: #FF99CC; */
  /* flex-shrink: 0; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* padding-top: 10px; */
  position: sticky;
  top: 85px;
  z-index: 99;
}
.catalogue {
  background-color: #fff;
  padding: 10px 15px;
  font-size: 13px;
}
.catalogue h2 {
  padding: 8px 0px;
  font-size: 20px;
  text-align: center;
}
/* 博客信息 */
.label {
  /* height: 300px; */
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  border-radius: 5px;
  margin: 20px 0px;
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

/* *****************中间********************* */
.in-center {
  width: 850px;
  /* height: 700px; */
  margin: 20px;
  margin-bottom: 10px;
  /* background-color: #FFF; */
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 7px;
}
.in-center-tit {
  height: 125px;
  /* background-color: #bbc; */
  border-radius: 7px 7px 0px 0px;
  padding: 32px;
  padding-bottom: 0px;
}
.tit-h2 {
  padding-bottom: 15px;
}
.tit-h2 h2 {
  font-size: 30px;
}
.in-center-md {
  border-radius: 7px;
}
.md-preview {
  border-radius: 7px;
}
.tit-user {
  background-color: #f8f8f8;
  height: 75px;
  border-radius: 4px;
  padding-left: 13px;
}
.user-up {
  height: 35px;
  line-height: 35px;
  color: #888;
  font-size: 14px;
  font-size: 0.9rem;
}
.user-up > .iconfont {
  margin-right: 5px;
}
.user-up > span {
  margin-right: 20px;
}
.user-down {
  height: 35px;
  line-height: 35px;
  color: #888;
  font-size: 14px;
  display: flex;
  font-size: 0.9rem;
}
.user-down span {
  margin-right: 12px;
}
.user-down i {
  margin-right: 5px;
}

.user-down-label {
  border: 1px solid #eaeaef;
  font-size: 12px;
  background-color: #fff;
  color: #5094d5;
  margin: auto 12px auto 0px;
  height: 22px;
  line-height: 19px;
  border-radius: 3px;
}
.user-down-label span {
  height: 100%;
  margin: auto 5px;
}

/* 时间 */
.in-center-time {
  color: #888;
  margin-left: 40px;
  margin-bottom: 30px;
  font-size: 0.9rem;
}
.in-center-time i {
  margin-right: 7px;
}

/******************** 评论展示 ***************/
.in-mess-show {
  width: 850px;
  margin: 10px 20px 20px 20px;
  /* background-color: #FFF; */
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 7px;
}
.mess-show {
  width: 770px;
  /* margin: 50px 40px 50px 40px; */
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.mess-list {
  width: 740px;
  height: 75px;
  padding: 15px;
  border: 1px solid #e9e9e9;
  display: flex;
}
.mess-show > .mess-list:not(.mess-list:first-child) {
  border-top: 0px;
}
.mess-ava {
  margin-right: 10px;
}
.mess-ava img {
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.mess-ri {
  width: 100%;
}
.mess-ri-name {
  font-size: 0.85rem;
  height: 17px;
  padding-bottom: 8px;
}
.mess-ri-name i {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.53);
  margin-left: 8px;
}

.mess-ri-cont {
  font-size: 0.85rem;
  height: 24px;
  padding-bottom: 8px;
}
.mess-ri-time {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.43);
  height: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.mess-ri-time .back {
  cursor: pointer;
  text-align: right;
}

/* 评论留言 */
.in-mess-live {
  width: 850px;
  margin: 10px 20px 10px 20px;
  /* background-color: #FFF; */
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 7px;
}
.live-first {
  margin: 40px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  position: relative;
}
.avatardiv {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -0;
}
.avatarSelect {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  opacity: 0;
  border: none;
  outline: none;
  cursor: pointer;
}
.avataroption {
  color: #000;
  font-size: 16px;
}
.live-first img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}
.input-name {
  height: 20px;
  width: 210px;
  border: 1px solid #888;
  padding: 8px;
}
.input-name:focus {
  outline: none;
}
.input-email {
  height: 20px;
  width: 210px;
  border: 1px solid #888;
  margin: 0px 20px;
  padding: 8px;
}
.input-email:focus {
  outline: none;
}
.input-web {
  height: 20px;
  width: 210px;
  border: 1px solid #888;
  padding: 8px;
}
.input-web:focus {
  outline: none;
}
.live-second {
  padding: 5px 40px;
  display: flex;
  justify-content: center;
}
.input-mess {
  height: 80px;
  width: 770px;
  border: 1px solid #888;
  padding: 8px;
  resize: none;
}
.input-mess:focus {
  outline: none;
}
.live-third {
  width: 753px;
  padding: 5px 0px 15px 57px;
  display: flex;
  justify-content: flex-end;
}
.btn {
  height: 26px;
  width: 64px;
  border: 1px solid #01aaed;
  text-align: center;
  margin: 0.5rem 0;
  color: #01aaed;
  background-color: transparent;
  cursor: pointer;
}
</style>