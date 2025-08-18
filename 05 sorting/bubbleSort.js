// implement bubble sort
// ex-> [5,2,4,1,3] => [1,2,3,4,5]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  return arr;
}

console.log(bubbleSort([5, 2, 4, 1, 3]));
