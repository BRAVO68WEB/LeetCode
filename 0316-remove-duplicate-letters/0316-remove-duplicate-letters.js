var removeDuplicateLetters = (s) => {
    const stack = [];
    const seen = new Set();
    const lastOccurrence = new Map();

    for (let i = 0; i < s.length; i++) {
        lastOccurrence.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!seen.has(char)) {
            while (
                stack.length > 0 &&
                char < stack[stack.length - 1] &&
                i < lastOccurrence.get(stack[stack.length - 1])
            ) {
                seen.delete(stack.pop());
            }
            seen.add(char);
            stack.push(char);
        }
    }

    return stack.join('');
};