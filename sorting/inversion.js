// count inversion in an array
// ex-> [2,4,1,3,5] => 3
// ex-> [1,2,3,4,5] => 0
// ex-> [5,4,3,2,1] => 10


//naive solution
function CountInversion(arr){
    let n=arr.length;
    let res=0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if(arr[i]>arr[j]){
                res++
            }
        }
    }
    return res;
}

console.log(CountInversion([2,4,1,3,5]));