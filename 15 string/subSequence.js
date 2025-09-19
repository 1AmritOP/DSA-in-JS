// Given a string S, the task is to check if the string target is a subsequence of string S or not

function subSquence(str, subStr) {
  let i = 0,
    j = 0;
  while (i < str.length && j < subStr.length) {
    if (str[i] === subStr[j]) {
      j++;
    }
    i++;
  }
  return j === subStr.length;
}

console.log(subSquence("manish", "h"));
