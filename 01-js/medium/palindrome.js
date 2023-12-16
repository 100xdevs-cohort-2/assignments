/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	str = str.replace(/\s+/g, "").replace(/[^a-zA-Z0-9\s]/g, "");
	str = str.toLowerCase();
	let newStr = "";
	for (let x of str) {
		newStr = x + newStr;
	}
	return newStr === str;
}
module.exports = isPalindrome;
