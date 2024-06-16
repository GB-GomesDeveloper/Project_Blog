const express = require("express");
const loginUser = require("./login")
const router = express.Router();

router.get('/', (req, res) => {
       res.send(res.json("erro"))
})

router.use('/login', loginUser)

module.exports = router