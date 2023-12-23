const errorHandler = (error, req, res, next) => {
  switch (error.name) {
    default:
      return res.status(400).send(error.message);
  }
  next(error);
};

const unknownEnpoint = (req, res, next) => {
  res.status(404).send({ error: 'Unknown Endpoint' });
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(400).json({ message: 'Token is missing' });
  }
  req.token = authorization.replace('Bearer ', '');
  next();
};

module.exports = { errorHandler, unknownEnpoint, tokenExtractor };
