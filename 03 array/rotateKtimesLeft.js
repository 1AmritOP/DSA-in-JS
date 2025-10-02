// left rotate an array by k times

function rotateArrayByKTimesLeft(arr, k) {
  let n = arr.length;
  k = k % n;

  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, n - 1);
  reverseArray(arr, 0, n - 1);
}

function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

let arr = [1, 2, 3, 4, 5];
rotateArrayByKTimesLeft(arr, 2);
console.log(arr);
