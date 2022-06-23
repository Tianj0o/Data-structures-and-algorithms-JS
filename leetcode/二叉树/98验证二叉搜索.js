/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER;
  return resc(root)
  function resc(node) {
    if (node == null) return true;
    if (resc(node.left) === false) return false;
    if (node.val <= pre) return false;
    pre = node.val
    return resc(node.right)
  }
};