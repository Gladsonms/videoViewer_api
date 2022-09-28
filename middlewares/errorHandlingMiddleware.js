export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  return res.status(err.statusCode).json({
    sucess: false,
    status: err.status,
    message: err.message,
  });
};

export const CreateError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
