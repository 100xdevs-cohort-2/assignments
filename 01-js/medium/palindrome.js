/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Return true if str is empty
    if (str === '') return true;

    // Convert the input string to lowercase
    const lowerStr = str.toLowerCase();
    
    // Remove non-alphanumeric characters and spaces from the string
    const cleanStr = lowerStr.replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reverse
    return cleanStr === reversedStr;
}

module.exports = isPalindrome;
