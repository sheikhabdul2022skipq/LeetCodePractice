/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    
     if(!root)
        return res;
    
    const helperFunction = (node) => {
        let children = node.children;
        for(let i = 0; i< children.length ; i++) {
            helperFunction(children[i]);
        }
        
        res.push(node.val);
    }
    
    helperFunction(root);
    
    return res;
};