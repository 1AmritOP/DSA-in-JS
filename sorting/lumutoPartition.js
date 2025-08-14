// Use Lomuto partition scheme for quicksort

/**
 * Lomuto partition scheme.
 * @param {array} arr - Array to be partitioned.
 * @param {number} l - Lower bound of the array.
 * @param {number} h - Upper bound of the array.
 * @returns {number} - Index of the pivot element.
 */
function lumutoPartition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if(arr[j]<pivot){
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }
  [arr[i+1],arr[h]]=[arr[h],arr[i+1]];
  return i+1;
}


let a=[7,2,4,1,3,6,5]

let idx=lumutoPartition(a,0,a.length-1)

console.log(a,idx);
