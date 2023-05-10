let mongoose = require('mongoose')


let salarySheet = new mongoose.Schema({
username: String,
month: String,
empId: String,
empName:String,
Designations: String,
basicSlarry: String,
lateMark:String,
halfday: String,
fullday: String,
adjustLeave:String,
TWD: String,
grossSalary: String,
incentive: String,
netSalary:String,
remark: String,
advancedSalaryDedct: String,
}, { timestamps: true })


module.exports =   mongoose.model('salarySheet', salarySheet);
