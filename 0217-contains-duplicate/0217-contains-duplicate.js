/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let modMap = nums.reduce((acc, cur) => {
        return acc.set(cur, cur)
    }, new Map())
    return !(Array.from(modMap.keys()).length === nums.length) 
};