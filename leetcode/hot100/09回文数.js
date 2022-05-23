/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  x = x.toString();

  let left = 0, right = x.length - 1;

  while (left < right) {
    if (x[left++] !== x[right--]) {
      return false
    }
  }
  return true
};

var isPalindrome2 = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;

  let cur = 0;
  while (cur < x) {
    cur = cur * 10 + x % 10;
    x = Math.floor(x / 10)
  }
  return x === cur || x === Math.floor(cur / 10)
}