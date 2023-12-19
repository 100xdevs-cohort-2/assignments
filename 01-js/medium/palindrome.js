/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleanStr.length <= 1) {
    return true; // Single-character strings or empty strings are palindromes
  }
  const reversedStr = cleanStr.split('').reverse().join(''); //reverse only applied on arrays 
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;

/* 
In JavaScript, == and === are comparison operators used to compare values.

== (Equality Operator): It checks for equality after performing type coercion, meaning it converts the operands to the same type before making the comparison. This can lead to unexpected results due to implicit type conversion. For example, 1 == '1' evaluates to true because JavaScript coerces the string to a number before comparison.

=== (Strict Equality Operator): It checks for equality without performing type coercion. It checks both the value and the type of the operands. It returns true if both the value and the type are the same. For example, 1 === '1' evaluates to false because the type (number and string) is not the same.

In general, it's a good practice to use === (strict equality) as it avoids unexpected behavior caused by type coercion. It explicitly checks for both value and type equality, providing a more predictable comparison. Using === ensures that the types are identical before the comparison is made, leading to more reliable and bug-free code.*/ 
