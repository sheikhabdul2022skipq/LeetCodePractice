/**
 * @param {string[]} words
 * @return {string[]}
 */


var findWords = function(words) {
    let res = []
    for(let i = 0 ; i < words.length ;i++ ){
        word = words[i].toLowerCase()
        let len = word.length;
        let first =0 
        let sec = 0
        let third = 0 
        for(let j = 0 ;j<len;j++){
            if("qwertyuiop".includes(word[j])){
                first++;
            }
            if("asdfghjkl".includes(word[j])){
                sec++
            }
            if("zxcvbnm".includes(word[j])){
                third++
            }
           
        }
         if(first === len || sec === len || third===len)
         {
                res.push(words[i])
        }
    }
    return res
   
};