const Securites = require("../models/securities.models");
const ValidateSecurity = require("../validation/Securities.validation");
const AddSecurity = async (req, res) => {
  let AddSecurity = true;
  const { errors, isValid } = ValidateSecurity(req.body, AddSecurity);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Securites.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Security Exist";
          res.status(404).json(errors);
        } else {
          await Securites.create(req.body);
          res.status(201).json({ message: "Security added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllSecurites = async (req, res) => {
  try {
    const data = await Securites.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleSecurity= async (req, res) => {
  try {
    const data = await Securites.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateSecurity = async (req, res) => {
  const { errors, isValid } = ValidateSecurity(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Securites.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteSecurity = async (req, res) => {
  try {
    await Securites.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Securites deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    AddSecurity,
    FindAllSecurites,
    FindSingleSecurity,
    UpdateSecurity,
    DeleteSecurity,
};
