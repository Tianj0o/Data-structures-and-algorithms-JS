/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let s = x.toString();
  let flag = ''
  if (s[0] == '-') {
    flag = s[0]
    s = s.slice(1)
  }
  s = flag + s.split("").reverse().join("");

  while (s[0] === '0') {
    s = s.slice(1);
  }
  if (Number(s) > Math.pow(2, 31) - 1 || Number(s) < -Math.pow(2, 31)) {
    return 0
  }
  return s
};



var reverse2 = function (x) {
  let res = 0;
  let flag = false;
  if (x < 0) {
    flag = true;
    x = -x;
  }
  while (x != 0) {
    let temp = x % 10;
    res = res * 10 + temp;

    if (res > Math.pow(2, 31) - 1) {
      return 0
    }

    x = Math.floor(x / 10)
  }
  if (flag) {
    res = -res
  }
  return res
}
