// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
// ex-> x=2, n=3 => 8
// ex-> x=2, n=-2 => 1/4 => 0.25

//logic
// if n is even : x^n = (x^2)^(n/2)
// if n is odd : x^n = x * x^(n-1) => x * (x^2)^((n-1)/2)

function myPow(x, n) {
    // Base case for the recursion
    if (n === 0) {
        return 1;
    }

    // Handle negative exponents
    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    // If n is even, use the formula x^n = (x^2)^(n/2)
    if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    } 
    // If n is odd, use the formula x^n = x * x^(n-1)
    else {
        return x * myPow(x * x, (n - 1) / 2);
    }
};

console.log(myPow(4,4));
