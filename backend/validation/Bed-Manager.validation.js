const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidatebedManager(data, AddbedManager) {
  let errors = {};
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Phone = !isEmpty(data.Ward) ? data.Phone : "";
  data.BirthDate = !isEmpty(data.BirthDate) ? data.BirthDate : "";
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";

  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname";
  }
  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname";
  }
  if (validator.isEmpty(data.Ward)) {
    errors.Ward = "Required Ward";
  }

  if (validator.isEmpty(data.Phone)) {
    errors.Phone = "Required Phone";
  }
  if (validator.isEmpty(data.BirthDate)) {
    errors.BirthDate = "Required BirthDate";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
