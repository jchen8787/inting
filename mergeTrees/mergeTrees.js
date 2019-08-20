function TreeNode(val) {
    this.val = val
    this.right = this.left = null
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) {
        return null
    }

    const res = new TreeNode((t1 && t1.val) + (t2 && t2.val))
    res.left = mergeTrees(t1 && t1.left, t2 && t2.left)
    res.right = mergeTrees(t1 && t1.right, t2 && t2.right)

    return res
}

const t1 = new TreeNode(1)
t1.left = new TreeNode(3)
t1.right = new TreeNode(2)
t1.left.left = new TreeNode(5)

const t2 = new TreeNode(2)
t2.left = new TreeNode(1)
t2.right = new TreeNode(3)
t2.left.right = new TreeNode(4)
t2.right.right = new TreeNode(7)

function bfs(t) {
    const res = []
    const q = []
    q.push(t)

    while (q.length > 0) {
        const cur = q.shift()
        res.push(cur.val)

        cur.left !== null && q.push(cur.left)
        cur.right !== null && q.push(cur.right)
    }

    return res
}

const res = mergeTrees(t1, t2)
console.log(res)
console.log(bfs(res))
