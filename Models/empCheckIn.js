let mongoose = require('mongoose')

let empCheckIn = new mongoose.Schema({
username: String,
centercode: String,
date: String,
attendanceId:String,
name: String,
designation: String,
shiftTimeing:String,
startTime: String,
endTime: String,
checkInTime:String,
checkOutTime: String,
totalWorkinghour: String,
status: String,
staffContact:String,
Department: String,
Designation: String,
EmployeeCategory:String,
joiningDate: String,  
}, { timestamps: true })


module.exports =   mongoose.model('empCheckIn', empCheckIn);
