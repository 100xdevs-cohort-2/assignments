const Calculator = require('../hard/calculator');

describe('Calculator', () => {
	let calc;

	beforeEach(() => {
		calc = new Calculator();
	});

	afterEach(() => {
		calc.clear();
	});

	test('addition', () => {
		calc.add(5);
		expect(calc.getResult()).toBe(5);

		calc.add(3);
		expect(calc.getResult()).toBe(8);
	});

	test('subtraction', () => {
		calc.subtract(5);
		expect(calc.getResult()).toBe(-5);

		calc.subtract(3);
		expect(calc.getResult()).toBe(-8);
	});

	test('multiplication', () => {
		calc.add(4);
		calc.multiply(3);
		expect(calc.getResult()).toBe(12);

		calc.multiply(0);
		expect(calc.getResult()).toBe(0);
	});

	test('division', () => {
		calc.add(12);

		calc.divide(4);
		expect(calc.getResult()).toBe(3);

		expect(() => calc.divide(0)).toThrow(Error);
		expect(calc.getResult()).toBe(3);
	});

	test('clear', () => {
		calc.add(5);
		calc.clear();
		expect(calc.getResult()).toBe(0);
	});

	test('calculate addition and multiplication', () => {
		calc.calculate('2 + 3 * 4');
		expect(calc.getResult()).toBe(14);
	});

	test('calculate division in expression', () => {
		calc.calculate('(   15 + 3) /   6   ');
		expect(calc.getResult()).toBe(3);
	});

	test('calculate subtraction in expression', () => {
		calc.calculate('10 - (4 + 2)');
		expect(calc.getResult()).toBe(4);
	});

	test('calculate complex expression', () => {
		calc.calculate('(2 + 3) * (6 - (4 + 1) / 2) + 7');
		expect(calc.getResult()).toBe(24.5);
	});
	test('calculate complex expression with spaces', () => {
		calc.calculate(
			'10 +   2 *    (   6 - (4 + 1) / 2) + 7'
		);
		expect(calc.getResult()).toBe(24);
	});

	test('calculate expression with decimals', () => {
		calc.calculate('(2.5 + 1.5) * 3');
		expect(calc.getResult()).toBe(12);
	});

	test('calculate expression with invalid characters', () => {
		expect(() => calc.calculate('5 + abc')).toThrow(Error);
		expect(() =>
			calc.calculate('10 * (2 + 3) + xyz')
		).toThrow(Error);
	});

	test('calculate division by zero', () => {
		expect(() => calc.calculate('10 / 0')).toThrow(Error);
	});

	test('multiplication with negative numbers', () => {
		calc.add(-5);
		calc.multiply(-3);
		expect(calc.getResult()).toBe(15);

		calc.multiply(0);
		expect(calc.getResult()).toBe(0);
	});

	test('division with decimal numbers', () => {
		calc.add(10);
		calc.divide(3);
		expect(calc.getResult()).toBeCloseTo(3.333333, 2);

		calc.divide(2);
		expect(calc.getResult()).toBeCloseTo(1.666666, 2);
	});

	test('expression with invalid parentheses', () => {
		expect(() => calc.calculate('10 + (2 + 3')).toThrow(
			Error
		);
		expect(() => calc.calculate('10 + 2) + 3')).toThrow(
			Error
		);
		expect(() => calc.calculate(')10 + 2(')).toThrow(Error);
	});
});
