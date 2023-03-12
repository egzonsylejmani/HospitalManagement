const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Ward: String,
    Email: String,
    Image: String,
    Phone: String,
    BirthDate: Date,
    Diagnosis: Array,
    Analysis: Array,
    Medicaments: Array,
    HospitalHistory: Array,
    PersonalHistory: Array,
    Bills: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("patients", PatientSchema);

