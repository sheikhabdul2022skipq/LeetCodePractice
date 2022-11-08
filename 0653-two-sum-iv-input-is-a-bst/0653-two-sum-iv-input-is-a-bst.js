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
 * @param {number} k
 * @return {boolean}
 */




var findTarget = function(root, k) {
    let res = []
    let obj = new Map() ;
    
    function inOrder(root){
    if(!root){
        return;
    }
    inOrder(root.left)
    res.push(root.val)
    inOrder(root.right)
}
    inOrder(root)
    
    function calTwoSum(res){
        for(let i = 0 ; i <res.length;i++){
            let target = k-res[i]
            if(obj.has(target)){
                return true
            }
            obj.set(res[i])
        }
        return false;
    }
    return calTwoSum(res)
};