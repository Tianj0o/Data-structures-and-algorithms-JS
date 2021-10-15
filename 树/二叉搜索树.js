
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
    this.compareFn = defaultFn
  }
  //插入一个键
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  //中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  //先序遍历
  preOrderTraverse(node, callback) {
    if (node != null) {
      callback(node)
      this.preOrderTraverse(node.left, callback)
      this.preOrderTraverse(node.right, callback)
    }
  }
  //后序遍历
  postOrderTraverse(node, callback) {
    if (node != null) {
      this.postOrderTraverse(node.left, callback)
      this.postOrderTraverse(node.right, callback)
      callback(node)
    }
  }
  //搜索最小值
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    while (node != null && node.left != null) {
      node = node.left
    }
    return node
  }
  //搜索最大值
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    while (node != null && node.right != null) {
      node = node.right
    }
    return node
  }
  //搜索一个特定的值
  search(key) {
    return this.searchNode(key, this.root)
  }
  searchNode(key, node) {
    if (node == null) {
      return false
    } else {
      if (this.compareFn(key, node.key) === -1) {
        return this.searchNode(key, node.left)
      } else {
        if (key === node.key) {
          return true
        } else {
          return this.searchNode(key, node.right)
        }
      }
    }
  }
  remove(key) {
    this.root = this.removeNode(key, this.root)
  }
  removeNode(key, node) {
    if (node == null) {
      return null
    } else if (this.compareFn(key, node.key) === -1) {
      node.left = this.removeNode(key, node.left)
      return node
    } else if (node.key === key) {
      //当是叶子节点时
      if (node.left == null && node.right == null) {
        node = null
        return node
      } else if (node.left != null && node.right != null) {
        //当有两个子节点
        let minNode = this.minNode(node.right)
        console.log('minnode', minNode)
        node.key = minNode.key
        node.right = this.removeNode(node.key, node.right)
        return node
      } else {
        //当有一个子节点
        if (node.left == null) {
          node = node.right
          return node
        } else if (node.right == null) {
          node = node.left
          return node
        }
      }
    } else {
      node.right = this.removeNode(key, node.right)
      return node
    }
  }
}

// const tree = new BinarySearchTree()
// tree.insert(11)
// tree.insert(7);
// tree.insert(11);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// function mid(node) {
//   console.log(node.key)
// }
// tree.remove(3)
// tree.remove(5)
// tree.remove(9)
// tree.remove(11)
// tree.remove(11)

// tree.inOrderTraverse(mid)

// tree.preOrderTraverse(tree.root, mid)
// tree.postOrderTraverse(tree.root, mid)
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.search(100));
// console.log(tree.search(8));
// console.log(tree.search(6));
// console.log(tree.search(11));


function defaultFn(a, b) {
  if (a < b) {
    return -1
  } else {
    return 1
  }
}


module.exports = {
  Node,
  BinarySearchTree
}