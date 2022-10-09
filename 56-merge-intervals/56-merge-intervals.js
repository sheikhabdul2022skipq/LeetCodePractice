/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const results = [intervals[0]]
    
    for (let i = 0; i < intervals.length; i++) {
        const index = results.length - 1
        // console.log(index)
        let [start, end] = intervals[i]//arr and then arr[0] would be our start pointer and arr[1] would be our end 
        const last = results[index][1]
        if (start <= last) {
            results[index][1] = Math.max(end, last)
        } 
        else 
        {
            results.push([start, end])
        }
    }
    
    return results
    
    /*
    
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    let result = [];

    while (i < intervals.length) {
        if (i < intervals.length - 1) {
            if ((intervals[i + 1][0] <= intervals[i][0]) || (intervals[i + 1][0] <= intervals[i][1])) {
                intervals[i][0] = Math.min(intervals[i][0], intervals[i + 1][0]);
                intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
                intervals.splice(i + 1, 1);
                i--;
            } 
            else {
                result.push(intervals[i]);
            }
        }
        else {
            result.push(intervals[i])
        }
        i++;
    }
    return result;
    
    */
    
};