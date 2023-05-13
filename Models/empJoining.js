let mongoose = require('mongoose')


let empJoining = new mongoose.Schema({
username: String, 
empName:String,
offerLatter: String,
ApponmentLater: String,
Indexion:String,  
employeeId:String,
}, { timestamps: true })


module.exports =   mongoose.model('empJoining', empJoining);
