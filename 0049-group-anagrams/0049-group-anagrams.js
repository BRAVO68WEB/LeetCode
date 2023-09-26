/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const freqMap = new Map();
    const result = [];
    
    for(let str of strs) {
        const sortedStr = str.split('').sort().join('');
        freqMap.set(sortedStr, (freqMap.get(sortedStr) || []).concat(str));
    }
    
    for(let [sortedStr, anagrams] of freqMap) {
        result.push([...anagrams]);
    }
    
    return result;
};