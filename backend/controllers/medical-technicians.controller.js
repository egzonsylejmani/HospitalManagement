const medicalTechnicians = require("../models/medical-technicians.models");
const ValidatemedicalTechnicians = require("../validation/medical-technicians.validation");
const AddmedicalTechnicians = async (req, res) => {
  let addmedicalTechnicians = true;
  const { errors, isValid } = ValidatemedicalTechnicians(req.body, addmedicalTechnicians);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await medicalTechnicians.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Medical Technicians Exist";
          res.status(404).json(errors);
        } else {
          await medicalTechnicians.create(req.body);
          res.status(201).json({ message: "Medical Technicians added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllmedicalTechnicians= async (req, res) => {
  try {
    const data = await medicalTechnicians.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglemedicalTechnician= async (req, res) => {
  try {
    const data = await medicalTechnicians.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdatemedicalTechnicians = async (req, res) => {
  const { errors, isValid } = ValidatemedicalTechnicians(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await medicalTechnicians.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeletemedicalTechnicians = async (req, res) => {
  try {
    await medicalTechnicians.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Medical Technicians deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    AddmedicalTechnicians,
    FindAllmedicalTechnicians,
    FindSinglemedicalTechnician,
    UpdatemedicalTechnicians,
    DeletemedicalTechnicians,
};
