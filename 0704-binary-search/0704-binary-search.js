/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let low = 0 ; 
    let high = nums.length-1
    let mid = parseInt((low + high)/2) ;
    console.log("Mid is "+mid)
    if(target==nums[mid]){
        return mid ;
    }
    while(low<=high){
        console.log(mid)
        if(nums[mid]<target){
            low = mid+1;
        }
        else if(nums[mid]>target){
            
            high = mid-1;
        }
        else{
            return mid ;
        }
        mid= parseInt((low + high)/2)
        
    }
    return -1 ;
};