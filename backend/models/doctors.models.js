const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Ward: String,
    Email: String,
    Image: String,
    Phone: String,
    Speciality: String,
    BirthDate: Date,
    Appointments: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("doctors", DoctorSchema);
