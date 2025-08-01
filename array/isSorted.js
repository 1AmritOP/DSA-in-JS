// check given array is sorted or not
// ex-> [1,2,3,4,5] => true
// ex-> [1,20,3,10,5] => false

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([1,20,3,42,5]));

