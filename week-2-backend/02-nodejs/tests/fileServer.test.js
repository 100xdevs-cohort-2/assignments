const http = require('http');
const path = require('path');
const fs = require('fs');
const server = require('../fileServer');
describe('API Endpoints', () => {
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

  describe('GET /files', () => {
    test('should return a list of files', async () => {
        const options = {
          method: 'GET',
          path: '/files'
        };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(2);
    });

    test('should handle internal server error', async () => {
      const options = {
        method: 'GET',
        path: '/files'
      };

      const directoryPath = path.resolve(__dirname, '../files/');
      jest
        .spyOn(fs, 'readdir')
        .mockImplementation((directoryPath, callback) => {
          callback(new Error('Mocked Internal Server Error'), null);
        });

      const response = await sendRequest(options);

      expect(response.statusCode).toBe(500);

      fs.readdir.mockRestore();
    });
  });

  describe('GET /file/:filename', () => {
    const testFilePath = path.join(__dirname, '../files', 'test-file.txt');

    beforeAll(() => {
      fs.writeFileSync(testFilePath, 'Test file content');
    });

    afterAll(() => {
      fs.unlinkSync(testFilePath);
    });

    test('should serve the requested file', async () => {
      const options = {
        method: 'GET',
        path: '/file/test-file.txt'
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('Test file content');
    });

    test('should handle file not found', async () => {
      const options = {
        method: 'GET',
        path: '/file/non-existing-file.txt'
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(404);
      expect(response.body).toBe('File not found');
    });

  });

  describe('Invalid Routes', () => {
    test('should return 404 for invalid routes', async () => {
      const options = {
        method: 'GET',
        path: '/invalid'
      };
      const response = await sendRequest(options);

      expect(response.statusCode).toBe(404);
      expect(response.body).toBe("Route not found");
    });
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
