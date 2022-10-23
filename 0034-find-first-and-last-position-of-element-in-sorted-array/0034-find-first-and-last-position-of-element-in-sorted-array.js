/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target, l = 0, r = nums.length - 1, ans = -1) {
	
    const find = (l, h, findLower) => {
		let ans = -1;
		while (l <= h) {
			const mid = Math.floor((l + h) / 2);
			if (target < nums[mid]) 
                h = mid - 1;
			else if (target > nums[mid]) 
                l = mid + 1;
			else {
				ans = mid;
				if (findLower) h = mid - 1;
				else l = mid + 1;
			}
		}
		return ans;
	};
	const lowerBound = find(0, nums.length - 1, true);
	if (lowerBound == -1) return [-1, -1];
	return [lowerBound, find(lowerBound, nums.length - 1, false)];
    
    
    
    
    
    /*
    if (nums[l] == target && nums[r] == target) return [l, r];
	if (l >= r) return [ans, ans];
	const mid = Math.floor((l + r) / 2);
	if (nums[mid] > target)
		return searchRange(nums, target, l, mid - 1, ans);
	else if (nums[mid] < target)
		return searchRange(nums, target, mid + 1, r, ans);
	else
		return [
			searchRange(nums, target, l, mid - 1, mid)[0],
			searchRange(nums, target, mid + 1, r, mid)[1],
		];
    */
};