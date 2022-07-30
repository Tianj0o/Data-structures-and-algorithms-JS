/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      s[i] = '%20'
    }
  }
  return s.join('')
};

var replaceSpace = function (s) {
  return s.replaceAll(' ', '%20')
};

console.log(replaceSpace("We are happy."))