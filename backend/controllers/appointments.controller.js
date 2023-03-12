const Appointments = require("../models/appointments.models");
const ValidateAppointments = require("../validation/appointments.validation");

const AddAppointment = async (req, res) => {
  let addAppointment = true;
  const { errors, isValid } = ValidateAppointments(req.body, addAppointment);

  console.log(isValid, 'isValid');
  console.log(req.body);
  try {

      await Appointments.findOne({ _id: req.body._id }).then(async (exist) => {
          await Appointments.create(req.body);
          res.status(201).json({ message: "Appoitnment added with success" });
      });
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllAppointments = async (req, res) => {
  try {
    const data = await Appointments.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleAppointment = async (req, res) => {
  try {
    const data = await Appointments.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateAppointment = async (req, res) => {
  try {
  
      const data = await Appointments.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteAppointment = async (req, res) => {
  try {
    await Appointments.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Appointment deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddAppointment,
  FindAllAppointments,
  FindSingleAppointment,
  UpdateAppointment,
  DeleteAppointment,
};
