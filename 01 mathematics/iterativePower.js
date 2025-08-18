// compute power of a number using iterative method
//ex -> 2^3 = 2*2*2 = 8

function myPow(x,n){
    let result=1;
    while(n>0){
        if ( n%2 !== 0) {
            result=result*x;
        }
        x=x*x;
        n=Math.floor(n/2);
    }
    return result;
}

console.log(myPow(3,4));
