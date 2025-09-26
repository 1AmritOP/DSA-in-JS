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
    decreaseKey(i,x){
        let arr=this.arr;
        arr[i]=x;
        while (i>0 && arr[this.parent(i)] > arr[i]) {
            let p=this.parent(i);
            [arr[p],arr[i]]=[arr[i],arr[p]];
            i=this.parent(i);
        }
    }
    deleteKey(i){
        let arr=this.arr;
        if(i>=arr.length) return;
        this.decreaseKey(i,arr[0]-1);
        this.extractMin();
    }
}

// MinHeap class without using dynamic array
class MinHeap {
    constructor(cap) {
        this.heap_size = 0;
        this.capacity = cap;
        this.harr = new Array(cap);
    }

    parent(i) { return Math.floor((i - 1) / 2); }

    left(i) { return (2 * i + 1); }

    right(i) { return (2 * i + 2); }

    /**
     * Extracts the minimum element (root) from the heap
     * @return {number}
     */
    extractMin() {
        if (this.heap_size <= 0) return Number.POSITIVE_INFINITY; // empty heap
        if (this.heap_size === 1) {
            this.heap_size--;
            return this.harr[0];
        }

        // Store the minimum value, and remove it from heap
        let root = this.harr[0];
        this.harr[0] = this.harr[this.heap_size - 1];
        this.heap_size--;
        this.MinHeapify(0);

        return root;
    }

    /**
     * Inserts a new key 'k' into the heap
     * @param {number} k
     */
    insertKey(k) {
        if (this.heap_size === this.capacity) {
            console.log("Overflow: Could not insertKey");
            return;
        }

        // First insert the new key at the end
        let i = this.heap_size;
        this.harr[i] = k;
        this.heap_size++;

        // Fix the min heap property if it is violated
        while (i !== 0 && this.harr[this.parent(i)] > this.harr[i]) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[this.parent(i)];
            this.harr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    /**
     * Deletes key at index i
     * @param {number} i
     */
    deleteKey(i) {
        if (i < 0 || i >= this.heap_size) {
            console.log("Invalid index");
            return;
        }

        // Decrease the value to -∞, then extract min
        this.decreaseKey(i, Number.NEGATIVE_INFINITY);
        this.extractMin();
    }

    // Decrease key operation, helps in deleting the element
    decreaseKey(i, new_val) {
        this.harr[i] = new_val;
        while (i !== 0 && this.harr[this.parent(i)] > this.harr[i]) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[this.parent(i)];
            this.harr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    MinHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);
        let smallest = i;
        if (l < this.heap_size && this.harr[l] < this.harr[i]) smallest = l;
        if (r < this.heap_size && this.harr[r] < this.harr[smallest]) smallest = r;
        if (smallest != i) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[smallest];
            this.harr[smallest] = temp;
            this.MinHeapify(smallest);
        }
    }
}

let mh= new MinHeap([3,5,7,10,12,8]);
