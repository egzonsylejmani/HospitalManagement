const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Email: String,
    Phone: String,
    AppointmentDate: Date,
    Doctor: String,
    Ward: String,
    Reason: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointments", AppointmentSchema);
