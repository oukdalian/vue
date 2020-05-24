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

// 依赖css文件
require("./css/normal.css")

// 依赖less文件
require("./css/special.less")

document.writeln("<h2>hello world</h2>")