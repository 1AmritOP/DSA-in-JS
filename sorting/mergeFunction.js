// write code of merge function of merge sort algorithm

function merge(arr, low, mid, high) {
  let n1 = mid - low + 1,
    n2 = high - mid;
  let left = [];
  let right = [];

  for (let i = 0; i < n1; i++) {
    left.push(arr[low + i]);
  }
  for (let i = 0; i < n2; i++) {
    right.push(arr[mid + 1 + i]);
  }

  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    }
    if (right[j] < left[i]) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return arr;
}

console.log(merge([1, 20, 30, 14, 25], 0, 2, 4));