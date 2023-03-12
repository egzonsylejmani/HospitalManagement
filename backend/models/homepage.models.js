const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomePageSchema = new Schema(
  {
    content: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("homepage", HomePageSchema);
