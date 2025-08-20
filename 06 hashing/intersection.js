// find out element that are present in both the arrays
// ex-> [1,2,3,4,5] and [2,3,4,6,7] => [2,3,4]

let a = [10, 2, 3, 25, 90];
let b = [12, 5, 7, 2, 80, 10];

let sizeA = a.length;
let sizeB = b.length;

for (let i = 0; i < sizeA; i++) {
  let flag = false;
  for (let j = 0; j < sizeB; j++) {
    if ((a[i] === b[j])) {
      flag = true;
    }
  }
  if (flag) console.log(a[i]);
}


function intersection(a,b){
    let h={};
    for(let i=0;i<a.length;i++){
        h[a[i]]=1;
    }

    for(let i=0;i<b.length;i++){
        if(h[b[i]] === 1 ){
            console.log(b[i]);
        }
    }
}

intersection(a,b)