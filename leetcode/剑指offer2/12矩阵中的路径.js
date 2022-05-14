// const exist = (board, word) => {
//   const dfs = (i, j, k) => {
//     if (i < 0 || j < 0 || i >= m || j >= n || word[k] !== board[i][j])
//       return false;

//     if (k === word.length - 1)
//       return true;

//     board[i][j] = ''

//     const res = dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j - 1, k + 1)
//     board[i][j] = word[k]
//     return res
//   }

//   const m = board.length
//   const n = board[0].length
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (dfs(i, j, 0)) return true
//     }
//   }
//   return false
// }

// console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB"))



