// implement insertion sort
// ex-> [5,2,4,1,3] => [1,2,3,4,5]
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key=arr[i];
        let j=i-1;
        while(j>= 0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=key;
        console.log(arr);
        
    }
    return arr;
}

console.log(insertionSort([5,2,4,1,3,0]));
