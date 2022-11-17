/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let obj = {} 
    s=s.split(' ')
    
   
    
    console.log([...new Set(s)])
    if(([...new Set(pattern.split(""))]).length != ([...new Set(s)]).length )
        return false
    for(let i = 0 ; i<pattern.length ; i++){
        obj[pattern[i]] = s[i]
    }
     for(let i = 0 ; i<s.length ; i++){
         if(s[i]!=obj[pattern[i]])
             return false
             
     }
    return true ;
};