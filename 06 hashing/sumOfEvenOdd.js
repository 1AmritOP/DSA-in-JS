// calculate sum of even and odd element in an array
// ex-> [1,2,3,4,5,6] => {even: 12, odd: 9}
// ex-> [1,2,3,4,5] => {even: 6, odd: 9}

function sumOfEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
  return { even, odd };
}


const arr = [1, 2, 3, 4, 5, 6];

console.log(sumOfEvenOdd(arr));


const result = arr.reduce(
  (acc, cur) =>
    cur % 2 === 0
      ? { ...acc, ["even"]: acc["even"] + cur }
      : { ...acc, ["odd"]: acc["odd"] + cur },
  { even: 0, odd: 0 }
);

console.log(result);
