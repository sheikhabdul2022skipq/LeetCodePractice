/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // cloning the array
    const sorted = nums.slice(0);
    // sorting the cloned array
    sorted.sort((a,b) => a - b);
    
    // start and end pointer
    let start = nums.length-1, end = 0;
    
    // looping to compare the values of nums and sorted nums
    for(let i = 0; i < nums.length; i++){
        // if value of num and sorted num is not equal, we assign the index value to start and end pointer
        if(nums[i]!=sorted[i]){
            start = Math.min(start,i);
            end = Math.max(end,i);
        }
    }
    
    if(end <= start) return 0;
    return end-start+1;
    
    /*
    if (nums.length < 2) return 0;
    let sorted = [...nums].sort((a, b) => a - b);
    let low = 0;
    let high = nums.length - 1;
    let start = null, end = null;
    while (low < high) 
    {
        if (nums[low] == sorted[low]) 
            low++;
        else if (nums[low] != sorted[low]) 
            start = low;
        if (nums[high] == sorted[high]) 
            high--;
        else if (nums[high] != sorted[high]) 
            end = high;
        if (start !== null && end !== null) 
            break;
    }
    if (start === null && end === null) return 0;
    return end - start + 1;
    
    */
};