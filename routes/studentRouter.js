const router  = require("express").Router()
const {createStudent,getAll} = require('../controllers/studentController')

router.post("/student",createStudent)
router.get("/student",getAll)

module.exports = router