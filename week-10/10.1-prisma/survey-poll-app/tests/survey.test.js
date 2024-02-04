const request = require('supertest');
const app = require('../src/server');

describe('Survey Endpoints', () => {
  it('should create a new survey', async () => {
    const res = await request(app)
      .post('/api/survey')
      .send({
        title: 'Survey Test',
        description: 'This is a test survey',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('survey');
  });

  it('should fetch all surveys', async () => {
    const res = await request(app)
      .get('/api/survey');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});