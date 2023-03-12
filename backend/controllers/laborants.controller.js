const Laborants = require("../models/laborants.models");
const ValidateLaborant = require("../validation/Laborants.validation");

const AddLaborant = async (req, res) => {
  let addLaborant = true;
  const { errors, isValid } = ValidateLaborant(req.body, addLaborant);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Laborants.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Laborant Exist";
          res.status(404).json(errors);
        } else {
          await Laborants.create(req.body);
          res.status(201).json({ message: "Laborant added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllLaborants = async (req, res) => {
  try {
    const data = await Laborants.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleLaborant = async (req, res) => {
  try {
    const data = await Laborants.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateLaborant = async (req, res) => {
  const { errors, isValid } = ValidateLaborant(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Laborants.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteLaborant = async (req, res) => {
  try {
    await Laborants.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Laborant deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddLaborant,
  FindAllLaborants,
  FindSingleLaborant,
  UpdateLaborant,
  DeleteLaborant,
};
