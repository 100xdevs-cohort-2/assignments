const isAnagramOptimized = require('../easy/anagram');

describe('isAnagramOptimized', () => {
	test('returns true for anagrams', () => {
		expect(isAnagramOptimized('listen', 'silent')).toBe(true);
		expect(isAnagramOptimized('rail safety', 'fairy tales')).toBe(
			true
		);
		expect(isAnagramOptimized('openai', 'aiopen')).toBe(true);
		expect(isAnagramOptimized('', '')).toBe(true);
	});

	test('returns false for non-anagrams', () => {
		expect(isAnagramOptimized('hello', 'world')).toBe(false);
		expect(isAnagramOptimized('openai', 'open')).toBe(false);
		expect(isAnagramOptimized('hello', 'lhel')).toBe(false);
		expect(isAnagramOptimized('working', 'non')).toBe(false);
	});

	test('returns true for anagrams with different casing', () => {
		expect(isAnagramOptimized('Debit Card', 'Bad Credit')).toBe(
			true
		);
		expect(
			isAnagramOptimized('School MASTER', 'The ClassROOM')
		).toBe(true);
	});

	test('returns true for anagrams with special characters', () => {
		expect(isAnagramOptimized('abc!', '!bac')).toBe(true);
	});

	test('returns false for non-anagrams with special characters', () => {
		expect(isAnagramOptimized('hello', 'hello!')).toBe(false);
		expect(isAnagramOptimized('openai!', 'open')).toBe(false);
	});
});
