// Merge two sorted arrays into one sorted array
// ex-> arr1=[1,20,35,40] arr2=[16,8,9,10] => [1,8,9,10,16,20,35,40]

//naive solution
function mergeSortedArray(arr1, arr2) {
  let res = [];
  res = [...arr1, ...arr2];
  res.sort((a, b) => a - b);
  return res;
}


console.log(mergeSortedArray([1, 20, 35, 40], [8, 9, 10]));


//optimal solution
function mergeSortedArray(arr1, arr2) {
  let lenArr1 = arr1.length;
  let lenArr2 = arr2.length;
  arr1.push(9999);
  arr2.push(9999);
  let totalLen = lenArr1 + lenArr2;

  let res = [];

  let i = 0,
    j = 0;

  for (let k = 0; k < totalLen; k++) {
    if (arr1[i] <= arr2[j]) {
      res[k] = arr1[i];
      i++;
    } else if (arr2[j] < arr1[i]) {
      res[k] = arr2[j];
      j++;
    }
    console.log(res);
  }

  return res;
}


// optimal solution

function mergeSortedArray(arr1, arr2){
    let res = [];
    let len1=arr1.length;
    let len2=arr2.length;

    let i=0,j=0;
    
    while(i<len1 && j<len2){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<len1){
        res.push(arr1[i]);
        i++;
    }
    while(j<len2){
        res.push(arr2[j]);
        j++;
    }
    return res;
}