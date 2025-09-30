// sort the given array in non-decreasing order of square of its elements
// ex-> [-10,-3,-2,1,4,5] => [1,4,9,16,25,100]
// ex-> [-5,-2,5,8] => [4,25,25,64]

function sortSquare(arr) {
  let n = arr.length;
  let ans = new Array(n);
  let i = 0,
    j = n - 1;
  let k = 0;
  while (i <= j) {
    if (Math.abs(arr[i]) > Math.abs(arr[j])) {
      ans[k] = arr[i] * arr[i];
      k++;
      i++;
    }
    else{
      ans[k] = arr[j] * arr[j];
      k++;
      j--;
    }
  }
  ans.reverse();
  return ans;
}

console.log(sortSquare([-10,-3,-2,1,4,5]));
