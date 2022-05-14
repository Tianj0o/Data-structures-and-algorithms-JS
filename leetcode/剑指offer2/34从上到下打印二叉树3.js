//即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
var levelOrder = function (root) {
    let res = [];
    res.reverse
    if (root === null) {
        return res
    }
    let queue = [];
    let temp = [];
    queue.push(root)
    let count = 0
    while (queue.length) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            const current = queue.shift();
            temp.push(current.val);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        count++;
        if (count % 2 == 0) {
            temp = temp.reverse()
        }
        res.push(temp)
        temp = []
    }
    return res
};