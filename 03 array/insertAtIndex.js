// insert an element at a given index in an array
// ex-> [1,2,3,4,5] => 6 at index 5 => [1,2,3,4,5,6]
// ex-> [1,2,3,4,5] => 6 at index 2 => [1,2,6,3,4,5]

function insertAtIndex(arr, element, index) {
  arr.push(0);

  for (let i = arr.length - 2; i >= index; i--) {
    arr[i+1]=arr[i];
  }
  arr[index]=element;
  return arr;
}

console.log(insertAtIndex([1, 2, 3], 9, 1));
