var myPow = function (x, n) {
  function quick(x, n) {
    if (n == 0) return 1;
    if (n % 2 == 0) {
      let res = quick(x, n / 2)
      return res * res
    } else {
      let res = quick(x, (n - 1) / 2);
      return res * res * x
    }
  }
  if (n > 0) {
    return quick(x, n)
  } else {
    return 1 / quick(x, -n)
  }
}

console.log(myPow(2, -1))