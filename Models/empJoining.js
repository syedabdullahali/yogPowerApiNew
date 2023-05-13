let mongoose = require('mongoose')


let empJoining = new mongoose.Schema({
username: String, 
DocumentName:String,
documentDetails:String,
}, { timestamps: true })


module.exports =   mongoose.model('empJoining', empJoining);
