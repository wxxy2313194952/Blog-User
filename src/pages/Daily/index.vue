<template>
  <div class="outer">
    <!-- 左侧 -->
    <Left></Left>
    <!-- 中间 -->
    <div class="center">
      <div class="title"><span>我的动态</span></div>
      <div class="content">
        <div class="item" v-for="(item) in dailyList" :key="item.id">
          <div class="pic"><img :src="item.user_pic" /></div>
          <div class="con-right">
            <div class="jiantou"></div>
            <div class="con-right-top"><span>{{item.nickname}}</span></div>
            <div class="con-right-center"><v-md-preview :text="item.content"></v-md-preview></div>
            <div class="con-right-bottom"><span>{{item.time}}</span></div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="this.dailyNum"
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
import Vue from 'vue';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
import { mapState } from "vuex";
Vue.use(VMdPreview);
export default {
  data() {
    return {
      text: '测试内容\n测试内容\n测试内容测试内容\n测试内容测试内容\n测试内容',
      pag: {
        // 每页显示的数量pageSize
        pageSize: 5,
        // 当前页码pageNo
        pageNo: 1,
      },
    }
  },
  mounted(){
    // 
    this.getData();
    this.$store.dispatch('getDailyNum')
  },
  computed:{
    ...mapState({
      dailyList: (state) => state.daily.dailyList,
      dailyNum: (state) => state.daily.dailyNum,
    }),
  },
  methods:{
    // 当前页改变时的回调
    handleCurrentChange(val) {
      this.pag.pageNo = val;
      this.getData();
      document.documentElement.scrollTop = 0;
    },
    getData(){
      this.$store.dispatch('getDailyList',this.pag)
    }
  }
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
  background-color: #fff;
  flex-shrink: 0;
  border: 1px solid rgb(212, 212, 213);
  box-sizing: border-box;
}
.title {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid rgb(212, 212, 213);
  line-height: 60px;
  font-size: 22px;
  color: rgb(0, 0, 0);
}
.title span {
  margin-left: 20px;
}
.content {
  width: 800px;
  margin: 0px auto;
}
.item {
  width: 100%;
  /* height: 200px; */
  /* background-color: #bfc; */
  /* border-bottom: 1px solid rgb(177, 219, 234); */
  display: flex;
}
.item .pic {
  margin-top: 20px;
  margin-left: 0px;
}
.item .pic img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.con-right {
  margin: 15px;
  width: 720px;
  border:  1px solid rgb(212, 212, 213);
  border-radius: 6px;
  position: relative;
}
.con-right .jiantou{
  position: absolute;
  top: 22px;
  left: -6px;
  height: 10px;
  width: 10px;
  border: 1px solid rgb(212, 212, 213);
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
  z-index: 999;
  background-color: #fff;
}
.con-right .con-right-top{
  height: 50px;
  border-bottom:  1px solid rgb(212, 212, 213);
  font-size: 16px;
  line-height: 50px;
}
.con-right .con-right-top span{
  margin-left: 10px;
}
.con-right .con-right-center{
  margin-top: 10px;
}
.con-right .con-right-bottom{
  height: 40px;
  border-top:  1px solid rgb(212, 212, 213);
  font-size: 14px;
  line-height: 40px;
}
.con-right .con-right-bottom span{
  margin-left: 10px;
}
.pagination{
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
}
</style>