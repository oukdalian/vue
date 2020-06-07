<template>
  <div id="app">
    <!-- router-link默认渲染成a标签，通过tag更改 -->
    <!-- 1.通过active-class来自定义class -->
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- 2.也可以在VueRouter实例化时，作全局配置-->
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- 3.用button的话，就要在click方法里实装router跳转 -->
    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- router-link 传值方式1：params-->
    <!--    <router-link :to="'/user/'+ userId">用户</router-link>-->
    <!-- router-link 传值方式2：query-->
    <!--    <router-link :to="{path:'/profile', query:{name:'why', age:18, height:1.88}}">档案</router-link>-->

    <!-- button实现方式 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!--    <router-view></router-view>-->

    <!-- Profile除外了，所以还是会每次都销毁，exclude里有多个的话用, 但是不要加空格-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: "zhangsan"
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路由
        // push -> history.pushState
        // this.$router.push("/home")
        this.$router.replace("/home")
        console.log("home click");
      },
      aboutClick() {
        this.$router.push("/about")
        console.log("about click");
      },
      userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'ko',
            age: 19,
            height: 1.88
          }
        })
      }
    }
  }
</script>

<style>
  <!--
  active-class不设置的话，默认是这个class
  也可以用active-class来自定义class

  -->
  .router-link-active {
    color: red;
  }

  .active {
    color: blue;
  }
</style>
