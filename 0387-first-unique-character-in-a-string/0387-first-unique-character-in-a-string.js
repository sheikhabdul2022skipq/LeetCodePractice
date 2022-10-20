/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    // let res = 0 ;
    // let splitArr = s.split("");
    // let setStr = new Set(s)
    // console.log(setStr)
    for(let i = 0 ;i<s.length;i++){
        if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
                return i ;
            }
    }
    return -1 ;
    // console.log(setStr.size)
};