// implementing hashing using chaining

class Myhash {
  constructor(b) {
    this.Bucket = b;
    this.table = [];
    for (let i = 0; i < b; i++) {
      this.table[i] = [];
    }
  }

  insert(x) {
    let i = x % this.Bucket;
    this.table[i].push(x);
  }

  search(x) {
    let i = x % this.Bucket;
    for (let j = 0; j < this.table[i].length; j++) {
      if (this.table[i][j] === x) return true;
    }
    return false;
  }

  remove(x) {
    let i = x % this.Bucket;
    if (this.table[i].indexOf(x) === -1) return;

    this.table[i].splice(this.table[i].indexOf(x), 1);
  }
  show(){
    console.log(this.table);
  }
}


let mh=new Myhash(7);
mh.insert(24);
mh.insert(10);
mh.insert(20);
mh.insert(15);
mh.insert(12);
mh.insert(2)

console.log(mh.search(10));

mh.remove(15);
console.log(mh.search(15));

mh.show()