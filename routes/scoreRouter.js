const router  = require("express").Router()
const {createScore} = require('../controllers/scoreContoller')

router.post("/score/:id",createScore)

module.exports = router