const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalTechinciansSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Phone: String,
    BirthDate: Date,
    Ward: String,
    Image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("medicalTechnicians", medicalTechinciansSchema);
