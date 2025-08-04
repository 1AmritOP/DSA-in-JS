// left rotate an array by one
// ex-> [1,2,3,4,5] => [2,3,4,5,1]
// ex-> [1,2,3,4,5,6] => [2,3,4,5,6,1]

function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = temp;
    } else {
      arr[i] = arr[i + 1];
    }
  }
  return arr;
}

console.log(leftRotateByOne([1,2,3,4,5]));
