/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0] 
    let windowSum = nums[0] 
    
    for(let i=1 ; i <nums.length;i++){
        windowSum = Math.max(nums[i], windowSum + nums[i]);
        max = Math.max(max, windowSum);
    }
    return max ; 
};