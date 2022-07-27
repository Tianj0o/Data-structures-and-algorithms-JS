/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map1 = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    map1.has(ransomNote[i]) ? map1.set(ransomNote[i], map1.get(ransomNote[i]) + 1) : map1.set(ransomNote[i], 1);
  };
  let map2 = new Map()
  for (let i = 0; i < magazine.length; i++) {
    map2.has(magazine[i]) ? map2.set(magazine[i], map2.get(magazine[i]) + 1) : map2.set(magazine[i], 1);
  };

  for (let [key, value] of map1) {
    if (map2.has(key)) {
      const v = map2.get(key);
      if (v < value) return false
    } else {
      return false
    }
  }
  return true
};