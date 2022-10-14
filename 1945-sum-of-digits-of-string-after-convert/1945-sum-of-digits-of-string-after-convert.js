/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
    let tot = 0 ;
    
    for(let i =0 ; i<s.length;i++){
        let temp = s.charCodeAt(i) - 96 ;
        // let div = temp/10 ;
//         let rem = temp%10 ;
        tot+= Math.floor(temp/10) + temp %10;
    }
    // console.log(Number(tot));
    
    for(let i=1 ; i<k;i++){
        
        let str = tot.toString();
        tot = 0 ;
        for(let j=0 ; j<str.length;j++){
            tot+=Number(str[j])
        }
    }
    return tot ;
    
};