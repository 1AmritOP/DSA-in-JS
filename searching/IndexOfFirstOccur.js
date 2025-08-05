// find the index of first occurrence of an element in sorted array
// ex-> [1,2,2,4,5] => 2 => 1
// ex-> [1,2,3,4,4] => 4 => 3

function indexofFirstOccur(arr, x) {
    let res=binarySearch(arr,x);
    if(res === -1) return res;
    else{
        for(let i=res;i>=0;i--){            
            if(arr[i] !== arr[i-1]) return i;
        }
    }
    
  function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        low = mid + 1;
      } else if (arr[mid] > x) {
        high = mid - 1;
      }
    }
    return -1;
  }
}

console.log(indexofFirstOccur([4,4,4,4,4],4));


//optimal solution

function indexofFirstOccur(arr,x) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
        if(mid === 0 || arr[mid-1] !== x)return mid;
        else high=mid-1;
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