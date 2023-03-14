<template>
  <div class="wrap">
    <div class="content">
      <div class="userData">
        <div class="userData-item"><p class="userData-title">今日浏览量</p><p class="num">{{userData.todayPV}}</p></div>
        <div class="userData-item"><p class="userData-title">昨日浏览量</p><p class="num">{{userData.yesterdayPV}}</p></div>
        <div class="userData-item"><p class="userData-title">近七天浏览量</p><p class="num">{{userData.last7daysPV}}</p></div>
        <div class="userData-item"><p class="userData-title">今日评论数</p><p class="num">{{userData.todayReviewNUM}}</p></div>
        <div class="userData-item"><p class="userData-title">今日留言数</p><p class="num">{{userData.todayMessageNUM}}</p></div>
      </div>
      <!-- 流量统计 折线图 -->
      <div class="cardline">
        <div class="title-part">
          <span class="title-word">流量统计</span>
          <span
            class="title-btn"
            :class="{ actice: lineShowDay == 7 }"
            @click="getLineShowDay(7)"
            >最近7天</span
          >
          |
          <span
            class="title-btn"
            :class="{ actice: lineShowDay == 15 }"
            @click="getLineShowDay(15)"
            >最近15天</span
          >
          |
          <span
            class="title-btn"
            :class="{ actice: lineShowDay == 30 }"
            @click="getLineShowDay(30)"
            >最近30天</span
          >
        </div>
        <div class="line-chart">
          <div class="charts" ref="charts"></div>
        </div>
      </div>
      <!-- 用户轨迹 -->
      <div class="infolist">
        <div class="title-part-pie">
          <span class="title-word">数据占比</span>
          <span
            class="title-btn"
            :class="{ actice: pieShowDay == 7 }"
            @click="getPieShowDay(7)"
            >最近7天</span
          >
          |
          <span
            class="title-btn"
            :class="{ actice: pieShowDay == 15 }"
            @click="getPieShowDay(15)"
            >最近15天</span
          >
          |
          <span
            class="title-btn"
            :class="{ actice: pieShowDay == 30 }"
            @click="getPieShowDay(30)"
            >最近30天</span
          >
        </div>
        <div class="pie-chart">
          <div class="pie-charts" ref="pieCharts2"></div>
          <div class="pie-charts" ref="pieCharts1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, PieChart } from "echarts/charts";
