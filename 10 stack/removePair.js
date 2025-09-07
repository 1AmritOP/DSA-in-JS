// You are given string s.
// You need to remove the consecutive duplicates from the given string using a Stack.

function removePair(s) {
  let stack = [];
  for (let ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}
