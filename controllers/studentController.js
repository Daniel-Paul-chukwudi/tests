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

exports.deleteStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await studentModel.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({
                message:"student not found"
            })
        }
        res.status(200).json({
            message:"student deleted successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}