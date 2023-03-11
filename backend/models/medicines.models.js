const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicineSchema = new Schema(
  {
    Quantity: String,
    Type: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("medicines", MedicineSchema);