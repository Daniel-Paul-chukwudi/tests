const router  = require("express").Router()
const {createStudent,getAll, updateStudent} = require('../controllers/studentController')

router.post("/student",createStudent);
router.get("/student",getAll);
router.put('/student/:id', updateStudent);

module.exports = router