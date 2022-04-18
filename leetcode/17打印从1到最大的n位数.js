/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999
 */


var printNumbers = function (n) {
  // let arr = [];
  // for (let i = 1; i < 10 ** n; i++) {
  //   arr.push(i)
  // }
  // return arr
  let res = [];
  // 外层控制位数 内层控制首位
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      dfs(j.toString(), i)
    }
  }
  function dfs(str, len) {
    if (str.length === len) {
      res.push(str)
      return
    }
    for (let i = 0; i <= 9; i++) {
      str += i
      dfs(str, len)
      str = str.slice(0, -1)
    }
  }
  return res
};

console.log(printNumbers(3))