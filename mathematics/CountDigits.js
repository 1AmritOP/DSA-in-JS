//count number of digit in a number
// ex-> 1234 => 4
// ex-> 123 => 3

function countDigits(num){
    let digit=0;
    while(num > 0){
        num=Math.floor(num/10);
        digit =digit+1;
    }
    return digit;
}

console.log(countDigits(123));