// index.js
const app = require('./routeHandlers');
const logger = require('./logger');

const port = 3000;

// app.listen(port, () => {
//     logger.info(`App listening on port ${port}`);
// });
app.use((req, res, next) => {
    res.status(404).send();
});