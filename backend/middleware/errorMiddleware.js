const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //   Check for Mongoose bad object
  // if (err.name === "CastError" && err.kind === "ObjectId") {
  //   statusCode = 404;
  //   message = `Resource not found with id of ${err.value}`;
  // }

  // //   Check for Mongoose duplicate key
  // if (err.code === 11000) {
  //   statusCode = 400;
  //   const keys = Object.keys(err.keyValue);
  //   message = `Duplicate field value entered: ${keys}`;
  // }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export { notfound, errorHandler };
