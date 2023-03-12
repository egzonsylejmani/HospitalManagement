const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateWard(data) {
  let errors = {};
  data.Name = !isEmpty(data.Name) ? data.Name : "";

  data.Image = !isEmpty(data.Image) ? data.Image : "";

  if (validator.isEmpty(data.Name)) {
    errors.Name = "Required Name";
  }

  if (validator.isEmpty(data.Image)) {
    errors.Image = "Required Image";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
