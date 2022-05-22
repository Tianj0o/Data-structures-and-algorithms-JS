var myAtoi = function (s) {
  s = s.trimLeft();
  let flag = false;
  if (s[0] == '-' || s[0] == '+') {
    if (s[0] === '-')
      flag = true;
    s = s.slice(1)
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      res = res * 10 + Number(s[i])
    } else {
      return flag ? res * -1 : res
    }
    if (res > Math.pow(2, 31) - 1) {
      if (flag) {
        return -Math.pow(2, 31)
      }
      return Math.pow(2, 31) - 1
    }
  }
  return flag ? res * -1 : res
};
