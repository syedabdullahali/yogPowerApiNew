let mongoose = require('mongoose')


let emplDocument = new mongoose.Schema({
username: String,
empID:String,
empName:String,
docName:String,
docview:String,
MemBerId:String
}, { timestamps: true })


module.exports =   mongoose.model('emplDocument', emplDocument);
