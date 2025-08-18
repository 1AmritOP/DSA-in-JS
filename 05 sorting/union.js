// find union of two "unsorted" arrays
// ex-> [1,2,2,4,5] and [2,2,6,7] => [1,2,4,5,6,7] => 6

function union(arr1,arr2){
    let res= new Set(arr1);
    for(let i=0;i<arr2.length;i++){
        res.add(arr2[i]);
    }
    return res.size;
}

console.log(union([1,2,2,4,5],[2,2,6,7]));
