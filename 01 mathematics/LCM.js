// find LCM of two numbers
// ex-> 10 and 15 => 30
// ex-> 10 and 20 => 20

function LCM(a,b){
    let high=Math.max(a,b)
    let min=Math.min(a,b)
    for(let i=1; i<= min; i++){
        // console.log(( (high * i)) % min === 0);
        if ( ( (high * i) % min ) === 0 ) {
            return (high*i)
        }
    }
}

console.log(LCM(10,25));

// better solution
function gcdUsingRecursion(a,b){
    if(b === 0) return a;
    return gcdUsingRecursion(b, a % b);
}

function myLCM(a,b){
    return (a*b)/gcdUsingRecursion(a,b);
}

console.log(myLCM(10,25));
