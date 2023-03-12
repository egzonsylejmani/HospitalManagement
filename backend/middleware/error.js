const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  console.log("err", err);
  let error = { ...err };
  error.message = err.message;

  if (err.code === 11000) {
    error = new ErrorResponse(`Duplicate field value: ${message}`, 400);
  }

  if (err.name === "ValidationError") {
    error = new ErrorResponse(`Invalid input data: ${message}`, 400);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
    error: error.message || "Server Error",
  });
};
module.exports = errorHandler;
