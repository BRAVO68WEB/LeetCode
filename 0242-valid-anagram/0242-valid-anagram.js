/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sSort = s.split('').sort().join('');
    const tSort = t.split('').sort().join('');
    
    if (sSort !== tSort) {
        return false;
    }
    
    return true;
};