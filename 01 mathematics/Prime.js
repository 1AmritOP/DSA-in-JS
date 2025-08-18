// check number is prime or not
//ex -> 5 =>  true
//ex -> 6 =>  false


function isPrime(num){
    if (num === 1) {
        return false;
    }
    for(let i = 2; i < num; i++){
        if ( (num % i) === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));

// Better Solution
function isPrime(num){
    if(num === 0) return false;
    for(let i =2;i * i <= num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(70));


// even more better solution
function isPrime(num){
    if(num === 1) return false;
    if(num === 2 || num == 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i = 5; i * i <= num; i = i + 6){
        if(num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}