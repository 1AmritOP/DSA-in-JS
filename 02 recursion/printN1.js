// print numbers from n to 1 using recursion
// ex-> 5 => 5,4,3,2,1

function printN1(n){
    if(n === 0) return;
    // --- alterantive base case ---
    // if (n === 1) {
    //     console.log(1);
    //     return;
    // }
    console.log(n);
    printN1(n-1)
}

printN1(10)

