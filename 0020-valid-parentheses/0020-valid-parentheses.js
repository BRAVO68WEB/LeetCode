/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(const element of s){
        if(element in map){
            stack.push(element)
        } else {
            let last = stack.pop()
            if(element != map[last]) return false
        }
    }

    return stack.length == 0
};
