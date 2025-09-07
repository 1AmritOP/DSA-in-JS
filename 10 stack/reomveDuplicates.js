// You are given string s.
// You need to remove the consecutive duplicates from the given string using a Stack.

function removeDuplicates(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
console.log(removeDuplicates("abbaca"));

//2nd approach
function removeConsecutiveDuplicates(s) {
  // your code here
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let x = s[i];

    if (stack.length === 0) stack.push(x);
    else if (stack[stack.length - 1] !== x) stack.push(x);
  }
  return stack.join("");
}

console.log(removeConsecutiveDuplicates("abbaca"));

//3rd approach
function removeConsecutiveDuplicates(s) {
  if (s.length === 0) return "";

  let result = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      result += s[i];
    }
  }
  return result;
}

console.log(removeConsecutiveDuplicates("abbacaaaa"));
