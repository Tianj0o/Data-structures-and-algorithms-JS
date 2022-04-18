/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix === null) return [];
  if (matrix.length === 0 || matrix[0].length === 0) return []
  let t = 0, l = 0, r = matrix[0].length - 1, b = matrix.length - 1;
  const res = [];
  while (t <= b && l <= r) {
    //left -> rifgt
    for (let i = l; i <= r; i++) {
      res.push(matrix[t][i])
    }
    t++;
    if (t > b) break;
    // top -> bottom
    for (let i = t; i <= b; i++) {
      res.push(matrix[i][r])
    }
    r--;
    if (r < l) break
    // right -> left
    for (let i = r; i >= l; i--) {
      res.push(matrix[b][i])
    }
    b--;
    if (b < t) break
    // bottom -> top
    for (let i = b; i >= t; i--) {
      res.push(matrix[i][l])
    }
    l++;
    if (l > r) break
  }
  return res
};