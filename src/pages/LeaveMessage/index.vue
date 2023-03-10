<template>
  <div class="outer">
    <div class="top">
      <!-- 留言输入框 -->
      <div class="leave">
        <div class="leave-ava">
          <div class="avatardiv">
            <select class="avatarSelect"  @click="selectAvatar" v-model="avatar">
              <option class="avataroption" value="1">头像1</option>
              <option class="avataroption" value="2">头像2</option>
              <option class="avataroption" value="3">头像3</option>
              <option class="avataroption" value="4">头像4</option>
            </select>
          </div>
          <img :src="touristList[avatar-1].url" />
          <div class="avatarwelcome"><span>欢迎你来</span></div>
        </div>
        <div class="leave-right">
          <div>
            <textarea
              class="input-mess"
              placeholder="欢迎留言吖"
              v-model="mess"
            ></textarea>
          </div>
          <div class="leave-second">
            <div class="second-input">
              <div>
                <input
                  class="input-name"
                  type="text"
                  placeholder="昵称（必填）"
                  v-model="name"
                />
                <input
                  class="input-email"
                  type="text"
                  placeholder="邮箱（可以不填哦）"
                  v-model="email"
                />
              </div>
              <button class="btn" @click="submit">评论</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- 留言展示列表 -->
      <div class="bott-left">
        <div
          class="bott-left-item"
          v-for="message in messageList"
          :key="message.id"
        >
          <div class="item">
            <div class="avatar"><img :src="touristList[message.avatar-1].url" /></div>
            <div class="content">
              <!-- 右侧内容 -->
              <div class="mess-ri">
                <div class="mess-ri-name">
                  <span>{{ message.name }}</span
                  ><i class="iconfont icon-weizhi"></i
                  ><span>{{ message.city }}</span>
                </div>
                <div class="mess-ri-cont">
                  <span>{{ message.content }}</span>
                </div>
                <div class="mess-ri-time">
                  <div class="time">
                    <span>{{ message.time }}</span>
                  </div>
                  <div class="back"><span>回复</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧卡片 -->
      <div class="bott-right">
        <!-- 第一个卡片 -->
        <div class="card-github">
          <div class="card-top">
            <svg
              t="1677395872667"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2711"
              width="128"
              height="128"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M0 556.416C0 602.816 4.352 644.8 13.024 682.336 21.696 719.904 33.728 752.544 49.088 780.224 64.416 807.936 83.968 832.32 107.648 853.344 131.36 874.368 157.056 891.552 184.768 904.928 212.48 918.272 244.096 929.12 279.648 937.472 315.2 945.824 351.52 951.648 388.576 955.008 425.632 958.336 466.336 960 510.752 960 555.488 960 596.384 958.336 633.44 955.008 670.496 951.648 706.88 945.824 742.592 937.472 778.304 929.12 810.112 918.272 837.984 904.928 865.856 891.552 891.712 874.368 915.584 853.344 939.456 832.32 959.168 807.936 974.688 780.224 990.208 752.544 1002.304 719.904 1010.976 682.336 1019.648 644.8 1024 602.816 1024 556.416 1024 473.632 996.288 402.016 940.896 341.6 943.872 333.568 946.624 324.48 949.152 314.304 951.648 304.128 953.984 289.6 956.16 270.752 958.336 251.872 957.504 230.112 953.664 205.408 949.824 180.704 942.72 155.488 932.352 129.792L924.864 128.288C919.52 127.296 910.752 127.52 898.56 129.024 886.368 130.528 872.192 133.536 856 138.048 839.808 142.56 818.944 151.232 793.408 164.096 767.872 176.928 740.928 193.056 712.544 212.416 663.808 199.04 596.864 192.384 511.744 192.384 426.944 192.384 360.192 199.04 311.456 212.416 283.072 193.056 255.968 176.928 230.08 164.096 204.224 151.232 183.616 142.56 168.256 138.048 152.896 133.536 138.528 130.624 125.184 129.28 111.84 127.936 103.392 127.52 99.904 128.032 96.384 128.544 93.632 129.12 91.648 129.792 81.28 155.488 74.176 180.672 70.368 205.408 66.528 230.112 65.696 251.872 67.84 270.752 70.016 289.6 72.352 304.128 74.848 314.304 77.376 324.48 80.128 333.568 83.136 341.6 27.712 402.016 0 473.632 0 556.416ZM125.696 682.08C125.696 634.016 147.552 589.952 191.296 549.888 204.288 537.888 219.488 528.8 236.832 522.592 254.208 516.448 273.824 512.928 295.68 512.096 317.536 511.264 338.496 511.424 358.528 512.608 378.56 513.76 403.264 515.36 432.64 517.344 462.016 519.36 487.392 520.352 508.736 520.352 530.112 520.352 555.488 519.36 584.864 517.344 614.24 515.36 638.944 513.76 658.976 512.608 679.008 511.424 699.936 511.264 721.792 512.096 743.68 512.928 763.296 516.448 780.64 522.592 798.016 528.768 813.184 537.888 826.208 549.888 869.952 589.28 891.808 633.344 891.808 682.08 891.808 710.816 888.224 736.256 881.024 758.464 873.856 780.672 864.672 799.264 853.504 814.304 842.304 829.312 826.784 842.08 806.944 852.608 787.072 863.104 767.712 871.2 748.832 876.896 729.984 882.56 705.792 886.976 676.224 890.144 646.688 893.312 620.32 895.232 597.12 895.904 573.92 896.576 544.448 896.928 508.736 896.928 473.024 896.928 443.552 896.576 420.352 895.904 397.152 895.232 370.784 893.312 341.248 890.144 311.712 886.976 287.52 882.56 268.64 876.896 249.792 871.2 230.432 863.104 210.56 852.608 190.688 842.08 175.168 829.312 164 814.304 152.8 799.264 143.616 780.672 136.448 758.464 129.28 736.256 125.696 710.816 125.696 682.08ZM640 672A2 3 2520 1 0 768 672 2 3 2520 1 0 640 672zM256 672A2 3 2520 1 0 384 672 2 3 2520 1 0 256 672z"
                fill="#404040"
                p-id="2712"
              ></path>
            </svg>
          </div>
          <div class="card-center">
            <div class="tit"><span>唔西迪西的Github</span></div>
            <button class="btn-github" @click="gotoMyGitHub">博客源码</button>
          </div>
          <div class="card-bottom"></div>
        </div>
        <!-- 第二个卡片 -->
        <div class="card-weather">
          <div class="weathTitle">
            <span class="citySpan">{{city}}</span>天气
          </div>
          <div class="weathContent">
            <div class="borderItem" v-for="(wea,index) in weather" :key="index">
              <div class="weathWeek">
                {{processWeek(wea.week)}}<span v-if="index == 0">(今天)</span>
              </div>
              <div class="weathDay">{{processDate(wea.date)}}</div>
              <div class="weathIcon">
                <svg aria-hidden="true" class="icon">
                  <use :xlink:href="weatherIcon(wea.dayweather)"></use>
                </svg>
              </div>
              <div class="weathChinese">{{wea.dayweather}}</div>
              <div class="temperature">{{wea.nighttemp}} ~ {{wea.daytemp}}°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { accessLeave, reqaddMessage } from "@/api"
