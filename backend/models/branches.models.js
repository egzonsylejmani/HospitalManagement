const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchSchema = new Schema(
  {
    Name: String,
    City: String,
    Image: String,
    Country: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("branches", BranchSchema);
