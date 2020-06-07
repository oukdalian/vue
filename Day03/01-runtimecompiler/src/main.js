// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: {App},
  // template: '<App/>'
  //  如果有template的话，就需要经过parse到ast文件然后再经过编译生成render函数

  // 以下是直接用render函数
  render: function (createElement) {
    // createElement 就是创建一个元素
    // 1.普通用法: createElement("标签", {标签的属性}，[""])
    // return createElement("h2", {class: "box"}, ["helloworld", createElement("button", ["按钮"])])

    // 2.传入组件对象
    return createElement(App)
  }

})


// runtime-compiler
// template -> ast（抽象语法树） -> render -> vdom -> UI

// runtime-only (1.性能更高 2.下面的代码量更少)
// render -> vdom -> UI
