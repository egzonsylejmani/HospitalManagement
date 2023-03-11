const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaborantSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    BirthDate: Date,
    Phone: String,
    Ward: String,
    Image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Laborants", LaborantSchema);
