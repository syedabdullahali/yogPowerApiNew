
let mongoose = require('mongoose')

let trainerSalarySlip = new mongoose.Schema({
    username: String,
    serviceName:String,
    trainerName:String,
    categoryName:String,
    batchDuration:String,
    batchTiming:String,
    typeOfTrainer:String
}, { timestamps: true })

module.exports = mongoose.model('trainerSalarySlip', trainerSalarySlip);
