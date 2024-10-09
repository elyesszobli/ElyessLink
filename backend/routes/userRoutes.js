const express = require("express");
const router = express.Route();
const userController = require("../controllers/userController");

router.post('/login', userController);

module.exports = router;