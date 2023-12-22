/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const s = str.replace(/[^\w]/g, "").trim(" ").toLowerCase();

  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    const char1 = s.charAt(p1);
    const char2 = s.charAt(p2);
    if (char1 !== char2) return false;
    p1++;
    p2--;
  }

  return true;
}
isPalindrome("Able, was I ere I saw Elba!");

module.exports = isPalindrome;
