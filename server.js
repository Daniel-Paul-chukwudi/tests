require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const PORT = process.env.PORT
const DB = process.env.DB_URI
const studentRouter = require('./routes/studentRouter')
const scoreRouter = require('./routes/scoreRouter')

const app = express()


app.use(express.json())

app.use('/api/v1/',studentRouter)
app.use('/api/v1/',scoreRouter)

app.get("/",(req,res)=>{
    res.json("welcome to Daniel's API.")
})

mongoose.connect(DB).then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT} yeahhhhhh boiiiiii`);
    })
}).catch((error)=>{
    console.log('Error connecting to Database: ',error.message);  
})
