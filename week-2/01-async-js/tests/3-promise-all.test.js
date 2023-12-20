const calculateTime = require("../hard (promises)/3-promise-all");

describe("calculateTime function", () => {
  test("calculates time 1", async () => {
    const difference = await calculateTime(1, 2, 3);
    expect(difference).toBeGreaterThanOrEqual(3000);
    expect(difference).toBeLessThan(4000);
  }, 4000);

  test("calculates time 2", async () => {
    const difference = await calculateTime(4, 5, 7);
    expect(difference).toBeGreaterThanOrEqual(7000);
    expect(difference).toBeLessThan(8000);
  }, 8000);

  test("calculates time 3", async () => {
    const difference = await calculateTime(10, 1, 1);
    expect(difference).toBeGreaterThanOrEqual(10000);
    expect(difference).toBeLessThan(11000);
  }, 11000);

  test("calculates time for zero seconds", async () => {
    const difference = await calculateTime(0, 0, 0);
    expect(difference).toBeGreaterThanOrEqual(0);
    expect(difference).toBeLessThan(1000);
  }, 1000);
});
