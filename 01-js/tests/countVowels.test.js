const countVowels = require('../medium/countVowels');

describe('countVowels', () => {
    test('returns the correct count for strings with vowels', () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('programming')).toBe(3);
        expect(countVowels('OpenAI')).toBe(4);
    });

    test('returns 0 for strings without vowels', () => {
        expect(countVowels('rhythm')).toBe(0);
        expect(countVowels('fly')).toBe(0);
        expect(countVowels('chatbot')).toBe(2);
    });

    test('returns 0 for an empty string', () => {
        expect(countVowels('')).toBe(0);
    });

    test('handles case-insensitivity correctly', () => {
        expect(countVowels('EaSiEr')).toBe(4);
        expect(countVowels('QUIET')).toBe(3);
        expect(countVowels('aEIOU')).toBe(5);
    });

    test('returns the correct count for strings with spaces', () => {
        expect(countVowels('the quick brown fox')).toBe(5);
        expect(countVowels('a e i o u')).toBe(5);
        expect(countVowels('testing spaces')).toBe(4);
    });

    test('returns the correct count for strings with punctuation marks', () => {
        expect(countVowels('Hello, world!')).toBe(3);
        expect(countVowels('Coding is fun!!!')).toBe(4);
        expect(countVowels('Keep smiling, boo.')).toBe(6);
    });
});