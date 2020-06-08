<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="blue">
      <img src="../assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="../assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="../assets/img/tabbar/cart.svg" alt="" slot="item-icon">
      <img src="../assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../assets/img/tabbar/profile.svg" alt="" slot="item-icon">
      <img src="../assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  // 以下是相对路径
  // import TabBar from "./tabbar/TabBar";
  // import TabBarItem from "./tabbar/TabBarItem";
  // 下面是在webpack.base.conf.js为components取了一个别名
  // 取别名的时候，import的时候可以直接使用别名
  // 在src=“”里的时候得用“~别名”的形式
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
