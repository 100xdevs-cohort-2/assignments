/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let map = new Map([
    ['a',1], ['e',1], ['o',1], ['i',1], ['u',1], ['A',1], ['E',1], ['I',1], ['O',1], ['U',1]
  ]);
  // map.set('a',1);
  // map.set('e',1);
  // map.set('i',1);
  // map.set('o',1);
  // map.set('u',1);
  // map.set('A',1);
  // map.set('E',1);
  // map.set('I',1);
  // map.set('O',1);
  // map.set('U',1);
  let count = 0;
  for(let i = 0; i <= str.length-1; i++){
    if(map.has(str[i])){
      count++;
    }
  }
  return count;
}

module.exports = countVowels;