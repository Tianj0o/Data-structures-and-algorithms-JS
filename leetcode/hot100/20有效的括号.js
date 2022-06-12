/**
 * @param {string} s
 * @return {boolean}
 */

const left = ['{', '[', '('];
const right = ['}', ']', ')']
var isValid = function (s) {
  let res = [];

  for (let key of s) {
    res.push(key);
    if (res.length >= 2 && compare(res[res.length - 2], res[res.length - 1])) {
      res.pop()
      res.pop()
    }
  }
  if (res.length === 0) return true;
  return false
};
function compare(i, j) {
  let leftI = left.findIndex(item => item == i);
  let rightI = right.findIndex(item => item == j)
  return leftI === rightI && leftI !== -1
}
