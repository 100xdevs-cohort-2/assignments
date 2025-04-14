const app = require("../02-ratelimitter");

const request = require("supertest");
const assert = require("assert");
describe("GET /user", function () {
  let userId = "testId";
  it("One request responds back correctly", function (done) {
    request(app)
      .get("/user")
      .set("user-id", userId)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  // userId = "testId2";
  it("5 or more requests return back a 404", async function () {
    userId = "testId2";

    // Send 5 requests sequentially and await each
    for (let i = 0; i < 5; i++) {
      await request(app).get("/user").set("user-id", userId);
    }

    // The 6th request should get blocked
    const response = await request(app).get("/user").set("user-id", userId);
    expect(response.status).toBe(404);
  });

  // userId = "testId3";

  it("5 or more requests and waiting returns a 200", function (done) {
    for (let i = 0; i < 5; i++) {
      request(app).get("/user").set("user-id", userId).then();
    }
    setTimeout(function () {
      request(app)
        .get("/user")
        .set("user-id", userId)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
      }, 2000);
  });
});
