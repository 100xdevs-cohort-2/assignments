/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // Convert the input string to lowercase to handle uppercase vowels as well
    const lowerStr = str.toLowerCase();
    
    // Initialize a count to keep track of vowels
    let vowelCount = 0;

    // Iterate through each character in the string
    for (const char of lowerStr) {
        // Check if the character is a vowel (a, e, i, o, or u)
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

module.exports = countVowels;