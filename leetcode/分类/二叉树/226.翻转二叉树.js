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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  if (root) {
    rev(root)
  }
  return root
};

function rev(node) {
  if (node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    rev(node.left);
    rev(node.right)
  }
}
