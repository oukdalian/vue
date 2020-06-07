<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <!-- /home/news: / 必须得写 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: "/home/news",
        message: "hello world"
      }
    },
    created() {
      console.log("home created");
    },
    destroyed() {
      console.log("home destroyed");
    },
    // 针对个别路由的前置守卫有两种配置方式
    // 方式1：在route配置beforeEnter
    // 方式2：在组件内配置beforeRouteEnter
    // 在组件内配置的方式，以下配置错误
    // beforeRouteEnter: (to, from, next) => {
    //   console.log(this) --> 这个this就是单纯的object对象，访问message必须先取到data
    // }
    // 应该是：上面这种方式和下面这种打出来的this不一样。
    // 下面这种可以用this来直接访问data中的数据，比如this.message
    beforeRouteEnter(to, from, next) {
      console.log("beforeEnter");
      console.log(this)//-->这个this是VueComponent对象，data里的数据可以直接获取:this.message
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave");
      console.log(this);
      this.path = this.$route.path
      next()
    }
    ,
    // activated,deactivated只有在使用keep-alive时才能有效
    activated() {
      console.log("home activated");
      console.log(this)
      console.log(this.path);
      this.$router.push(this.path)
    }
    ,
    deactivated() {
      // console.log("home deactivated");
    }
  }
</script>

<style scoped>

</style>
