const bedManager = require("../models/bed-managers.models");
const ValidatebedManager = require("../validation/Bed-Manager.validation");

const AddbedManager = async (req, res) => {
  let addbedManager = true;
  const { errors, isValid } = ValidatebedManager(req.body, addbedManager);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await bedManager.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Name = "Bed manager Exists";
          res.status(404).json(errors);
        } else {
          await bedManager.create(req.body);
          res.status(201).json({ message: "Bed manager added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllbedManagers = async (req, res) => {
  try {
    const data = await bedManager.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglebedManager = async (req, res) => {
  try {
    const data = await bedManager.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdatebedManager = async (req, res) => {
  const { errors, isValid } = ValidatebedManager(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await bedManager.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeletebedManager = async (req, res) => {
  try {
    await bedManager.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Bed manager deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddbedManager,
  FindAllbedManagers,
  FindSinglebedManager,
  UpdatebedManager,
  DeletebedManager,
};
