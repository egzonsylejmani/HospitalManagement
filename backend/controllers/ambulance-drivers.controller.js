const ambulanceDrivers = require("../models/ambulance-drivers.models");
const ValidateambulanceDrivers = require("../validation/ambulance-drivers.validation");
const AddambulanceDrivers = async (req, res) => {
  let addambulanceDrivers = true;
  const { errors, isValid } = ValidateambulanceDrivers(req.body, addambulanceDrivers);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await ambulanceDrivers.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Ambulance Driver Exist";
          res.status(404).json(errors);
        } else {
          await ambulanceDrivers.create(req.body);
          res.status(201).json({ message: "Ambulance Driver added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllambulanceDrivers= async (req, res) => {
  try {
    const data = await ambulanceDrivers.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleambulanceDriver= async (req, res) => {
  try {
    const data = await ambulanceDrivers.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateambulanceDrivers = async (req, res) => {
  const { errors, isValid } = ValidateambulanceDrivers(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await ambulanceDrivers.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteambulanceDrivers = async (req, res) => {
  try {
    await ambulanceDrivers.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Ambulance Drivers deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    AddambulanceDrivers,
    FindAllambulanceDrivers,
    FindSingleambulanceDriver,
    UpdateambulanceDrivers,
    DeleteambulanceDrivers,
};
