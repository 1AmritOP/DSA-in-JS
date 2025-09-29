// find the missing number in an array
// ex-> [3,0,1] => 2
// ex-> [0,1] => 2
// ex-> [9,6,4,2,3,5,7,0,1] => 8

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    let n=nums.length;
    let arr=new Array(n+1).fill(-1);

    
    for(let i=0;i<n;i++){
        arr[nums[i]]=nums[i];
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===-1) return i;
    }
};

console.log(missingNumber([3,0,1]));