<template>
  <!-- 最外侧容器 -->
  <div class="outer">
    <!-- 左侧 -->
    <Left></Left>
    <!-- 中间 -->
    <div class="in-center">
      <!-- 在首页置顶大图 -->
      <div class="top-article">
        <div class="article-img"></div>
        <div class="article-bott">
          <h3 class="bott-title"><a href="javascript:;">hand--一款typecho的主题</a></h3>
          <div class="bott-content"><span><a href="javascript:;">在复杂中，保持简洁。 一款精心打磨后的typecho主题。</a></span></div>
        </div>
      </div>
      <!-- 暂定 文章列表 -->
      <div class="list-center">
        <router-link
          :to="`/article/${article.id}`"
          class="article"
          v-for="article in articleList"
          :key="article.id"
        >
          <div class="article-left">
            <img :src="article.cover_img" />
          </div>
          <div class="article-right">
            <div class="article-title">
              <span>{{ article.title }}</span>
            </div>
            <div class="article-content">
              <p>{{ article.describe }}</p>
            </div>
            <div class="article-user">
              <span
                ><i class="iconfont icon-huixingzhen"></i>&nbsp;{{
                  article.classification
                }}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-chakantiezishijian"></i>&nbsp;{{
                  article.create_time
                }}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-liulan1"></i>&nbsp;{{
                  article.look_count
                }}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-pinglun1"></i>&nbsp;{{
                  article.message_count == 0 ? "暂无" : article.message_count + "条"
                }}评论</span
              >
            </div>
          </div>
        </router-link>
        
      </div>
    </div>
    <!-- 右侧 -->
    <Right></Right>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { accessLeave } from '@/api'
export default {
  mounted() {
    this.getData();
    this.$store.dispatch("getArticleNum");
    accessLeave({
      message: `访问主页(用户端)`,
      user_behavior: 104,
      user_menu: 100
    }).catch(e => {})
    this.$store.commit("CHANGENAVACT",1)//切换高亮
  },
  computed:{
    ...mapState({
      articleList: state => state.article.articleList,
      articleNum: state => state.article.articleNum,
    }),
  },
  data() {
    return {
      pag: {
        // 每页显示的数量pageSize
        pageSize: 7,
        // 当前页码pageNo
        pageNo: 1,
      },
    };
  },
  methods: {
    // 当前页改变时的回调
    handleCurrentChange(val) {
      this.pag.pageNo = val;
      this.getData();
      let pag = Math.ceil(this.articleNum / this.pag.pageSize);
      if (pag != val) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        document.documentElement.scrollTop = 0;
      }
    },
    getData() {
      this.$store.dispatch("getArticleList", this.pag);
    },
  },
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
  margin-top: 70px;
  padding-top: 15px;
  
}


/* *****************中间********************* */
.in-center {
  width: 850px;
  /* height: 700px; */
  margin: 20px;
  /* background-color: #FFF; */
  flex-shrink: 0;
  position: relative;
  z-index: 99;
}
/* 置顶大图 */
.top-article{
  height: 300px;
  width: 100%;
  /* border: 1px solid #000; */
  margin-bottom: 20px;
  border-radius: 7px;
  position: relative;
  background-color: #fff;
}
.article-img{
  background-image: url(./images/home.jpg);
  border-radius: 7px;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.article-bott{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg,transparent,rgba(0,0,0,.35));
  padding: 15px 0px;
  border-radius: 7px;
}
.bott-title{
  margin: 15px 28px;
  font-size: 22px;
}
.bott-title a{
  color: #fff;
}
.bott-title a:hover{
  text-decoration: none;
}
.bott-content{
  margin: 15px 28px;
  font-size: 14px;
}
.bott-content a{
  color: #fff;
}
.bott-content a:hover{
  text-decoration: none;
}

/* 文章列表
.list-center .article {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
}
.list-center .article:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  text-decoration: none;
}
.article .article-left {
  margin: auto 18px;
}
.article .article-left img {
  height: 160px;
  width: 290px;
  border-radius: 5px;
}
.article-right {
  margin-left: 15px;
  width: 505px;
}
.article-right .article-title {
  font-size: 25px;
  margin-top: 25px;
  color: rgb(66, 139, 202);
}
 .article-right .article-tag {

} 
.article-right .article-content {
  font-size: 14px;
  margin-top: 14px;
  line-height: 30px;
  padding-right: 20px;
  height: 75px;
  color: #a0a0a0;
}
.article-right .article-user {
  font-size: 14px;
  padding-top: 14px;
  border-top: 1px solid rgb(200, 200, 200);
  margin-right: 30px;
  color: rgb(66, 139, 202);
} */
.list-center .article {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
}
.list-center .article:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  text-decoration: none;
}
.article .article-left {
  margin: auto 18px;
}
.article .article-left img {
  height: 120px;
  width: 200px;
  border-radius: 5px;
}
.article-right {
  margin-left: 15px;
  width: 600px;
}
.article-right .article-title {
  font-size: 25px;
  margin-top: 15px;
  color: rgb(66, 139, 202);
}
.article-right .article-content {
  font-size: .9rem;
  margin-top: 8px;
  line-height: 30px;
  padding-right: 20px;
  height: 50px;
  color: #a0a0a0;
}
.article-right .article-user {
  font-size: 14px;
  padding-top: 10px;
  border-top: 1px solid rgb(200, 200, 200);
  margin-right: 30px;
  color: rgb(66, 139, 202);
}
.article-right .article-user .iconfont{
  font-size: .9rem;
}
</style>