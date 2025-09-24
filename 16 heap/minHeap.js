// write a class to implement min heap data structure 
//ex-> [10,6,32,565,34,7] => [6,10,7,34,32,565]

class MinHeap{
    constructor(arr){
        if(arr === undefined)
            this.arr=[];
        this.arr= [...arr];
        let i=Math.floor((this.arr.length -2)/2);
        while (i>=0) {
            this.minHeapify(i);
            i=i-1;
        }
    }
    left(i){
        return 2*i+1;
    }
    right(i){
        return 2*i+2;
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    minHeapify(i){
        let arr=this.arr;
        let lt=this.left(i),rt =this.right(i);
        let smallest=i,n=arr.length;

        if(lt<n && arr[lt]<arr[smallest]){
            smallest=lt;
        }
        if(rt<n && arr[rt]<arr[smallest]){
            smallest=rt;
        }

        if (smallest !== i) {
            [arr[smallest],arr[i]]=[arr[i],arr[smallest]];
            this.minHeapify(smallest);
        }
    }
    extractMin(){
        let n=this.arr.length;
        if (n === 0) return null;

        let res=this.arr[0];
        this.arr[0]=this.arr[n-1];
        this.arr.pop();
        this.minHeapify(0);

        return res;
    }
}

let mh= new MinHeap([3,5,7,10,12,8]);
