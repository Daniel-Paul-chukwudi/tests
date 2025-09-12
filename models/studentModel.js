const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    score:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"score"

    }]
})

const studentModel = mongoose.model("student",studentSchema)
module.exports = studentModel