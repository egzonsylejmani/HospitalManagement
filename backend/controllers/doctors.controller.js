const Doctors = require("../models/doctors.models");
const ValidateDoctor = require("../validation/Doctors.validation");

const AddDoctor = async (req, res) => {
  let addDoctor = true;
  const { errors, isValid } = ValidateDoctor(req.body, addDoctor);

  console.log(isValid, 'isValid');
  console.log(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Doctors.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Doctor Exist";
          res.status(404).json(errors);
        } else {
          await Doctors.create(req.body);
          res.status(201).json({ message: "Doctor added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllDoctors = async (req, res) => {
  try {
    const data = await Doctors.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleDoctor = async (req, res) => {
  try {
    const data = await Doctors.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateDoctor = async (req, res) => {
  const { errors, isValid } = ValidateDoctor(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Doctors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteDoctor = async (req, res) => {
  try {
    await Doctors.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Doctor deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddDoctor,
  FindAllDoctors,
  FindSingleDoctor,
  UpdateDoctor,
  DeleteDoctor,
};
