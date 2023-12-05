const isPalindrome = require('../medium/palindrome');

describe('isPalindrome', () => {
	test('returns true for palindromes', () => {
		expect(isPalindrome('level')).toBe(true);
		expect(isPalindrome('racecar')).toBe(true);
	});

	test('returns false for non-palindromes', () => {
		expect(isPalindrome('hello')).toBe(false);
		expect(isPalindrome('openai')).toBe(false);
		expect(isPalindrome('abcde')).toBe(false);
	});

	test('returns true for an empty string', () => {
		expect(isPalindrome('')).toBe(true);
	});

	test('handles case-insensitivity correctly', () => {
		expect(isPalindrome('Anna')).toBe(true);
		expect(isPalindrome('aNnA')).toBe(true);
		expect(isPalindrome('Madam')).toBe(true);
		expect(isPalindrome('MaDaM')).toBe(true);
		expect(isPalindrome('RaCeCaR')).toBe(true);
		expect(isPalindrome('rAcEcAr')).toBe(true);
	});

	test('returns true for single-character strings', () => {
		expect(isPalindrome('a')).toBe(true);
		expect(isPalindrome('z')).toBe(true);
		expect(isPalindrome('5')).toBe(true);
		expect(isPalindrome('@')).toBe(true);
	});

	test('returns true for strings with spaces', () => {
		expect(isPalindrome('race car')).toBe(true);
		expect(
			isPalindrome('A man a plan a canal Panama')
		).toBe(true);
		expect(
			isPalindrome('Was it a car or a cat I saw')
		).toBe(true);
	});

	test('returns true for strings with punctuation marks', () => {
		expect(
			isPalindrome('Able, was I ere I saw Elba!')
		).toBe(true);
		expect(
			isPalindrome('Eva, can I see bees in a cave?')
		).toBe(true);
		expect(isPalindrome('Mr. Owl ate my metal worm.')).toBe(
			true
		);
		expect(
			isPalindrome('A man, a plan, a canal. Panama')
		).toBe(true);
	});
});
