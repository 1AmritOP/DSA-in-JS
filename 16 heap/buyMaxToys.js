// find the maximum number of toys that can be bought with a given budget
// 'arr' is an array of toy prices
// 'n' is the number of toys
// 'k' is the budget
// return the maximum number of toys that can be bought

function toyCount(arr,n,k){
    arr.sort((a,b)=> a-b);
    let sum=0;
    let answer=0;
    for(let i=0;i<n;i++){
        if (sum + arr[i] <= k) {
            sum+=arr[i];
            answer++;
        }
    }
    return answer;
}

console.log(toyCount([10,5,2,45,7],5,25));


// using heap

function toyCount(arr,n,k){
    const heap=new MinHeap(n); //create a heap with capacity n, MinHeap class written in MinHeap.js file
    for(let i=0;i<n;i++){
        heap.insertKey(arr[i]);
    }


    let sum=0;
    let answer=0;

    while (heap.heap_size > 0) {
        let topElement=heap.extractMin();
        if(sum + topElement < k){
            sum+=topElement;
            answer++;
        }
    }
    return answer;
}