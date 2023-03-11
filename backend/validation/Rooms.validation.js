const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRoom(data) {
  let errors = {};
  data.RoomNumber = !isEmpty(data.RoomNumber) ? data.RoomNumber : "";
  data.Nurse = !isEmpty(data.Nurse) ? data.Nurse : "";
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";

  if (validator.isEmpty(data.RoomNumber)) {
    errors.RoomNumber = "Required RoomNumber";
  }
  if (validator.isEmpty(data.Nurse)) {
    errors.Nurse = "Required Nurse";
  }
  if (validator.isEmpty(data.Ward)) {
    errors.Ward = "Required Ward";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
