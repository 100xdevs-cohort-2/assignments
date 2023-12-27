const wait = require("../hard (promises)/1-promisify-setTimeout");

describe("wait function", () => {
  test("resolves after 1 second", async () => {
    const start = Date.now();
    const result = await wait(1);
    expect(result).toEqual("Promise resolved after 1 second");
    const end = Date.now();
    const difference = end - start;
    expect(difference).toBeGreaterThanOrEqual(1000);
  }, 2000);

  test("resolves after 2 seconds", async () => {
    const start = Date.now();
    const result = await wait(2);
    expect(result).toEqual("Promise resolved after 2 seconds");
    const end = Date.now();
    const difference = end - start;
    expect(difference).toBeGreaterThanOrEqual(2000);
  }, 3000);

  test("resolves after 3 seconds", async () => {
    const start = Date.now();
    const result = await wait(3);
    expect(result).toEqual("Promise resolved after 3 seconds");
    const end = Date.now();
    const difference = end - start;
    expect(difference).toBeGreaterThanOrEqual(3000);
  }, 4000);
});
