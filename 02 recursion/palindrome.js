// check string is palindrome or not using recursion
// ex-> madam => true
// ex-> madan => false

function isPalindrome(s,start,end){
    if(start >= end ) return true;
    return ( s[start] === s[end] && isPalindrome(s, (start+1) ,(end-1) ) )
}

console.log(isPalindrome("madam",0,4));
