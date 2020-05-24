import {flag, sum} from "./aaa.js";

if (flag) {
  console.log("小明是个天才");
  console.log(sum(20, 30));
}

import {mul} from "./aaa.js";

console.log(mul(10, 20));

import {Person} from "./aaa.js";

// 全部导入
import * as aaa from "./aaa.js"

console.log(aaa.flag);

const p = new Person()
p.run()

// 导入default
import addr from "./aaa.js"

// console.log(addr);
addr()