<template>
  <!-- 左侧 -->
  <div class="in-left">
    <!-- 名片 -->
    <div class="mycard">
      <div class="back-img"><img src="@/assets/images/back_img.jpg"></div>
      <div class="id-img"><img src="@/assets/images/mypice.jpg" /></div>
      <div class="id-name"><span>月色真美</span></div>
      <div class="id-des"><span>The Best is Yet to Come</span></div>
    </div>
    <!-- 标签云 -->
    <div class="label">
      <div class="label-title">
        <span>标签云</span>
      </div>
      <div class="content">
        <div class="item" v-for="item in lableList" :key="item.id"><a href="javascript:;"><span>{{item.name}}</span></a></div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetLableList } from "@/api/index";
export default {
  name:'Left',
  data() {
    return {
      lableList:[]
    }
  },
  async mounted(){
    let result = await reqGetLableList();
    if (result.code == 200) {
      this.lableList = result.data;
    }
  }
};
</script>

<style scoped>
/* *****************左侧********************* */
.in-left {
  width: 230px;
  /* height: 700px; */
  /* background-color: #FFF; */
  flex-shrink: 0;
  margin-top: 20px;
  position: relative;
  z-index: 99;
}
/* 名片 */
.in-left .mycard {
  width: 100%;
  height: 240px;
  background-color: #fff;
  /* border: 1px solid #fff; */
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
}
.in-left .mycard:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
/* 头像下的背景图 */
.mycard .back-img{
  height: 110px;
}
.mycard .back-img img {
  width: 100%;
  height: 100%;
}
/* 头像 */
.mycard .id-img {
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin: 10px auto;
  position: absolute;
  top: 50px;
  left: 65px;
  border: 5px solid hsla(0,0%,100%,.5);
}
.mycard .id-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
/* 昵称 */
.mycard .id-name {
  margin-top: 50px;
  height: 30px;
  text-align: center;
  /* margin-bottom: 10px; */
}
.mycard .id-des {
  height: 10px;
  text-align: center;
}
.mycard .id-name span {
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
}
.mycard .id-des span {
  line-height: 30px;
  font-size: 14px;
  /* font-weight: bold; */
  color: #999;
}
/* 标签云 */
.in-left .label {
  width: 100%;
  /* height: 300px; */
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.in-left .label:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
.label-title {
  margin: 20px;
  margin-bottom: 15px;
  font-size: 20px;
}
.content {
  display: flex;
  width: 210px;
  margin: 10px 10px;
  /* border: 1px solid #bfc; */
  flex-wrap: wrap;
}
.item {
  height: 20px;
  margin: 4px 3px;
  background: #d8dadc;
  line-height: 20px;
  border-radius: 10px;
}
.item span {
  padding-left: 7px;
  padding-right: 7px;
  /* color: rgba(0, 0, 0, 0.631); */
  color: #fff;
}
</style>