let mongoose = require('mongoose')


let salarySheet = new mongoose.Schema({
username: String,
month: String,
empId: String,
joiningDate:String,
Gender:String,  
empName:String,
Location:String,  
Designations: String,
Department:String,
noOfHalfDay:String,  
basicSlarry: String,
lateMark:String,
halfday: String,
leaveDay: String,
adjustLeave:String,
TWD: String,
TPD: String,
grossSalary: String,
BasicSalary:String,
incentive: String,
PT:String,  
netSalary:String,
remark: String,
advancedSalaryDedct: String,
}, { timestamps: true })


module.exports =   mongoose.model('salarySheet', salarySheet);
