
let mongoose = require('mongoose')

let staffAttentance = new mongoose.Schema({
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
    currentTimeInfo:{
      hours:Number,
      minutes:Number,
      seconds:Number  
    },
    checkOutTimeInfo:{
      hours:Number,
      minutes:Number,
      seconds:Number  
    },
    checkInstatus: String,
    checkOutstatus: String,
    service_name: String,
	service_variation: String,
	Batch_Duration: String,
	batch_timing: String,
	trainer_name:String,
	category:String,
	typeOfTrainer:String,
	MemberId:String,
	trainerId:String,
	BatchTime:String,
	classesId:String
}, { timestamps: true })

module.exports = mongoose.model('staffAttentance', staffAttentance);
