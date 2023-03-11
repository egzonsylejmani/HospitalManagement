const Patients = require("../models/patients.models");
const ValidatePatient = require("../validation/Patients.validation");

const AddPatient = async (req, res) => {
  let AddPatient = true;
  const { errors, isValid } = ValidatePatient(req.body, AddPatient);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Patients.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Patient Exist";
          res.status(404).json(errors);
        } else {
          await Patients.create(req.body);
          res.status(201).json({ message: "Patient added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllPatients = async (req, res) => {
  try {
    const data = await Patients.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglePatient = async (req, res) => {
  try {
    const data = await Patients.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdatePatient = async (req, res) => {
  const { errors, isValid } = ValidatePatient(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Patients.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeletePatient = async (req, res) => {
  try {
    await Patients.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Patient deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddPatient,
  FindAllPatients,
  FindSinglePatient,
  UpdatePatient,
  DeletePatient,
};
