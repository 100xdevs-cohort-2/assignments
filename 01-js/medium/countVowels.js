/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	// Your code here
	str = str.replace(/[^\w]/g, "").toLowerCase();
	let a = 0;
	for (let x of str) {
		if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") a += 1;
	}

	return a;
}

module.exports = countVowels;
