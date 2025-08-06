// find the index of last occurrence of an element in sorted array
// ex-> [1,2,2,2,5] => 2 => 3
// ex-> [1,2,3,4,4] => 4 => 4


function IndexOfLastOccur(arr,x) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
        if(mid === (arr.length -1) || arr[mid+1] !== x)return mid;
        else low=mid+1;
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

console.log(IndexOfLastOccur([1,2,2,2,6],2));
