const { Node, BinarySearchTree } = require('./二叉搜索树')
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};
class AVLTree extends BinarySearchTree {
  constructor() {
    super()
  }
  getNodeHeight(node) {
    if (node == null) {
      return -1
    } else {
      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }
  }
  getBalanceFactor(node) {
    const height = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (height) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  //向右旋转
  rotationLL(node) {
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }
  //向左旋转
  rotationRR(node) {
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }
  //先把左边向左转再右转
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }
  //先把右边向右转再左转
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }
  insert(key) {
    this.root = this.insertNode(key, this.root)
  }
  insertNode(key, node) {
    if (node == null) {
      const newNode = new Node(key)
      return newNode
    } else if (this.compareFn(key, node.key) === -1) {
      node.left = this.insertNode(key, node.left)
    } else {
      node.right = this.insertNode(key, node.right)
    }

    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === -1) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node); // {5} 
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // {6} 
      if (
        this.compareFn(key, node.right.key) === 1
      ) { // {7} 
        node = this.rotationRR(node); // {8} 
      } else {
        return this.rotationRL(node); // {9} 
      }
    }
    return node;
  }

}

const aTree = new AVLTree()
aTree.insert(1)
aTree.insert(2)
aTree.insert(3)
aTree.insert(4)
aTree.insert(5)
// aTree.insert(50)
// aTree.insert(30)
// aTree.insert(70)
// aTree.insert(10)
// aTree.insert(40)
// aTree.insert(35)
// aTree.inOrderTraverseNode(aTree.root, function (node) {
//   console.log(node.key)
// })
console.log(aTree.getNodeHeight(aTree.root))
console.log(aTree.root)
console.log(aTree.getNodeHeight(aTree.root.left))
console.log(aTree.getNodeHeight(aTree.root.right))



