const ambulanceDrivers = require("../models/ambulance-drivers.models");
const Doctors = require("../models/doctors.models");
const Nurses = require("../models/nurses.models");
const Laborants = require("../models/laborants.models");
const medicalTechnicians = require("../models/medical-technicians.models");
const receptionist = require("../models/receptionist.models");
const janitors = require("../models/janitors.models");
const securities = require("../models/securities.models");
const technicians = require("../models/technicians.models");

const FindAllStaff = async (req, res) => {
  try {
    const Receptionist = await receptionist.find();
    const AmbulanceDriver = await ambulanceDrivers.find();

    const Doctor = await Doctors.find();

    const Nurse = await Nurses.find();

    const Laborant = await Laborants.find();

    const MedicalTechnician = await medicalTechnicians.find();

    const Janitor = await janitors.find();

    const Security = await securities.find();

    const Technician = await technicians.find();

    const data = {
      Receptionist,
      AmbulanceDriver,
      Doctor,
      Nurse,
      Laborant,
      MedicalTechnician,
      Janitor,
      Security,
      Technician,
    };
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  FindAllStaff,
};
