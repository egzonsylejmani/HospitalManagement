const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaboratorySchema = new Schema(
  {
    Ward: String,
    Image: String,
    Type: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("laboratories", LaboratorySchema);
