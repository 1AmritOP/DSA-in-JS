// find Intersection of two sorted arrays
// ex-> [1,2,3,4,5] and [2,3,4,6,7] => [2,3,4]
// ex-> [1,2,2,4,5] and [2,2,6,7] => [2]

function intersection(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (i > 0 && arr1[i] === arr1[i + 1]) {
      i++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else if (arr1[i] === arr2[j]) {
      console.log(arr1[i]);
      i++;
      j++;
    }
  }
}

intersection([1, 2, 4], [2, 2, 4, 5, 6]);
