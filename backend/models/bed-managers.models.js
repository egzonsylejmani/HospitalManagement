const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BedManagerSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Phone: String,
    BirthDate: Date,
    Ward: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BedManager", BedManagerSchema);
