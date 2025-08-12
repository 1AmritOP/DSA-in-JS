// Partition the given array around a element index
// ex-> arr=[5,2,4,1,3] =>4 => [2,1,"3",5,4]
// ex-> arr=[1,9,5,7,2,4] => 2 => [1,2,4,"5",7,9]

function partition(arr, p) {
  let n = arr.length;
  [arr[p], arr[n - 1]] = [arr[n - 1], arr[p]];

  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] <= arr[n - 1]) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[n - 1]) {
      temp.push(arr[i]);
    }
  }

  for(let i=0;i<n;i++) arr[i]=temp[i];
}

let a=[7,2,4,1,3,6,5]
partition(a,4)

console.log(a);
