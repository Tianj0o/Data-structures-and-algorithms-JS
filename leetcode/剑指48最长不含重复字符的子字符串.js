//请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度

// 方法 滑动窗口
var lengthOfLongestSubstring = function (s) {
  let res = '';
  let maxl = res.length;
  for (let i = 0; i < s.length; i++) {
    let index = res.indexOf(s[i])
    if (index != -1) {
      res = res.slice(index + 1)
    }
    res += s[i]
    maxl = Math.max(res.length, maxl)
  }
  return maxl
};