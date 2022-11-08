/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let obj = {}
    for(let i = 0 ; i <cpdomains.length;i++){
        let arr = cpdomains[i].split(" ")
        
        let count = parseInt(arr[0])
        let domains =  arr[1].split(".")
        // console.log(domains)
        
        let index = 0 ;
        
        for(let j = 0 ; j <domains.length ; j++){
            if(j>0){
                index = index + (domains[j-1].length+1)
            }
            let s = arr[1].substr(index)
            if(s in obj){
                obj[s]+=count
            }
            else{
                obj[s]= count
            }
        }
    }
    let res = []
    for(let i in obj){
        let element = parseInt(obj[i]) + " " + i
        console.log(element)
        res.push(element)
    }
    return res 
};