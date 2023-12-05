function isPalindrome(str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str = str.replace(/\s/g, "").toLowerCase();

    // Check if the string is the same when reversed
    return str === str.split("").reverse().join("");
}

// Example usage:
const result1 = isPalindrome("Nan");
console.log(result1); // Output: true

const result2 = isPalindrome("Hello");
console.log(result2); // Output: false
