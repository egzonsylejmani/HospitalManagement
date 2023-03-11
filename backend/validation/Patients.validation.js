const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidatePatient(data, addPatient) {
  let errors = {};
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Image = !isEmpty(data.Image) ? data.Image : "";
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";
  data.Phone = !isEmpty(data.Ward) ? data.Phone : "";
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.BirthDate = !isEmpty(data.BirthDate) ? data.BirthDate : "";

  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname";
  }
  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname";
  }

  if (validator.isEmpty(data.Image)) {
    errors.Image = "Required Image";
  }
  if (validator.isEmpty(data.Ward)) {
    errors.Ward = "Required Ward";
  }

  if (validator.isEmpty(data.Phone)) {
    errors.Phone = "Required Phone";
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email";
  }
  if (validator.isEmpty(data.BirthDate)) {
    errors.BirthDate = "Required BirthDate";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