import { UniversalTransition, LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { mapState } from "vuex";
import { accessLeave } from "@/api"
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  PieChart,
  CanvasRenderer,
  UniversalTransition,
  LabelLayout,
]);
export default {
  name: "Analytics",
  data() {
    return {
      myChart: null,
      pieCharts1: null,
      pieCharts2: null,
      // 展示数据的天数 1:七天 2:十四天 3:三十天
      pieShowDay: 7,
      lineShowDay: 7
    };
  },
  methods: {
    getPieShowDay(day) {
      this.pieShowDay = day;
      // 重新请求展示数据
      this.$store.dispatch("getPieBehavior",this.pieShowDay);
      this.$store.dispatch("getPieMenu",this.pieShowDay);
      accessLeave({
        message: '切换饼图(用户端)',
        user_behavior: 105,
        user_menu: 500
      }).catch(e => {})
    },
    getLineShowDay(day) {
      this.lineShowDay = day;
      // 重新请求展示数据
      
      accessLeave({
        message: '切换折线图(用户端)',
        user_behavior: 106,
        user_menu: 500
      }).catch(e => {})
    },
  },
  mounted() {
    this.$store.commit("CHANGENAVACT", 5); //切换高亮
    this.$store.dispatch("getLineCharts");
    this.$store.dispatch("getLastweek");
    this.$store.dispatch("getPieBehavior",this.pieShowDay);
    this.$store.dispatch("getPieMenu",this.pieShowDay);
    this.$store.dispatch("getUserData");
    this.myChart = echarts.init(this.$refs.charts);
    this.myChart.setOption({
      // 提示框组件
      tooltip: {
        trigger: "axis",
      },
      // 图例组件
      legend: {
        data: ["博客浏览量", "博客访问IP数"],
        left: 600,
      },
      grid: {
        left: "10%",
        right: "10%",
        bottom: "5%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [],
      },
      yAxis: 
        {
          type: "value",
        },
      
      series: [
        {
          name: "博客浏览量",
          type: "line",
          data: [],
          lineStyle: {
            color: "#01aaed",
          },
          itemStyle: {
            color: "#01aaed",
          },
        },
        {
          name: "博客访问IP数",
          type: "line",
          data: [],
          lineStyle: {
            color: "#F72C5B",
          },
          itemStyle: {
            color: "#F72C5B",
          },
        },
      ],
    });
    this.pieCharts1 = echarts.init(this.$refs.pieCharts1);
    this.pieCharts1.setOption({
      title: {
        text: "用户行为占比",
        top: "88%",
        left: "center",
        textStyle: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        left: "center",
      },
      series: {
        type: "pie",
        radius: ["30%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bolder",
            formatter(param) {
              // correct the percentage
              return param.name + " (" + param.percent + "%)";
            },
          },
        },

        labelLine: {
          show: true,
        },
        data: [],
      },
    });
    this.pieCharts2 = echarts.init(this.$refs.pieCharts2);
    this.pieCharts2.setOption({
      title: {
        text: "菜单点击占比",
        top: "88%",
        left: "center",
        textStyle: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "4%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["30%", "60%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bolder",
            formatter(param) {
              // correct the percentage
              return param.name + " (" + param.percent + "%)";
            },
          },
        },
          labelLine: {
            show: true,
          },
          data: [],
        },
      ],
    });
    accessLeave({
      message: '访问访客统计(用户端)',
      user_behavior: 104,
      user_menu: 104
    }).catch(e => {})
  },
  computed: {
    ...mapState({
      lineCharts: state => state.echarts.lineCharts,
      lastWeek: state => state.echarts.lastWeek,
      pieBehavior: state => state.echarts.pieBehavior,
      pieMenu: state => state.echarts.pieMenu,
      userData: state => state.echarts.userData,
    }),
  },
  watch: {
    lineCharts() {
      this.myChart.setOption({
        series: [
          {
            data: this.lineCharts,
          },
          {
            data: [12,34,23,4,13,38,25],
          },
        ],
      });
    },
    lastWeek() {
      this.myChart.setOption({
        xAxis: {
          data: this.lastWeek,
        },
      });
    },
    pieBehavior() {
      this.pieCharts1.setOption({
        series: [
          {
            data: this.pieBehavior,
          },
        ],
      });
    },
    pieMenu() {
      this.pieCharts2.setOption({
        series: [
          {
            data: this.pieMenu,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  background-color: rgb(241, 243, 244);
  display: flex;
  justify-content: center;
}
.content {
  width: 1100px;
  margin: 100px 0 40px 0;
  position: relative;
  z-index: 99;
}
/* 数据统计 */
.userData{
  height: 70px;
  width: 100%;
  padding: 24px 0px;
  background-color: #fff;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
.userData-item{
  width: 200px;
}
.userData-title{
  font-size: .9rem;
  text-align: center;
  color: rgba(0,0,0,.65);
  margin-top: 10px;
}
.num{
  font-size: 1.2rem;
  text-align: center;
  color: rgba(0,0,0,.65);
  margin-top: 10px;
}
/* 流量统计 折线图 */
.cardline {
  height: 430px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
}
.title-part {
  padding: 20px 20px 5px 20px;
}
.title-part .title-word {
  font-size: 22px;
  padding-right: 10px;
}
.title-part .title-btn {
  font-size: 12px;
  cursor: pointer;
}
.line-chart {
  width: 100%;
  height: 90%;
}
.charts {
  width: 100%;
  height: 345px;
}
.actice {
  color: #01aaed;
}
/* 用户轨迹 */
.infolist {
  height: 470px;
  width: 100%;
  background-color: #fff;
}
.pie-chart {
  height: 400px;
  width: 100%;
  display: flex;
}
.pie-charts {
  height: 400px;
  width: 50%;
}
.title-part-pie{
  padding: 20px;
}
.title-part-pie .title-word {
  font-size: 22px;
  padding-right: 10px;
}
.title-part-pie .title-btn {
  font-size: 12px;
  cursor: pointer;
}
</style>