<template>
  <div class="outer">
    <!-- 左侧 -->
    <Left></Left>
    <!-- 中间 -->
    <div class="center">
      <div class="title"><span>留言板</span></div>
      <div class="content">
        <div class="item" v-for="item in leaveList" :key="item.id">
          <div class="pic"><img src="@/assets/images/mypice.jpg" /></div>
          <div class="con-right">
            <div class="con-right-top">
              <span>{{ item.nickname }}</span>
            </div>
            <div class="con-right-center">
              <span>{{ item.content }}</span>
            </div>
            <div class="con-right-bottom">
              <span>{{ item.created_time }}</span
              ><a href="javascript:;">回复</a>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="this.leaveNum"
          :page-size="this.pag.pageSize"
          :current-page="this.pag.pageNo"
          prev-click
          next-click
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
      <div class="title-center"><span>写留言</span></div>
      <v-md-editor
        v-model="text"
        height="300px"
        left-toolbar="undo redo clear"
        right-toolbar=""
        mode="edit"
        class="width"
      ></v-md-editor>
      <div class="butt">
        <el-button type="primary" plain> 发表 </el-button>
      </div>
    </div>
    <!-- 右侧 -->
    <Right></Right>
  </div>
</template>

<script>
import Vue from "vue";
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
import hljs from "highlight.js";
import { mapState } from "vuex";
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdEditor);
export default {
  data() {
    return {
      text: "",
      hei: null,
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
      let pag = Math.ceil(this.leaveNum / this.pag.pageSize)
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
      this.$store.dispatch("getLeaveList", this.pag);
    },
  },
  computed: {
    ...mapState({
      leaveList: (state) => state.leave.leaveList,
      leaveNum: (state) => state.leave.leaveNum,
    }),
  },
  mounted() {
    this.getData();
    this.$store.dispatch("getLeaveNum");
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
  background-color: #fff;
  flex-shrink: 0;
  border: 1px solid rgb(207, 235, 245);
  box-sizing: border-box;
}
.title {
  height: 60px;
  width: 780px;
  margin: 0px auto;
  border-bottom: 2px solid rgb(177, 219, 234);
  line-height: 60px;
  font-size: 22px;
  color: rgb(119, 208, 240);
}
.content {
  width: 780px;
  margin: 0px auto;
}
.item {
  width: 100%;
  height: 200px;
  /* background-color: #bfc; */
  border-bottom: 1px solid rgb(177, 219, 234);
  display: flex;
}
.item .pic {
  margin-top: 20px;
  margin-left: 10px;
}
.item .pic img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.con-right {
  margin: 15px;
}
.con-right-top {
  font-size: 16px;
  height: 30px;
}
.con-right-center {
  font-size: 14px;
  height: 110px;
}
.con-right-bottom {
  font-size: 14px;
  height: 20px;
}
.con-right-bottom span {
  margin-right: 30px;
}

.pagination {
  margin: 20px;
  text-align: center;
}

.title-center {
  height: 60px;
  width: 780px;
  margin: 0px auto;
  line-height: 60px;
  font-size: 22px;
  color: rgb(119, 208, 240);
}
/* 编辑器样式 */
.width {
  width: 780px;
  margin: 0px auto;
}
.butt {
  margin: 20px 35px;
}
</style>