describe('code snippet', () => {

  // The server accepts JSON data in the request body.
  it('should accept JSON data in the request body', () => {
    const express = require('express');
    const surveyRoutes = require('./routes/surveyRoutes');
    const config = require('./config');
    const supertest = require('supertest');

    const app = express();

    app.use(express.json());
    app.use('/api/surveys', surveyRoutes);

    app.post('/api/surveys', (req, res) => {
      res.json(req.body);
    });

    return supertest(app)
      .post('/api/surveys')
      .send({ question: 'What is your favorite color?' })
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ question: 'What is your favorite color?' });
      });
  });

  // The server responds with the appropriate data when a valid survey is requested.
  it('should respond with the appropriate data when a valid survey is requested', () => {
    const express = require('express');
    const surveyRoutes = require('./routes/surveyRoutes');
    const config = require('./config');

    const app = express();

    app.use(express.json());
    app.use('/api/surveys', surveyRoutes);

    app.get('/api/surveys/:id', (req, res) => {
      const surveyId = req.params.id;
      if (surveyId === '1') {
        res.json({ id: '1', question: 'What is your favorite color?' });
      } else {
        res.status(404).json({ error: 'Survey not found' });
      }
    });

    return request(app)
      .get('/api/surveys/1')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ id: '1', question: 'What is your favorite color?' });
      });
  });
});
