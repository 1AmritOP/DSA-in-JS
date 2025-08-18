// count occurrence of an element in an array
// ex-> [1,2,2,2,6] => 2 => 3
// ex-> [1,2,3,4,4] => 4 => 2

//naive solution
function countOccur(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;
}

console.log(countOccur([1,2,2,4,6],2));


function countOccur(arr,x){
    const fi=indexofFirstOccur(arr,x);
    if (fi === -1) return 0;
    else return (IndexOfLastOccur(arr,x) - fi + 1)
    
}


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