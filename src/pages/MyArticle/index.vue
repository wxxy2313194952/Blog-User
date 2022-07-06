<template>
  <div class="outer">
    <!-- 左侧 -->
    <Left></Left>
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
              <p>{{ article.abstract }}</p>
            </div>
            <div class="article-user">
              <span
                ><i class="iconfont icon-jurassic_user"></i>&nbsp;{{
                  article.nickname
                }}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-chakantiezishijian"></i>&nbsp;{{
                  article.pub_date
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
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="this.articleNum"
          :page-size="this.pag.pageSize"
          :current-page="this.pag.pageNo"
          prev-click
          next-click
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 右侧 -->
    <Right></Right>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pag: {
        // 每页显示的数量pageSize
        pageSize: 5,
        // 当前页码pageNo
        pageNo: 1,
      },
    };
  },
  mounted() {
    this.getData();
    this.$store.dispatch("getArticleNum");
  },
  computed: {
    ...mapState({
      articleList: (state) => state.home.articleList,
      articleNum: (state) => state.home.articleNum,
    }),
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
.outer {
  margin-top: 75px;
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
}
/* 文章列表 */
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
}

.pagination {
  margin: 20px;
  text-align: center;
}
</style>