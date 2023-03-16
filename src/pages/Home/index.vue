<template>
  <!-- 最外侧容器 -->
  <div class="outer">
    <!-- 左侧 -->
    <Left class="le"></Left>
    <!-- 中间 -->
    <div class="in-center">
      <div class="top-article">
        <div class="article-img" :style="{backgroundImage: 'url('+host+'/uploads/homeImg/top.jpg)'}"></div>
        <div class="article-bott">
          <h3 class="bott-title">
            <a href="javascript:;" @click="gotoArticle(artMain1.id)">{{artMain1.title}}</a>
          </h3>
          <div class="bott-content">
            <span
              ><a href="javascript:;" @click="gotoArticle(artMain1.id)"
                >{{artMain1.describe}}</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="list-center">
        <router-link :to="`/article/${artOther1.id}`" class="article">
          <div class="article-left">
            <img :src="host+artOther1.cover_img" />
          </div>
          <div class="article-right">
            <div class="article-title">
              <span>{{artOther1.title}}</span>
            </div>
            <div class="article-content">
              <p>{{artOther1.describe}}</p>
            </div>
            <div class="article-user">
              <span
                ><i class="iconfont icon-huixingzhen"></i>&nbsp;{{artOther1.classification}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-chakantiezishijian"></i>&nbsp;{{artOther1.create_time}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-liulan1"></i>&nbsp;{{artOther1.look_count}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-pinglun1"></i>&nbsp;{{
                  artOther1.message_count == 0
                    ? "暂无"
                    : artOther1.message_count + "条"
                }}评论</span
              >
            </div>
          </div>
        </router-link>
      </div>
      <div class="top-article">
        <div class="article-img" :style="{backgroundImage: 'url('+host+'/uploads/homeImg/center.jpg)'}"></div>
        <div class="article-bott">
          <h3 class="bott-title">
            <a href="javascript:;" @click="gotoArticle(artMain2.id)">{{artMain2.title}}</a>
          </h3>
          <div class="bott-content">
            <span
              ><a href="javascript:;" @click="gotoArticle(artMain2.id)"
                >{{artMain2.describe}}</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="list-center">
        <router-link :to="`/article/${artOther2.id}`" class="article">
          <div class="article-left">
            <img :src="host+artOther2.cover_img" />
          </div>
          <div class="article-right">
            <div class="article-title">
              <span>{{artOther2.title}}</span>
            </div>
            <div class="article-content">
              <p>{{artOther2.describe}}</p>
            </div>
            <div class="article-user">
              <span
                ><i class="iconfont icon-huixingzhen"></i>&nbsp;{{artOther2.classification}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-chakantiezishijian"></i>&nbsp;{{artOther2.create_time}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-liulan1"></i>&nbsp;{{artOther2.look_count}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-pinglun1"></i>&nbsp;{{
                  artOther2.message_count == 0
                    ? "暂无"
                    : artOther2.message_count + "条"
                }}评论</span
              >
            </div>
          </div>
        </router-link>
      </div>
      <div class="top-article">
        <div class="article-img" :style="{backgroundImage: 'url('+host+'/uploads/homeImg/bottom.jpg)'}"></div>
        <div class="article-bott">
          <h3 class="bott-title">
            <a href="javascript:;" @click="gotoArticle(artMain3.id)">{{artMain3.title}}</a>
          </h3>
          <div class="bott-content">
            <span
              ><a href="javascript:;" @click="gotoArticle(artMain3.id)"
                >{{artMain3.describe}}</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="list-center">
        <router-link :to="`/article/${artOther3.id}`" class="article">
          <div class="article-left">
            <img :src="host+artOther3.cover_img" />
          </div>
          <div class="article-right">
            <div class="article-title">
              <span>{{artOther3.title}}</span>
            </div>
            <div class="article-content">
              <p>{{artOther3.describe}}</p>
            </div>
            <div class="article-user">
              <span
                ><i class="iconfont icon-huixingzhen"></i>&nbsp;{{artOther3.classification}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-chakantiezishijian"></i>&nbsp;{{artOther3.create_time}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-liulan1"></i>&nbsp;{{artOther3.look_count}}</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                ><i class="iconfont icon-pinglun1"></i>&nbsp;{{
                  artOther3.message_count == 0
                    ? "暂无"
                    : artOther3.message_count + "条"
                }}评论</span
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 右侧 -->
    <Right class="ri"></Right>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { accessLeave } from "@/api";
import { Host } from "@/utils/Host";
export default {
  mounted() {
    this.getData();
    accessLeave({
      message: `访问主页(用户端)`,
      user_behavior: 104,
      user_menu: 100,
    }).catch(e => {});
    this.$store.commit("CHANGENAVACT", 1); //切换高亮
  },
  computed: {
    ...mapState({
      artMain1: state => state.home.artMain1,
      artMain2: state => state.home.artMain2,
      artMain3: state => state.home.artMain3,
      artOther1: state => state.home.artOther1,
      artOther2: state => state.home.artOther2,
      artOther3: state => state.home.artOther3,
    }),
  },
  data() {
    return {
      host: Host
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getArtMain");
      this.$store.dispatch("getArtOther");
    },
    gotoArticle(id){
      this.$router.push({
        name: "article",
        params:{id}
      })
    }
  },
};
</script>
<style scoped>
.le{
  height: 100vh;
  position: sticky;
  top: 105px;
}
.ri{
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
.top-article {
  height: 300px;
  width: 100%;
  /* border: 1px solid #000; */
  margin-bottom: 20px;
  border-radius: 7px;
  position: relative;
  background-color: #fff;
}
.article-img {
  border-radius: 7px;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.article-bott {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.35));
  padding: 15px 0px;
  border-radius: 7px;
}
.bott-title {
  margin: 15px 28px;
  font-size: 22px;
}
.bott-title a {
  color: #fff;
}
.bott-title a:hover {
  text-decoration: none;
}
.bott-content {
  margin: 15px 28px;
  font-size: 14px;
}
.bott-content a {
  color: #fff;
}
.bott-content a:hover {
  text-decoration: none;
}
/* ********************************** */
.list-center .article {
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
}
.article .article-left {
  width: 250px;
  height: 100%;
}
.article .article-left img {
  height: 100%;
  width: 250px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.article-right {
  margin-left: 15px;
  width: 600px;
}
.article-right .article-title {
  font-size: 1.27rem;
  margin-top: 15px;
  color: #555;
}
.article-right .article-content {
  font-size: 0.86rem;
  margin-top: 8px;
  line-height: 30px;
  padding-right: 20px;
  height: 60px;
  color: #a0a0a0;
}
.article-right .article-user {
  font-size: 14px;
  padding: 5px 0px;
  margin-right: 30px;
  border-radius: 4px;
  background-color: #fafafa;
  color: #a0a0a0;
}
.article-right .article-user span:first-child{
  padding-left: 8px;
}
.article-right .article-user .iconfont {
  font-size: 0.9rem;
}
</style>