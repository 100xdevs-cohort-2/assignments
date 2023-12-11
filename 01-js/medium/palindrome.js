/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(input) {
    let str = input.replace(/[^a-zA-Z]/g, "")
    for(let i = 0; i < str.length/2; i++) {
        let j = str.length - 1 - i;
        if(str[i].toLowerCase() != str[j].toLowerCase()) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
