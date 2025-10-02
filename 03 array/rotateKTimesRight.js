// rotate an array by k times to the right
// ex-> [1,2,3,4,5] => k=2 => [4,5,1,2,3]
// ex-> [1,2,3,4,5,6,7] => k=3 => [5,6,7,1,2,3,4]

// using extra space
function rotateArrayByKTimesRight(arr, k) {
    const n = arr.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = arr[i];
    }

    return result;
}


// without using extra space
function rotateArrayByKTimesRight(arr, k) {
    let n = arr.length;
    k = k % n;
    reverseArray(arr, 0, n-k - 1);
    reverseArray(arr, n-k, n - 1);
    reverseArray(arr, 0, n - 1);
}

function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}


let arr=[1,2,3,4,5];
rotateArrayByKTimesRight(arr,2);
console.log(arr);
