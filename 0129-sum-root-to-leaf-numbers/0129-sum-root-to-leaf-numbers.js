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
var sumNumbers = function(root) {
    
    function dfs(node, n) {
        if (!node) 
            return 0;
        n = 10 * n + node.val;
        if (!node.left && !node.right) 
            return n;
        return dfs(node.left, n) + dfs(node.right, n);
    }
    return dfs(root, 0);
};