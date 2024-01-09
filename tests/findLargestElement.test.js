const findLargestElement = require('../easy/findLargestElement');

describe('findLargestElement', () => {
    test('returns the largest element in the array', () => {
        expect(findLargestElement([3, 7, 2, 9, 1])).toBe(9);
        expect(findLargestElement([15, 27, 8, 12])).toBe(27);
        expect(findLargestElement([-5, -10, -2, -8])).toBe(-2);
        expect(findLargestElement([0, 0, 0, 0])).toBe(0);
    });

    test('works with arrays containing negative numbers', () => {
        expect(findLargestElement([-3, -7, -2, -9, -1])).toBe(-1);
        expect(findLargestElement([-15, -27, -8, -12])).toBe(-8);
    });

    test('works with arrays containing decimals', () => {
        expect(findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9])).toBe(9.8);
        expect(findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9])).toBe(-1.9);
    });

    test('returns undefined for an empty array', () => {
        expect(findLargestElement([])).toBeUndefined();
    });
});