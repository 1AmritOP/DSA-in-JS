// find leftmost non repeat character in a string
// ex-> abcded => a
// ex-> abcd => $

function leftmostNonRepeatChar(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return str[i];
        }
    }
    return "$";
}

console.log(leftmostNonRepeatChar("amritkumar"));
