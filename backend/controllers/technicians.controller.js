const Technicians = require("../models/technicians.models");
const ValidateTechnician = require("../validation/Technicians.validation");
const AddTechnician = async (req, res) => {
  let addTechnician = true;
  const { errors, isValid } = ValidateTechnician(req.body, addTechnician);
  try {
    if (!isValid) {
      res.status(404).json(errors); 
    } else {
      await Technicians.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Technician Exist";
          res.status(404).json(errors);
        } else {
          await Technicians.create(req.body);
          res.status(201).json({ message: "Technician added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllTechnicians = async (req, res) => {
  try {
    const data = await Technicians.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleTechnician = async (req, res) => {
  try {
    const data = await Technicians.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateTechnician = async (req, res) => {
  const { errors, isValid } = ValidateTechnician(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Technicians.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteTechnician = async (req, res) => {
  try {
    await Technicians.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Technician deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddTechnician,
  FindAllTechnicians,
  FindSingleTechnician,
  UpdateTechnician,
  DeleteTechnician,
};
