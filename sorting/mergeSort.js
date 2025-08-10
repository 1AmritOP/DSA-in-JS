// implement merge sort
// ex-> [5,2,4,1,3] => [1,2,3,4,5]

function mergeSort(arr,l,r){
    if(l<r){
        let m=Math.floor((l+r)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}

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
}


let arr=[5,2,4,1,3],l=0,r=4;

mergeSort(arr,l,r);

console.log("sorted array : ",arr);

