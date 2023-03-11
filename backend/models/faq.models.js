const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FaqSchema = new Schema({
    FaqQuestion: String,
    FaqAnswer:String,

}, {timestamps: true})



module.exports = mongoose.model('faq',  FaqSchema)
