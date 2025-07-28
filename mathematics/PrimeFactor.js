// write all prime factor of a number
// ex-> 12 => 2,2,3
// ex-> 10 => 2,5

function isPrime(num){
    if(num === 1) return false;
    if(num === 2 || num == 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i = 5; i * i <= num; i = i + 6){
        if(num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

//naive solution
function primeFactor(n){
    for(i=2 ; i <= n ; i++){
        if(isPrime(i)){
            let x=i;
            while(n%x === 0){
                console.log(i);
                x=x*i;
            }
        }
    }
}

primeFactor(24)

function primeFactor(n){
    if(n <= 1) return;
    for(let i=2 ; i*i <= n ; i++){
        while( n%i === 0){
            console.log(i);
            n=n/i;
        }
        if(n>1) console.log(n);
    }
}

function primeFactor(n){
    if(n<=1) return;
    while(n%2 === 0 ){
        console.log(2);
        n=n/2;
    }
    while(n%3 === 0 ){
        console.log(3);
        n=n/3;
    }
    for(let i=5; i*i <= n; i+6){
        while(n%i === 0){
            console.log(i);
            n=n/i;
        }
        while(n% (i+2) === 0){
            console.log(i+2);
            n= n/(i+2);
        }
    }
    if(n>3)console.log(n);
}