<template>
  <div>
    <Nav></Nav>
    <router-view ></router-view>
    <!-- 在注册登录页面不可见 -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';



export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  }
}
</script>

<style>

</style>
