// find leftmost repeat character in a string

function leftmostRepeatChar(str) {
  let count = new Array(256).fill(0);

  for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i)]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str.charCodeAt(i)] > 1) return i;
  }
  return -1;
}

console.log(leftmostRepeatChar("amritkumar"));

function leftmostRepeatChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 1) return str[i];
  }
  return -1;
}

function leftmostRepeatChar(str) {
  let arr = new Array(256).fill(false);
  let res = -1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (arr[str.charCodeAt(i)] === false) {
      arr[str.charCodeAt(i)] = true;
    } else {
      res = str[i];
    }
  }
  return res;
}
