var hammingWeight = function (n) {
  // 1
  // return n.toString(2).split('').filter(x=>x!=0).length

  // 使用位运算
  let ret = 0;

  // for (let i = 0; i < 32; i++) {
  //   if ((n & (1 << i)) !== 0) {
  //     ret++
  //   }
  // }
  let j = 0;
  // while (n !== 0) {
  //   n = n & (n - 1);
  //   ret++
  // }
  while (n !== 0) {
    ret += n & 1;
    n = n >> 1;
    j++
  }
  console.log(j, 'h')
  return ret
}
console.log(hammingWeight(00000000000000000000000000001011))