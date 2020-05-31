// 1.使用commonjs的模块化的规范
const {add, mul} = require("./js/mathUtils")

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// webpack ./src/main.js ./dict/bundle.js

// 3.依赖css文件
require("./css/normal.css")

// 4.依赖less文件
require("./css/special.less")

// document.writeln("<h2>hello world</h2>")

// 5.使用Vue进行开发
import Vue from 'vue'

// const app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello webpack"
//   }
// })
// 开发中一般不会改index.html，所以要在Vue实例中定义template
// new Vue({
//   el: "#app",
//   // 这里的template会直接替换掉index.html里的div#app
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data: {
//     message: "hello webpack vue",
//     name: "coderwhy"
//   },
//   methods: {
//     btnClick() {
//       console.log("按钮被点击了。");
//     }
//   }
// })

// 然后再把template里的内容抽出来，放在子组件里。
// const App = {
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data() {
//     return {
//       message: "hello webpack vue",
//       name: "coderwhy"
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log("按钮被点击了。");
//     }
//   }
// }
// new Vue({
//   el: "#app",
//   template: `
//     <App/>
//   `,
//   components: {
//     App
//   }
// })

// 这样抽取完之后还可以继续抽取，把子组件的内容抽取到别的js文件
// import App from './vue/app.js'
//
// new Vue({
//   el: "#app",
//   template: `
//     <App/>
//   `,
//   components: {
//     App
//   }
// })

// 这样抽取完之后还可以继续抽取，把子组件的内容抽取到别的vue文件
import App from './vue/App'

new Vue({
  el: "#app",
  template: `
    <App/>
  `,
  components: {
    App
  }
})