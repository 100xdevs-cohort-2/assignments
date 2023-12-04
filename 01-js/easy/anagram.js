/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	if (str1.length !== str2.length) return false;
	let obj1 = {};
	let obj2 = {};

	for (let x of str1) {
		if (!obj1[x]) {
			obj1[x] = 0;
		}
		obj1[x] += 1;
	}
	for (let x of str2) {
		if (!obj2[x]) {
			obj2[x] = 0;
		}
		obj2[x] += 1;
	}
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	for (let x in obj1) {
		if (obj1[x] !== obj2[x]) return false;
	}
	return true;
}

module.exports = isAnagram;
