const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechnicianSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Phone: String,
    BirthDate: Date,
    Ward: String,
    Email: String,
    Image: String,
    Speciality: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("technicians", TechnicianSchema);
