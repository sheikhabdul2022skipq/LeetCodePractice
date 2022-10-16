/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
      let result=[];//help us in returning the number 
      let i=1;
      let j=0;
      while (result.length<=k) {
        if (i===arr[j]) {
          i++;
          j++;
        } else {
          result.push(i);
          i++;
        };
      };
      return result[k-1];
};