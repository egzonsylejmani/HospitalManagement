const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLaboratory(data) {
  let errors = {};
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";
  data.Lab = !isEmpty(data.Lab) ? data.Lab : "";

  if (validator.isEmpty(data.Ward)) {
    errors.Ward = "Required Laboratory location - Ward";
  }

  if (validator.isEmpty(data.Type)) {
    errors.Lab = "Required Laboratory type";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
