/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Designing the solution:
  - Understood the problem.
  - Basically if the two inputs are not the same length, then it is not an anagram. We can return false in this case.
  - If they are the same length, then we can sort them and compare them.
  - after sorting if they are same, then it is an anagram.

  Challenges faced & Learnings:
   - For strings we can find the length using str.length built in Fn
   - For strings we can convert them to lowercase using str.toLowerCase().
   - Strings can be converted into arrays using str.split().
   - In JavaScript, the == is the equality operator, which compares the values of  two operands and returns true if they are equal. However, it performs type coercion, so it can convert the operands to the same type before making the comparison.

    On the other hand, the === is the strict equality operator, which also compares the values of two operands, but it does not perform type coercion. It returns true only if the operands are of the same type and have the same value.

  For example:
    0 == '0' would return true because the values are equal after type coercion.
    0 === '0' would return false because the operands are of different types.

  - We can not directly compare two arrays, instead we should convert them back to strings using str.join('') before comparing them.
*/

function isAnagram(str1, str2) {
    // Check if the lengths of the two input strings are the same
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Convert the input strings into lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    // Convert the input strings into sorted arrays of characters
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
  
    // Compare the sorted arrays directly
    return arr1.join('') === arr2.join('');
}

function isAnagramOptimized(str1, str2) {
  const normalizeString = str =>
    str.toLowerCase().split('').sort().join('');

  if (str1.length !== str2.length) {
    return false;
  }

  return normalizeString(str1) === normalizeString(str2);
}

module.exports = isAnagram, isAnagramOptimized;
