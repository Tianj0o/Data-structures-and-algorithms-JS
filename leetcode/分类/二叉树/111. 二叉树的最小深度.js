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
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0;
  let minL = -1;
  if (root.left == null && root.right == null) {
    return 1
  }
  dfs(root, 0)
  function dfs(node, l) {
    if (node.left == null && node.right == null) {
      if (minL == -1) minL = l
      else minL = minL > l ? l : minL;
    }
    if (node.left) {
      dfs(node.left, l + 1)
    }
    if (node.right) {
      dfs(node.right, l + 1)
    }
  }
  return minL + 1
};


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
 * @return {number}
 */
var minDepth2 = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  if (root.left && root.right == null) {
    return minDepth(root.left) + 1
  }
  if (root.right && root.left == null) {
    return minDepth(root.right) + 1
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1

};

