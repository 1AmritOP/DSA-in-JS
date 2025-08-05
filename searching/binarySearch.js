// implement binary search
// ex-> [1,2,3,4,5,6,7,8,9,10] => 5 => 4


//using iteration
function binarySearch(arr,x) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
        return mid;
    }
    else if(arr[mid] < x){
        low=mid+1;
    }
    else if(arr[mid] > x){
        high=mid-1;
    }
  }
  return -1;
}


console.log(binarySearch([1,2,3,4],2,0,3));

// using recursion
function binarySearch(arr,x,low,high){
    if(low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === x) return mid;
    else if(arr[mid] < x) return binarySearch(arr,x,mid+1,high);
    else if(arr[mid] > x) return binarySearch(arr,x,low,mid-1);
}
