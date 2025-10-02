// print leader of an array
// ex-> [16,17,4,3,5,2] => 17,5,2
// ex-> [5,10,15,20,35] => 20,35

function printLeader(arr){
    let n=arr.length;
    let currLead=arr[n-1];
    console.log(currLead);
    for(let i=n-2;i>= 0;i--){
        if(arr[i]>currLead){
            currLead=arr[i]
            console.log(currLead);
        }
    }
}

printLeader([16,17,4,3,5,2])