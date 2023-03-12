const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLaborant(data) {
  let errors = {};
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.BirthDate = !isEmpty(data.BirthDate) ? data.BirthDate : "";
  data.Phone = !isEmpty(data.Phone) ? data.Phone : "";
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";

  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname";
  }

  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname";
  }
  if (validator.isEmpty(data.BirthDate)) {
    errors.BirthDate = "Required Birthdate";
  }

  if (validator.isEmpty(data.Phone)) {
    errors.Phone = "Required Phone number";
  }
  if (validator.isEmpty(data.Ward)) {
    errors.Ward = "Required Ward type";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
