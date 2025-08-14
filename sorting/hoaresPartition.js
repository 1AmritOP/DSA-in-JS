// use hoares partition scheme for quicksort

/**
 * Hoare partition scheme.
 * @param {array} arr - Array to be partitioned.
 * @param {number} l - Lower bound of the array.
 * @param {number} h - Upper bound of the array.
 * @returns {number} - Index of the pivot element.
 */

function hoaresPartition(arr, l, h) {
  let pivot = arr[l];
  let i = l - 1,
    j = h + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do{
        j--;
    }while(arr[j]>pivot);
    if(i>j) return j;
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }

  // while(i<j){
  //     do{
  //         i++;
  //     }while(arr[i]<pivot);
  //     do{
  //         j--;
  //     }while(arr[j]>pivot);
  //     if(i<j){
  //         [arr[i],arr[j]]=[arr[j],arr[i]];
  //     }
  // }
  // [arr[l],arr[j]]=[arr[j],arr[l]];
  // return j;
}


let a=[5,2,4,1,3,6,7]

let idx=hoaresPartition(a,0,a.length-1)

console.log(a,idx);