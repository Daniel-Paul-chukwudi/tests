const router  = require("express").Router()
const {createStudent,getAll,getOne} = require('../controllers/studentController')

router.post("/student",createStudent)
router.get("/student",getAll)
router.get("/student",getOne)

module.exports = router