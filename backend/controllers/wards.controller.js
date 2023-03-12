const Wards = require("../models/wards.models");
const ValidateWard = require("../validation/Wards.validation");
const ambulanceDrivers = require("../models/ambulance-drivers.models");
const Doctors = require("../models/doctors.models");
const Nurses = require("../models/nurses.models");
const Laborants = require("../models/laborants.models");
const medicalTechnicians = require("../models/medical-technicians.models");
const receptionist = require("../models/receptionist.models");

const AddWard = async (req, res) => {
  const { errors, isValid } = ValidateWard(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Wards.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Ward Exist";
          res.status(404).json(errors);
        } else {
          await Wards.create(req.body);
          res.status(201).json({ message: "Ward added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllWards = async (req, res) => {
  try {
    const data = await Wards.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleWard = async (req, res) => {
  try {
    const data = await Wards.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const findWardDoctors = async (req, res) => {
  try {
    const data = await Doctors.find({ Ward: req.params.ward });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateWard = async (req, res) => {
  const { errors, isValid } = ValidateWard(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Wards.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteWard = async (req, res) => {
  try {
    await Wards.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Ward deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

const findAllStaff = async (req, res) => {
  try {
    const Receptionist = await receptionist.find({ Ward: req.params.ward });
    const AmbulanceDriver = await ambulanceDrivers.find({ Ward: req.params.ward });

    const Doctor = await Doctors.find({ Ward: req.params.ward });

    const Nurse = await Nurses.find({ Ward: req.params.ward });

    const Laborant = await Laborants.find({ Ward: req.params.ward });

    const MedicalTechnician = await medicalTechnicians.find({ Ward: req.params.ward });
    const data = {
      Receptionist,
      AmbulanceDriver,
      Doctor,
      Nurse,
      Laborant,
      MedicalTechnician,
    };

    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddWard,
  FindAllWards,
  FindSingleWard,
  UpdateWard,
  DeleteWard,
  findWardDoctors,
  findAllStaff,
};
