/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
    let ans = nums[0];
    let maxp = nums[0];
    let minp = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], maxp * nums[i], minp * nums[i]);
        minp = Math.min(nums[i], maxp * nums[i], minp * nums[i]);
        maxp = temp;
        ans = Math.max(maxp, ans);
    }
    
    return ans;
};