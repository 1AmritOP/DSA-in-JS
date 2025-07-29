// print numbers from 1 to n using recursion
// ex-> 5 => 1,2,3,4,5


function print1N(n){
    if(n===0)return;

    print1N(n-1);
    console.log(n);
}

print1N(10);
