// count occurence of distinct element in an array
// ex-> ["a","b","c","a","b","a"] => {"a":3,"b":2,"c":1}

function countDistinct(arr) {
    let obj={};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]]=1;
        } else {
            obj[arr[i]]+=1;
        }
    }
    return obj;
}

console.log(countDistinct(["a", "b", "c", "a", "b", "a"]));

const arr = ["a", "b", "c", "a", "b", "a"];

const result = arr.reduce(
  (acc, cur) =>
    cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
  {}
);

console.log("result : ",result);

