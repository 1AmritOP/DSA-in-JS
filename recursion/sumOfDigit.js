// find sum of all digit in a number using recursion
// ex-> 1234 => 1+2+3+4 = 10
// ex-> 123 => 1+2+3 = 6
// ex-> 12 => 1+2 = 3

function sumOfDigits(n){
    if( n < 10) return n;       
    // if(n === 0) return 0;
    return (n%10) + sumOfDigits(Math.floor(n/10))
}

console.log(sumOfDigits(523));
