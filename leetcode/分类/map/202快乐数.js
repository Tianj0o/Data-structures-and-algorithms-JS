/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n == 1) return true
  let map = {};
  let cur = n;
  while (true) {

    let res = getResult(cur);
    if (map[res]) return false;
    map[res] = true;
    if (res === 1) return true;
    cur = res;
  }

};
function getResult(n) {
  let res = 0;
  while (n != 0) {
    let cur = n % 10;
    n = parseInt(n / 10);
    res += cur ** 2;
  }
  return res
}