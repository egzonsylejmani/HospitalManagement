const Branches = require("../models/branches.models");
const ValidateBranch = require("../validation/Branches.validation");

const AddBranch = async (req, res) => {
  let addBranch = true;
  const { errors, isValid } = ValidateBranch(req.body, addBranch);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Branches.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Name = "Branch Exists";
          res.status(404).json(errors);
        } else {
          await Branches.create(req.body);
          res.status(201).json({ message: "Branch added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllBranches = async (req, res) => {
  try {
    const data = await Branches.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleBranch = async (req, res) => {
  try {
    const data = await Branches.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateBranch = async (req, res) => {
  const { errors, isValid } = ValidateBranch(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Branches.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteBranch = async (req, res) => {
  try {
    await Branches.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Branch deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddBranch,
  FindAllBranches,
  FindSingleBranch,
  UpdateBranch,
  DeleteBranch,
};
