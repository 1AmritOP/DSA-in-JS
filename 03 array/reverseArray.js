// reverse an array
// ex-> [1,2,3,4,5] => [5,4,3,2,1]

function reverseArray(arr) {
  let length = arr.length;
  let temp = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    temp[length - 1 - i] = arr[i];
  }
  return temp;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// optimal solution
function reverseArray(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[(length - 1) - i];
    arr[(length - 1) - i] = temp;
  }
  return arr;
}
