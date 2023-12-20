const app = require("../02-ratelimitter");

const request = require('supertest');
const assert = require('assert');
describe('GET /user', function() {
  it('One request responds back correctly', function(done) {
    request(app)
      .get('/user')
      .then(response => {
        expect(response.status).toBe(200);
        done();
      })
  });

  it('5 or more requests return back a 404', function(done) {
      for (let i = 0; i<5; i++) {
        request(app)
              .get('/user')
              .then();
      }
      request(app)
          .get('/user')
          .then(response => {
            expect(response.status).toBe(404);
            done();
          })
  });

  it('5 or more requests and waiting returns a 200', function(done) {
      for (let i = 0; i<5; i++) {
        request(app)
              .get('/user')
              .then();
      }
      setTimeout(function() {
      request(app)
                    .get('/user')
                    .then(response => {
                      expect(response.status).toBe(200);
                      done()
                    })
      }, 2000);
  });
});

