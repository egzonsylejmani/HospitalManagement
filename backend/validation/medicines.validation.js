const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateMedicine(data) {
  let errors = {};
  data.Quantity = !isEmpty(data.Quantity) ? data.Quantity : "";
  data.Type = !isEmpty(data.Type) ? data.Type : "";

  if (validator.isEmpty(data.Quantity)) {
    errors.Quantity = "Required Quantity of medicine";
  }

  if (validator.isEmpty(data.Type)) {
    errors.Type = "Required medicine type";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};