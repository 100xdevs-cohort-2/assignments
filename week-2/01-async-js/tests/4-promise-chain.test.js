const calculateTime = require("../hard (promises)/4-promise-chain");

describe("calculateTime function", () => {
  test.concurrent("calculates time 1", async () => {
    const difference = await calculateTime(1, 2, 3);
    expect(difference).toBeGreaterThanOrEqual(6000);
    expect(difference).toBeLessThan(7000);
  }, 7000);

  test.concurrent("calculates time 2", async () => {
    const difference = await calculateTime(10, 1, 1);
    expect(difference).toBeGreaterThanOrEqual(12000);
    expect(difference).toBeLessThan(13000);
  }, 14000);

  test.concurrent("calculates time for zero seconds", async () => {
    const difference = await calculateTime(0, 0, 0);
    expect(difference).toBeGreaterThanOrEqual(0);
    expect(difference).toBeLessThan(100);
  }, 100);
});
