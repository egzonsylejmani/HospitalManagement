const Nurses = require("../models/nurses.models");
const ValidateNurse = require("../validation/Nurses.validation");
const AddNurse = async (req, res) => {
  let addNurse = true;
  const { errors, isValid } = ValidateNurse(req.body, addNurse);
  try {
    if (!isValid) {
      res.status(404).json(errors); 
    } else {
      await Nurses.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Nurse Exist";
          res.status(404).json(errors);
        } else {
          await Nurses.create(req.body);
          res.status(201).json({ message: "Nurse added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllNurses = async (req, res) => {
  try {
    const data = await Nurses.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleNurse = async (req, res) => {
  try {
    const data = await Nurses.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateNurse = async (req, res) => {
  const { errors, isValid } = ValidateNurse(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Nurses.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteNurse = async (req, res) => {
  try {
    await Nurses.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Nurse deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddNurse,
  FindAllNurses,
  FindSingleNurse,
  UpdateNurse,
  DeleteNurse,
};
