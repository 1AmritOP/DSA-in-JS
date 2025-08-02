// move all zeros of an array to the end of the array
// ex-> [1,2,3,0,0,0,6] => [1,2,3,6,0,0,0]
// ex-> [4,0,0,5] => [4,5,0,0]


//naive solution
function moveZeroToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
          arr[i] = arr[j];
          arr[j] = 0;
          break;
        }
      }
    }
  }

  return arr;
}

console.log(moveZeroToEnd([3, 5,0, 0, 1,0]));

// optimal solution

function moveZeroToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp=arr[count];
      arr[count] = arr[i];
      arr[i] = temp;
      count++;
    }
  }
  return arr;
}
