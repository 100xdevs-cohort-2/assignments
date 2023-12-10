/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Lower case
    str = str.toLowerCase();

    // Spaces
    str = str.split(" ").join('')

    // Punctuation marks
    str = str.split('').filter(char => {
        const charCode = char.charCodeAt(0);
        return (charCode >= 48 && charCode <= 57) || // Numbers
               (charCode >= 65 && charCode <= 90) || // Uppercase letters
               (charCode >= 97 && charCode <= 122);  // Lowercase letters
    }).join('');

    len = str.length;
    for(let i=0;i<len/2;i++){
        if(str[i] != str[len-i-1]) return false;
    }
    return true;
}

module.exports = isPalindrome;
