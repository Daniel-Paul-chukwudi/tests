const mongoose = require('mongoose')
const moment = require('moment')

const scoreShema = new mongoose.Schema({
    
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    week:{
        type:Number,
        required:true,
        unique:true
    },
    punctuality:{
        type:Number,
        required:true,
        default:0,
        max:25
    },
    attendance:{
        type:Number,
        required:true,
        default:0,
        max:25
    },
    project:{
        type:Number,
        required:true,
        default:0,
        max:25
    },
    classWork:{
        type:Number,
        required:true,
        default:0,
        max:25
    },
    timein:{
        type:Date,
        required:true,
        //default:moment().format('llll')
        default:moment().utcOffset("1:00")
    },
    totalScore:{
        type:Number,
        default:function(){
            return this.classWork + this.project + this.puntuality + this.attendance
        }
    }
    
})

const scoreModel = mongoose.model("score",scoreShema)
module.exports = scoreModel