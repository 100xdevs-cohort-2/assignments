/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const isVowel = (letter) => {
      const lowerCased = letter.toLowerCase();
      return lowerCased === 'a' || lowerCased === 'e' || lowerCased === 'i' || lowerCased === 'o' || lowerCased === 'u'
    }
    let vowelCount = 0;
    for(const char of str){
      if(isVowel(char))vowelCount++;
    }
    return vowelCount;
}

module.exports = countVowels;