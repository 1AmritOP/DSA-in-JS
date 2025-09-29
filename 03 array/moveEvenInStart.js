// move even number in start of array

function moveEvenInStart(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            [arr[j],arr[i]]=[arr[i],arr[j]];
            j++;
        }
    }
}
let arr=[1,2,3,4,5,6,7];
moveEvenInStart(arr);
console.log(arr);