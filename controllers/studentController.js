const studentModel = require('../models/studentModel')

exports.createStudent = async(req,res)=>{
    try {
        const data = await studentModel.create(req.body)

        res.status(201).json({
            message:"Student created successfully",
            data
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}
exports.getAll = async (req,res)=>{
    try {
        const data = await studentModel.find().populate("score")
        res.status(200).json({
            message:"all the students",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}