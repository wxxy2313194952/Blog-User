<template>
  <div class="outer">
    <div class="left">
      <div class="article" v-for="list in VerList" :key="list.id">
        <div class="version">
          <div><span>Version</span></div>
          <div style="margin-top:10px;"><span>{{list.version}}</span></div>
        </div>
        <div class="version-con">
          <div class="version-title">
            <span>{{list.title}}</span>
          </div>
          <div class="version-content">
            <p>{{list.content}}</p>
          </div>
          <div class="version-time">
            <span>{{list.time}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in VerList" 
          :key="index"
          :icon="icon"
          :color="color"
          :size="size"
          :timestamp="activity.time"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
import { reqGetVerList } from "@/api";
export default {
  data() {
    return {
      // 列表数据
      VerList:[],
      // 右边组件配置
      color: "#0bbd87",
      size: "large",
      icon: "el-icon-more",
    };
  },
  async mounted(){
    let result = await reqGetVerList()
    if (result.code == 200) {
      this.VerList = result.data;
    }
  }
};
</script>
<style scoped>
.outer {
  padding-top: 90px;
  display: flex;
  justify-content: center;
  background-color: rgb(241, 243, 244);
}
.right {
  width: 250px;
  margin-left: 40px;
  margin-top: 20px;
}
.left {
  width: 800px;
  /* height: 1000px; */
  /* margin-top: 20px; */
}
.article {
  height: 150px;
  width: 780px;
  background-color: #fff;
  margin: 25px 0px;
  border-radius: 5px;
  display: flex;
}
.version{
  margin: auto 30px;
  width: 100px;
  text-align: center;
  font-size: 24px;
}
.version-con{
  padding-top: 12px;
}
.version-title{
  font-size: 18px;
  margin: 10px 0px;
}
.version-content{
  font-size: 14px;
  height: 60px;
}
.version-timt{
  font-size: 14px;
  margin: 10px 0px;
}
</style>