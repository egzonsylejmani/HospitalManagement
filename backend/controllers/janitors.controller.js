const Janitors = require("../models/janitors.models");
const ValidateJanitor = require("../validation/Janitors.validation");

const AddJanitor = async (req, res) => {
  let addJanitor = true;
  const { errors, isValid } = ValidateJanitor(req.body, addJanitor);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Janitors.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "Janitor Exist";
          res.status(404).json(errors);
        } else {
          await Janitors.create(req.body);
          res.status(201).json({ message: "Janitor added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllJanitors = async (req, res) => {
  try {
    const data = await Janitors.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleJanitor = async (req, res) => {
  try {
    const data = await Janitors.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateJanitor = async (req, res) => {
  const { errors, isValid } = ValidateJanitor(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Janitors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteJanitor = async (req, res) => {
  try {
    await Janitors.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Janitor deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddJanitor,
  FindAllJanitors,
  FindSingleJanitor,
  UpdateJanitor,
  DeleteJanitor,
};
