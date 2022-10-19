/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0 ;
    let count = 0 ;
    for(let i of nums)
    {
        if(i==1)
            count++;
        else{
            max = Math.max(count, max)
            count = 0 ;
        }
    }
    max = Math.max(count , max)
    return max ;
};