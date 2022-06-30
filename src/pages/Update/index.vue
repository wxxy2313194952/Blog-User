<template>
  <div class="outer">
    <div class="left">
      <div class="article">
        <div class="version">
          <div><span>Version</span></div>
          <div style="margin-top:10px;"><span>0.0.1</span></div>
        </div>
        <div class="version-con">
          <div class="version-title">
            <span>测试标题测试标题测试标题测试标题测试标题测</span>
          </div>
          <div class="version-content">
            <p>测试内容测试内容测试内容测试内容测试内容测试内容</p>
          </div>
          <div class="version-time">
            <span>2022.04.29</span>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="version">
          <div><span>Version</span></div>
          <div style="margin-top:10px;"><span>0.0.1</span></div>
        </div>
        <div class="version-con">
          <div class="version-title">
            <span>测试标题测试标题测试标题测试标题测试标题测</span>
          </div>
          <div class="version-content">
            <p>测试内容测试内容测试内容测试内容测试内容测试内容</p>
          </div>
          <div class="version-time">
            <span>2022.04.29</span>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="version">
          <div><span>Version</span></div>
          <div style="margin-top:10px;"><span>0.0.1</span></div>
        </div>
        <div class="version-con">
          <div class="version-title">
            <span>测试标题测试标题测试标题测试标题测试标题测</span>
          </div>
          <div class="version-content">
            <p>测试内容测试内容测试内容测试内容测试内容测试内容</p>
          </div>
          <div class="version-time">
            <span>2022.04.29</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="icon"
          :color="color"
          :size="size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#0bbd87",
      size: "large",
      icon: "el-icon-more",
      activities: [
        {
          content: "支持使用图标支持使用图标支持使用图标",
          timestamp: "2018-04-12 20:46",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
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