const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateAppointment(data) {
  let errors = {};
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Phone = !isEmpty(data.Ward) ? data.Phone : "";
  data.AppointmentDate = !isEmpty(data.AppointmentDate) ? data.AppointmentDate : "";
  data.Doctor = !isEmpty(data.Doctor) ? data.Doctor : "";
  data.Ward = !isEmpty(data.Ward) ? data.Ward : "";
  data.Reason = !isEmpty(data.Reason) ? data.Reason : "";



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
  if (validator.isEmpty(data.AppointmentDate)) {
    errors.AppointmentDate = "Required Appointment Date";
  }
  if (validator.isEmpty(data.Doctor)) {
    errors.Doctor = "Required Doctor Name";
  }
  if (validator.isEmpty(data.Reason)) {
    errors.Reason = "Please write the reason that you are sick";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
