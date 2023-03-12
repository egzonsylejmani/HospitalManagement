const receptionist = require("../models/receptionist.models");
const Validatereceptionist = require("../validation/receptionist.validation");
const Addreceptionist = async (req, res) => {
  let addreceptionist = true;
  const { errors, isValid } = Validatereceptionist(req.body, addreceptionist);
  try {
    if (!isValid) {
      res.status(404).json(errors); 
    } else {
      await receptionist.findOne({ _id: req.body._id }).then(async (exist) => {
        if (exist) {
          errors.Email = "receptionist Exist";
          res.status(404).json(errors);
        } else {
          await receptionist.create(req.body);
          res.status(201).json({ message: "receptionist added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllreceptionists = async (req, res) => {
  try {
    const data = await receptionist.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglereceptionist = async (req, res) => {
  try {
    const data = await receptionist.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const Updatereceptionist= async (req, res) => {
  const { errors, isValid } = Validatereceptionist(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await receptionist.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const Deletereceptionist = async (req, res) => {
  try {
    await receptionist.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "receptionist deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    Addreceptionist,
    FindAllreceptionists,
    FindSinglereceptionist,
    Updatereceptionist,
    Deletereceptionist,
};
