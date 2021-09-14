/**
 * Time: 2021/7/5.
 * Author: Yang PengFei
 */
const tree = [
    {
        id: '1',
        title: '节点1',
        children: [
            {
                id: '1-1',
                title: '节点1-1'
            },
            {
                id: '1-2',
                title: '节点1-2'
            }
        ]
    },
    {
        id: '2',
        title: '节点2',
        children: [
            {
                id: '2-1',
                title: '节点2-1'
            }
        ]
    }
]

// 广度优先
// function treeForeach (tree, func) {
//     let node, list = [...tree]
//     while (node = list.shift()) {
//         func(node)
//         node.children && list.push(...node.children)
//     }
// }
// treeForeach(tree, node => { console.log(node.title) })

// // 深度优先 循环 先序遍历
// function treeForeach (tree, func) {
//     let node, list = [...tree]
//     while (node = list.shift()) {
//         func(node)
//         node.children && list.unshift(...node.children)
//     }
// }
// function treeForeach (tree, func) {
//     let node, list = [...tree], i =  0
//     while (node = list[i]) {
//         let childCount = node.children ? node.children.length : 0
//         if (!childCount || node.children[childCount - 1] === list[i - 1]) {
//             func(node)
//             i++
//         } else {
//             list.splice(i, 0, ...node.children)
//         }
//     }
// }
// 层序遍历
function levelOrder(root) {
    const ret = [];
    if (!root) { return ret; }
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
}




console.log(levelOrder([3,9,20,null,null,15,7]),99)