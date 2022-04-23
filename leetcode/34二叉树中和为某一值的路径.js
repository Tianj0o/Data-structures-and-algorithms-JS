
// dfs 并且将每一次的 target传进去 当一个节点左右都访问给就可以弹出这个值

var pathSum = function (root, target) {
  let currentArray = [];
  let res = [];
  function dfs(node, target) {
    if (node == null) return
    target -= node.val
    currentArray.push(node.val)

    if (target == 0 && node.left == null && node.right == null) {
      res.push([...currentArray])
    } else {
      dfs(node.left, target)
      dfs(node.right, target)
    }
    currentArray.pop()
  }
  dfs(root, target)
  return res
};