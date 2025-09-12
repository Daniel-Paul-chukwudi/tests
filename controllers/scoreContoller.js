const scoreModel = require('../models/scoreModel')
const studentModel = require('../models/studentModel')

exports.createScore = async(req,res)=>{
    try {
        const studentId = req.params.id
        if(!studentId){
            return res.status(400).json({
                message: `student with id ${studentId} not found`
            })
        }
        const { week, punctuality, attendance, project, classWork } = req.body
        if (!week || !punctuality || !attendance || !project || !classWork) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const data = await scoreModel.create({
            studentId,
            week,
            punctuality,
            attendance,
            project,
            classWork
        })
        //moment.js for time
        //if you dont put it as default in the model you can call it like moment().format('llll'); in the controller
        const stu = await studentModel.findById(studentId)
        const student = stu.score.push(data._id) // to make the score append to the score side in the student model
        await stu.save() // to save changes to the student

        res.status(201).json({
            message:"score created successfully",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
};

exports.updateScores = async (req, res) => {
    try {
        const 
    } catch (error) {
         res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

exports.deleteScore = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await scoreModel.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({
                message:"score not found"
            })
        }
        res.status(200).json({
            message:"score deleted successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}
