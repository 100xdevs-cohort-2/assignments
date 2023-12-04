/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	let tempS1 = str1.toLowerCase();
	let tempS2 = str2.toLowerCase();
	for (let i = 0; i < str1.length; i++) {
		let isPresent = isCharPresent(tempS2, tempS1[i]);
		if (isPresent === -1) {
			return false;
		}
	}

	return true;
}

function isCharPresent(str2, ch) {
	for (let i = 0; i < str2.length; i++) {
		if (ch === str2[i]) {
			return 1;
		}
	}

	return -1;
}

module.exports = isAnagram;
