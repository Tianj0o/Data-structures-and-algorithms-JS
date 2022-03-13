//迭代方法
function fibonacci1(n) {
  if (n == 0) {
    return 0
  } else if (n <= 2) {
    return 1
  }
  let first = 1, second = 1, fib;
  for (let i = 2; i < n; i++) {
    fib = first + second
    first = second
    second = fib
  }
  return fib
}


//递归方法
function fibonacci2(n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2)
  }
}
let memo
//记忆化优化递归
function fibonacciMemoization(n) {
  memo = [0, 1]
  let fib = (n) => {
    if (memo[n] != null) {
      // console.log(n)
      return memo[n]
    } else {
      // console.log(n)
      return memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    }
  }
  return fib(n)
}

console.log(fibonacciMemoization(4))
console.log(memo)
