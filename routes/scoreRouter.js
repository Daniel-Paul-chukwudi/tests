const router  = require("express").Router()
const {createScore, getOneScore} = require('../controllers/scoreContoller')

router.post("/score/:id",createScore);
router.get("/score/:studentId/:week", getOneScore )

module.exports = router