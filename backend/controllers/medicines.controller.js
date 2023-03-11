const Medicines = require("../models/medicines.models");
const ValidateMedicine = require("../validation/medicines.validation");

const Addmedicine = async (req, res) => {
  let Addmedicine = true;
  const { errors, isValid } = ValidateMedicine(req.body, Addmedicine);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Medicines.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Medicine Exist";
          res.status(404).json(errors);
        } else {
          await Medicines.create(req.body);
          res.status(201).json({ message: "Medicine added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllMedicines = async (req, res) => {
  try {
    const data = await Medicines.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleMedicine = async (req, res) => {
  try {
    const data = await Medicines.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateMedicine = async (req, res) => {
  const { errors, isValid } = ValidateMedicine(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Medicines.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteMedicine = async (req, res) => {
  try {
    await Medicines.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Medicine deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    Addmedicine,
    FindAllMedicines,
    FindSingleMedicine,
    UpdateMedicine,
    DeleteMedicine,
};
