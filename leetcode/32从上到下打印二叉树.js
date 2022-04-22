// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印

// dfs 遍历
var levelOrder = function (root) {
  let log = []
  if (root === null)
    return log
  let queue = []
  queue.push(root)
  while (queue.length) {
    const current = queue.shift()
    log.push(current.val)
    if (current.left) queue.push(current.left)

    if (current.right) queue.push(current.right)
  }
  return log
};