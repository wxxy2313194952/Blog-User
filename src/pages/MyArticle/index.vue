<template>
  <div class="outer">
    <!-- 左侧 -->
    <Left class="le"></Left>
    <!-- 中间 -->
    <div class="center">
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
      <Pagination :pageNo="pag.pageNo" :pageSize="pag.pageSize" :total="articleNum" :continues="5" @getPageNo="getPageNo" />
    </div>
    <!-- 右侧 -->
    <Right class="ri"></Right>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { accessLeave } from '@/api'
export default {
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
  mounted() {
    this.getData();
    this.$store.dispatch("getArticleNum");
    accessLeave({
      message: '访问博客文章列表(用户端)',
      user_behavior: 104,
      user_menu: 101
    }).catch(e => {})
    this.$store.commit("CHANGENAVACT",2)//切换高亮
  },
  computed: {
    ...mapState({
      articleList: (state) => state.article.articleList,
      articleNum: (state) => state.article.articleNum,
    }),
  },
  methods: {
    getData() {
      this.$store.dispatch("getArticleList", this.pag);
    },
    // 当前页改变时的回调
    getPageNo(val){
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
      accessLeave({
        message: '访问博客文章列表(用户端)',
        user_behavior: 100,
        user_menu: 500
      }).catch(e => {})
    }
  },
};
</script>

<style scoped>
.le{
  height: 100vh;
  position: sticky;
  top: 110px;
}
.ri{
  height: 100vh;
  position: sticky;
  top: 110px;
}
.outer {
  margin-top: 70px;
  padding-top: 15px;
  width: 100%;
  background-color: rgb(241, 243, 244);
  /* height: 800px; */
  display: flex;
  justify-content: center;
}
.center {
  width: 850px;
  /* height: 700px; */
  margin: 20px;
  /* background-color: #fff; */
  flex-shrink: 0;
  position: relative;
  z-index: 99;
}
/* 文章列表 */
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

/* .pagination {
  margin: 20px;
  text-align: center;
} */
</style>