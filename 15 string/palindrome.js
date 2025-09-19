// checke given string is palindrome or not
// ex-> madam => true
// ex-> madan => false

function isPalindrome(str) {
    let start=0;
    let end=str.length-1;

    while(start<end){
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("madam"));
