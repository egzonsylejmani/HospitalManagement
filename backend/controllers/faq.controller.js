const Faq = require("../models/faq.models");

const AddFaq = async (req, res) => {
  try {
        await Faq.create(req.body);
        res.status(201).json({ message: "Faq added with success" });
  } catch (error) {
    console.log(error.message);
  }
}; 

const FindAllFaq = async (req, res) => {
  try {
    const data = await Faq.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateFaq = async (req, res) => {
  try {
      const data = await Faq.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

const DeleteFaq = async (req, res) => {
  try {
    await Faq.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Faq deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  AddFaq,
  UpdateFaq,
  DeleteFaq,
  FindAllFaq,
};
