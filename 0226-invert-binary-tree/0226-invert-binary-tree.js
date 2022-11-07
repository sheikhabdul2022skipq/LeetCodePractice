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

var swapNode = function(node)
{
    var temp = node.left 
    node.left = node.right 
    node.right = temp
}
var invertTree = function(root) {
    if(root){
        swapNode(root)
        invertTree(root.left)
        invertTree(root.right)
    }
    return root ;
};
