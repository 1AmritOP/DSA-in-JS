// implement heap sort

function heapSort(arr,n){
  arr = buildHeap(arr,n);

  for(let i= n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    arr=maxHeapify(arr,i,0);
  }
  return arr;
}

function buildHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) arr = maxHeapify(arr, n, i);
  return arr;
}

function maxHeapify(arr, n, i) {
  let rt = 2 * i + 1;
  let lt = 2 * i + 2;
  let max = i;

  if (rt < n && arr[rt] > arr[max]) max = rt;
  if (lt < n && arr[lt] > arr[max]) max = lt;

  if (max !== i) {
    [arr[max], arr[i]] = [arr[i], arr[max]];
    maxHeapify(arr, n, max);
  }
  return arr;
}

