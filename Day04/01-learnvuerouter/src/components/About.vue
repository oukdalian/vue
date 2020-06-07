<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，呵呵呵</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    activated() {
      // console.log("about activated");
      // console.log(this)
      // console.log(this.path);
      // this.$router.push(this.path)
    },
    deactivated() {
      // console.log("about deactivated");
      // console.log(this)
      // console.log(this.path)
    }
  }
</script>

<style scoped>

</style>
