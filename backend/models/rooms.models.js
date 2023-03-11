const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    RoomNumber: Number,
    Ward: String,
    Nurse: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rooms", RoomSchema);
