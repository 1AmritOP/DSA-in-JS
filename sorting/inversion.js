// count inversion in an array
// ex-> [2,4,1,3,5] => 3
// ex-> [1,2,3,4,5] => 0
// ex-> [5,4,3,2,1] => 10

//naive solution
function CountInversion(arr) {
  let n = arr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        res++;
      }
    }
  }
  return res;
}

console.log(CountInversion([2, 4, 1, 3, 5],0,4));

//optimal solution

function CountInversion(arr, l, r) {
  let res = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    res += CountInversion(arr, l, m);
    res += CountInversion(arr, m + 1, r);
    res += merge(arr, l, m, r);
  }
  return res;
}

function merge(arr, l, m, r) {
  let n1 = m - l + 1, n2 = r - m;
  let left = new Array(n1), right = new Array(n2);
  for (let i = 0; i < n1; i++) left[i] = arr[l + i];
  for (let j = 0; j < n2; j++) right[j] = arr[m + 1 + j];

  let i = 0, j = 0, k = l, res = 0;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      res += n1 - i; // all remaining in left[] are > right[j-1]
    }
  }
  while (i < n1) arr[k++] = left[i++];
  while (j < n2) arr[k++] = right[j++];
  return res;
}

// function countInversions(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return 0;
//   return CountInversion(arr.slice(), 0, arr.length - 1); // use a copy if you don't want to mutate original
// }



