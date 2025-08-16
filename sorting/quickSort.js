// implement quick sort using Lomuto partition scheme
// ex-> [5,2,4,1,3] => [1,2,3,4,5]

function quickSort(arr, l, h) {
  if (l < h) {
    let p = lomutoPartition(arr, l, h);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, h);
  }
}

function lomutoPartition(arr, l, h) {
  // for random pivot
  // let r =Math.floor(Math.random() * (h - l + 1)) + l;
  // [arr[r],arr[h]]=[arr[h],arr[r]];
    
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1],arr[h]]=[arr[h],arr[i+1]];
  return i+1;
}

let arr=[2, 6, 3, 5, 4];
quickSort(arr, 0, 4)
console.log(arr);
