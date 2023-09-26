/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    const seen = new Set();
    let res = 0;
   
    let biggestStr = ""

    for (let r = 0; r < s.length; r++) {
        const currentChar = s[r];
        while (seen.has(currentChar)) {
            seen.delete(s[l]);
            l++;
        }
        seen.add(currentChar);
        if (r - l + 1 > res) {
            res = r - l + 1;
            biggestStr = s.slice(l, r + 1)
        }
    }

    return res
};