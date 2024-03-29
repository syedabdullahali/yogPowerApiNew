const express = require('express');
const staffAttendance = require('../Models/staffAttendance');
const router = express.Router()
//modelName

router.get('/all', async function (req, res) {
    try {
        const response = await staffAttendance.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/report', async function (req, res) {
    try {
        const response = await staffAttendance.find({status:'Done'})
        const data = response.filter((el)=>Boolean(el.classesId))

                const uniqObj = []


               data.forEach((el,i) => {
             if(!uniqObj.some((el2)=>el?.classesId===el2?.classesId&&el?.staffId===el2?.staffId&&
                              el2?.month===new Date(el.checkDate).getMonth()&&el2?.year===new Date(el.checkDate).getFullYear())){
                  uniqObj.push({classesId:el.classesId,staffId:el.staffId,month:new Date(el.checkDate)
                    .getMonth(),year:new Date(el.checkDate).getFullYear(),                                  
                    time:{hours:+el.totalWorkinghour.split(":")[0],mins:+el.totalWorkinghour.split(":")[1]},details:el,noOfClasses:1
                })
             }else{
               uniqObj.forEach((el2,i)=>{
                if(el?.classesId===el2?.classesId&&el?.staffId===el2?.staffId &&el2.month===new Date(el.checkDate).getMonth()&&el2.year===new Date(el.checkDate).getFullYear()){
                    el2.time.hours+=+el.totalWorkinghour.split(":")[0]
                    el2.time.mins+=+el.totalWorkinghour.split(":")[1]
                    el2.noOfClasses+=1
                }
               })
             }
           });  

        return res.status(200).json(uniqObj);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})




router.post('/create', async (req, res) => {
    try {
        const temp = await new staffAttendance(req.body)
        const response = await temp.save();
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const response = await staffAttendance.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await staffAttendance.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router
