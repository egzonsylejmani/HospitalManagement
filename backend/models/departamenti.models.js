const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartamentiSchema = new Schema({
    DepartamentName: String,
    DepartamentDescription:String,
    DepartamentImage:String
}, {timestamps: true})



module.exports = mongoose.model('departamenti',  DepartamentiSchema)
