// prefix sum of an array
// ex-> [2,1,4,5] => [2,3,7,12]

function prefixSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }
  return arr;
}
function prefixSum(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
}

console.log(prefixSum([2,1,4,5]));