const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateBranch(data) {
  let errors = {};
  data.Name = !isEmpty(data.Name) ? data.Name : "";
  data.City = !isEmpty(data.City) ? data.City : "";
  data.Country = !isEmpty(data.Country) ? data.Country : "";
  data.Image = !isEmpty(data.Image) ? data.Image : "";

  if (validator.isEmpty(data.Name)) {
    errors.Name = "Required Name";
  }
  if (validator.isEmpty(data.City)) {
    errors.City = "Required City";
  }

  if (validator.isEmpty(data.Country)) {
    errors.Country = "Required Country";
  }
  if (validator.isEmpty(data.Image)) {
    errors.Image = "Required Image";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
