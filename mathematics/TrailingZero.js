// find number of trailing zeros in a factorial
// ex -> 5! => 5*4*3*2*1 => 120 => 2 zeros
// ex -> 10! => 10*9*8*7*6*5*4*3*2*1 => 3628800 => 2 zeros

function trailingZeros(num){
    let res=0;
    for(let i=5;i<= num; i=i*5){
        res =res + Math.floor(num / i);
    }
    return res;
} 

console.log(trailsZero(60));