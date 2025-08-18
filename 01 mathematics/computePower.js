// compute power of a number
//ex -> 2^3 = 2*2*2 = 8

//simple solution

// function myPow(x,n){
//     let result=1;
//     for(let i=0; i < n ; i++){
//         result=result*x;
//     }
//     return result;
// }

// console.log(myPow(2,5));
function myPow(x,n){
    if(n === 0) return 1;
    else if(n=== 1) return x;
    else{
        if(n%2 === 0) return myPow(x,n/2) * myPow(x,n/2);
        else return myPow(x,n-1)* x;
    }
}

console.log(myPow(3,4));