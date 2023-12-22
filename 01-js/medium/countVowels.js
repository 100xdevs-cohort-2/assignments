/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        let currentElement = str[i];
        if(currentElement === "a" || currentElement === "e" || currentElement === "i" || currentElement === "o" || currentElement === "u" || currentElement === "A" || currentElement === "E" || currentElement === "I" || currentElement === "O" || currentElement === "U") {
            counter++
        }
    }
    return counter;
}

console.log(countVowels("Hello, world!"))

module.exports = countVowels;