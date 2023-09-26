/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    const numsArr = [...nums].sort((a,b) => a-b);
    let count = 0;
    let temp = 1;
    for (let i = 0; i < numsArr.length - 1; i++) {
        if (numsArr[i] === numsArr[i + 1] - 1) {
            temp++;
            count = Math.max(count, temp);
        } else if (numsArr[i] === numsArr[i + 1]) {
            count = Math.max(count, temp);
        } else {
            temp = 1;
            count = Math.max(count, temp);
        }
    }
    return count
};
