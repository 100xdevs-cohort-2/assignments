const sleep = require("../hard (promises)/2-sleep-completely");

describe("sleep function", () => {
  test("resolves after 1 second", () => {
    const start = Date.now();
    return expect(sleep(1000))
      .resolves.toBeUndefined() // Wait for 1 second
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(1000); // Expect difference to be at least 1000 ms (1 second)
      });
  }, 2000); // Set timeout to 2000 ms (2 seconds)

  test("resolves after 2 seconds", () => {
    const start = Date.now();
    return expect(sleep(2000))
      .resolves.toBeUndefined() // Wait for 2 seconds
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(2000); // Expect difference to be at least 2000 ms (2 seconds)
      });
  }, 3000); // Set timeout to 3000 ms (3 seconds)

  test("resolves after 3 seconds", () => {
    const start = Date.now();
    return expect(sleep(3000))
      .resolves.toBeUndefined() // Wait for 3 seconds
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(3000); // Expect difference to be at least 3000 ms (3 seconds)
      });
  }, 4000); // Set timeout to 4000 ms (4 seconds)
});
