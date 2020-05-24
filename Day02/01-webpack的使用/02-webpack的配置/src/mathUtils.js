function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// commonJS的打包方式
module.exports = {
  add,
  mul
}

// ES6的打包方式
// export {
//   add,
//   mul
// }