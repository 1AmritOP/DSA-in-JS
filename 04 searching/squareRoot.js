// find square root of a number if number is not perfect square then return floor of square root
// ex-> 9 => 3
// ex-> 20 => 4
// ex -> 8 => 2

//naive solution
function squareRoot(num) {
  let result = 1;
  while (result * result <= num) {
    result++;
  }
  return result - 1;
}

console.log(squareRoot(25));

//optimal solution
function squareRoot(n) {
  let low = 1;
  let high = n;
  let result;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid*mid === n) {
        return mid;
    } else if(mid*mid > n) {
        high=mid-1;
    }else{
        result=mid;
        low=mid+1;
    }
  }
  return result;
}
