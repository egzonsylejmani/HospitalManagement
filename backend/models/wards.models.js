const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WardsSchema = new Schema(
  {
    Name: String,
    Image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("wards", WardsSchema);
