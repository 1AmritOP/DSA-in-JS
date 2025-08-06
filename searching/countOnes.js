// count the number of 1's in sorted array
// ex-> [0,0,0,1,1,1,1,1] => 5


function countOnes(arr){
    if(arr[arr.length -1] === 0 ) return 0;
    else return arr.length - indexofFirstOccur(arr,1);
}

console.log(countOnes([0,0,0,1,1,1,1]));


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