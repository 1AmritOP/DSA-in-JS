// find gcd of two numbers
// ex-> 10 and 15 => 5
// ex-> 10 and 20 => 10

//using loop
function gcd(a,b){
    let res=Math.min(a,b);
    while(res > 0){
        if ( (a % res === 0) & (b % res === 0) ) return res;
        res --;
    }
}

console.log(gcd(15,57));


//using recursion
function gcdUsingRecursion(a,b){
    if(b === 0) return a;
    return gcdUsingRecursion(b, a % b);
}
console.log(gcdUsingRecursion(15,25))

//again using loop

function gcdUsingLoop(a,b){
    while(b != 0){
        [a,b]=[b,a % b];
    }
    return a;
}

console.log(gcdUsingLoop(10,16));