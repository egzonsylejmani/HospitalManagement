const Content = require("../models/homepage.models");

const AddContent = async (req, res) => {
  try {
    await Content.findOne({}).then(async (exist) => {
      if (exist) {
        res.status(404).json({ exists: true });
      } else {
        await Content.create(req.body);
        res.status(201).json({ message: "Content added with success" });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
const FindAllContent = async (req, res) => {
  try {
    const data = await Content.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateContent = async (req, res) => {
  try {
    const data = await Content.findOneAndUpdate({}, req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteContent = async (req, res) => {
  try {
    await Content.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Content deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddContent,
  UpdateContent,
  DeleteContent,
  FindAllContent,
};
