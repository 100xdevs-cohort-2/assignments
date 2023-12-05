/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0
  let end = str.length - 1

  let punctuation = new Set([
    " ",
    ",",
    ".",
    "!",
    "?",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
  ])

  while (start < end) {
    if (punctuation.has(str[start])) {
      start++
      continue
    }
    if (punctuation.has(str[end])) {
      end--
      continue
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) return false
    start++
    end--
  }
  return true
}

module.exports = isPalindrome
