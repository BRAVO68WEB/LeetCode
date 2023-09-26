/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = new Map();

    for(let i = 0; i < nums.length; i++){
        const numToFind = target - nums[i];

        if(numToIndex.has(numToFind)){
            return [numToIndex.get(numToFind), i]
        }

        numToIndex.set(nums[i], i)
    }
};