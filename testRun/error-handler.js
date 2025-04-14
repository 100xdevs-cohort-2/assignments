function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    // You have started to stream the response back to the client and the headers have already been sent
    // so modifying the haeders would throw an error
    // simply delegating the responsibility of handling this to Express itself
    return next(err);
  }
  // I am ready to handle the error
  res.status(500).json({ message: "Something broke :(" + err });

  // Don't further try to hand it over to Express since you have alredy sent the response object
  // next(err) will case error saying to trying to set headers after the response is sent
  next(err);
}

module.exports = errorHandler;
