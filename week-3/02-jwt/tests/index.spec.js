const jwt = require('jsonwebtoken');
const {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword
} = require('../');

describe('signJwt', () => {
	test('signs a jwt correctly', () => {
		const token = signJwt('kirat@gmail.com', '123456' );
		const decoded = jwt.decode(token);
		expect(decoded.username).toBe('kirat@gmail.com');
	});

	test('returns null if invalid email', () => {
        const token = signJwt('kirat', '123456');
        expect(token).toBe(null);
    });

    test('returns null if small pw', () => {
        const token = signJwt('kirat@gmail.com', '12345');
        expect(token).toBe(null);
    });

});

describe('decodeJwt', () => {
	test('decodes a jwt with diff password correctly', () => {
		const token = jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, "randomPassword");
		const decoded = decodeJwt(token);
		expect(decoded).toBe(true);
	});

	test('decodes a jwt with same password correctly', () => {
		const token = jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, jwtPassword);
		const decoded = decodeJwt(token);
		expect(decoded).toBe(true);
	});

	test('cant decode a non jwt string', () => {
		const decoded = decodeJwt("token");
		expect(decoded).toBe(false);
	});

});

describe('verifyJwt', () => {
	test('cant decode a jwt with diff password correctly', () => {
		const token = jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, "randomPassword");
		const decoded = verifyJwt(token);
		expect(decoded).toBe(false);
	});

	test('decodes a jwt with same password correctly', () => {
		const token = jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, jwtPassword);
		const decoded = verifyJwt(token);
		expect(decoded).toBe(true);
	});

	test('cant decode a non jwt string', () => {
		const decoded = verifyJwt("token");
		expect(decoded).toBe(false);
	});
});
