const errorHandler = (error, req, res, next) => {
  return res.status(400).send({ error: error.message });
};

const unknownEnpoint = (req, res, next) => {
  res.status(404).send({ error: 'Unknown Endpoint' });
};

module.exports = { errorHandler, unknownEnpoint };
