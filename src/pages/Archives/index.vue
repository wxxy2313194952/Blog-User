<template>
  <div class="common">
    <div class="top"></div>
    <div class="content">
      <ul class="timeline-centered">
        <!-- 这一年中的每一篇文章 -->
        <li class="timeline-item" v-for="item in list" :key="item.id">
          <!-- 每一行的日期 -->
          <div class="timeline-info">
            <div class="info-cen"><span>{{item.date}}</span></div>
          </div>
          <!-- 每一行的中间图标 -->
          <div class="timeline-marker">
            <div class="marker-icon">
              <i class="iconfont icon-weizhi"></i>
            </div>
            <div class="marker-line"></div>
          </div>
          <!-- 每一行的内容 -->
          <div class="timeline-content">
            <div class="content-p"><span>{{item.content}}</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reqGetTimeList, accessLeave } from '@/api'
export default {
  name: "Archive",

  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await reqGetTimeList()
    if(result.code == 200){
      this.list = result.data
    }
    this.$store.commit("CHANGENAVACT",4)//切换高亮
    accessLeave({
      message: '访问时间轴(用户端)',
      user_behavior: 104,
      user_menu: 103
    }).catch(e => {})
  },
  methods: {},
};
</script>
<style scoped>
.common {
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
}
/**************************** 顶部 ***************************** */
.top{
  height: 700px;
  width: 100%;
  background-image: url("~@/assets/images/1.jpg");
  position: relative;
  z-index: 99;
}
.content {
  width: 1340px;
  position: relative;
  z-index: 99;
}

.timeline-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 3px;
  padding-top: 20px;
  margin-bottom: 30px;
}

.timeline-item {
  display: flex;
  height: 110px;
  margin: 10px;
}

.timeline-centered > .timeline-item:nth-child(odd){
  flex-direction: row-reverse;
}
.timeline-item .timeline-info {
  width: 480px;
}
.info-cen{
  margin: 20px 12px;
  font-size: .95rem;
}
.timeline-centered > .timeline-item:nth-child(2n) > .timeline-info{
  display: flex;
  justify-content: flex-end;
}
/**************************** 中间***************************** */
.timeline-item .timeline-marker {
  width: 40px;
}

.timeline-marker .marker-icon {
  width: 30px;
  height: 30px;
  background-color: #ccff66;
  border-radius: 50%;
  text-align: center;
  border: 4px solid #fff;
  margin-top: 12px;
}
.timeline-marker .marker-icon i {
  color: rgb(255, 255, 255);
  line-height: 30px;
  font-size: 21px;
  padding-right: 2px;
}
.timeline-marker .marker-line{
  height: 78%;
  width: 3px;
  background-color: #ccff66;
  margin: 4px  13px 0px 17px;
}
.timeline-item:last-child .timeline-marker .marker-line{
 display: none;
}

/* ************************内容*************************** */
.timeline-content{
  width: 480px;
}
.content-p{
  border: 1px solid skyblue;
  border-radius: 6px;
  font-size: .95rem;
  margin: 6px 15px;
  padding: 15px;
}
</style>