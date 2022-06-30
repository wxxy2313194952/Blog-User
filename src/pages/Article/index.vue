<template>
  <!-- 最外侧容器 -->
  <div class="outer">
    <!-- 左侧 -->
    <Left></Left>
    <!-- 中间 -->
    <div class="in-center">
      <!-- 头部 -->
      <div class="in-center-tit">
        <div class="tit-h3">
          <h3>{{ article.title }}</h3>
        </div>
        <div class="tit-user">
          <!-- 第一行 文章信息 -->
          <div class="user-up">
            <i class="iconfont icon-jurassic_user"></i
            ><span>{{ article.author_name }}</span>
            <i class="iconfont icon-chakantiezishijian"></i
            ><span>{{ article.pub_date }}</span>
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
            <div class="user-down-label" v-for="(item,index) in article.tag" :key="index"><span>{{item.name}}</span></div>
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
        <span>最后修改: {{ article.pub_date }}</span>
      </div>
      <!-- 三连 -->
      <div class="in-center-like">
        <a href="javascript:;"
          ><div class="like-count">
            <i class="iconfont icon-icon"></i><span>赞</span
            ><span>{{ article.like_count }}</span>
          </div></a
        >
      </div>
      <!-- 评论留言 -->
      <div class="in-center-message">
        <!-- 发表评论 -->
        <div class="message-live">
          <div class="live-tit"><span>发表评论</span></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
          <div class="live-button">
            <button><span>发表评论</span></button>
          </div>
        </div>
        <!-- 评论展示 -->
        <div class="message-show">
          <div class="show-tit"><span>最新评论</span></div>
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
// import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
// import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// 显示行号
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
VMdPreview.use(createLineNumbertPlugin());
// 显示快捷复制代码按钮
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
VMdPreview.use(createCopyCodePlugin());
// 引入emoji
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
VMdPreview.use(createEmojiPlugin());
// highlightjs
import hljs from "highlight.js";
// import Prism from "prismjs";
import { mapState } from "vuex";
// VMdPreview.use(vuepressTheme, {
//   Prism, 
//   extend(md) {
//     // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
//     // md.set(option).use(plugin);
//   },
// });
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdPreview);

export default {
  data() {
    return {
      textarea: "",
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.article,
    }),
  },
  mounted() {
    this.$store.dispatch("getArticle", this.$route.params.id);
  },
  methods: {},
};
</script>

<style scoped>
/* 外侧 */
.outer {
  width: 100%;
  background-color: rgb(241, 243, 244);
  /* height: 800px; */
  display: flex;
  justify-content: center;
  margin-top: 75px;
  padding-top: 15px;
}

/* 右侧 */
.right {
  width: 230px;
  /* height: 700px; */
  /* background-color: #FF99CC; */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 15px; */
}


/* *****************中间********************* */
.in-center {
  width: 850px;
  /* height: 700px; */
  margin: 20px;
  /* background-color: #FFF; */
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 7px;
}
.in-center-tit {
  height: 110px;
  /* background-color: #bbc; */
  border-radius: 7px 7px 0px 0px;
  padding: 32px;
  padding-bottom: 0px;
}
.tit-h3 {
  padding-bottom: 15px;
}
.tit-h3 h3 {
  font-size: 28px;
}
.in-center-md {
  border-radius: 7px;
}
.md-preview {
  border-radius: 7px;
}
.tit-user {
  background-color: #f8f8f8;
  height: 65px;
  border-radius: 4px;
  padding-left: 20px;
}
.user-up {
  height: 30px;
  line-height: 30px;
  color: #999aaa;
  font-size: 14px;
}
.user-up > .iconfont {
  margin-right: 5px;
}
.user-up > span {
  margin-right: 20px;
}
.user-down {
  height: 30px;
  line-height: 25px;
  color: #999aaa;
  font-size: 14px;
  display: flex;
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
  margin-right: 12px;
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
  /* height: 100px; */
  margin: 20px 0px;
  font-size: 12px;
  color: #9b9b9b;
  padding-left: 40px;
}
.in-center-time i {
  margin-right: 7px;
}
/* 三连 */
.in-center-like {
  /* width: 100%; */
  /* height: 65px; */
  background-color: #fff;
  margin: 0px 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #999aaa;
}
.in-center-like span {
  margin-left: 5px;
}
.like-count {
  height: 30px;
  width: 90px;
  background: #9f4147;
  border-radius: 20px;
  font-size: 14px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  margin: auto;
}
/* 评论留言 */
.in-center-message {
  width: 100%;
  /* height: 100px; */
  /* background-color: #fff; */
  margin: 20px 0px;
}
.message-live {
  margin: 0px 40px;
  border-bottom: 1px solid #999aaa;
}

.live-button > button {
  width: 110px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #fff;
}
.message-live .live-tit {
  font-size: 18px;
  color: #777;
  margin: 30px 0px;
}
.message-live .live-button {
  background: #448bff linear-gradient(45deg, #448bff, #44e9ff);
  height: 30px;
  width: 110px;
  border-radius: 50px;
  text-align: center;
  line-height: 30px;
  margin: 20px 0px;
}
.message-show {
  margin: 0px 40px;
}
.message-show .show-tit {
  font-size: 18px;
  color: #777;
  margin: 30px 0px;
}
</style>

