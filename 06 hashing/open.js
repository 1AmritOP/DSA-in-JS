// implement hashing using open addressing

class MyhashOpen {
  constructor(c) {
    this.capacity = c;
    this.size = 0;
    this.arr = new Array(c).fill(-1);
  }

  search(x) {
    let h = x % this.capacity;
    let i = h;
    while (this.arr[i] !== -1) {
      if (this.arr[i] === x) {
        return true;
      }
      i = (i + 1) % this.capacity;
      if (i === h) return false;
    }
    return false;
  }
  insert(x) {
    if (this.size === this.capacity) return false;
    let i = x % this.capacity;
    while (this.arr[i] !== -1 && this.arr[i] !== -2 && this.arr[i] !== x) {
      i = (i + 1) % this.capacity;
    }
    if (this.arr[i] === x) {
      return false;
    } else {
      this.arr[i] = x;
      this.size++;
      return true;
    }
  }

  remove(x) {
    let h = x % this.capacity;
    let i = h;
    while (this.arr[i] !== -1) {
      if (this.arr[i] === x) {
        this.arr[i] = -2;
        return true;
      }
      i = (i + 1) % this.capacity;
      if(i === h) return false;
    }
    return false;
  }
}

let ak = new MyhashOpen(7);

ak.insert(3);
ak.insert(4);
ak.insert(21);
ak.insert(56);

console.log(ak.search(56));

ak.remove(56)

console.log(ak.search(56));
