// write a recursive function to find the sum of natural numbers from 1 to n
// ex-> 5 => 1+2+3+4+5 = 15
// ex -> 10 => 1+2+3+4+5+6+7+8+9+10 = 55


function naturalSum(n){
    if(n === 1){
        return 1;
    }
    return n + naturalSum(n-1);
}

console.log(naturalSum(10));
