/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    const left = [];
    const right = [];
    let leftProduct = 1;
    let rightProduct = 1;
    
    for(let i = 0; i < nums.length; i++) {
        left[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    for(let i = nums.length-1; i >= 0; i--) {
        right[i] = rightProduct;
        rightProduct *= nums[i];
    }
    
    for(let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    
    return result;
};