/*
Write a function that checks if a 
given string (case insensitive) is a palindrome.
*/
// solution 
function isPalindrome(x) {
    let first = (x.substring(0, (x.length / 2).toFixed(0)).toLowerCase().trim())
    let last = (x.substring(x.length / 2, x.length).split("").reverse().join("").toLowerCase().trim())
    return first === last;
}
console.log(isPalindrome(""))