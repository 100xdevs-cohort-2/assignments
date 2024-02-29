function countVowels(str) {
  // Use a regular expression to match all vowels (case-insensitive)
  const vowelRegex = /[aeiou]/gi;

  // Use match() to find all matches of the regex in the string
  const matches = str.match(vowelRegex);

  // If matches is null (no vowels found), return 0; otherwise, return the count
  return matches ? matches.length : 0;
}

module.exports = countVowels;
