/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


// 广度遍历
var levelOrder = function (root) {
  let res = [];
  if (root == null) return res;

  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let temp = [];
    let l = queue.length
    for (let i = 0; i < l; i++) {
      let cur = queue.shift();
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right)
      }
      temp.push(cur.val)
    }
    res.push(temp)
  }
  return res
};