/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().split(' ').reverse();
  const res = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '') {
      res.push(s[i])
    }
  }
  return res.join(' ')
};