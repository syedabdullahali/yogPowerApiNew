
let mongoose = require('mongoose')

let trainerSalarySlip = new mongoose.Schema({
    username: String,
    staffId:String,
    attentanceId: String,
    StaffName: String,
    staffContact:String,
    centerId: String,
    checkDate: Date,
    checkIn: String,
    checkOut: String,
    ContactNo: String,
    Department: String,
    Designation: String,
    EmployeeCategory: String,
    joiningDate: String,
    empCheckInId:String,
    shiftTimeing:  String,
    shiftStartTime:  String,
    shiftEndTime: String,
    totalWorkinghour: String,
    status: String,
}, { timestamps: true })

module.exports = mongoose.model('trainerSalarySlip', trainerSalarySlip);
