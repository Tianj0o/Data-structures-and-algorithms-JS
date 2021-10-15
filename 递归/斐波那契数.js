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

//记忆化优化递归
function fibonacciMemoization(n) {
  let memo = [0, 1]
  let i = 0
  let fib = (n) => {
    if (memo[n] != null) {
      console.log(n)
      return memo[n]
    } else {
      console.log(n)
      return fib(n - 1) + fib(n - 2)
    }
  }
  return fib(n)
}
