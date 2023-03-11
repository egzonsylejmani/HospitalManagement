const Rooms = require("../models/rooms.models");
const ValidateRoom = require("../validation/Rooms.validation");

const AddRoom = async (req, res) => {
  let AddRooms = true;
  const { errors, isValid } = ValidateRoom(req.body, AddRooms);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Rooms.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Room Exist";
          res.status(404).json(errors);
        } else {
          await Rooms.create(req.body);
          res.status(201).json({ message: "Rooms added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllRooms = async (req, res) => {
  try {
    const data = await Rooms.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleRoom = async (req, res) => {
  try {
    const data = await Patients.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateRoom = async (req, res) => {
  const { errors, isValid } = ValidateRoom(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Rooms.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteRoom = async (req, res) => {
  try {
    await Rooms.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Room deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddRoom,
  FindAllRooms,
  FindSingleRoom,
  UpdateRoom,
  DeleteRoom,
};
