var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] === undefined ? 1 : map[s[i]] + 1;
  }
  for (let key in map) {
    if (map[key] === 1) {
      return key
    }
  }
  return ' '
};