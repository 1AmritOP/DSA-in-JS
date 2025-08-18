// check number is palindrome or not
//ex -> 121 =>  true
//ex -> 123 =>  false
//ex -> 14541 =>  true

function palindrome(num){
    let rev=0,temp=num;
    while (temp !== 0) {
        ld=temp%10;
        rev=rev*10+ld;
        temp=Math.floor(temp/10);
    }
    return num === rev
}

console.log(palindrome(125));
