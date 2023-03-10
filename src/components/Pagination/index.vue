<template>
  <div class="pagination">
    <!-- 上一页 -->
    <div v-if="pageNo != 1" @click="$emit('getPageNo', pageNo - 1)">
      <i class="iconfont icon-icon-test"></i>
    </div>
    <!-- 第一页 -->
    <div
      v-if="startNumAndEndNum.start > 1"
      :class="{ active: pageNo == 1 }"
      @click="$emit('getPageNo', 1)"
    >1</div>
    <!-- 第一页和连续页码中间的··· -->
    <div class="cursorDefault" v-if="startNumAndEndNum.start > 2">···</div>
    <!-- 连续页码 -->
    <div
      class="number"
      v-for="(page, index) in continuesArr"
      :key="index"
      :class="{ active: pageNo == page }"
      @click="$emit('getPageNo', page)"
    >{{ page }}</div>
    <!-- 连续页码和最后一页中间的··· -->
    <div class="cursorDefault" v-if="startNumAndEndNum.end < totalPage - 1">
      ···
    </div>
    <!-- 最后一页 -->
    <div
      v-if="startNumAndEndNum.end < totalPage"
      :class="{ active: pageNo == totalPage }"
      @click="$emit('getPageNo', totalPage)"
    >{{ totalPage }}</div>
    <!-- 下一页 -->
    <div v-if="pageNo != totalPage" @click="$emit('getPageNo', pageNo + 1)">
      <i class="iconfont icon-icon-test1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // pageNo：当前第几页
  // pageSize：每一页需要展示多少条数据
  // total：一共有多少条数据
  // continues：分页器连续页码个数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算出总共多少页
    totalPage() {
      // 可能会出现小数，要向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续的页码起始和结束数字
    startNumAndEndNum() {
      const { pageNo, totalPage, continues } = this;
      // 先定义两个变量用来存储起始数字&结束数字
      let start = 0,
        end = 0;
      // 当总页数没有连续页码多时
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        // 总页数大于等于连续页码时
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 处理不正常的现象 start为负|0
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 处理不正常的现象 end大于总页数
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
    // 计算出分页器连续页码数组用于模板遍历
    continuesArr() {
      let { start, end } = this.startNumAndEndNum;
      let continuesArr = [];
      while (1) {
        if (start > end) return continuesArr;
        continuesArr.push(start);
        start++;
      }
      return continuesArr;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  height: 30px;
}
.pagination div:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination div:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination div:hover {
  background-color: #eee;
}
.pagination div {
  height: 100%;
  width: 30px;
  text-align: center;
  cursor: pointer;
  line-height: 30px;
  color: black;
  background-color: #fff;
}
.iconfont {
  color: black;
  font-weight: bolder;
}
.pagination .active {
  background-color: #000 !important;
  color: #fff;
  cursor: default;
}
.pagination .cursorDefault {
  cursor: default;
}
</style>