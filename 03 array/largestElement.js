// find the largest element index in an array
// ex-> [1,2,20,4,5] => 2
// ex-> [1,2,3,4,5] => 4

function largestElement(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[max] < arr[index]) max = index;
  }

  return max;
}

console.log(largestElement([1, 2, 20, 4, 5]));

