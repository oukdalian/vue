const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price) {
    //   return "￥" + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      // 1.普通的for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 2.for (let i in this.books)
      // let totalPrice = 0
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //  3.for (let i of this.books)
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      // 4.reduce
      return this.books.reduce((pre, book) => pre + book.price * book.count, 0)
    }
  }
})

// 编程范式:命令式编程/声明式编程
// 编程范式:面对对象编程/面向函数编程

const nums = [10, 20, 111, 222, 444, 40, 50]

// 1. 需求:取出小于100的数字
// 1.1 普通实现
// let newNums = []
// for (let i of nums) {
//   if (i < 100) {
//     newNums.push(i)
//   }
// }
// console.log(newNums);

// 1.2 用高阶函数filter实现：
// filter中的回调函数有一个要求:必须返回一个boolean值
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
let newNums = nums.filter(function (n) {
  return n < 100
})
console.log(newNums);


// 2. 需求:将所有小于100的数字进行转化 : *2
// 2.1 普通实现
// let newNums2 = []
// for (let i of nums) {
//   if (i < 100) {
//     newNums2.push(i * 2)
//   }
// }
//
// 2.2 用高阶函数map实现：
let newNums2 = newNums.map(function (n) {
  return n * 2
})
console.log(newNums2);

// 3. 需求:将所有newNums2数字相加
// 3.1 普通实现
// let total = 0
// for (let i of newNums2) {
//   total += i
// }
// 3.2 用高阶函数reduce实现：
// let total = newNums2.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// 3.3 链式调用
// let total = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//   return n * 2
// }).reduce(function (previousValue, n) {
//   return previousValue + n
// })
// 3.4 lambda表达式 =>
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)

console.log(total);