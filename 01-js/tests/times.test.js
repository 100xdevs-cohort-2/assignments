const calculateTime = require("../medium/times");

describe("calculateTime", () => {
  test("calculates time for sum from 1 to 100", () => {
    const elapsedTime = calculateTime(100);
    // console.log(`Time taken for sum from 1 to 100: ${elapsedTime} seconds`);  // uncomment to check elapsed time
    // Allow for a small margin of error like e.g: 0.1 seconds
    // It depends computer architecture like wheater its 32, 64 or 128 bits system
    expect(elapsedTime).toBeLessThanOrEqual(0.1);
  });

  test("calculates time for sum from 1 to 100000", () => {
    const elapsedTime = calculateTime(100000);
    // console.log(`Time taken for sum from 1 to 100000: ${elapsedTime} seconds`);  // uncomment to check elapsed time
    expect(elapsedTime).toBeGreaterThan(0);
  });

  test("calculates time for sum from 1 to 1000000000", () => {
    const elapsedTime = calculateTime(1000000000);
    // console.log(`Time taken for sum from 1 to 1000000000: ${elapsedTime} seconds`);  // uncomment to check elapsed time
    expect(elapsedTime).toBeGreaterThan(0);
  });
});