import Axios from 'axios'
import './iconfont/iconfont.js'
import { getCity, getAdcode } from '@/utils/city.js'
import avatarList from '@/utils/avatar.js'
export default {
  data() {
    return {
      pag: {
        // 每页显示的数量pageSize
        pageSize: 20,
        // 当前页码pageNo
        pageNo: 1,
      },
      name: "",
      email: "",
      mess: "",
      city: getCity(),
      weather: [],
      avatar: 1,
      touristList: avatarList
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getMessageList", this.pag)
    },
    processDate(val){
      const dateArr = val.split('-')
      return dateArr[1] + '月' + dateArr[2] + '日'
    },
    processWeek(val){
      const weekArr = ['周一','周二','周三','周四','周五','周六','周日']
      return weekArr[val - 1]
    },
    weatherIcon(val){   
      let weatherStr = ['多云','晴','阴','霾','阵雨','雷阵雨','小雨','中雨','大雨','暴雨','雨夹雪','雪','小雪','中雪','大雪','暴雪','扬沙','雾']
      let iconStr = ['Group','qingtian','yintian','wumai','zhenyu','leizhenyu','xiaoyu','zhongyu','dayu','baoyu','yujiaxue','xiaoxue','xiaoxue','zhongxue','xiaoxue','baoxue','Group1','wu']
      return "#icon-" + iconStr[weatherStr.indexOf(val) == -1 ? 0 : weatherStr.indexOf(val)]
    },
    getWeather(){
      Axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${getAdcode()}&key=3451452303fb16375647a3ca4b147578&extensions=all`)
      .then(res => {
        this.weather = res.data.forecasts[0].casts.slice(0,3)
      }).catch(e => console.log(e))
    },
    async submit() {
      // 验证必填项是否为空
      if (!this.name || !this.mess) return alert("昵称，内容不能为空")
      // 验证输入元素是否合规
      // if()
      // 整理数据
      const data = {
        content: this.mess,
        name: this.name,
        email: this.email,
        city: getCity(),
        avatar: this.avatar,
      };
      // 提交表单元素
      let result = await reqaddMessage(data)
      if (result.code == 200) {
        this.getData()
        this.name = ""
        this.email = ""
        this.mess = ""
        accessLeave({
          message: '留言(用户端)',
          user_behavior: 102,
          user_menu: 500
        }).catch(e => {})
      }
    },
    selectAvatar(event){
      this.avatar = event.target.value
    },
    gotoMyGitHub(){
      window.open("https://github.com/wxxy2313194952", "_blank")
      accessLeave({
        message: '查看源码(用户端)',
        user_behavior: 107,
        user_menu: 500
      }).catch(e => {})
    }
  },
  computed: {
    ...mapState({
      messageList: state => state.message.messageList,
      messageNum: state => state.message.messageNum
    })
  },
  async mounted() {
    this.getData()
    this.getWeather()
    this.$store.dispatch("getMessageNum")
    this.$store.commit("CHANGENAVACT",3)//切换高亮
    accessLeave({
      message: '访问博客留言(用户端)',
      user_behavior: 104,
      user_menu: 102
    }).catch(e => {})
    
  },
};
</script>

<style scoped>
.outer {
  margin-top: 70px;
  width: 100%;
  background-color: rgb(241, 243, 244);
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/***************************************/
.top {
  height: 500px;
  background-image: url("~@/assets/images/2.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
}
.leave {
  height: 160px;
  width: 700px;
  background-color: #fff;
  display: flex;
  border-radius: 3px;
}
.leave-ava {
  width: 50px;
  padding: 15px;
  padding-top: 20px;
  position: relative;
}
.avatarwelcome{
  padding-top: 8px;
}
.avatardiv{
  position: absolute;
  left: 15px;
  top: 20px;
  z-index: -0;
}
.avatarSelect{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  opacity:0;
  border: none;
  outline: none;
  cursor: pointer;
}
.avataroption{
  color: #000;
  font-size: 16px;
}
.leave-ava img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.leave-right {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.leave-second {
  margin-bottom: 20px;
}
.second-input {
  display: flex;
  justify-content: space-between;
}

/* input样式 */
.input-mess {
  height: 55px;
  width: 94%;
  border: 1px solid #888;
  padding: 8px;
  resize: none;
}
.input-mess:focus {
  outline: none;
}
.input-name {
  height: 15px;
  width: 180px;
  border: 1px solid #888;
  padding: 6px;
}
.input-name:focus {
  outline: none;
}
.input-email {
  height: 15px;
  width: 180px;
  border: 1px solid #888;
  margin-left: 15px;
  padding: 6px;
}
.input-email:focus {
  outline: none;
}
.btn {
  height: 26px;
  width: 64px;
  border: 1px solid #01aaed;
  text-align: center;
  color: #01aaed;
  background-color: transparent;
  cursor: pointer;
  margin-right: 18px;
}
/******************  ******************** */
.bottom {
  /* height: 700px; */
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  z-index: 99;
}
.bott-left {
  width: 880px;
  margin-right: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.bott-left-item {
  height: 115px;
  width: 100%;
  border: 1px solid #dfdfdf;
}
.bott-left-item:not(.bott-left-item:first-child) {
  border-top: 0px;
}
.item {
  display: flex;
  height: 100%;
}
.avatar {
  width: 50px;
  margin: 15px;
}
.avatar img {
  height: 50px;
  width: 50px;
  border-radius: 10px;
}

.content {
  width: 100%;
  height: 100%;
  margin-right: 20px;
}
.mess-ri {
  width: 100%;
}
.mess-ri-name {
  font-size: 0.85rem;
  height: 20px;
  padding-bottom: 8px;
  padding-top: 10px;
}
.mess-ri-name i {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.53);
  margin-left: 8px;
}

.mess-ri-cont {
  font-size: 0.85rem;
  height: 40px;
  padding-bottom: 8px;
}
.mess-ri-time {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.43);
  height: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.mess-ri-time .back {
  cursor: pointer;
  text-align: right;
}
/* ************************************** */
.bott-right {
  width: 280px;
  /* height: 500px; */
  /* 开启粘滞定位 */
  /* position: sticky;
  top: 90px; */
}
.card-github {
  border: 1px solid #dfdfdf;
  /* height: 330px; */
  width: 100%;
  margin-bottom: 15px;
  background-color: #fff;
  position: sticky;
  top: 90px;
}
.card-top {
  height: 120px;
  background-color: #555;
  position: relative;
  overflow: hidden;
}
.card-top svg {
  width: 100px;
  height: 100px;
  position: absolute;
  /* 左右外边距设置为auto */
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  /* 绝对定位 */
  position: absolute;
  left: 0;
  right: 0;
}
.card-center {
  /* height: 70px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tit {
  height: 20px;
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 20px;
}
.btn-github {
  height: 34px;
  width: 130px;
  border: none;
  margin-top: 0.4rem;
  margin-bottom: 3rem;
  cursor: pointer;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 0.3rem;
  font-size: 15px;
  color: #fff;
}
/******************** 天气 *************************/ 
.card-weather {
  /* height: 300px; */
  background-color: #fff;
  border: 1px solid #dfdfdf;
  position: sticky;
  top: 390px;
}
.weathTitle{
  height: 25px;
  width: 100%;
  margin: 15px 0;
  font-size: 1.1rem;
  text-align: center;
}
.weathContent{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.borderItem{
  width: 80px;
}
.borderItem:nth-child(2){
  border-right: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
}
.weathWeek{
  text-align: center;
  font-size: 15px;
  margin: 5px 0;
  color: #5e5e5e;
}
.weathDay{
  text-align: center;
  font-size: 15px;
  color: #aaa;
  margin: 5px 0;
}
.weathChinese{
  text-align: center;
  font-size: 15px;
  margin: 5px 0;
  color: #5e5e5e;
}
.temperature{
  text-align: center;
  font-size: 15px;
  margin: 5px 0;
  color: #5e5e5e;
}
.weathIcon{
  text-align: center;
  font-size: 2.2rem;
}

</style>