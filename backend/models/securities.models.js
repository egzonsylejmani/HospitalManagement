const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecuritySchema = new Schema(
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

module.exports = mongoose.model("securities", SecuritySchema);
