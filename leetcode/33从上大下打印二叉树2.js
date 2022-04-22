//从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

// dfs 并且使用获取队列的长度 来遍历每一层的 节点
var levelOrder = function (root) {
  let queue = []
  let res = [];
  if (root === null) {
    return res
  }

  queue.push(root)
  let temp = []
  while (queue.length) {
    const l = queue.length;
    for (let i = 0; i < l; i++) {
      const current = queue.shift();
      temp.push(current.val)
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    res.push(temp);
    temp = [];
  }
  return res
};