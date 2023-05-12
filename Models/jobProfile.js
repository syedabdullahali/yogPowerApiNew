let mongoose = require('mongoose')

let jobProfile = new mongoose.Schema({
username: String,
Designations: String,
jobProfile:String,
}, { timestamps: true })


module.exports =   mongoose.model('jobProfile', jobProfile);
