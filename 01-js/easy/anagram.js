/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	const map1 = new Map();
	const map2 = new Map();
	for (let i = 0; i < str1.length; i++) {
		const prev = map1.get(str1[i].toLowerCase()) ?? 0;
		map1.set(str1[i].toLowerCase(), prev + 1);
	}
	for (let i = 0; i < str2.length; i++) {
		const prev = map2.get(str2[i].toLowerCase()) ?? 0;
		map2.set(str2[i].toLowerCase(), prev + 1);
	}
	for (const [key, value] of map1) {
		if (map2.get(key) !== value) return false;
	}
	return true;
}

module.exports = isAnagram;
