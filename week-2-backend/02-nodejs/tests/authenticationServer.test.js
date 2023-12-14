const http = require('http');
const server = require('../authenticationServer');

const email = 'testuser@gmail.com';
const password = 'testpassword';
const firstName = "kirat"
const lastName = "kirat"


describe('API Tests', () => {
  let globalServer;
  beforeAll((done) => {
      if (globalServer) {
        globalServer.close();
      }
    globalServer = server.listen(3000);
    done()
  });

  afterAll((done) => {
    globalServer.close(done);
  });

  it('should allow a user to sign up', async () => {
    const requestBody = JSON.stringify({ email, password, firstName, lastName });

    const options = {
      method: 'POST',
      path: '/signup',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': requestBody.length,
      },
    };

    const response = await sendRequest(options, requestBody);

    expect(response.statusCode).toBe(201);
    expect(response.body).toBe('Signup successful');
  });

  it('should allow a user to login', async () => {
    const requestBody = JSON.stringify({ email, password });

    const options = {
      method: 'POST',
      path: '/login',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': requestBody.length,
      },
    };

    const response = await sendRequest(options, requestBody);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();

    const responseBody = JSON.parse(response.body);
    expect(responseBody.email).toBe(email);
    expect(responseBody.firstName).toBe(firstName);
    expect(responseBody.lastName).toBe(lastName);

    authToken = responseBody.authToken;
  });

  it('should return unauthorized for accessing protected data without authentication', async () => {
    const options = {
      method: 'GET',
      path: '/data',
      headers: {
        email,
        password: "",
      },
    };

    const response = await sendRequest(options);

    expect(response.statusCode).toBe(401);
    expect(response.body).toBe('Unauthorized');
  });

  it('should return the users for accessing protected data with authentication', async () => {
    const options = {
      method: 'GET',
      path: '/data',
      headers: {
        email,
        password
      },
    };

    const response = await sendRequest(options);

    expect(response.statusCode).toBe(200);

    const responseBody = JSON.parse(response.body);
    console.log(responseBody);
    expect(responseBody.users.length).toBe(1);
  });
});

function sendRequest(options, requestBody) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        ...options,
        host: 'localhost',
        port: 3000,
      },
      (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    );

    req.on('error', (err) => {
      reject(err);
    });

    if (requestBody) {
      req.write(requestBody);
    }

    req.end();
  });
}
