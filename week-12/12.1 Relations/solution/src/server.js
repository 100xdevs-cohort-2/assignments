const express = require('express');
const surveyRoutes = require('./routes/surveyRoutes');
const config = require('./config');

const app = express();

app.use(express.json());
app.use('/api/surveys', surveyRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});