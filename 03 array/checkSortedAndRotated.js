// check if array is sorted and rotated

function sortedAndRotated(nums) {
    let n=nums.length;
    let drop=0;
    for(let i=0;i<n;i++){
        if(nums[i] > nums[(i+1)%n]) drop++;
    }
    if(drop >1) return false;
    else return true;
};

console.log(sortedAndRotated([5,6,7,2,4]));
