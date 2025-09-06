// check if given string is balanced or not
// ex-> (()) => true
// ex-> (() => false
// ex-> ()() => true
// ex-> [({})] => true
// ex-> ([]{)} => false

function isBalanced(str) {
  let s = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x == "(" || x == "{" || x == "[") {
      s.push(x);
    } else {
      if (s.length === 0) return false;
      else if (!matching(s[s.length - 1], x)) return false;
      else s.pop();
    }
  }
  return s.length === 0;
}

function matching(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "[" && b === "]") ||
    (a === "{" && b === "}")
  );
}

console.log(isBalanced("({})"));
