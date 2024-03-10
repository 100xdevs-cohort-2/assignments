const calculateTime = require('../times.js'); 

test('calculateTime function exists', () => {
  expect(typeof calculateTime).toEqual('function');
});

test('calculateTime for n=100', () => {
  const time = calculateTime(100);
  expect(time).toBeGreaterThanOrEqual(0);
});

test('calculateTime for n=100000', () => {
  const time = calculateTime(100000);
  expect(time).toBeGreaterThanOrEqual(0);
});

test('calculateTime for n=1000000000', () => {
  const time = calculateTime(1000000000);
  expect(time).toBeGreaterThanOrEqual(0);
});
