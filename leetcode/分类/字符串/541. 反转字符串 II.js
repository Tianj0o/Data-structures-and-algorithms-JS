/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let start = 0
  const l = s.length;
  s = s.split('');
  while (start < l) {
    let end = start + k;
    let resdis = l - start;
    if (resdis < k) {
      s = reverse(s, start, l - 1)
    } else if (resdis < 2 * k && resdis >= k) {
      s = reverse(s, start, start + k - 1)
    } else {
      s = reverse(s, start, start + k - 1);
    }
    start = start + 2 * k;
  }
  return s.join('')
};

function reverse(s, i, j) {
  let left = i, right = j;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--
  }
  return s;
}

console.log(reverseStr("abcd", 2))