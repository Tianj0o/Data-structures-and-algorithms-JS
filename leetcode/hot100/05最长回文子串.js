//给你一个字符串 s，找到 s 中最长的回文子串。
/**
 * @param {string} s
 * @return {string}
 */



// 纯暴力遍历
var longestPalindrome = function (s) {
  const l = s.length;
  let maxStr = s[0];
  if (l === 1) return s;
  if (l === 2) {
    if (s[0] === s[1]) {
      return s
    } else {
      return s[0]
    }
  }
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      const str = s.slice(i, j + 1)
      console.log(str)
      if (isPalindrmoe(str)) {
        str.length > maxStr.length ? maxStr = str : ''
      }
    }
  }
  console.log(maxStr);
  return maxStr
};

// longestPalindrome("abcda")

function isPalindrmoe(str) {
  const l = str.length
  for (let i = 0; i < (str.length / 2); i++) {
    if (str[i] !== str[l - 1 - i]) {
      return false
    }
  }
  return true
}

// 中心扩散法
var longestPalindrome2 = function (s) {
  let maxStr = '';
  const l = s.length;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && s[left] === cur) {
      left--
    }
    while (right < l && s[right] === cur) {
      right++
    }
    while (s[left] === s[right] && s[left] != undefined && s[right] !== undefined) {
      left--;
      right++;
    }
    let curStr = s.slice(left + 1, right)
    maxStr = curStr.length > maxStr.length ? curStr : maxStr;
  }
  console.log(maxStr)
  return maxStr
}
longestPalindrome2('acbca')
