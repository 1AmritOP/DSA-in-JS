//calculate factorial of a number
//ex-> 5! = 5*4*3*2*1 = 120

function factorial(num){
    let result=1;
    for (let i = 2; i <= num; i++) {
        result=result*i;
    }
    return result;
}

console.log(factorial(5));
