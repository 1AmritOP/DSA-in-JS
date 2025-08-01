// find the second largest element in an array
// ex-> [10,2,20,4,5] => 10
// ex-> [1,20,3,4,25] => 20

function secondLargeElem(arr) {
  let firstMax = -1;
  let secondMax = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    }
    if (arr[i] > secondMax && arr[i] < firstMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(secondLargeElem([1, 20, 5, 25, 6]));
