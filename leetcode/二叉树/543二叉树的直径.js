/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;
  let ans = 0;
  dfs(root);
  return ans
  function dfs(node) {
    if (node == null) return 0;
    const l = dfs(node.left);
    const r = dfs(node.right);
    ans = Math.max(ans, l + r);
    return Math.max(l, r) + 1
  }
};