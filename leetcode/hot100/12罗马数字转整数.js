/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  let map = {
    'M': 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }
  for (let i = 0; i < s.length;) {
    let t = s[i] + s[i + 1];
    if (map[t]) {
      res += map[t]
      i += 2;
      continue;
    }
    res += map[s[i]]
    i++
  }
  return res
};

romanToInt("MCMXCIV")