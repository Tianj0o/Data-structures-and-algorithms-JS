/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map1 = new Map();

  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const temp = nums1[i] + nums2[j];
      map1.has(temp) ? map1.set(temp, map1.get(temp) + 1) : map1.set(temp, 1)
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const temp = (nums3[i] + nums4[j]) * (-1);
      if (map1.has(temp)) count += map1.get(temp)
    }
  }
  return count
}

console.log(fourSumCount([-1, 1, 1, 1, -1], [0, -1, -1, 0, 1], [-1, -1, 1, -1, -1], [0, 1, 0, -1, -1]))