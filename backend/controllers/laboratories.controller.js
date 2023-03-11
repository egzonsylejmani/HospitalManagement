const Laboratories = require("../models/laboratories.models");
const ValidateLaboratory = require("../validation/Laboratories.validation");
const laborants = require("../models/laborants.models");
const AddLaboratory = async (req, res) => {
  let addLaboratory = true;
  const { errors, isValid } = ValidateLaboratory(req.body, addLaboratory);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Laboratories.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Laboratory Exist";
          res.status(404).json(errors);
        } else {
          await Laboratories.create(req.body);
          res.status(201).json({ message: "Laboratory added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllLaboratories = async (req, res) => {
  try {
    const data = await Laboratories.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleLaboratory = async (req, res) => {
  try {
    const data = await Laboratories.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateLaboratory = async (req, res) => {
  const { errors, isValid } = ValidateLaboratory(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Laboratories.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteLaboratory = async (req, res) => {
  try {
    await Laboratories.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Laboratory deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};
const findAllStaff = async (req, res) => {
  try {
    const data = await laborants.find({ Laboratory: req.params.laboratory });

    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddLaboratory,
  FindAllLaboratories,
  FindSingleLaboratory,
  UpdateLaboratory,
  DeleteLaboratory,
  findAllStaff,
};
