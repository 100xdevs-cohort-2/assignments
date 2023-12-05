/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	let arr1 = str1.replace(/\s/g, "").toLowerCase().split("");
	let arr2 = str2.replace(/\s/g, "").toLowerCase().split("");

	arr1.sort();
	arr2.sort();

	str1 = arr1.join("");
	str2 = arr2.join("");

	return str1 === str2;
}

module.exports = isAnagram;
