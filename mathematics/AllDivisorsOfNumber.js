// print all divisors of a number
// ex-> 12 => 1,2,3,4,6,12
// ex-> 10 => 1,2,5,10


//naive solution
function allDivisors(n){
    for(let i=1;i<=n;i++){
        if(n%i === 0) console.log(i);
    }
}

allDivisors(15)

function allDivisors(n){
    for(let i=0; i*i <= n ;i++){
        if (n % i === 0) {
            console.log(i);
            if(n/i != i) console.log(n/i);
        }
    }
}

function allDivisors(n){
    let i;
    for(i=1; i*i < n;i++){
        if(n%i === 0) console.log(i);
    }
    for(;i>=1;i--){
        if(n%i === 0) console.log(n/i);
    }
}