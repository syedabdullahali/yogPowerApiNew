
let mongoose = require('mongoose')

let trainerSalarySlip = new mongoose.Schema({
    username: String,
    serviceName:String,
    trainerName:String,
    categoryName:String,
    batchDuration:String,
    batchTiming:String,
    typeOfTrainer:String,
    prHourSalary:String,
    totalWorkingHours:String,
    amount:String,
    tds:String,
    pt:String,
    advDec:String,
    modeOfPayment:String
}, { timestamps: true })

module.exports = mongoose.model('trainerSalarySlip', trainerSalarySlip);
