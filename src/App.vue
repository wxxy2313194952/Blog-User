<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
    <!-- 在注册登录页面不可见 -->
    <Footer v-show="$route.meta.isShow"></Footer>
    <vue-particles
      class="login-bg"
      color="#d9d9d9"
      :particleOpacity="0.8"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="15"
      linesColor="#cdcdcd"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="200"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="remove"
    >
    </vue-particles>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Axios from 'axios'
import { setCity, setAdcode } from '@/utils/city.js'
export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
  async mounted() {
    await Axios.get('https://restapi.amap.com/v3/ip?key=3451452303fb16375647a3ca4b147578')
      .then(res => {
        setCity(res.data.city)
        setAdcode(res.data.adcode)
      })
      .catch(e => console.log(e))
  },
}
</script>

<style scoped>
.login-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>