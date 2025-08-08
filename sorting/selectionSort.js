// implement selection sort
// ex-> [5,2,4,1,3] => [1,2,3,4,5]
function selectionSort(arr) {
    let n=arr.length;
    for(let i=0;i< n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++ ){
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]];
    }
    return arr;
}

console.log(selectionSort([3,4,1,2,0,9]));
