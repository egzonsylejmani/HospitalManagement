const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const receptionistSchema = new Schema(
  {
    Firstname: String,
    Lastname: String,
    Phone: String,
    BirthDate: Date,
    Ward: String,
    Email: String,
    Image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("receptionist", receptionistSchema);
